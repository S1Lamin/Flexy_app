@echo off
REM Virtual Try-On App - Plesk Deployment Script for Windows
REM This script prepares the application for Plesk deployment

echo 🚀 Starting Virtual Try-On App deployment preparation...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed. Please install Node.js 18+ first.
    exit /b 1
)

echo [INFO] Node.js version: 
node --version

REM Check if npm is available
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] npm is not installed. Please install npm first.
    exit /b 1
)

echo [INFO] npm version:
npm --version

REM Install dependencies
echo [INFO] Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo [ERROR] Failed to install dependencies
    exit /b 1
)

REM Run linting
echo [INFO] Running ESLint...
call npm run lint
if %errorlevel% neq 0 (
    echo [WARNING] ESLint found issues, but continuing with build...
)

REM Run type checking
echo [INFO] Running TypeScript type checking...
call npm run type-check
if %errorlevel% neq 0 (
    echo [WARNING] TypeScript found issues, but continuing with build...
)

REM Build the application
echo [INFO] Building application for production...
call npm run build
if %errorlevel% neq 0 (
    echo [ERROR] Build failed
    exit /b 1
)

REM Check if standalone build was created
if not exist ".next\standalone\server.js" (
    echo [ERROR] Standalone build failed. server.js not found.
    exit /b 1
)

echo [INFO] Standalone build created successfully ✓

REM Check standalone directory structure
echo [INFO] Standalone build structure:
dir .next\standalone

REM Create production environment file if it doesn't exist
if not exist ".env.production" (
    echo [WARNING] .env.production not found. Creating from template...
    copy env.example .env.production
    echo [WARNING] Please update .env.production with your production values before deployment.
)

REM Create deployment package
echo [INFO] Creating deployment package...
powershell -command "Compress-Archive -Path '.next\standalone\*', '.next\static\*', 'public\*', 'package.json', '.env.production', 'DEPLOYMENT.md' -DestinationPath 'virtual-tryon-app-deployment.zip' -Force"

echo [INFO] Deployment package created: virtual-tryon-app-deployment.zip

REM Display deployment instructions
echo.
echo 🎉 Deployment preparation completed successfully!
echo.
echo 📋 Next steps for Plesk deployment:
echo 1. Upload virtual-tryon-app-deployment.zip to your Plesk server
echo 2. Extract the files in your domain's httpdocs directory
echo 3. Run 'npm install --production' on the server
echo 4. Configure environment variables in Plesk
echo 5. Set application startup file to '.next/standalone/server.js'
echo 6. Start the application
echo.
echo 📖 For detailed instructions, see DEPLOYMENT.md
echo.

REM Ask if user wants to test standalone server
set /p test_server="Do you want to test the standalone server locally? (y/n): "
if /i "%test_server%"=="y" (
    echo [INFO] Starting standalone server for testing...
    echo [WARNING] Press Ctrl+C to stop the test server
    call npm run start:standalone
)

echo [INFO] Deployment preparation complete! 🚀
pause

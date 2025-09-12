#!/bin/bash

# Virtual Try-On App - Plesk Deployment Script
# This script prepares the application for Plesk deployment

set -e  # Exit on any error

echo "🚀 Starting Virtual Try-On App deployment preparation..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    print_error "Node.js version 18+ is required. Current version: $(node --version)"
    exit 1
fi

print_status "Node.js version: $(node --version) ✓"

# Check if npm is available
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm first."
    exit 1
fi

print_status "npm version: $(npm --version) ✓"

# Install dependencies
print_status "Installing dependencies..."
npm install

# Run linting
print_status "Running ESLint..."
npm run lint

# Run type checking
print_status "Running TypeScript type checking..."
npm run type-check

# Build the application
print_status "Building application for production..."
npm run build

# Check if standalone build was created
if [ ! -f ".next/standalone/server.js" ]; then
    print_error "Standalone build failed. server.js not found."
    exit 1
fi

print_status "Standalone build created successfully ✓"

# Check standalone directory structure
print_status "Standalone build structure:"
ls -la .next/standalone/

# Create production environment file if it doesn't exist
if [ ! -f ".env.production" ]; then
    print_warning ".env.production not found. Creating from template..."
    cp env.example .env.production
    print_warning "Please update .env.production with your production values before deployment."
fi

# Create deployment package
print_status "Creating deployment package..."
tar -czf virtual-tryon-app-deployment.tar.gz \
    .next/standalone/ \
    .next/static/ \
    public/ \
    package.json \
    .env.production \
    DEPLOYMENT.md

print_status "Deployment package created: virtual-tryon-app-deployment.tar.gz"

# Display deployment instructions
echo ""
echo "🎉 Deployment preparation completed successfully!"
echo ""
echo "📋 Next steps for Plesk deployment:"
echo "1. Upload virtual-tryon-app-deployment.tar.gz to your Plesk server"
echo "2. Extract the files in your domain's httpdocs directory"
echo "3. Run 'npm install --production' on the server"
echo "4. Configure environment variables in Plesk"
echo "5. Set application startup file to '.next/standalone/server.js'"
echo "6. Start the application"
echo ""
echo "📖 For detailed instructions, see DEPLOYMENT.md"
echo ""

# Test standalone server (optional)
read -p "Do you want to test the standalone server locally? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    print_status "Starting standalone server for testing..."
    print_warning "Press Ctrl+C to stop the test server"
    npm run start:standalone
fi

print_status "Deployment preparation complete! 🚀"

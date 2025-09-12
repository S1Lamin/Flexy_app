# Virtual Try-On App - Plesk Deployment Guide

## 🚀 **Standalone Deployment Configuration**

This Next.js application is configured for standalone deployment on Plesk hosting.

### **Key Configuration Changes Made:**

1. **Next.js Standalone Mode**: `output: 'standalone'` in `next.config.ts`
2. **Production Scripts**: Added deployment-specific npm scripts
3. **Environment Variables**: Created production environment templates
4. **Security Headers**: Added security headers for production
5. **Image Optimization**: Configured for production image handling

## 📋 **Deployment Steps for Plesk**

### **Step 1: Prepare Your Local Environment**

```bash
# Install dependencies
npm install

# Build the application for production
npm run build

# Test the standalone build locally
npm run start:standalone
```

### **Step 2: Upload to Plesk**

1. **Upload Files**: Upload the entire project folder to your Plesk domain's `httpdocs` directory
2. **Install Dependencies**: Run `npm install --production` on the server
3. **Set Environment Variables**: Configure production environment variables in Plesk

### **Step 3: Configure Plesk Node.js Application**

1. **Node.js Version**: Ensure Node.js 18+ is installed
2. **Application Root**: Set to your project directory
3. **Application Startup File**: Set to `.next/standalone/server.js`
4. **Application Mode**: Set to "Production"

### **Step 4: Environment Variables in Plesk**

Configure these environment variables in Plesk:

```bash
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://your-domain.com
DATABASE_URL=your-production-database-url
NEXTAUTH_SECRET=your-production-secret
# ... other production variables
```

### **Step 5: Start the Application**

```bash
# In Plesk terminal or via SSH
npm run start:production
```

## 🔧 **Available Scripts**

| Script                     | Description                          |
| -------------------------- | ------------------------------------ |
| `npm run build`            | Build the application for production |
| `npm run start:standalone` | Start standalone server              |
| `npm run start:production` | Start with production environment    |
| `npm run deploy:plesk`     | Build and start for Plesk deployment |
| `npm run preview`          | Build and preview locally            |

## 📁 **Standalone Output Structure**

After building, you'll find:

```
.next/
├── standalone/
│   ├── server.js          # Main server file
│   ├── package.json       # Minimal package.json
│   └── node_modules/      # Production dependencies
└── static/                # Static assets
```

## 🔒 **Security Considerations**

- Security headers are configured in `next.config.ts`
- Environment variables are properly separated
- Production build excludes development dependencies
- HTTPS is recommended for production

## 🐛 **Troubleshooting**

### **Common Issues:**

1. **Port Issues**: Ensure the port is available and configured in Plesk
2. **Environment Variables**: Verify all required variables are set
3. **Node.js Version**: Ensure compatible Node.js version (18+)
4. **File Permissions**: Check file permissions for the application directory

### **Debug Commands:**

```bash
# Check Node.js version
node --version

# Check if build was successful
ls -la .next/standalone/

# Test standalone server locally
npm run start:standalone

# Check environment variables
echo $NODE_ENV
```

## 📊 **Performance Optimization**

- **Standalone Mode**: Reduces bundle size and startup time
- **Image Optimization**: Configured for production
- **Compression**: Enabled for better performance
- **Caching**: Headers configured for optimal caching

## 🔄 **Update Process**

To update the application:

1. Upload new code to Plesk
2. Run `npm install --production`
3. Run `npm run build`
4. Restart the application in Plesk

---

**Created by:** Frontend Agent (FA-001)  
**Date:** December 19, 2024  
**Status:** Ready for Plesk deployment

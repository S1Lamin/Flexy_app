import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable standalone output for Plesk deployment
  output: 'standalone',

  // Optimize for production deployment
  serverExternalPackages: [],

  // Image optimization for production
  images: {
    unoptimized: false,
    domains: [],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // PWA configuration for standalone mode
  trailingSlash: false,

  // Compression and optimization
  compress: true,

  // Environment-specific configurations
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },

  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

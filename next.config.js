/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  images: {
    domains: ['avatars.githubusercontent.com', 'api.dicebear.com', 'cdn.nba.com', 'images.unsplash.com'],
    unoptimized: process.env.NODE_ENV === 'development',
  },
  
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  },
  
  // Optimizations
  productionBrowserSourceMaps: false,
  
  // TypeScript
  typescript: {
    // !! WARN !!.tsBuildInfoFile is not set and a warning is shown on build
    tsconfigPath: './tsconfig.json',
  },
  
  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // Redirects
  async redirects() {
    return [
      {
        source: '/dashboard',
        destination: '/auth/login',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;

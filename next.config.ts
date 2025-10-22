import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.updatesfeed.com',
        port: '',
        pathname: '/media/articles/**',
      },
      {
        protocol: 'https',
        hostname: 'www.skillopt.com',
        port: '',
        pathname: '/_next/image/**',
      },
      {
        protocol: 'https',
        hostname: 'dashboard.skillopt.com',
        port: '',
        pathname: '/media/Blog/**',
      },
    ],
  },
};

export default nextConfig;

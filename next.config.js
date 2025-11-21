/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Fixes the “metadata.metadataBase is not set” warning
  metadataBase: new URL('http://localhost:3000'),
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
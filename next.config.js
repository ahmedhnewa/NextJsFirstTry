/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // Not for production
  images: {
    domains: ['s.yimg.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ]
  }
}

module.exports = nextConfig

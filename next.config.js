/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // Not for production
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ]
  }
}

module.exports = nextConfig

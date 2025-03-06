/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['personal-website-finals-wine.vercel.app'],
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig
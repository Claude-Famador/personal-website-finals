/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['personal-website-finals-wine.vercel.app']
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig
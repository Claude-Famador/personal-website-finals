/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['your-image-domain.com'], // If you're loading images from an external source
    unoptimized: false, // If images still don't load, try setting this to true temporarily
  },
};

module.exports = nextConfig;

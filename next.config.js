/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['fakeimg.pl'],
    unoptimized: true
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|gif|mp3|wav|woff|woff2|eot|ttf|otf)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[hash][ext][query]'
      }
    });
    return config;
  }
}

module.exports = nextConfig
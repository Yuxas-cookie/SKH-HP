/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === 'production' ? '/skh-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/skh-website/' : '',
};

module.exports = nextConfig;
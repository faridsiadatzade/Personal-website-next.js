/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: process.env.NODE_ENV === 'production',
  },
  output: 'export',
  distDir: 'docs',
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
};

module.exports = nextConfig; 
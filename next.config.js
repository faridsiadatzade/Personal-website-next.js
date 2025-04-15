/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: process.env.NODE_ENV === 'production',
  },
  distDir: process.env.BUILD_TARGET === 'docs' ? 'docs' : '.next',
  output: process.env.BUILD_TARGET === 'docs' ? 'export' : undefined,
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
};

module.exports = nextConfig; 
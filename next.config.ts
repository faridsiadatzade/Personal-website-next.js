import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '',
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://raw.githubusercontent.com/faridsiadatzade/faridsiadatzade.github.io/refs/heads/master/docs/' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;

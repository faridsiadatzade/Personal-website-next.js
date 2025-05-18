import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  basePath: '',
  // assetPrefix: '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;

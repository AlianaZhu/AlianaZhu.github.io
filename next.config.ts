import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/AlianaZhu.github.io',
  assetPrefix: '/AlianaZhu.github.io',
  distDir: 'out',
};

export default nextConfig;

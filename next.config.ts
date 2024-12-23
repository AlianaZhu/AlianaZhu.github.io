import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repo = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    path: `${repo}/_next/image`,
  },
  basePath: isGithubActions ? repo : '',
  assetPrefix: isGithubActions ? repo : '',
  distDir: 'out',
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
};

export default nextConfig;

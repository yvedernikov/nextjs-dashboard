import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  staticPageGenerationTimeout: 1000,
  // experimental: {
  //   ppr: 'incremental'
  // }
};

export default nextConfig;

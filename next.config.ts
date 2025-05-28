import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  experimental: {
      serverComponentsHmrCache: false,
      serverActions: {
        bodySizeLimit: '50mb',
      },
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 's3.ru1.storage.beget.cloud',
          port: '',
          pathname: '/**',
          search: '',
        },
      ],
    },
};

export default nextConfig;

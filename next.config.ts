import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Consolidate the apex domain onto www to match the canonical URLs
      // used in metadata, structured data and the sitemap.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'wcpainting.com.au' }],
        destination: 'https://www.wcpainting.com.au/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
import withPlaiceholder from '@plaiceholder/next';

const config = {
  eslint: {
    // Disabling on production builds because we're running checks on PRs via GitHub Actions.
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vercel.saleor.cloud',
      },
      {
        protocol: 'https',
        hostname: 'prettygreen.eu.saleor.cloud',
      },
      // Contentful images
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
    ],
  },
};

export default withPlaiceholder(config);

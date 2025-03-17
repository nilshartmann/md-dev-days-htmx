/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  async rewrites() {
    return [
      {
        source: '/backend/:slug*',
        destination: 'http://localhost:9080/:slug*',
      },
    ]
  },
};

export default nextConfig;

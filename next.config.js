/** @type {import('next').NextConfig} */
const rewrites = [
  {
    source: '/api/:path*',
    destination: `${process.env.API_URL}/:path*`,
  },
];

const nextConfig = {
  async rewrites() {
    return rewrites;
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const rewrites = [
  {
    source: '/api/:path*',
    destination: 'http://host.docker.internal:8000/:path*',
  },
];

const nextConfig = {
  async rewrites() {
    return rewrites;
  },
};

module.exports = nextConfig;

const path = require('path');
const { withContentlayer } = require('next-contentlayer');

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  compiler: {
    removeConsole: {
      exclude: ['error', 'warn'],
    },
  },
};

module.exports = withContentlayer(nextConfig);

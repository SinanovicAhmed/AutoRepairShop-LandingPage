/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true
};

module.exports = {
  nextConfig,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true
  }
};

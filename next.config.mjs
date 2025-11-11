/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
    ignoreDuringBuilds: true,
  },
    images: {
    domains: ["robinpestcontrol.com"], 
  },
  reactStrictMode: true,
};

export default nextConfig;

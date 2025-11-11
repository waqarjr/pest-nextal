/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["robinpestcontrol.com", "lh3.googleusercontent.com"], // list all external domains here
  },
  reactStrictMode: true,
};

export default nextConfig;

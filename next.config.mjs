/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "app-uploads-cdn.fera.ai",
      },
    ],
  },
};

export default nextConfig;

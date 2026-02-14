/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "unsplash.com",
        port: "",
        pathname: "**",
      },
    ],
    qualities: [50, 75, 100],
  },
};

export default nextConfig;

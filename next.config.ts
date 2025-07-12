import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dummyjson.com",
        pathname: "/icon/emilys/**",
      },
    ],
    domains: [
      "dummyjson.com",
    ],
  },
};

export default nextConfig;

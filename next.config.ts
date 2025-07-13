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
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dezfej6wq/image/upload/v1748285799/uploads/file.png",
      },
    ],
    domains: [
      "i.pravatar.cc",
      "images.unsplash.com",
      "cdn.pixabay.com",
      "avatars.githubusercontent.com",
      "randomuser.me",
      "res.cloudinary.com",
      "dummyjson.com",
    ],
  },
};

export default nextConfig;

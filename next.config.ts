import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Remove assetPrefix to fix font loading issues
  trailingSlash: true,
};

export default nextConfig;

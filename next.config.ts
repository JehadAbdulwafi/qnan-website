import type { NextConfig } from "next";
// import { i18n } from "./next-i18next.config";

const nextConfig: NextConfig = {
  /* config options here */
  // i18n,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },

      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

export default nextConfig;

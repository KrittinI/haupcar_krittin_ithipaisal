import dotenv from "dotenv";

import type { NextConfig } from "next";
dotenv.config({ path: "../.env" });

const nextConfig: NextConfig = {
  /* config options here */
  env: {},
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

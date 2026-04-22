import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  env: {
    // Optional: Expose non-sensitive vars to client-side
    APP_ENV: process.env.APP_ENV,
  },
};

export default nextConfig;

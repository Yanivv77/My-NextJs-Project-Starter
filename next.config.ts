import type { NextConfig } from "next";
import "dotenv/config";

try {
  require("./src/env/server");
} catch {
  process.exit(1);
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

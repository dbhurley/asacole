import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  async redirects() {
    return ["/", "/:path*"].map((source) => ({
      source,
      has: [{ type: "host" as const, value: "www.asacole.com" }],
      destination: `https://asacole.com${source}`,
      permanent: true,
    }));
  },
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;

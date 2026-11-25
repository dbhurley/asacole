import type { MetadataRoute } from "next";
import { releases, siteUrl } from "@/content/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/music", "/stones-of-help", ...releases.map(({ slug }) => `/${slug}`)].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date("2026-11-24"),
  }));
}

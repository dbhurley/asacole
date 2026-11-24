import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site-data";

const lastModified = new Date("2026-11-24");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}

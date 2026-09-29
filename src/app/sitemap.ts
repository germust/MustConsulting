import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

// Se genera como archivo fijo durante el build (necesario para la publicación estática).
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${siteConfig.url}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.url}/privacidad`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}

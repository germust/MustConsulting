import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

// Se genera como archivo fijo durante el build (necesario para la publicación estática).
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}

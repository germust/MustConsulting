import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { withBasePath } from "@/lib/paths";

// Se genera como archivo fijo durante el build (necesario para la publicación estática).
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.seo.description,
    lang: siteConfig.language,
    start_url: withBasePath("/"),
    display: "browser",
    background_color: "#F7F8F6",
    theme_color: "#122332",
    icons: [
      { src: withBasePath(siteConfig.brand.monogram), sizes: "any", type: "image/svg+xml" },
      { src: withBasePath("/icon-192.png"), sizes: "192x192", type: "image/png" },
      { src: withBasePath("/icon-512.png"), sizes: "512x512", type: "image/png" },
    ],
  };
}

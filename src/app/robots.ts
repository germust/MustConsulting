import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

/**
 * Versión de prueba: salvo NEXT_PUBLIC_ALLOW_INDEXING=true, las páginas llevan
 * "noindex" (ver layout). El rastreo sigue permitido a propósito: este sitio
 * estuvo indexable, y los buscadores necesitan volver a leer las páginas para
 * ver el "noindex" y quitarlas de los resultados. Sin sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  if (!siteConfig.allowIndexing) return { rules: { userAgent: "*", allow: "/" } };
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}

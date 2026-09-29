import type { NextConfig } from "next";

/**
 * Publicación como sitio estático (GitHub Pages u otro hosting de archivos).
 * La activa el flujo .github/workflows/deploy-pages.yml con STATIC_EXPORT=true.
 * En Vercel o con `npm run build` normal no se usa.
 */
const staticExport = process.env.STATIC_EXPORT === "true";

/** Subcarpeta de publicación, por ejemplo "/MustConsulting" en GitHub Pages. */
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/+$/, "");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  ...(basePath ? { basePath } : {}),
  ...(staticExport
    ? {
        output: "export",
        images: { unoptimized: true },
      }
    : {
        // Los hostings estáticos no permiten cabeceras propias; en Vercel sí.
        async headers() {
          return [{ source: "/:path*", headers: securityHeaders }];
        },
      }),
};

export default nextConfig;

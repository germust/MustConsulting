/**
 * Subcarpeta donde se publica el sitio. Vacía en Vercel o con dominio propio;
 * en GitHub Pages sin dominio es "/MustConsulting" (la define el flujo de
 * publicación con NEXT_PUBLIC_BASE_PATH).
 */
export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/+$/, "");

/**
 * Antepone la subcarpeta a rutas de archivos de /public. Next.js la agrega
 * solo en <Link>, pero no en imágenes, íconos ni enlaces <a> comunes.
 */
export function withBasePath(path: string): string {
  return `${basePath}${path}`;
}

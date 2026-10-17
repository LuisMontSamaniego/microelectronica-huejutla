// robots.txt con la dirección del mapa del sitio tomada de `site` (astro.config).
// La guía de estilo no se bloquea aquí: lleva noindex, y Google tiene que poder leerlo.
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  // Sin `site` no hay mapa del sitio, así que se omite la línea en lugar de romper la compilación.
  const mapa = site ? `\nSitemap: ${new URL('sitemap-index.xml', site).href}\n` : '';
  return new Response(`User-agent: *\nAllow: /\n${mapa}`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};

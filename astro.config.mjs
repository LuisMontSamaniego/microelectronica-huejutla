// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Dirección de producción en Vercel. Activa la dirección canónica, og:url, el mapa del sitio y robots.txt.
  // Las direcciones de vista previa de Vercel llevan el nombre de la cuenta: no se comparten.
  site: 'https://microelectronica-huejutla.vercel.app',
  // Direcciones sin barra al final (/contacto), igual que los enlaces internos; vercel.json redirige las que la traen.
  trailingSlash: 'never',
  integrations: [
    sitemap({
      // La guía de estilo es interna y lleva noindex.
      filter: (pagina) => !pagina.includes('/guia-de-estilo'),
      namespaces: { news: false, xhtml: false, image: false, video: false },
    }),
  ],
  build: {
    // El CSS completo pesa unos 8 kB: va dentro del HTML para no bloquear el primer render con datos móviles.
    inlineStylesheets: 'always',
  },
  fonts: [
    {
      // Se descarga al compilar y se sirve desde el propio sitio.
      provider: fontProviders.fontsource(),
      name: 'Montserrat',
      cssVariable: '--font-montserrat',
      weights: [400, 500, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
  ],
});

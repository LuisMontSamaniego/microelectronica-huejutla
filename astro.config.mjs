// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
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

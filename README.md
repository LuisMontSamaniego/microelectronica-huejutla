# Microelectrónica Huejutla

Sitio web de Microelectrónica Huejutla, servicio técnico en electrónica en Huejutla de Reyes, Hidalgo: reparación de pantallas, bocinas, microondas, licuadoras, planchas y ventiladores.

Hecho con [Astro](https://astro.build), sin frameworks de interfaz y con CSS propio.

## Comandos

| Comando | Qué hace |
| :-- | :-- |
| `npm install` | Instala las dependencias |
| `npm run dev` | Abre el sitio en `localhost:4321` mientras se edita |
| `npm run build` | Genera el sitio final en `dist/` |
| `npm run preview` | Muestra el sitio final antes de publicarlo |

## Estructura

```text
src/
├── assets/      logos y pósters (se optimizan al compilar)
├── components/  piezas reutilizables: encabezado, pie, botón de WhatsApp…
├── data/        datos del negocio y de cada servicio
├── layouts/     plantilla base de las páginas
├── pages/       una página por archivo
└── styles/      tokens de diseño y estilos globales
```

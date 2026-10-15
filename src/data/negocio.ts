// Datos públicos del negocio. El único teléfono que se publica es el del negocio.

const WHATSAPP = '527713022167';

export const negocio = {
  nombre: 'Microelectrónica Huejutla',
  experiencia: '40 años de experiencia familiar',
  telefono: '771 302 2167',
  whatsapp: WHATSAPP,
  puntoDeAtencion: 'Parque de Poblamiento',
  ciudad: 'Huejutla de Reyes',
  estado: 'Hidalgo',
  // Pendiente: el enlace de la página de Facebook. Mientras esté vacío, no se muestra.
  facebook: '',
  mensajeGeneral:
    'Hola, quiero cotizar la reparación de un aparato. Les envío foto y la falla.',
} as const;

/** Enlace de WhatsApp que abre el chat con el mensaje ya escrito. */
export function enlaceWhatsApp(mensaje: string = negocio.mensajeGeneral): string {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
}

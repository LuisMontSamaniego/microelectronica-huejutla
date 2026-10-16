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
  // No hay horario fijo: los equipos se reciben con cita.
  atencion: 'Con cita por WhatsApp',
  // Si se vacía, el enlace deja de mostrarse en el pie y en contacto.
  facebook: 'https://www.facebook.com/profile.php?id=61595159373567',
  mensajeGeneral:
    'Hola, quiero cotizar la reparación de un aparato. Les envío foto y la falla.',
} as const;

/**
 * Lo que la web puede prometer, tal como lo confirmó Luis el 15 de octubre.
 * Se queda fuera lo que no está decidido (por ejemplo, el servicio a domicilio).
 */
export const condiciones = [
  { titulo: 'Diagnóstico sin costo', texto: 'Revisamos tu aparato y te decimos qué tiene.' },
  { titulo: 'Garantía de 30 días', texto: 'Cubre la reparación que te hacemos.' },
  { titulo: 'Tiempo de entrega', texto: 'Te lo decimos al cotizar, porque depende de la falla.' },
] as const;

/** Enlace de WhatsApp que abre el chat con el mensaje ya escrito. */
export function enlaceWhatsApp(mensaje: string = negocio.mensajeGeneral): string {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
}

/** Búsqueda del punto de atención en Google Maps, por nombre y sin coordenadas. */
export function enlaceMapa(): string {
  const lugar = `${negocio.puntoDeAtencion}, ${negocio.ciudad}, ${negocio.estado}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(lugar)}`;
}

// Cómo funciona, en el orden del plan: foto, cotización, recepción y entrega.
// Borrador para la Fase 3: pasa por el revisor de marca antes de publicarse.
import { negocio } from './negocio';

export interface Paso {
  titulo: string;
  texto: string;
}

export const pasos: Paso[] = [
  {
    titulo: 'Mándanos foto',
    texto: 'Por WhatsApp, con la falla que presenta y, si los tienes a la mano, la marca y el modelo.',
  },
  {
    titulo: 'Te cotizamos',
    texto: 'Revisamos la foto y te respondemos por WhatsApp con la cotización.',
  },
  {
    titulo: 'Recibimos tu equipo',
    texto: `En el ${negocio.puntoDeAtencion}, ${negocio.ciudad}.`,
  },
  {
    titulo: 'Te lo entregamos funcionando',
    texto: 'Te avisamos por WhatsApp cuando esté listo.',
  },
];

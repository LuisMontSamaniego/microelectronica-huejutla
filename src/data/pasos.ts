// Cómo funciona, en el orden del plan: foto, cotización, recepción y entrega.
// Revisado por el revisor de marca el 15 de octubre.
import { negocio } from './negocio';

export interface Paso {
  titulo: string;
  texto: string;
}

export const pasos: Paso[] = [
  {
    titulo: 'Mándanos foto',
    texto:
      'Por WhatsApp: una foto de tu aparato, la falla que presenta y, si los tienes a la mano, la marca y el modelo.',
  },
  {
    titulo: 'Te cotizamos',
    texto: 'Revisamos la foto y te respondemos por WhatsApp con la cotización.',
  },
  {
    titulo: 'Recibimos tu equipo',
    texto: `Acordamos el día y la hora por WhatsApp y lo recibimos en el ${negocio.puntoDeAtencion}, ${negocio.ciudad}.`,
  },
  {
    titulo: 'Te lo entregamos funcionando',
    texto: 'Te avisamos por WhatsApp cuando esté listo para que pases por él.',
  },
];

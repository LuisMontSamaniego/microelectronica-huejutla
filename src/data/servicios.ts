// Los seis servicios, con los textos aprobados de los pósters y de CLAUDE.md (sección Servicios).
// Si un texto cambia, se cambia primero en docs/servicios-y-textos.md.

export interface Servicio {
  /** Parte final de la dirección: /servicios/pantallas */
  slug: string;
  /** Nombre en plural, para menús y listas */
  nombre: string;
  /** Nombre en singular, para los mensajes */
  aparato: string;
  /** Título del póster en dos líneas: la primera va en cian y la segunda en blanco */
  titulo: [string, string];
  fallas: [string, string, string, string];
  gancho: string;
  cierre: string;
  mensajeWhatsApp: string;
  /** El servicio principal del negocio: se muestra primero y con más detalle */
  destacado?: boolean;
  /** Qué mandar por WhatsApp para cotizar más rápido */
  paraCotizar?: string[];
  /** Una prueba sencilla que el cliente puede hacer en casa antes de escribir */
  consejo?: Consejo;
  /** Qué dos fallas van en la descripción para Google (posiciones en `fallas`); por omisión, las dos primeras */
  fallasEnDescripcion?: [number, number];
}

export interface Consejo {
  /** Pregunta en dos líneas, como los títulos de los pósters */
  titulo: [string, string];
  /** Nombre de la prueba, encima de los pasos */
  nombre: string;
  entrada: string;
  pasos: string[];
  resultado: string;
  aviso: string;
  mensajeWhatsApp: string;
}

const mensaje = (aparato: string) =>
  `Hola, quiero cotizar la reparación de mi ${aparato}. Les envío foto y la falla.`;

/** Lo que pide el mensaje de bienvenida de WhatsApp; un servicio puede pedir algo más concreto. */
export const paraCotizarGeneral = [
  'Una foto de tu aparato',
  'La falla que presenta',
  'La marca y modelo, si los tienes a la mano',
];

export const servicios: Servicio[] = [
  {
    slug: 'pantallas',
    nombre: 'Pantallas',
    aparato: 'pantalla',
    titulo: ['¿Tu pantalla', 'no enciende?'],
    fallas: [
      'No enciende o se apaga sola',
      'Tiene sonido pero no imagen',
      'Líneas o manchas en la imagen',
      'No responde al control',
    ],
    gancho:
      '¿Tu pantalla no enciende, se escucha pero no se ve o tiene líneas en la imagen? No la tires, ¡tiene reparación!',
    cierre: '¡Nosotros la reparamos!',
    mensajeWhatsApp: mensaje('pantalla'),
    destacado: true,
    paraCotizar: [
      'Una foto de la pantalla, encendida si se puede, donde se vea la falla',
      'Una foto de la etiqueta de atrás, con la marca y el modelo',
      'Cuántas pulgadas tiene, si lo sabes',
    ],
    // La prueba de la linterna (docs/canales-y-lanzamiento.md, ideas de contenido).
    consejo: {
      titulo: ['¿Se escucha', 'pero no se ve?'],
      nombre: 'La prueba de la linterna',
      entrada: 'Haz la prueba de la linterna antes de escribirnos. Toma un minuto y nos ayuda a saber qué tiene tu pantalla.',
      pasos: [
        'Enciende la pantalla y pon algo que tenga sonido.',
        'Apaga la luz del cuarto.',
        'Acerca la linterna de tu celular a la pantalla y mira con atención.',
      ],
      resultado:
        'Si alcanzas a ver la imagen, aunque sea muy tenue, la falla suele estar en la iluminación, y por lo general tiene reparación. Si no ves nada, mándanos foto de todos modos y la revisamos.',
      aviso: 'No abras la pantalla: la prueba se hace por fuera.',
      mensajeWhatsApp:
        'Hola, mi pantalla se escucha pero no se ve. Hice la prueba de la linterna y les envío foto.',
    },
  },
  {
    slug: 'bocinas',
    nombre: 'Bocinas',
    aparato: 'bocina',
    titulo: ['¿Tu bocina', 'ya no suena?'],
    fallas: [
      'No enciende',
      'Sin sonido o suena distorsionado',
      'No carga la batería',
      'No conecta por Bluetooth',
    ],
    gancho:
      '¿Tu bocina ya no suena, se escucha distorsionada o no carga? ¡Que no se acabe la fiesta! La reparamos.',
    cierre: '¡Nosotros la reparamos!',
    mensajeWhatsApp: mensaje('bocina'),
    // "Sin sonido o suena distorsionado" se lee mal en una lista separada por comas.
    fallasEnDescripcion: [0, 2],
  },
  {
    slug: 'microondas',
    nombre: 'Microondas',
    aparato: 'microondas',
    titulo: ['¿Tu microondas', 'no calienta?'],
    fallas: [
      'No calienta',
      'Los botones no responden',
      'No enciende para nada',
      'El plato no gira',
    ],
    gancho:
      '¿Tu microondas no calienta, no le sirven los botones o ya no enciende? Antes de comprar otro, tráelo a revisar.',
    cierre: '¡Nosotros lo reparamos!',
    mensajeWhatsApp: mensaje('microondas'),
  },
  {
    slug: 'licuadoras',
    nombre: 'Licuadoras',
    aparato: 'licuadora',
    titulo: ['¡No te quedes', 'sin licuadora!'],
    fallas: [
      'No enciende',
      'Se traba o no muele bien',
      'Hace ruido o huele a quemado',
      'Tira líquido por la base',
    ],
    // De temporada: después de Xantolo (2 de noviembre) conviene cambiar el gancho y el cierre.
    gancho:
      '¡Ya viene el Xantolo! Que tu licuadora no te falle a la hora de preparar la comida.',
    cierre: '¡Que no te falte este Xantolo!',
    mensajeWhatsApp: mensaje('licuadora'),
  },
  {
    slug: 'planchas',
    nombre: 'Planchas',
    aparato: 'plancha',
    titulo: ['¿Tu plancha', 'no calienta?'],
    fallas: [
      'No calienta o calienta de más',
      'No sale vapor',
      'Se apaga sola',
      'Falla el cable o la conexión',
    ],
    gancho:
      '¿Tu plancha no calienta, no saca vapor o se apaga sola? Tráela, la dejamos como nueva.',
    cierre: '¡Nosotros la reparamos!',
    mensajeWhatsApp: mensaje('plancha'),
  },
  {
    slug: 'ventiladores',
    nombre: 'Ventiladores',
    aparato: 'ventilador',
    titulo: ['¿Tu ventilador', 'ya no gira?'],
    fallas: ['No enciende', 'Gira muy lento', 'Hace ruido al funcionar', 'Ya no oscila'],
    gancho:
      '¿Tu ventilador no enciende, gira lento o hace ruido? Con este calor no te quedes sin él.',
    cierre: '¡Nosotros lo reparamos!',
    mensajeWhatsApp: mensaje('ventilador'),
  },
];

/** "Reparación de pantallas": título de la página del servicio y nombre en los datos estructurados. */
export const nombreReparacion = (servicio: Servicio) => `Reparación de ${servicio.nombre.toLowerCase()}`;

export const servicioDestacado = servicios.find((s) => s.destacado) ?? servicios[0];
export const otrosServicios = servicios.filter((s) => s !== servicioDestacado);

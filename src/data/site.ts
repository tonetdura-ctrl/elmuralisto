/**
 * Configuración central de la web.
 * Edita aquí tus datos de contacto, precios y textos sin tocar el diseño.
 */
import type { ImageMetadata } from 'astro';
import pescaderia from '../assets/murales/pescaderia.png';
import cocteleria from '../assets/murales/cocteleria.png';
import heladeria from '../assets/murales/heladeria.png';
import salonHibisco from '../assets/murales/salon-hibisco.png';
import floristeria from '../assets/murales/floristeria.png';
import dormitorio from '../assets/murales/dormitorio-jardin.png';
import salonRetro from '../assets/murales/salon-retro.png';
import comedor from '../assets/murales/comedor-mediterraneo.png';

export const site = {
  name: 'El Muralisto',
  tagline: 'Murales pintados a mano para comercios y hogares',
  description:
    'El Muralisto diseña y pinta murales a mano para comercios, restaurantes y hogares. Diseño a medida, boceto digital previo y pintura profesional en tu pared.',
  // ⚠️ Sustituye por tus datos reales
  email: 'hola@elmuralisto.es', // reenvía a la bandeja privada (DNS: forwardemail.net)
  phone: '+34 600 000 000',
  whatsapp: '34600000000', // solo dígitos, con prefijo de país
  instagram: 'https://www.instagram.com/elmuralisto/',
  city: 'España',
};

export type Category = 'Comercios' | 'Hogar';

export interface Mural {
  slug: string;
  title: string;
  category: Category;
  place: string;
  description: string;
  palette: string[];
  image: ImageMetadata;
}

export const murals: Mural[] = [
  {
    slug: 'floristeria',
    title: 'Jardín en flor',
    category: 'Comercios',
    place: 'Floristería',
    description:
      'Flores de gran formato en terracota, rosa y salvia que enmarcan el mostrador y convierten la tienda en un escaparate vivo.',
    palette: ['#C8553D', '#E9A7A0', '#7C8B6A', '#E4B23A'],
    image: floristeria,
  },
  {
    slug: 'pescaderia',
    title: 'Mar abierto',
    category: 'Comercios',
    place: 'Pescadería',
    description:
      'Olas, peces y conchas en azules profundos y coral. Un mural de marca que comunica frescura antes de llegar al mostrador.',
    palette: ['#1F4E9A', '#3FB6C7', '#F07F5B', '#FFFFFF'],
    image: pescaderia,
  },
  {
    slug: 'cocteleria',
    title: 'Hora del vermut',
    category: 'Comercios',
    place: 'Coctelería',
    description:
      'Copas, cítricos y destellos sobre un burdeos intenso. Ambiente cálido y con carácter para una barra de noche.',
    palette: ['#6E1E2B', '#E59A3B', '#F2B5B9', '#233F36'],
    image: cocteleria,
  },
  {
    slug: 'heladeria',
    title: 'Dulce verano',
    category: 'Comercios',
    place: 'Heladería',
    description:
      'Cucuruchos, polos y cerezas en tonos pastel con rotulación integrada. Alegre, fotogénico y perfecto para redes.',
    palette: ['#F6B8C8', '#FFE08A', '#9ED9C8', '#E2465B'],
    image: heladeria,
  },
  {
    slug: 'salon-retro',
    title: 'Retro bloom',
    category: 'Hogar',
    place: 'Salón',
    description:
      'Flores setenteras y curvas en naranja, ciruela y oliva. Un mural envolvente que da personalidad a todo el salón.',
    palette: ['#D35F24', '#6B2E4A', '#8C8A3E', '#F3DCC0'],
    image: salonRetro,
  },
  {
    slug: 'salon-hibisco',
    title: 'Hibisco suave',
    category: 'Hogar',
    place: 'Salón',
    description:
      'Composición botánica en rosas empolvados y verdes salvia sobre fondo crema. Calma y luz para espacios abiertos.',
    palette: ['#E9A7A0', '#D9774F', '#7C8B6A', '#F6EFE4'],
    image: salonHibisco,
  },
  {
    slug: 'dormitorio-jardin',
    title: 'Jardín de descanso',
    category: 'Hogar',
    place: 'Dormitorio',
    description:
      'Flores delicadas en lavanda, rosa y salvia que sustituyen al cabecero y crean un dormitorio sereno.',
    palette: ['#C9B8E0', '#E3A9A4', '#A9B79A', '#FAF5EE'],
    image: dormitorio,
  },
  {
    slug: 'comedor-mediterraneo',
    title: 'Mediterráneo',
    category: 'Hogar',
    place: 'Comedor',
    description:
      'Ramas y flores en terracota y mostaza con aire mediterráneo. Pensado para comidas largas y luz de tarde.',
    palette: ['#C8553D', '#E4B23A', '#7C8B6A', '#F3E6D3'],
    image: comedor,
  },
];

export interface Plan {
  name: string;
  for: string;
  price: string;
  unit: string;
  features: string[];
  featured?: boolean;
}

// ⚠️ Precios orientativos: ajústalos a tus tarifas reales
export const plans: Plan[] = [
  {
    name: 'Hogar',
    for: 'Salones, dormitorios, habitaciones infantiles',
    price: '95',
    unit: '€/m²',
    features: [
      'Diseño a medida con 1 boceto digital',
      '2 rondas de cambios',
      'Pinturas acrílicas de alta durabilidad',
      'Barniz protector lavable',
    ],
  },
  {
    name: 'Comercio',
    for: 'Tiendas, restaurantes, cafeterías, oficinas',
    price: '120',
    unit: '€/m²',
    featured: true,
    features: [
      'Diseño alineado con tu marca',
      'Rotulación integrada en el mural',
      '2 bocetos y 3 rondas de cambios',
      'Pintura fuera de horario comercial',
      'Barniz antigraffiti opcional',
    ],
  },
  {
    name: 'Proyecto a medida',
    for: 'Fachadas, grandes formatos, interiorismo',
    price: 'Consultar',
    unit: '',
    features: [
      'Visita técnica y medición',
      'Estudio de color y concepto',
      'Andamio o plataforma si se requiere',
      'Coordinación con arquitectos e interioristas',
    ],
  },
];

export const steps = [
  {
    title: 'Cuéntame tu idea',
    text: 'Me envías fotos y medidas de la pared, y hablamos del estilo, los colores y lo que quieres transmitir.',
  },
  {
    title: 'Boceto digital',
    text: 'Preparo un diseño sobre una foto real de tu espacio para que veas el resultado antes de pintar.',
  },
  {
    title: 'Pintura a mano',
    text: 'Pinto el mural en tu pared con materiales profesionales, protegiendo el espacio y sin molestias.',
  },
  {
    title: 'Entrega y cuidado',
    text: 'Aplico un barniz protector y te dejo una guía de mantenimiento para que dure muchos años.',
  },
];

export const faqs = [
  {
    q: '¿Cuánto tarda un mural?',
    a: 'Depende del tamaño y del nivel de detalle. Un mural de hogar de 10–15 m² suele pintarse en 2–4 días; los proyectos comerciales se planifican para no interrumpir tu actividad.',
  },
  {
    q: '¿Puedo ver el diseño antes de pintar?',
    a: 'Sí. Siempre trabajo con un boceto digital sobre la foto de tu pared. No empiezo a pintar hasta que das el visto bueno.',
  },
  {
    q: '¿Qué materiales utilizas?',
    a: 'Pinturas acrílicas de alta calidad, resistentes a la luz y lavables, con acabado de barniz protector. Para exteriores uso productos específicos de fachada.',
  },
  {
    q: '¿Cómo se paga?',
    a: 'Una señal del 30% para reservar fecha y empezar el diseño, y el resto al terminar el mural. Acepto transferencia, Bizum y tarjeta.',
  },
  {
    q: '¿Trabajas fuera de mi ciudad?',
    a: 'Sí, realizo proyectos en toda España. Para desplazamientos largos se añaden los gastos de viaje al presupuesto.',
  },
  {
    q: '¿Hay que preparar la pared?',
    a: 'La pared debe estar en buen estado. Si necesita reparación o imprimación, lo incluyo en el presupuesto.',
  },
];

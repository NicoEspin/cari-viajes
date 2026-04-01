export type ExcursionCategory = "atraccion" | "excursion" | "traslado";

export type ExcursionRhythm =
  | "ciudad"
  | "medio-dia"
  | "dia-completo"
  | "aventura"
  | "grupos"
  | "a-medida";

export type ExcursionVisual = {
  eyebrow: string;
  scene: string;
  alt: string;
  palette: {
    base: string;
    accent: string;
    glow: string;
    contrast: string;
  };
};

export type ExcursionStop = {
  title: string;
  detail: string;
};

export type ExcursionInfo = {
  label: string;
  value: string;
};

export type Excursion = {
  slug: string;
  heroImage: string;
  gallery: string[];
  title: string;
  shortTitle: string;
  editorialTitle: string;
  teaser: string;
  summary: string;
  category: ExcursionCategory;
  rhythm: ExcursionRhythm;
  duration: string;
  departure: string;
  availability: string;
  location: string;
  badge?: string;
  featuredHome: boolean;
  featuredCollection: boolean;
  heroKicker: string;
  manifest: string;
  includes: string[];
  optional: string[];
  notes: string[];
  highlights: string[];
  itinerary: ExcursionStop[];
  usefulInfo: ExcursionInfo[];
  relatedSlugs: string[];
  visual: ExcursionVisual;
  seoTitle: string;
  seoDescription: string;
  whatsappMessage: string;
};

export const excursionCategoryLabels: Record<ExcursionCategory, string> = {
  atraccion: "Atraccion",
  excursion: "Excursion",
  traslado: "Traslado",
};

export const excursionRhythmLabels: Record<ExcursionRhythm, string> = {
  ciudad: "Ciudad",
  "medio-dia": "Medio dia",
  "dia-completo": "Dia completo",
  aventura: "Aventura",
  grupos: "Grupos",
  "a-medida": "A medida",
};

function buildExcursionImageSet(slug: string) {
  return {
    heroImage: `/images/excursions/${slug}/hero.jpg`,
    gallery: [
      `/images/excursions/${slug}/gallery-01.jpg`,
      `/images/excursions/${slug}/gallery-02.jpg`,
      `/images/excursions/${slug}/gallery-03.jpg`,
    ],
  };
}

export const excursions: Excursion[] = [
  {
    slug: "city-tour-lacustre",
    ...buildExcursionImageSet("city-tour-lacustre"),
    title: "City Tour Lacustre",
    shortTitle: "City Tour Lacustre",
    editorialTitle: "El lago entra primero en escena.",
    teaser:
      "Dos horas para leer el San Roque desde el agua, con guia, musica en vivo y una salida que arranca liviana.",
    summary:
      "Un paseo lacustre por el San Roque con guiada, show de musica en vivo, servicio de bar y un ritmo amable para quien quiere empezar Carlos Paz desde su mejor postal.",
    category: "atraccion",
    rhythm: "ciudad",
    duration: "2 hs",
    departure: "Salidas diarias con reserva",
    availability: "Todo el ano, sujeto a cupos",
    location: "Lago San Roque · Villa Carlos Paz",
    badge: "Pet friendly",
    featuredHome: true,
    featuredCollection: true,
    heroKicker: "Postal urbana",
    manifest:
      "Una entrada elegante a Carlos Paz para quien quiere ciudad, agua y cero apuro en la misma escena.",
    includes: [
      "Recorrido por todo el lago San Roque",
      "Guiada durante la navegacion",
      "Show de musica en vivo",
      "Servicio de bar a bordo",
      "Servicio de fotografia",
      "Sanitarios",
      "Experiencia pet friendly",
    ],
    optional: ["Traslado desde tu hotel, sujeto a disponibilidad"],
    notes: [
      "Trabaja con reserva previa y cupos limitados.",
      "Ideal para combinar con otra actividad urbana el mismo dia.",
    ],
    highlights: [
      "Vista abierta del lago y la costanera",
      "Plan corto y facil de sumar al itinerario",
      "Ambiente relajado con musica en vivo",
    ],
    itinerary: [
      {
        title: "Embarque",
        detail: "Ingreso al paseo y presentacion de la salida por el lago.",
      },
      {
        title: "Recorrido guiado",
        detail: "Lectura del paisaje, datos de la ciudad y puntos emblematicos alrededor del San Roque.",
      },
      {
        title: "Cierre con ritmo",
        detail: "Musica en vivo, servicio de bar y tiempo para fotos durante la navegacion.",
      },
    ],
    usefulInfo: [
      { label: "Ideal para", value: "Primer dia, familias, parejas y planes suaves" },
      { label: "Logistica", value: "Reserva previa y opcion de traslado" },
      { label: "Sensacion", value: "Ciudad desde otra perspectiva" },
    ],
    relatedSlugs: ["bar-de-hielo", "aerosilla", "traslados-especiales"],
    visual: {
      eyebrow: "San Roque",
      scene: "Reflejos, cubierta y ciudad baja",
      alt: "Placeholder editorial del City Tour Lacustre en el lago San Roque",
      palette: {
        base: "#123b47",
        accent: "#fccb3e",
        glow: "rgba(61, 181, 187, 0.34)",
        contrast: "#f5f0e8",
      },
    },
    seoTitle: "City Tour Lacustre en Carlos Paz | Cari Turismo",
    seoDescription:
      "Reserva el City Tour Lacustre en Carlos Paz con guia, musica en vivo y opcion de traslado. Un plan corto y premium para vivir el lago San Roque.",
    whatsappMessage:
      "Hola! Quiero info y disponibilidad del City Tour Lacustre. Me cuentan horarios, reserva y si tienen traslado?",
  },
  {
    slug: "bar-de-hielo",
    ...buildExcursionImageSet("bar-de-hielo"),
    title: "Bar de Hielo + Mundo Irreal",
    shortTitle: "Bar de Hielo",
    editorialTitle: "Cero grados. Cien fotos que si valen.",
    teaser:
      "Un plan urbano distinto: experiencia 3D pintada a mano, vestuario incluido y barra libre bajo cero durante 30 minutos.",
    summary:
      "Por el mismo ingreso se vive Mundo Irreal, el primer espacio 3D de Argentina, y luego el bar de hielo totalmente reformado con bebidas incluidas y una puesta memorable.",
    category: "atraccion",
    rhythm: "ciudad",
    duration: "1.5 a 2 hs",
    departure: "Horarios variables segun temporada",
    availability: "Con reserva y cupos limitados",
    location: "Centro de Villa Carlos Paz",
    badge: "Barra libre",
    featuredHome: true,
    featuredCollection: false,
    heroKicker: "Noche en ciudad",
    manifest:
      "Cuando el plan pide algo memorable, esta es la escala urbana que rompe la rutina sin romper el dia.",
    includes: [
      "Ingreso a Mundo Irreal, espacio 3D pintado a mano",
      "Vestuario con capas y guantes",
      "Ingreso al bar de hielo",
      "30 minutos bajo cero",
      "Barra libre con tragos y opciones sin alcohol",
      "Asistencia para fotos durante la experiencia",
    ],
    optional: ["Traslado desde tu hotel, sujeto a disponibilidad"],
    notes: [
      "Los horarios pueden cambiar segun la epoca del ano.",
      "Se recomienda reservar con anticipacion para asegurar lugar.",
    ],
    highlights: [
      "Experiencia 3D unica en Argentina",
      "Vestuario y ambientacion resueltos",
      "Plan corto, urbano y muy compartible",
    ],
    itinerary: [
      {
        title: "Ingreso a Mundo Irreal",
        detail: "Recorrido por murales 3D intervenidos a mano para fotos y escenas inmersivas.",
      },
      {
        title: "Zona de vestuario",
        detail: "Entrega de capas y guantes antes de entrar al area fria.",
      },
      {
        title: "Bar de hielo",
        detail: "Treinta minutos con musica, tragos y una escenografia completamente helada.",
      },
    ],
    usefulInfo: [
      { label: "Ideal para", value: "Grupos de amigos, parejas y escapadas urbanas" },
      { label: "Reserva", value: "Obligatoria por cupos limitados" },
      { label: "Tono", value: "Experiencia corta, distinta y muy fotogenica" },
    ],
    relatedSlugs: ["city-tour-lacustre", "aerosilla", "traslados-especiales"],
    visual: {
      eyebrow: "Bajo cero",
      scene: "Cristales, neon y barra esculpida",
      alt: "Placeholder editorial del Bar de Hielo y Mundo Irreal en Carlos Paz",
      palette: {
        base: "#11273e",
        accent: "#ecf93e",
        glow: "rgba(121, 214, 255, 0.36)",
        contrast: "#eef8ff",
      },
    },
    seoTitle: "Bar de Hielo en Carlos Paz | Mundo Irreal + Cari Turismo",
    seoDescription:
      "Conoce el Bar de Hielo de Carlos Paz con ingreso a Mundo Irreal, vestuario incluido y barra libre. Reserva facil por WhatsApp con Cari Turismo.",
    whatsappMessage:
      "Hola! Quiero reservar Bar de Hielo + Mundo Irreal. Me cuentan horarios, que incluye y si tienen traslado?",
  },
  {
    slug: "aerosilla",
    ...buildExcursionImageSet("aerosilla"),
    title: "Aerosilla",
    shortTitle: "Aerosilla",
    editorialTitle: "La ciudad sube un piso y cambia de escala.",
    teaser:
      "Subida al punto panoramico para ver Carlos Paz y el Valle de Punilla, con sendero autoctono y espacios para frenar sin obligacion de consumo.",
    summary:
      "Una de las atracciones iconicas de la ciudad: aerosilla al punto maximo, sendero autoctono para caminar en familia y dos confiterias para hacer la pausa con vista.",
    category: "atraccion",
    rhythm: "ciudad",
    duration: "2 a 3 hs",
    departure: "Abierto todos los dias",
    availability: "Horarios variables segun temporada",
    location: "Complejo Aerosilla · Villa Carlos Paz",
    badge: "Compra anticipada",
    featuredHome: false,
    featuredCollection: false,
    heroKicker: "Icono local",
    manifest:
      "Una clasica de Carlos Paz resuelta con timing: subir, mirar, caminar y bajar sin perder tiempo en boleteria.",
    includes: [
      "Ascenso en aerosilla al punto panoramico",
      "Vista panoramica de la ciudad y del Valle de Punilla",
      "Sendero autoctono para recorrer en familia",
      "Acceso al complejo con dos confiterias",
    ],
    optional: [
      "Traslado desde tu hotel, sujeto a disponibilidad",
      "Compra anticipada para evitar demoras en boleteria",
    ],
    notes: [
      "Los horarios pueden variar segun la epoca del ano.",
      "No es obligatorio consumir en las confiterias del complejo.",
    ],
    highlights: [
      "Vista alta de toda la ciudad",
      "Plan amable para familias",
      "Se integra facil con otras salidas urbanas",
    ],
    itinerary: [
      {
        title: "Ingreso al complejo",
        detail: "Acceso al predio y preparacion del ascenso.",
      },
      {
        title: "Ascenso panoramico",
        detail: "Subida al pico maximo con lectura abierta de Carlos Paz y Punilla.",
      },
      {
        title: "Recorrido complementario",
        detail: "Tiempo para sendero autoctono, fotos y pausa en las confiterias.",
      },
    ],
    usefulInfo: [
      { label: "Ideal para", value: "Familias, escapadas cortas y vistas panoramicas" },
      { label: "Compra", value: "Conviene anticiparla para evitar filas" },
      { label: "Plan", value: "Perfecto para sumar a una tarde urbana" },
    ],
    relatedSlugs: ["city-tour-lacustre", "bar-de-hielo", "valle-de-punilla"],
    visual: {
      eyebrow: "Altura",
      scene: "Cabinas, sierra y trama urbana",
      alt: "Placeholder editorial de la Aerosilla con vistas panoramicas de Carlos Paz",
      palette: {
        base: "#284131",
        accent: "#fccb3e",
        glow: "rgba(177, 244, 135, 0.34)",
        contrast: "#f8f7f1",
      },
    },
    seoTitle: "Aerosilla en Carlos Paz | Vistas panoramicas con Cari Turismo",
    seoDescription:
      "Subi a la Aerosilla de Carlos Paz con compra anticipada y opcion de traslado. Un clasico panoramico para ver la ciudad y el Valle de Punilla.",
    whatsappMessage:
      "Hola! Me interesa la Aerosilla. Quiero saber horarios, compra anticipada y si tienen traslado desde el hotel.",
  },
  {
    slug: "city-bus-turistico-grupos",
    ...buildExcursionImageSet("city-bus-turistico-grupos"),
    title: "City Bus Turistico para Grupos",
    shortTitle: "City Bus para Grupos",
    editorialTitle: "La ciudad en clave de grupo, sin perder ritmo.",
    teaser:
      "Recorrido de dos horas por los puntos principales de Carlos Paz, con guia, show humoristico musical y servicio puerta a puerta desde el hotel.",
    summary:
      "Pensado para grupos desde diez personas, con recorrido por la ciudad, guia, clima festivo y una parada en fabrica de alfajores para redondear la experiencia.",
    category: "atraccion",
    rhythm: "grupos",
    duration: "2 hs",
    departure: "Programacion especial para grupos",
    availability: "A partir de 10 personas",
    location: "Villa Carlos Paz y puntos turisticos principales",
    badge: "Puerta a puerta",
    featuredHome: false,
    featuredCollection: false,
    heroKicker: "Grupos",
    manifest:
      "Cuando el viaje es en grupo, la experiencia necesita orden, humor y una logistica que no haga perder tiempo.",
    includes: [
      "Recorrido de dos horas por la ciudad",
      "Guia durante toda la salida",
      "Show humoristico musical",
      "Servicio puerta a puerta desde el hotel",
      "Parada en fabrica de alfajores",
    ],
    optional: ["Armado segun disponibilidad y cantidad final del grupo"],
    notes: [
      "Se programa unicamente para grupos de diez personas o mas.",
      "Conviene reservar con anticipacion cuando el viaje tiene fecha cerrada.",
    ],
    highlights: [
      "Formato resuelto para grupos",
      "Puerta a puerta desde el hotel",
      "Recorrido corto con guia y entretenimiento",
    ],
    itinerary: [
      {
        title: "Pickup del grupo",
        detail: "Coordinacion puerta a puerta segun hotel o punto acordado.",
      },
      {
        title: "Recorrido por la ciudad",
        detail: "Lectura de los principales puntos turisticos de Carlos Paz con guia.",
      },
      {
        title: "Parada dulce",
        detail: "Detencion en fabrica de alfajores antes del regreso.",
      },
    ],
    usefulInfo: [
      { label: "Ideal para", value: "Contingentes, viajes estudiantiles y grupos familiares" },
      { label: "Minimo", value: "10 personas" },
      { label: "Foco", value: "Comodidad, entretenimiento y orden logistico" },
    ],
    relatedSlugs: ["traslados-especiales", "city-tour-lacustre", "bar-de-hielo"],
    visual: {
      eyebrow: "Ruta urbana",
      scene: "Bus, marquesinas y carteles de ruta",
      alt: "Placeholder editorial del City Bus Turistico para grupos en Carlos Paz",
      palette: {
        base: "#4b2f1f",
        accent: "#fccb3e",
        glow: "rgba(255, 170, 93, 0.34)",
        contrast: "#f7efe7",
      },
    },
    seoTitle: "City Bus Turistico para grupos en Carlos Paz | Cari Turismo",
    seoDescription:
      "Organiza un City Bus Turistico para grupos en Carlos Paz con guia, show humoristico musical y servicio puerta a puerta desde el hotel.",
    whatsappMessage:
      "Hola! Necesito info para organizar el City Bus Turistico para un grupo. Me cuentan disponibilidad, minimo y como funciona el puerta a puerta?",
  },
  {
    slug: "valle-de-punilla",
    ...buildExcursionImageSet("valle-de-punilla"),
    title: "Excursion Valle de Punilla",
    shortTitle: "Valle de Punilla",
    editorialTitle: "La sierra entra en modo ruta y no afloja.",
    teaser:
      "Medio dia para recorrer perilago, Cosquin, La Falda, Capilla del Monte, El Zapato y el pulso clasico del valle.",
    summary:
      "Una excursion de medio dia que condensa algunos de los nombres mas reconocidos del Valle de Punilla, con servicio puerta a puerta y opcion de sumar experiencias en Los Cocos.",
    category: "excursion",
    rhythm: "medio-dia",
    duration: "13:30 a 19:30 hs aprox.",
    departure: "Salida desde las 13:30 hs",
    availability: "Temporada regular",
    location: "Perilago San Roque · Cosquin · La Falda · Capilla del Monte · Los Cocos",
    badge: "Medio dia",
    featuredHome: false,
    featuredCollection: true,
    heroKicker: "Ruta clasica",
    manifest:
      "Ideal para quien quiere salir de la ciudad, leer varios hitos del valle y volver todavia con resto para la noche.",
    includes: [
      "Perilago San Roque",
      "Visita a Cosquin y Plaza Prospero Molina",
      "Paso por La Falda",
      "Capilla del Monte, Piedra El Zapato y calle techada",
      "Servicio puerta a puerta desde tu hotel",
    ],
    optional: ["Laberinto o Aerosilla en Los Cocos"],
    notes: [
      "Regreso estimado 19:30 hs.",
      "Funciona muy bien para viajeros que quieren una primera lectura del valle.",
    ],
    highlights: [
      "Mucho paisaje en media jornada",
      "Hitos clasicos del Valle de Punilla",
      "Se resuelve sin complicar el resto del viaje",
    ],
    itinerary: [
      {
        title: "Salida desde Carlos Paz",
        detail: "Inicio de la ruta por el perilago San Roque y entrada al valle.",
      },
      {
        title: "Corazon cultural",
        detail: "Parada en Cosquin con foco en Plaza Prospero Molina y paso por La Falda.",
      },
      {
        title: "Capilla del Monte y Los Cocos",
        detail: "Piedra El Zapato, calle techada y opcionales en Los Cocos antes del regreso.",
      },
    ],
    usefulInfo: [
      { label: "Ideal para", value: "Quien quiere una excursion serrana sin ocupar todo el dia" },
      { label: "Salida", value: "13:30 hs aprox." },
      { label: "Regreso", value: "19:30 hs aprox." },
    ],
    relatedSlugs: ["altas-cumbres-tuneles", "cascada-escondida", "aerosilla"],
    visual: {
      eyebrow: "Punilla",
      scene: "Ruta serrana, estaciones y pueblos clasicos",
      alt: "Placeholder editorial de la excursion Valle de Punilla",
      palette: {
        base: "#5d3f24",
        accent: "#ecf93e",
        glow: "rgba(252, 203, 62, 0.32)",
        contrast: "#fbf5e8",
      },
    },
    seoTitle: "Excursion Valle de Punilla | Medio dia desde Carlos Paz",
    seoDescription:
      "Descubre el Valle de Punilla en una excursion de medio dia desde Carlos Paz con puerta a puerta, paradas clasicas y opcion de sumar Los Cocos.",
    whatsappMessage:
      "Hola! Quiero saber disponibilidad de la excursion Valle de Punilla. Me cuentan que incluye y como es el puerta a puerta?",
  },
  {
    slug: "dique-los-molinos-villa-general-belgrano",
    ...buildExcursionImageSet("dique-los-molinos-villa-general-belgrano"),
    title: "Excursion Dique Los Molinos con V. Gral Belgrano",
    shortTitle: "Dique Los Molinos + Villa General Belgrano",
    editorialTitle: "Agua, productos regionales y una avenida para quedarse un rato mas.",
    teaser:
      "Salida de medio dia con city tour por Alta Gracia, degustacion de artesanales en el dique y tiempo libre en Villa General Belgrano.",
    summary:
      "Una combinacion de paisaje, sabores y pueblo serrano con identidad propia. Sale por la tarde y vuelve al anochecer, con logistica puerta a puerta.",
    category: "excursion",
    rhythm: "medio-dia",
    duration: "13:30 a 19:30 hs aprox.",
    departure: "Salida desde las 13:30 hs",
    availability: "Temporada regular",
    location: "Alta Gracia · Dique Los Molinos · Villa General Belgrano",
    badge: "Degustacion",
    featuredHome: false,
    featuredCollection: false,
    heroKicker: "Sabores de sierra",
    manifest:
      "Una tarde bien armada para quien quiere ruta corta, pausas con sabor y uno de los pueblos mas buscados de Cordoba.",
    includes: [
      "City tour por Alta Gracia",
      "Visita al Dique Los Molinos",
      "Degustacion de productos artesanales",
      "Tiempo libre en Villa General Belgrano",
      "Servicio puerta a puerta desde tu hotel",
    ],
    optional: [],
    notes: [
      "Regreso estimado 19:30 hs.",
      "Muy conveniente para viajeros que buscan una excursion amable y gourmet.",
    ],
    highlights: [
      "Paisaje y degustacion en una sola tarde",
      "Tiempo libre real en Villa General Belgrano",
      "Recorrido equilibrado entre ruta y pausa",
    ],
    itinerary: [
      {
        title: "Alta Gracia",
        detail: "City tour inicial para darle contexto historico a la ruta.",
      },
      {
        title: "Dique Los Molinos",
        detail: "Visita al espejo de agua con parada y degustacion de productos regionales.",
      },
      {
        title: "Villa General Belgrano",
        detail: "Tiempo libre para recorrer la avenida principal, chocolaterias y cervecerias.",
      },
    ],
    usefulInfo: [
      { label: "Ideal para", value: "Parejas, familias y amantes del ritmo tranquilo" },
      { label: "Salida", value: "13:30 hs aprox." },
      { label: "Regreso", value: "19:30 hs aprox." },
    ],
    relatedSlugs: [
      "la-cumbrecita-villa-general-belgrano",
      "valle-de-punilla",
      "traslados-especiales",
    ],
    visual: {
      eyebrow: "Calamuchita",
      scene: "Agua quieta, mesa regional y avenida centroeuropea",
      alt: "Placeholder editorial de la excursion al Dique Los Molinos con Villa General Belgrano",
      palette: {
        base: "#24534a",
        accent: "#fccb3e",
        glow: "rgba(122, 230, 196, 0.32)",
        contrast: "#f7fbf8",
      },
    },
    seoTitle: "Dique Los Molinos y Villa General Belgrano | Cari Turismo",
    seoDescription:
      "Reserva la excursion de medio dia al Dique Los Molinos con Villa General Belgrano, degustacion artesanal y city tour por Alta Gracia.",
    whatsappMessage:
      "Hola! Quiero info de la excursion Dique Los Molinos con Villa General Belgrano. Me cuentan disponibilidad y que incluye?",
  },
  {
    slug: "la-cumbrecita-villa-general-belgrano",
    ...buildExcursionImageSet("la-cumbrecita-villa-general-belgrano"),
    title: "Excursion La Cumbrecita con V. Gral Belgrano",
    shortTitle: "La Cumbrecita + Villa General Belgrano",
    editorialTitle: "Bosque peatonal, cascada y una escala alpina bien medida.",
    teaser:
      "Dia completo con Alta Gracia, Dique Los Molinos, senderos en La Cumbrecita y paso final por Villa General Belgrano.",
    summary:
      "Una de las salidas mas completas para quien busca pueblo peatonal, paisaje serrano y tiempo para caminar sin apuro entre postales clasicas de Calamuchita.",
    category: "excursion",
    rhythm: "dia-completo",
    duration: "8:00 a 19:30 hs aprox.",
    departure: "Salida desde las 8:00 hs",
    availability: "Temporada regular",
    location: "Alta Gracia · Dique Los Molinos · La Cumbrecita · Villa General Belgrano",
    badge: "Full day",
    featuredHome: true,
    featuredCollection: true,
    heroKicker: "Dia completo",
    manifest:
      "Un full day con narrativa: historia, sabores, caminata y un cierre con identidad propia. Nada esta puesto porque si.",
    includes: [
      "City tour por Alta Gracia",
      "Visita al Dique Los Molinos",
      "Degustacion de productos artesanales",
      "Ingreso al pueblo peatonal La Cumbrecita",
      "Tiempo para senderos y cascada",
      "Parada en Villa General Belgrano",
      "Servicio puerta a puerta desde tu hotel",
    ],
    optional: [],
    notes: [
      "Tiempo aproximado en La Cumbrecita: 2:30 hs.",
      "Regreso estimado 19:30 hs.",
    ],
    highlights: [
      "Pueblo peatonal con identidad fuerte",
      "Caminata entre senderos y cascada",
      "Combina naturaleza y vida de pueblo",
    ],
    itinerary: [
      {
        title: "Salida y contexto",
        detail: "Primer tramo con city tour por Alta Gracia y lectura historica del corredor.",
      },
      {
        title: "Dique Los Molinos",
        detail: "Parada con degustacion de productos artesanales antes de subir hacia el bosque.",
      },
      {
        title: "La Cumbrecita",
        detail: "Tiempo libre para senderos, cascada y paseo por el pueblo peatonal.",
      },
      {
        title: "Villa General Belgrano",
        detail: "Cierre con recorrido por la avenida principal, cervecerias y chocolaterias.",
      },
    ],
    usefulInfo: [
      { label: "Ideal para", value: "Quien quiere caminar, mirar y hacer un full day con variedad" },
      { label: "Salida", value: "8:00 hs aprox." },
      { label: "Regreso", value: "19:30 hs aprox." },
    ],
    relatedSlugs: [
      "dique-los-molinos-villa-general-belgrano",
      "cascada-escondida",
      "altas-cumbres-tuneles",
    ],
    visual: {
      eyebrow: "Bosque peatonal",
      scene: "Senderos, madera y luz filtrada",
      alt: "Placeholder editorial de la excursion a La Cumbrecita y Villa General Belgrano",
      palette: {
        base: "#203b2b",
        accent: "#ecf93e",
        glow: "rgba(120, 214, 128, 0.34)",
        contrast: "#f2f6ee",
      },
    },
    seoTitle: "La Cumbrecita con Villa General Belgrano | Excursion full day",
    seoDescription:
      "Vive La Cumbrecita con Villa General Belgrano en una excursion full day desde Carlos Paz: senderos, cascada, degustacion y puerta a puerta.",
    whatsappMessage:
      "Hola! Quiero reservar la excursion a La Cumbrecita con Villa General Belgrano. Me cuentan disponibilidad y como es el recorrido?",
  },
  {
    slug: "altas-cumbres-tuneles",
    ...buildExcursionImageSet("altas-cumbres-tuneles"),
    title: "Excursion Altas Cumbres con Los Tuneles",
    shortTitle: "Altas Cumbres con Los Tuneles",
    editorialTitle: "La ruta se afina y de golpe aparece la puerta del cielo.",
    teaser:
      "La salida de mayor impacto visual: 1450 msnm, quebradas, desiertos de piedra, tuneles y pueblos del oeste cordobes.",
    summary:
      "Un recorrido de dia completo por uno de los paisajes mas imponentes de Cordoba, con hitos naturales y culturales que cambian de escala a cada tramo.",
    category: "excursion",
    rhythm: "dia-completo",
    duration: "7:00 a 19:00 hs aprox.",
    departure: "Salida desde las 7:00 hs",
    availability: "Temporada regular",
    location: "Camino de las Altas Cumbres · Taninga · Mina Clavero · Cura Brochero",
    badge: "Mas pedida",
    featuredHome: true,
    featuredCollection: true,
    heroKicker: "Paisaje iconico",
    manifest:
      "No es una excursion para tachar un lugar. Es para sentir escala, altura y ese momento exacto en el que Cordoba se vuelve cinematografica.",
    includes: [
      "Camino de las Altas Cumbres hasta 1450 msnm",
      "Quebrada del Batan y Desierto de Piedras",
      "Lagrima del Indio y Parque Nacional Chancani",
      "Quebrada La Mermela con cruce de cinco tuneles",
      "Visita a Mina Clavero",
      "Visita a Cura Brochero",
      "Servicio puerta a puerta desde tu hotel",
    ],
    optional: ["Almuerzo en restaurante de campo en Taninga"],
    notes: [
      "Regreso estimado 19:00 hs.",
      "El tramo de tuneles y precipicios es uno de los puntos mas buscados de la provincia.",
    ],
    highlights: [
      "Vistas de gran altura y magnitud",
      "Cinco tuneles en un tramo inolvidable",
      "Cruza paisaje, historia y cultura local",
    ],
    itinerary: [
      {
        title: "Ascenso por Altas Cumbres",
        detail: "Subida progresiva hasta los 1450 msnm con paradas de lectura del paisaje.",
      },
      {
        title: "Quebradas y tuneles",
        detail: "Paso por Quebrada del Batan, Desierto de Piedras y luego la Quebrada La Mermela con cinco tuneles.",
      },
      {
        title: "Oeste cordobes",
        detail: "Tiempo para almuerzo opcional en Taninga y visitas a Mina Clavero y Cura Brochero.",
      },
    ],
    usefulInfo: [
      { label: "Ideal para", value: "Quien busca el paisaje mas potente de la provincia" },
      { label: "Salida", value: "7:00 hs aprox." },
      { label: "Regreso", value: "19:00 hs aprox." },
    ],
    relatedSlugs: ["cascada-escondida", "valle-de-punilla", "la-cumbrecita-villa-general-belgrano"],
    visual: {
      eyebrow: "1450 msnm",
      scene: "Cornisas, tuneles y horizonte abierto",
      alt: "Placeholder editorial de la excursion Altas Cumbres con Los Tuneles",
      palette: {
        base: "#241d3f",
        accent: "#fccb3e",
        glow: "rgba(156, 143, 255, 0.34)",
        contrast: "#f5f1ff",
      },
    },
    seoTitle: "Altas Cumbres con Los Tuneles | Excursion desde Carlos Paz",
    seoDescription:
      "Descubre Altas Cumbres con Los Tuneles desde Carlos Paz. Una excursion full day con vistas imponentes, Mina Clavero y Cura Brochero.",
    whatsappMessage:
      "Hola! Quiero saber disponibilidad para Altas Cumbres con Los Tuneles. Me cuentan que incluye y si hay almuerzo opcional?",
  },
  {
    slug: "cascada-escondida",
    ...buildExcursionImageSet("cascada-escondida"),
    title: "Excursion Cascada Escondida",
    shortTitle: "Cascada Escondida",
    editorialTitle: "Granito, agua fria y una aventura que arranca sin gritar.",
    teaser:
      "Turismo aventura en Altas Cumbres con caminata regenerativa, kayak, cabalgata y tiempo libre en balneario.",
    summary:
      "Una salida para quienes quieren naturaleza activa de baja dificultad, con una cascada dentro de una caverna natural de granito y actividades que suman experiencia sin volverla extrema.",
    category: "excursion",
    rhythm: "aventura",
    duration: "8:30 a 19:00 hs aprox.",
    departure: "Salida desde las 8:30 hs",
    availability: "Solo enero y febrero",
    location: "Altas Cumbres · Quebrada del Batan",
    badge: "Temporada alta",
    featuredHome: true,
    featuredCollection: false,
    heroKicker: "Turismo aventura",
    manifest:
      "Para el que quiere meterse un poco mas en la sierra, caminar, moverse y volver con una historia que no suena a plan armado de memoria.",
    includes: [
      "Acceso a Cascada Escondida en las Altas Cumbres",
      "Caminata regenerativa",
      "Kayak",
      "Cabalgata",
      "Tiempo libre para disfrutar el balneario",
      "Servicio puerta a puerta desde tu hotel",
    ],
    optional: [],
    notes: [
      "Disponible solo en enero y febrero.",
      "Trekking de baja dificultad, ideal para familias activas.",
      "Regreso estimado 19:00 hs.",
    ],
    highlights: [
      "Salto de agua dentro de una caverna natural",
      "Actividades activas sin exigencia extrema",
      "Balneario y olla de agua cristalina",
    ],
    itinerary: [
      {
        title: "Salida hacia Altas Cumbres",
        detail: "Traslado desde Carlos Paz hacia la Quebrada del Batan.",
      },
      {
        title: "Tramo de aventura",
        detail: "Caminata regenerativa y acceso a la cascada oculta entre granito.",
      },
      {
        title: "Tiempo activo y relax",
        detail: "Kayak, cabalgata y rato libre para disfrutar el balneario antes del regreso.",
      },
    ],
    usefulInfo: [
      { label: "Ideal para", value: "Familias activas y viajeros que buscan naturaleza real" },
      { label: "Temporada", value: "Disponible solo en enero y febrero" },
      { label: "Dificultad", value: "Baja" },
    ],
    relatedSlugs: ["altas-cumbres-tuneles", "la-cumbrecita-villa-general-belgrano", "valle-de-punilla"],
    visual: {
      eyebrow: "Caverna natural",
      scene: "Granito oscuro, espejo de agua y vegetacion cerrada",
      alt: "Placeholder editorial de la excursion Cascada Escondida en Altas Cumbres",
      palette: {
        base: "#15362a",
        accent: "#ecf93e",
        glow: "rgba(72, 212, 168, 0.34)",
        contrast: "#eefaf4",
      },
    },
    seoTitle: "Cascada Escondida en Altas Cumbres | Turismo aventura",
    seoDescription:
      "Vive Cascada Escondida desde Carlos Paz con caminata, kayak, cabalgata y balneario. Disponible solo en verano con Cari Turismo.",
    whatsappMessage:
      "Hola! Quiero info de Cascada Escondida. Me cuentan disponibilidad, nivel de dificultad y que actividades incluye?",
  },
  {
    slug: "traslados-especiales",
    ...buildExcursionImageSet("traslados-especiales"),
    title: "Traslados Especiales",
    shortTitle: "Traslados Especiales",
    editorialTitle: "La logistica tambien puede sentirse premium.",
    teaser:
      "Vehiculos para viajes turisticos, eventos, movimientos corporativos o recorridos personalizados con atencion profesional y puntualidad.",
    summary:
      "Una capa de servicio flexible para resolver traslados turisticos o especiales con conocimiento local, comodidad y lectura real de cada necesidad.",
    category: "traslado",
    rhythm: "a-medida",
    duration: "Segun plan",
    departure: "Coordinacion a medida",
    availability: "Todo el ano",
    location: "Villa Carlos Paz y alrededores",
    badge: "Personalizado",
    featuredHome: true,
    featuredCollection: true,
    heroKicker: "Logistica local",
    manifest:
      "Moverse bien tambien construye viaje. Este servicio esta para ordenar horarios, grupos y recorridos sin improvisacion.",
    includes: [
      "Gran variedad de vehiculos segun necesidad",
      "Traslados turisticos, corporativos y para eventos",
      "Recorridos personalizados",
      "Atencion profesional con conocimiento local",
      "Servicio comodo, seguro y puntual",
    ],
    optional: [
      "Armado especial para grupos, bodas, eventos o combinaciones con excursiones",
      "Beneficios exclusivos en actividades de la ciudad al contratar excursiones de medio dia o dia completo",
    ],
    notes: [
      "Se cotiza segun distancia, vehiculo y cantidad de pasajeros.",
      "Muy util para viajeros que llegan con agenda o evento cerrado.",
    ],
    highlights: [
      "Se adapta al viaje y no al reves",
      "Conocimiento local para resolver mejor",
      "Ideal para grupos, eventos y movimientos complejos",
    ],
    itinerary: [
      {
        title: "Brief inicial",
        detail: "Definicion de horarios, cantidad de pasajeros, equipaje y puntos clave.",
      },
      {
        title: "Curaduria de vehiculo",
        detail: "Asignacion del tipo de movilidad mas conveniente para el plan.",
      },
      {
        title: "Ejecucion puntual",
        detail: "Seguimiento de la operacion para que el traslado se sienta simple.",
      },
    ],
    usefulInfo: [
      { label: "Ideal para", value: "Eventos, grupos, empresas y planes personalizados" },
      { label: "Modalidad", value: "A medida" },
      { label: "Valor", value: "Comodidad, seguridad y conocimiento local" },
    ],
    relatedSlugs: ["city-bus-turistico-grupos", "city-tour-lacustre", "altas-cumbres-tuneles"],
    visual: {
      eyebrow: "Movilidad",
      scene: "Ruta nocturna, luces bajas y servicio puerta a puerta",
      alt: "Placeholder editorial de Traslados Especiales de Cari Turismo",
      palette: {
        base: "#1f2937",
        accent: "#fccb3e",
        glow: "rgba(4, 139, 114, 0.34)",
        contrast: "#f3f7fa",
      },
    },
    seoTitle: "Traslados especiales en Carlos Paz | Cari Turismo",
    seoDescription:
      "Coordina traslados especiales en Carlos Paz para turismo, eventos o grupos. Servicio comodo, seguro y a medida con conocimiento local.",
    whatsappMessage:
      "Hola! Necesito cotizar un traslado especial en Carlos Paz. Les paso cantidad de personas, recorrido y horario?",
  },
];

export function getExcursionBySlug(slug: string) {
  return excursions.find((excursion) => excursion.slug === slug);
}

export function getExcursionsByCategory(category?: string) {
  if (!category || category === "all") {
    return excursions;
  }

  return excursions.filter((excursion) => excursion.category === category);
}

export function getExcursionsByRhythm(rhythm?: string) {
  if (!rhythm || rhythm === "all") {
    return excursions;
  }

  return excursions.filter((excursion) => excursion.rhythm === rhythm);
}

export function getFilteredExcursions(category?: string, rhythm?: string) {
  return excursions.filter((excursion) => {
    const matchesCategory = !category || category === "all" || excursion.category === category;
    const matchesRhythm = !rhythm || rhythm === "all" || excursion.rhythm === rhythm;

    return matchesCategory && matchesRhythm;
  });
}

export function getFeaturedExcursions() {
  return excursions.filter((excursion) => excursion.featuredHome);
}

export function getCollectionHighlights() {
  return excursions.filter((excursion) => excursion.featuredCollection);
}

export function getRelatedExcursions(slugs: string[]) {
  return slugs
    .map((slug) => getExcursionBySlug(slug))
    .filter((excursion): excursion is Excursion => Boolean(excursion));
}

export const excursionCategoryFilters = [
  { value: "all", label: "Todo el mapa" },
  { value: "excursion", label: "Excursiones" },
  { value: "atraccion", label: "Atracciones" },
  { value: "traslado", label: "Traslados" },
] as const;

export const excursionRhythmFilters = [
  { value: "all", label: "Todos los ritmos" },
  { value: "ciudad", label: "Ciudad" },
  { value: "medio-dia", label: "Medio dia" },
  { value: "dia-completo", label: "Dia completo" },
  { value: "aventura", label: "Aventura" },
  { value: "grupos", label: "Grupos" },
  { value: "a-medida", label: "A medida" },
] as const;

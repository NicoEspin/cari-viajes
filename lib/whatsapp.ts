const DEFAULT_WHATSAPP_NUMBER = "5493541655499";
const DEFAULT_GENERIC_MESSAGE =
  "Hola! Estoy viendo la web de Cari Turismo y quiero consultar por excursiones, city tours o traslados en Carlos Paz. Me pueden asesorar?";

const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? DEFAULT_WHATSAPP_NUMBER;

const WHATSAPP_NUMBER = rawNumber.replace(/\D/g, "");

const excursionMessagesBySlug: Record<string, string> = {
  "city-tour-lacustre":
    "Hola! Quiero info y disponibilidad del City Tour Lacustre. Me cuentan horarios, reserva y si tienen traslado?",
  "bar-de-hielo":
    "Hola! Quiero reservar Bar de Hielo + Mundo Irreal. Me cuentan horarios, que incluye y si tienen traslado?",
  aerosilla:
    "Hola! Me interesa la Aerosilla. Quiero saber horarios, compra anticipada y si tienen traslado desde el hotel.",
  "city-bus-turistico-grupos":
    "Hola! Necesito info para organizar el City Bus Turistico para un grupo. Me cuentan disponibilidad, minimo y como funciona el puerta a puerta?",
  "valle-de-punilla":
    "Hola! Quiero saber disponibilidad de la excursion Valle de Punilla. Me cuentan que incluye y como es el puerta a puerta?",
  "dique-los-molinos-villa-general-belgrano":
    "Hola! Quiero info de la excursion Dique Los Molinos con Villa General Belgrano. Me cuentan disponibilidad y que incluye?",
  "la-cumbrecita-villa-general-belgrano":
    "Hola! Quiero reservar la excursion a La Cumbrecita con Villa General Belgrano. Me cuentan disponibilidad y como es el recorrido?",
  "altas-cumbres-tuneles":
    "Hola! Quiero saber disponibilidad para Altas Cumbres con Los Tuneles. Me cuentan que incluye y si hay almuerzo opcional?",
  "cascada-escondida":
    "Hola! Quiero info de Cascada Escondida. Me cuentan disponibilidad, nivel de dificultad y que actividades incluye?",
  "traslados-especiales":
    "Hola! Necesito cotizar un traslado especial en Carlos Paz. Les paso cantidad de personas, recorrido y horario?",
};

export function generateWhatsAppLink(message = DEFAULT_GENERIC_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  fallback: DEFAULT_GENERIC_MESSAGE,
  hero:
    "Hola! Estoy planeando mi viaje a Carlos Paz y quiero ver que excursiones o traslados me convienen. Me asesoran?",
  nav:
    "Hola! Quiero organizar mi plan en Carlos Paz con Cari Turismo. Me recomiendan excursiones, city tours o traslados?",
  cta: "Hola! Quiero armar mi plan en Carlos Paz. Me asesoran con excursiones, city tours o traslados?",
  fab: DEFAULT_GENERIC_MESSAGE,
  faq: "Hola! Estoy viendo la web de Cari Turismo y tengo una consulta. Me pueden ayudar?",
  byExperience: (experienceName: string) =>
    `Hola! Estoy viendo ${experienceName} y quiero consultar disponibilidad, que incluye y el valor. Me asesoran?`,
};

export function getExcursionWhatsAppMessage(excursion: {
  slug: string;
  title: string;
  shortTitle: string;
}): string {
  return excursionMessagesBySlug[excursion.slug] ??
    whatsappMessages.byExperience(excursion.shortTitle || excursion.title);
}

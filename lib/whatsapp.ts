const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5490000000000";

const WHATSAPP_NUMBER = rawNumber.replace(/\D/g, "");

export function generateWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  hero: "Hola! Estoy en Carlos Paz (o estoy planeando ir) y quiero conocer las excursiones disponibles. Me pueden asesorar?",
  cta: "Hola! Quiero armar un plan de excursiones en Carlos Paz. Me pueden asesorar?",
  fab: "Hola! Vi su sitio y me interesa conocer las excursiones disponibles. Me pueden asesorar?",
  faq: "Hola! Tengo una pregunta sobre las excursiones. Me pueden ayudar?",
  byExperience: (experienceName: string) =>
    `Hola! Vi la excursion ${experienceName} en su sitio y me interesa. Hay disponibilidad? Que incluye?`,
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Como reservo una excursion?",
    answer:
      "Por WhatsApp, directamente. Te contamos que hay disponible para tus fechas y lo armamos desde ahi, sin formularios raros.",
  },
  {
    question: "Necesito pagar por adelantado?",
    answer:
      "Depende de la excursion y del momento. Te lo aclaramos cuando consultes para que decidas con total tranquilidad.",
  },
  {
    question: "Las excursiones salen todos los dias?",
    answer:
      "La mayoria si, sobre todo en temporada. Si hay excepciones, te avisamos antes de confirmar para que no pierdas tiempo.",
  },
  {
    question: "Que pasa si llueve o hay mal tiempo?",
    answer:
      "Evaluamos cada caso. Si el clima no acompana, buscamos alternativa o reprogramamos y siempre te mantenemos al tanto.",
  },
  {
    question: "Pueden armar algo para grupo o evento?",
    answer:
      "Si, es uno de nuestros fuertes. Escribinos con cantidad de personas y tipo de plan, y te proponemos opciones a medida.",
  },
];

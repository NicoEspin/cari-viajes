import {
  excursionCategoryLabels,
  excursions,
  getFeaturedExcursions,
  type Excursion,
  type ExcursionCategory,
} from "@/content/excursions";

export type Experience = {
  slug: string;
  title: string;
  editorialTitle: string;
  description: string;
  category: "Excursion" | "Atractivo" | "Traslado";
  duration: string;
  badge?: string;
  featured: boolean;
  whatsappMessage: string;
};

function toExperience(excursion: Excursion): Experience {
  const legacyCategoryMap: Record<ExcursionCategory, Experience["category"]> = {
    atraccion: "Atractivo",
    excursion: "Excursion",
    traslado: "Traslado",
  };

  return {
    slug: excursion.slug,
    title: excursion.shortTitle,
    editorialTitle: excursion.editorialTitle,
    description: excursion.teaser,
    category: legacyCategoryMap[excursion.category] ?? excursionCategoryLabels[excursion.category],
    duration: excursion.duration,
    badge: excursion.badge,
    featured: excursion.featuredHome,
    whatsappMessage: excursion.whatsappMessage,
  };
}

export const experiences = getFeaturedExcursions().map(toExperience);

export const allExperiences = excursions.map(toExperience);

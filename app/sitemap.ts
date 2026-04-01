import type { MetadataRoute } from "next";
import { excursions } from "@/content/excursions";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://cariturismo.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://cariturismo.com/excursiones",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...excursions.map((excursion) => ({
      url: `https://cariturismo.com/excursiones/${excursion.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}

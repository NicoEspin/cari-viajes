import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ExcursionsIndexPage } from "@/components/excursions/ExcursionsIndexPage";
import { WhatsAppFab } from "@/components/ui/WhatsAppFab";
import {
  excursionCategoryFilters,
  excursionRhythmFilters,
  excursions,
} from "@/content/excursions";
import { buildMetadata, siteUrl } from "@/lib/metadata";

type SearchParams = Promise<{
  categoria?: string;
  ritmo?: string;
}>;

function sanitizeFilter(value: string | undefined, allowed: readonly { value: string }[]) {
  if (!value) {
    return "all";
  }

  return allowed.some((entry) => entry.value === value) ? value : "all";
}

export const metadata = buildMetadata({
  title: "Excursiones en Carlos Paz | Atractivos, full day y traslados",
  description:
    "Explora excursiones en Carlos Paz, atractivos en la ciudad y traslados especiales con una experiencia editorial pensada para convertir por WhatsApp.",
  path: "/excursiones",
});

export default async function ExcursionesPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const category = sanitizeFilter(params.categoria, excursionCategoryFilters);
  const rhythm = sanitizeFilter(params.ritmo, excursionRhythmFilters);

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: excursions.map((excursion, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: excursion.shortTitle,
      url: `${siteUrl}/excursiones/${excursion.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Navbar />
      <ExcursionsIndexPage category={category} rhythm={rhythm} />
      <Footer />
      <WhatsAppFab />
    </>
  );
}

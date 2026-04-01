import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExcursionDetailPage } from "@/components/excursions/ExcursionDetailPage";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppFab } from "@/components/ui/WhatsAppFab";
import { excursions, getExcursionBySlug } from "@/content/excursions";
import { buildMetadata, siteUrl } from "@/lib/metadata";

type Params = Promise<{ id: string }>;

export async function generateStaticParams() {
  return excursions.map((excursion) => ({ id: excursion.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { id } = await params;
  const excursion = getExcursionBySlug(id);

  if (!excursion) {
    return buildMetadata({
      title: "Excursion no encontrada | Cari Turismo",
      description: "La excursion solicitada no existe o fue removida.",
      path: "/excursiones",
    });
  }

  return buildMetadata({
    title: excursion.seoTitle,
    description: excursion.seoDescription,
    path: `/excursiones/${excursion.slug}`,
  });
}

export default async function ExcursionDetailRoute({ params }: { params: Params }) {
  const { id } = await params;
  const excursion = getExcursionBySlug(id);

  if (!excursion) {
    notFound();
  }

  const detailSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: excursion.shortTitle,
    description: excursion.summary,
    touristType: excursion.category,
    itinerary: excursion.itinerary.map((item) => item.title),
    provider: {
      "@type": "TravelAgency",
      name: "Cari Turismo",
      url: siteUrl,
    },
    url: `${siteUrl}/excursiones/${excursion.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(detailSchema) }}
      />
      <Navbar />
      <ExcursionDetailPage excursion={excursion} />
      <Footer />
      <WhatsAppFab />
    </>
  );
}

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { LandingMotion } from "@/components/motion/LandingMotion";
import { ExperiencesSection } from "@/components/sections/ExperiencesSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { ValuePropSection } from "@/components/sections/ValuePropSection";
import { WhatsAppCtaSection } from "@/components/sections/WhatsAppCtaSection";
import { WhatsAppFab } from "@/components/ui/WhatsAppFab";
import { faqItems } from "@/content/faq";

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "TouristInformationCenter",
    name: "Cari Turismo",
    url: "https://cariturismo.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Villa Carlos Paz",
      addressRegion: "Cordoba",
      addressCountry: "AR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: "Spanish",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main id="landing-root">
        <HeroSection />
        <ValuePropSection />
        <ExperiencesSection />
        <GallerySection />
        <SocialProofSection />
        <WhatsAppCtaSection />
        <InstagramSection />
        <FaqSection />
      </main>
      <Footer />
      <WhatsAppFab />
      <LandingMotion />
    </>
  );
}

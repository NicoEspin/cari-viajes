import type { StaticImageData } from "next/image";
import aerosillaHero from "@/app/assets/aerosilla/aerosilla-hero.webp";
import altasCumbresHero from "@/app/assets/altas-cumbres/altascumbres-hero.webp";
import cascadaHero from "@/app/assets/cascada-oculta/cascada-hero.webp";
import cityBusHero from "@/app/assets/city-bus/city-bus-hero.webp";
import cumbrecitaHero from "@/app/assets/cumbrecita/cumbrecita-hero.webp";
import icebarHero from "@/app/assets/icebar/icebar-hero.webp";
import lacustreHero from "@/app/assets/lacustre/lacustre-hero.webp";
import excursionesLogo from "@/app/assets/logo-excurciones.jpg";
import vallePunillaHero from "@/app/assets/valle-punilla/valle-punilla-hero.webp";
import vgralbelgranoHero from "@/app/assets/vgralbelgrano/vgralbelgrano-hero.webp";

export type ExcursionAssetConfig = {
  image: StaticImageData;
  objectPosition?: string;
};

const excursionAssetsBySlug: Partial<Record<string, ExcursionAssetConfig>> = {
  aerosilla: {
    image: aerosillaHero,
    objectPosition: "center center",
  },
  "altas-cumbres-tuneles": {
    image: altasCumbresHero,
    objectPosition: "center center",
  },
  "bar-de-hielo": {
    image: icebarHero,
    objectPosition: "center 42%",
  },
  "cascada-escondida": {
    image: cascadaHero,
    objectPosition: "center center",
  },
  "city-bus-turistico-grupos": {
    image: cityBusHero,
    objectPosition: "center 45%",
  },
  "city-tour-lacustre": {
    image: lacustreHero,
    objectPosition: "center 38%",
  },
  "dique-los-molinos-villa-general-belgrano": {
    image: vgralbelgranoHero,
    objectPosition: "center center",
  },
  "la-cumbrecita-villa-general-belgrano": {
    image: cumbrecitaHero,
    objectPosition: "center center",
  },
  "traslados-especiales": {
    image: excursionesLogo,
    objectPosition: "center center",
  },
  "valle-de-punilla": {
    image: vallePunillaHero,
    objectPosition: "center 44%",
  },
};

export function getExcursionAssetBySlug(slug: string) {
  return excursionAssetsBySlug[slug];
}

export function getExcursionHeroImageSrc(slug: string) {
  return excursionAssetsBySlug[slug]?.image.src;
}

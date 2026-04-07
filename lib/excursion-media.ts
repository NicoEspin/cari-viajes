import type { StaticImageData } from "next/image";
import sieteCascadasGallery1 from "@/app/assets/7-cascadas/gallery-1.webp";
import sieteCascadasGallery2 from "@/app/assets/7-cascadas/gallery-2.webp";
import sieteCascadasGallery3 from "@/app/assets/7-cascadas/gallery-3.webp";
import sieteCascadasGallery4 from "@/app/assets/7-cascadas/gallery-4.webp";
import sieteCascadasHero from "@/app/assets/7-cascadas/7-cascadas-hero.webp";
import aerosillaGallery1 from "@/app/assets/aerosilla/gallery-1.webp";
import aerosillaGallery2 from "@/app/assets/aerosilla/gallery-2.webp";
import aerosillaGallery3 from "@/app/assets/aerosilla/gallery-3.webp";
import aerosillaHero from "@/app/assets/aerosilla/aerosilla-hero.webp";
import altasCumbresGallery1 from "@/app/assets/altas-cumbres/gallery-1.webp";
import altasCumbresGallery2 from "@/app/assets/altas-cumbres/gallery-2.webp";
import altasCumbresGallery3 from "@/app/assets/altas-cumbres/gallery-3.webp";
import altasCumbresGallery4 from "@/app/assets/altas-cumbres/gallery-4.webp";
import altasCumbresHero from "@/app/assets/altas-cumbres/altascumbres-hero.webp";
import cascadaGallery1 from "@/app/assets/cascada-oculta/gallery-1.webp";
import cascadaGallery2 from "@/app/assets/cascada-oculta/gallery-2.webp";
import cascadaGallery3 from "@/app/assets/cascada-oculta/gallery-3.webp";
import cascadaGallery4 from "@/app/assets/cascada-oculta/gallery-4.webp";
import cascadaHero from "@/app/assets/cascada-oculta/cascada-hero.webp";
import cityBusGallery1 from "@/app/assets/city-bus/gallery-1.webp";
import cityBusGallery2 from "@/app/assets/city-bus/gallery-2.webp";
import cityBusGallery3 from "@/app/assets/city-bus/gallery-3.webp";
import cityBusGallery4 from "@/app/assets/city-bus/gallery-4.webp";
import cityBusHero from "@/app/assets/city-bus/city-bus-hero.webp";
import cumbrecitaGallery1 from "@/app/assets/cumbrecita/gallery-1.webp";
import cumbrecitaGallery2 from "@/app/assets/cumbrecita/gallery-2.webp";
import cumbrecitaGallery3 from "@/app/assets/cumbrecita/gallery-3.webp";
import cumbrecitaGallery4 from "@/app/assets/cumbrecita/gallery-4.webp";
import cumbrecitaHero from "@/app/assets/cumbrecita/cumbrecita-hero.webp";
import genericExcursionsHero from "@/app/assets/excurciones-hero.webp";
import icebarGallery1 from "@/app/assets/icebar/gallery-1.webp";
import icebarGallery2 from "@/app/assets/icebar/gallery-2.webp";
import icebarGallery3 from "@/app/assets/icebar/gallery-3.webp";
import icebarGallery4 from "@/app/assets/icebar/gallery-4.webp";
import icebarHero from "@/app/assets/icebar/icebar-hero.webp";
import lacustreGallery1 from "@/app/assets/lacustre/gallery-1.webp";
import lacustreGallery2 from "@/app/assets/lacustre/gallery-2.webp";
import lacustreGallery4 from "@/app/assets/lacustre/gallery-4.webp";
import lacustreHero from "@/app/assets/lacustre/lacustre-hero.webp";
import excursionesLogo from "@/app/assets/logo-excurciones.jpg";
import vallePunillaGallery1 from "@/app/assets/valle-punilla/gallery-1.webp";
import vallePunillaGallery2 from "@/app/assets/valle-punilla/gallery-2.webp";
import vallePunillaGallery3 from "@/app/assets/valle-punilla/gallery-3.webp";
import vallePunillaGallery4 from "@/app/assets/valle-punilla/gallery-4.webp";
import vallePunillaHero from "@/app/assets/valle-punilla/valle-punilla-hero.webp";
import vgralbelgranoGallery1 from "@/app/assets/vgralbelgrano/gallery-1.webp";
import vgralbelgranoGallery2 from "@/app/assets/vgralbelgrano/gallery-2.webp";
import vgralbelgranoGallery3 from "@/app/assets/vgralbelgrano/gallery-3.webp";
import vgralbelgranoGallery4 from "@/app/assets/vgralbelgrano/gallery-4.webp";
import vgralbelgranoHero from "@/app/assets/vgralbelgrano/vgralbelgrano-hero.webp";

export type ExcursionMediaImage = {
  image: StaticImageData;
  alt: string;
  objectPosition?: string;
};

export type ExcursionMedia = {
  folderKey?: string;
  hero: ExcursionMediaImage;
  gallery: [
    ExcursionMediaImage,
    ExcursionMediaImage,
    ExcursionMediaImage,
    ExcursionMediaImage,
  ];
  gallerySource: "real" | "partial-fallback" | "fallback";
};

function mediaImage(image: StaticImageData, alt: string, objectPosition?: string): ExcursionMediaImage {
  return { image, alt, objectPosition };
}

export const excursionFolderKeyBySlug = {
  "7-cascadas": "7-cascadas",
  aerosilla: "aerosilla",
  "altas-cumbres-tuneles": "altas-cumbres",
  "bar-de-hielo": "icebar",
  "cascada-escondida": "cascada-oculta",
  "city-bus-turistico-grupos": "city-bus",
  "city-tour-lacustre": "lacustre",
  "dique-los-molinos-villa-general-belgrano": "vgralbelgrano",
  "la-cumbrecita-villa-general-belgrano": "cumbrecita",
  "valle-de-punilla": "valle-punilla",
} as const satisfies Partial<Record<string, string>>;

const excursionMediaBySlug: Record<string, ExcursionMedia> = {
  "7-cascadas": {
    folderKey: excursionFolderKeyBySlug["7-cascadas"],
    hero: mediaImage(sieteCascadasHero, "Piletones y cascadas de 7 Cascadas en La Falda entre piedra y vegetacion", "center 46%"),
    gallerySource: "real",
    gallery: [
      mediaImage(sieteCascadasGallery1, "Vista general de 7 Cascadas en La Falda con agua serrana y rocas claras", "center center"),
      mediaImage(sieteCascadasGallery2, "Recorrido por 7 Cascadas con piletones naturales y entorno verde", "center 44%"),
      mediaImage(sieteCascadasGallery3, "Sector de cascadas en La Falda con caida de agua y piedra serrana", "center center"),
      mediaImage(sieteCascadasGallery4, "Postal de 7 Cascadas con agua en movimiento y paisaje serrano abierto", "center 42%"),
    ],
  },
  aerosilla: {
    folderKey: excursionFolderKeyBySlug.aerosilla,
    hero: mediaImage(aerosillaHero, "Cabinas de la Aerosilla con vista abierta sobre Villa Carlos Paz", "center center"),
    gallerySource: "partial-fallback",
    gallery: [
      mediaImage(aerosillaGallery1, "Vista panoramica desde la Aerosilla hacia la ciudad y el valle", "center center"),
      mediaImage(aerosillaGallery2, "Recorrido de aerosillas entre vegetacion serrana y cielo despejado", "center center"),
      mediaImage(aerosillaGallery3, "Mirador de la Aerosilla con perfiles serranos y trama urbana", "center center"),
      mediaImage(aerosillaHero, "Ascenso en la Aerosilla con la ciudad extendida al fondo", "center center"),
    ],
  },
  "altas-cumbres-tuneles": {
    folderKey: excursionFolderKeyBySlug["altas-cumbres-tuneles"],
    hero: mediaImage(altasCumbresHero, "Camino de Altas Cumbres con relieve montanoso y horizonte abierto", "center center"),
    gallerySource: "real",
    gallery: [
      mediaImage(altasCumbresGallery1, "Ruta escenica en Altas Cumbres con curvas y montanas profundas", "center center"),
      mediaImage(altasCumbresGallery2, "Tramo serrano de Altas Cumbres con vegetacion baja y perspectiva larga", "center center"),
      mediaImage(altasCumbresGallery3, "Paisaje de altura en Altas Cumbres con capas de montana", "center center"),
      mediaImage(altasCumbresGallery4, "Vista amplia del corredor de Los Tuneles en la sierra cordobesa", "center center"),
    ],
  },
  "bar-de-hielo": {
    folderKey: excursionFolderKeyBySlug["bar-de-hielo"],
    hero: mediaImage(icebarHero, "Interior del Bar de Hielo con luces frias y superficies congeladas", "center 42%"),
    gallerySource: "real",
    gallery: [
      mediaImage(icebarGallery1, "Sector principal del Bar de Hielo con barra y esculturas congeladas", "center center"),
      mediaImage(icebarGallery2, "Ambientacion fria del Bar de Hielo con detalles luminosos y texturas heladas", "center center"),
      mediaImage(icebarGallery3, "Escena interior del Bar de Hielo pensada para fotos y tragos", "center center"),
      mediaImage(icebarGallery4, "Recorrido inmersivo del Bar de Hielo con contrastes azules y blancos", "center center"),
    ],
  },
  "cascada-escondida": {
    folderKey: excursionFolderKeyBySlug["cascada-escondida"],
    hero: mediaImage(cascadaHero, "Cascada Escondida entre granito y vegetacion serrana", "center center"),
    gallerySource: "real",
    gallery: [
      mediaImage(cascadaGallery1, "Tramo natural hacia Cascada Escondida con relieve de roca y agua", "center center"),
      mediaImage(cascadaGallery2, "Paisaje activo de Cascada Escondida con agua clara y piedra serrana", "center center"),
      mediaImage(cascadaGallery3, "Escena de aventura suave en Cascada Escondida dentro de Altas Cumbres", "center center"),
      mediaImage(cascadaGallery4, "Entorno natural de Cascada Escondida con tonos verdes y granito", "center center"),
    ],
  },
  "city-bus-turistico-grupos": {
    folderKey: excursionFolderKeyBySlug["city-bus-turistico-grupos"],
    hero: mediaImage(cityBusHero, "City Bus turistico recorriendo Carlos Paz para grupos", "center 45%"),
    gallerySource: "real",
    gallery: [
      mediaImage(cityBusGallery1, "Bus turistico para grupos en un recorrido urbano por Carlos Paz", "center center"),
      mediaImage(cityBusGallery2, "Vista lateral del City Bus turistico con paisaje urbano local", "center center"),
      mediaImage(cityBusGallery3, "Experiencia de grupo en City Bus con recorrido guiado por la ciudad", "center center"),
      mediaImage(cityBusGallery4, "Escena del City Bus en salida grupal con foco en comodidad y logistica", "center center"),
    ],
  },
  "city-tour-lacustre": {
    folderKey: excursionFolderKeyBySlug["city-tour-lacustre"],
    hero: mediaImage(lacustreHero, "Embarcacion del City Tour Lacustre navegando sobre el lago San Roque", "center 38%"),
    gallerySource: "partial-fallback",
    gallery: [
      mediaImage(lacustreGallery1, "Cubierta del paseo lacustre con vista al lago San Roque", "center center"),
      mediaImage(lacustreGallery2, "Recorrido del City Tour Lacustre con agua calma y sierra al fondo", "center center"),
      mediaImage(lacustreGallery4, "Momento del paseo lacustre con reflejos dorados sobre el lago", "center center"),
      mediaImage(lacustreHero, "Salida lacustre en Carlos Paz con protagonista sobre el lago San Roque", "center 38%"),
    ],
  },
  "dique-los-molinos-villa-general-belgrano": {
    folderKey: excursionFolderKeyBySlug["dique-los-molinos-villa-general-belgrano"],
    hero: mediaImage(vgralbelgranoHero, "Paisaje de Villa General Belgrano con atmosfera serrana y aire alpino", "center center"),
    gallerySource: "real",
    gallery: [
      mediaImage(vgralbelgranoGallery1, "Recorrido por Villa General Belgrano con arquitectura de influencia centroeuropea", "center center"),
      mediaImage(vgralbelgranoGallery2, "Escena de Villa General Belgrano entre avenida principal y entorno serrano", "center center"),
      mediaImage(vgralbelgranoGallery3, "Postal de Villa General Belgrano con detalles de paseo y pueblo", "center center"),
      mediaImage(vgralbelgranoGallery4, "Paisaje complementario de la salida al Dique Los Molinos y Villa General Belgrano", "center center"),
    ],
  },
  "la-cumbrecita-villa-general-belgrano": {
    folderKey: excursionFolderKeyBySlug["la-cumbrecita-villa-general-belgrano"],
    hero: mediaImage(cumbrecitaHero, "Sendero de La Cumbrecita con bosque, rio y atmosfera peatonal", "center center"),
    gallerySource: "real",
    gallery: [
      mediaImage(cumbrecitaGallery1, "Camino peatonal de La Cumbrecita rodeado de bosque y madera", "center center"),
      mediaImage(cumbrecitaGallery2, "Escena de La Cumbrecita con vegetacion serrana y ritmo de paseo", "center center"),
      mediaImage(cumbrecitaGallery3, "Postal de La Cumbrecita con sendero natural y arquitectura de montana", "center center"),
      mediaImage(cumbrecitaGallery4, "Vista de La Cumbrecita lista para una caminata de dia completo", "center center"),
    ],
  },
  "traslados-especiales": {
    hero: mediaImage(excursionesLogo, "Identidad visual de Cari Turismo para traslados especiales", "center center"),
    gallerySource: "fallback",
    gallery: [
      mediaImage(genericExcursionsHero, "Paisaje editorial de Carlos Paz para presentar traslados especiales de Cari Turismo", "center center"),
      mediaImage(excursionesLogo, "Marca Cari Turismo aplicada al servicio de traslados especiales", "center center"),
      mediaImage(genericExcursionsHero, "Visual de apoyo para traslados especiales con tono turistico premium", "center 32%"),
      mediaImage(excursionesLogo, "Identidad de Cari Turismo como respaldo visual del servicio de traslados", "center center"),
    ],
  },
  "valle-de-punilla": {
    folderKey: excursionFolderKeyBySlug["valle-de-punilla"],
    hero: mediaImage(vallePunillaHero, "Ruta panoramica del Valle de Punilla con paisaje serrano", "center 44%"),
    gallerySource: "real",
    gallery: [
      mediaImage(vallePunillaGallery1, "Paisaje del Valle de Punilla con ruta, sierra y horizonte amplio", "center center"),
      mediaImage(vallePunillaGallery2, "Tramo clasico del Valle de Punilla con relieve ondulado y cielo abierto", "center center"),
      mediaImage(vallePunillaGallery3, "Postal serrana del Valle de Punilla durante una salida de medio dia", "center center"),
      mediaImage(vallePunillaGallery4, "Vista editorial del Valle de Punilla para una excursion desde Carlos Paz", "center center"),
    ],
  },
};

export function getExcursionMediaBySlug(slug: string) {
  return excursionMediaBySlug[slug];
}

export function getExcursionGalleryBySlug(slug: string) {
  return excursionMediaBySlug[slug]?.gallery ?? [];
}

export function getExcursionHeroImageSrc(slug: string) {
  return excursionMediaBySlug[slug]?.hero.image.src;
}

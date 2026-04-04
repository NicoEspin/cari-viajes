import type { StaticImageData } from "next/image";
import { getExcursionMediaBySlug, getExcursionHeroImageSrc } from "@/lib/excursion-media";

export type ExcursionAssetConfig = {
  image: StaticImageData;
  alt: string;
  objectPosition?: string;
};

export function getExcursionAssetBySlug(slug: string): ExcursionAssetConfig | undefined {
  const media = getExcursionMediaBySlug(slug);

  if (!media) {
    return undefined;
  }

  return {
    image: media.hero.image,
    alt: media.hero.alt,
    objectPosition: media.hero.objectPosition,
  };
}

export { getExcursionHeroImageSrc };

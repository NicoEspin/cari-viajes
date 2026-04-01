import type { Metadata } from "next";

const SITE_URL = "https://cariturismo.com";
const DEFAULT_IMAGE = "/logo.png";

type BuildMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

export const siteUrl = SITE_URL;

export function buildMetadata({ title, description, path }: BuildMetadataOptions): Metadata {
  const canonical = path || "/";
  const absoluteUrl = new URL(canonical, SITE_URL).toString();

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl,
      siteName: "Cari Turismo",
      locale: "es_AR",
      type: "website",
      images: [
        {
          url: DEFAULT_IMAGE,
          width: 1147,
          height: 417,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_IMAGE],
    },
  };
}

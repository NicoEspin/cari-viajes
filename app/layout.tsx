import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-display-fallback",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cariturismo.com"),
  title: "Excursiones en Carlos Paz | Cari Turismo · Guia Local",
  description:
    "Excursiones, city tours y traslados en Villa Carlos Paz con atencion personalizada y beneficios exclusivos. Escribinos por WhatsApp.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Excursiones en Carlos Paz | Cari Turismo",
    description:
      "Tu guia local para excursiones, atractivos y traslados en Villa Carlos Paz.",
    url: "https://cariturismo.com",
    siteName: "Cari Turismo",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1147,
        height: 417,
        alt: "Cari Turismo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Excursiones en Carlos Paz | Cari Turismo",
    description:
      "Atencion personalizada para armar tu experiencia en Carlos Paz.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-AR"
      className={`${montserrat.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

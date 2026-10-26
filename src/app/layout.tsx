import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { artist, debutSingle, getStructuredData, siteUrl } from "@/content/site-data";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Asa Cole | Dust and Breath",
    template: "%s | Asa Cole",
  },
  description:
    "Asa Cole is a new artist on Vox Petra. Debut single Dust and Breath is coming soon. Debut album Stones of Help, from 1 Samuel 7:12.",
  keywords: [
    "Asa Cole",
    "Dust and Breath",
    "Stones of Help",
    "Vox Petra",
    "Driven By Heaven",
    "indie folk-pop worship",
    "Christian music",
  ],
  authors: [{ name: artist.name }],
  creator: artist.name,
  publisher: artist.imprint,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: artist.name,
    title: `${artist.name} | ${debutSingle.title}`,
    description: `${debutSingle.title} is the debut single from Asa Cole. ${debutSingle.note}`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${artist.name} | ${debutSingle.title}`,
    description: debutSingle.note,
  },
  robots: { index: true, follow: true },
  category: "music",
};

export const viewport: Viewport = {
  themeColor: "#f6f0e4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full text-ink">
        <JsonLd data={getStructuredData()} />
        {children}
      </body>
    </html>
  );
}

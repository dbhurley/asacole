import type { Metadata, Viewport } from "next";
import { Bagel_Fat_One, Space_Grotesk } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { artist, debutSingle, getStructuredData, siteUrl } from "@/content/site-data";
import "./globals.css";

const bagel = Bagel_Fat_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Asa Cole | Dust and Breath",
    template: "%s | Asa Cole",
  },
  description:
    "Asa Cole is a new artist on Vox Petra. Debut single Dust and Breath is out now, with Hither Road out November 6. Debut album Stones of Help, from 1 Samuel 7:12.",
  keywords: [
    "Asa Cole",
    "Dust and Breath",
    "Stones of Help",
    "Vox Petra",
    "Driven By Heaven",
    "pop worship",
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
    images: [
      {
        url: "/asa-cole-og.jpg",
        width: 1200,
        height: 630,
        alt: "Asa Cole walking across a sunny rooftop in a red bomber jacket",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${artist.name} | ${debutSingle.title}`,
    description: debutSingle.note,
    images: ["/asa-cole-og.jpg"],
  },
  robots: { index: true, follow: true },
  category: "music",
};

export const viewport: Viewport = {
  themeColor: "#ff2d6f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bagel.variable} ${grotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full text-ink">
        <JsonLd data={getStructuredData()} />
        {children}
      </body>
    </html>
  );
}

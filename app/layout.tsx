import type { Metadata } from "next";
import Script from "next/script";
import "../styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PromoBanner from "@/components/layout/PromoBanner";
import PromoPopup from "@/components/layout/PromoPopup";
import Cursor from "@/components/ui/Cursor";
import { COMPANY } from "@/lib/data";

/* ── Rich SEO Metadata ── */
export const metadata: Metadata = {
  metadataBase: new URL("https://zedrolabs.io"),
  title: {
    default: "ZedroLabs: Software Development, Web3 & Virtual Assistants | Pakistan",
    template: "%s | ZedroLabs",
  },
  description:
    "ZedroLabs: Top-rated software development, Web3/blockchain, and virtual assistant services from Rawalpindi, Pakistan. Trusted by 150+ clients worldwide. Dedicated teams from $640/mo.",
  keywords: [
    "software development company Pakistan",
    "web3 blockchain development",
    "virtual assistant services",
    "dedicated development teams",
    "custom software development Rawalpindi",
    "IT services Pakistan",
    "DeFi development",
    "smart contract development",
    "NFT marketplace development",
    "offshore development team Pakistan",
    "staff augmentation",
  ],
  authors: [{ name: "ZedroLabs", url: "https://zedrolabs.io" }],
  creator: "ZedroLabs",
  publisher: "ZedroLabs",
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zedrolabs.io",
    siteName: "ZedroLabs",
    title: "ZedroLabs: Software Development, Web3 & Virtual Assistants",
    description: "Top-rated IT services from Pakistan: custom software, Web3, and VAs. 150+ clients, 98% satisfaction. Get a free quote.",
    images: [{ url: "https://zedrolabs.io/og-image.jpg", width: 1200, height: 630, alt: "ZedroLabs: Software Development, Web3 & Virtual Assistants" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@zedrolabs",
    creator: "@zedrolabs",
    title: "ZedroLabs: Software Development & Web3 | Pakistan",
    description: "Top-rated IT services from Pakistan: custom software, Web3, and VAs.",
    images: ["https://zedrolabs.io/og-image.jpg"],
  },
  alternates: {
    canonical: "https://zedrolabs.io",
  },
  // Once you register the site in Google Search Console, add the token here:
  // verification: { google: "your-token-here" },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  category: "technology",
};

/* ── JSON-LD Structured Data ── */
const SERVICES_FOR_SCHEMA = [
  { name: "AI Forward-Deployed Engineering", anchor: "ai-fde", type: "AI Implementation Engineering" },
  { name: "Custom Software Development", anchor: "custom-software", type: "Software Development" },
  { name: "Web3 & Blockchain Development", anchor: "web3", type: "Blockchain Development" },
  { name: "Medical Billing & Revenue Cycle Management", anchor: "medical-billing", type: "Medical Billing" },
  { name: "Virtual Assistant Services", anchor: "virtual-assistants", type: "Virtual Assistant Services" },
  { name: "Dedicated Development Teams", anchor: "dedicated-teams", type: "Staff Augmentation" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://zedrolabs.io/#org",
      name: "ZedroLabs",
      url: "https://zedrolabs.io",
      logo: "https://zedrolabs.io/android-chrome-512x512.png",
      image: "https://zedrolabs.io/og-image.jpg",
      description: "Software development, Web3/blockchain, and virtual assistant services from Rawalpindi, Pakistan.",
      foundingDate: "2016",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rawalpindi",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
      contactPoint: [
        { "@type": "ContactPoint", telephone: COMPANY.phone, contactType: "sales", availableLanguage: "English" },
        { "@type": "ContactPoint", email: COMPANY.email, contactType: "customer service" },
      ],
      areaServed: "Worldwide",
      knowsAbout: ["Software Development", "Blockchain", "Virtual Assistants", "Medical Billing", "Staff Augmentation"],
      makesOffer: SERVICES_FOR_SCHEMA.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": `https://zedrolabs.io/services#${s.anchor}`,
          name: s.name,
          serviceType: s.type,
          provider: { "@id": "https://zedrolabs.io/#org" },
          areaServed: "Worldwide",
          url: `https://zedrolabs.io/services#${s.anchor}`,
        },
      })),
    },
    {
      "@type": "WebSite",
      "@id": "https://zedrolabs.io/#website",
      url: "https://zedrolabs.io",
      name: "ZedroLabs",
      publisher: { "@id": "https://zedrolabs.io/#org" },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#080c14] text-[#f0f4ff] antialiased">
        <Cursor />
        <PromoBanner />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <PromoPopup />
      </body>
    </html>
  );
}

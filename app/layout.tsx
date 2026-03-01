import type { Metadata } from "next";
import Script from "next/script";
import "../styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Cursor from "@/components/ui/Cursor";
import { COMPANY } from "@/lib/data";

/* ── Rich SEO Metadata ── */
export const metadata: Metadata = {
  metadataBase: new URL("https://zedrolabs.io"),
  title: {
    default: "ZedroLabs — Software Development, Web3, Medical Billing & Virtual Assistants | Pakistan",
    template: "%s | ZedroLabs",
  },
  description:
    "ZedroLabs: Top-rated software development, AI, Web3/blockchain, medical billing & RCM, and virtual assistant services from Rawalpindi, Pakistan. Trusted by 150+ clients worldwide. Dedicated teams from $800/mo.",
  keywords: [
    "software development company Pakistan",
    "web3 blockchain development",
    "medical billing company",
    "RCM services",
    "virtual assistant services",
    "dedicated development teams",
    "AI machine learning development",
    "custom software development Rawalpindi",
    "IT services Pakistan",
    "DeFi development",
    "smart contract development",
    "NFT marketplace development",
    "HIPAA compliant medical billing",
    "healthcare IT services",
    "offshore development team Pakistan",
    "staff augmentation",
    "mobile app development",
    "cloud DevOps services",
    "UI UX design",
    "cybersecurity services",
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
    title: "ZedroLabs — Software Development, Web3, Medical Billing & Virtual Assistants",
    description: "Top-rated IT services from Pakistan — custom software, AI, Web3, medical billing, and VAs. 150+ clients, 98% satisfaction. Get a free quote.",
    images: [{ url: "https://zedrolabs.io/og-image.jpg", width: 1200, height: 630, alt: "ZedroLabs" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@zedrolabs",
    creator: "@zedrolabs",
    title: "ZedroLabs — Software Development, Web3 & Medical Billing | Pakistan",
    description: "Top-rated IT services from Pakistan — custom software, AI, Web3, medical billing, and VAs.",
    images: ["https://zedrolabs.io/og-image.jpg"],
  },
  alternates: {
    canonical: "https://zedrolabs.io",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  category: "technology",
};

/* ── JSON-LD Structured Data ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://zedrolabs.io/#org",
      name: "ZedroLabs",
      url: "https://zedrolabs.io",
      logo: "https://zedrolabs.io/logo.png",
      description: "Software development, Web3/blockchain, medical billing, and virtual assistant services from Rawalpindi, Pakistan.",
      foundingDate: "2016",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rawalpindi",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
      contactPoint: [
        { "@type": "ContactPoint", telephone: "+92-51-XXX-XXXX", contactType: "sales", availableLanguage: "English" },
        { "@type": "ContactPoint", email: "hello@zedrolabs.io", contactType: "customer service" },
      ],
      sameAs: [COMPANY.linkedin, COMPANY.twitter, COMPANY.github],
      areaServed: "Worldwide",
      knowsAbout: ["Software Development", "Blockchain", "Medical Billing", "AI", "Virtual Assistants"],
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
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

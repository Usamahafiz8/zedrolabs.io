import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us: Get a Free Quote in 24 Hours",
  description:
    "Get in touch with ZedroLabs for custom software, Web3, medical billing, virtual assistant, or dedicated team inquiries. Free consultation, response within 24 hours.",
  keywords: ["contact ZedroLabs", "software development quote", "hire virtual assistant Pakistan", "get a quote"],
  alternates: { canonical: "https://zedrolabs.io/contact" },
  openGraph: {
    title: "Contact ZedroLabs: Get a Free Quote",
    description: "Free consultation, response within 24 hours, no commitment required.",
    url: "https://zedrolabs.io/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

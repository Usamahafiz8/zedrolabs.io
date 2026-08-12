import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio: 150+ Projects Delivered Worldwide",
  description:
    "Real ZedroLabs client work: e-commerce, healthcare RCM, Web3/DeFi, marketing agencies, and more, plus our own in-house SaaS product. See the live sites.",
  keywords: ["ZedroLabs portfolio", "web development case studies", "web3 project portfolio", "software agency clients"],
  alternates: { canonical: "https://zedrolabs.io/portfolio" },
  openGraph: {
    title: "ZedroLabs Portfolio: Real Client Work",
    description: "150+ projects delivered. Real client sites across e-commerce, healthcare, Web3, and more.",
    url: "https://zedrolabs.io/portfolio",
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}

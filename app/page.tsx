import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import Web3Highlight from "@/components/sections/Web3Highlight";
import VAHighlight from "@/components/sections/VAHighlight";
import { PortfolioPreview, TestimonialsSection, CTASection } from "@/components/sections/SharedSections";

export const metadata: Metadata = {
  title: "ZedroLabs — Software Development, Web3 & Virtual Assistants | Pakistan",
  description: "ZedroLabs: Top-rated software development, Web3/blockchain, and virtual assistant services from Rawalpindi, Pakistan. 150+ clients. Free quote in 24hrs.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <Web3Highlight />
      <VAHighlight />
      <PortfolioPreview />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

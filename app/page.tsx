import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import Web3Highlight from "@/components/sections/Web3Highlight";
import MedBillingHighlight from "@/components/sections/MedBillingHighlight";
import VAHighlight from "@/components/sections/VAHighlight";
import { PortfolioPreview, TestimonialsSection, CTASection } from "@/components/sections/SharedSections";

export const metadata: Metadata = {
  title: "ZedroLabs — Software Development, Web3, Medical Billing & Virtual Assistants | Pakistan",
  description: "ZedroLabs: Top-rated software development, AI, Web3/blockchain, medical billing, and virtual assistant services from Rawalpindi, Pakistan. 150+ clients. Free quote in 24hrs.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <Web3Highlight />
      <MedBillingHighlight />
      <VAHighlight />
      <PortfolioPreview />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

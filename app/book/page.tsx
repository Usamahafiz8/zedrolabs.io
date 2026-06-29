import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { RedLine } from "@/components/ui";

const CalEmbed = dynamic(() => import("@/components/ui/CalEmbed"), { ssr: false });

export const metadata: Metadata = {
  title: "Book a Free Call — ZedroLabs",
  description: "Schedule a free 30-minute discovery call with the ZedroLabs team. No commitment required.",
};

export default function BookPage() {
  return (
    <>
      <section className="pt-16 bg-[#080c14] relative overflow-hidden min-h-screen flex items-center justify-center">
        <div className="blob-1" style={{ top: "-200px", left: "-100px", opacity: 0.3 }} aria-hidden="true" />
        <div className="blob-2" style={{ bottom: "-100px", right: "5%" }} aria-hidden="true" />

        <div className="section-wrap relative z-10 py-20 text-center">
          <div className="inline-flex items-center gap-2 border border-[rgba(193,39,45,0.3)] rounded-full px-4 py-2 text-[11px] font-bold text-[#e63939] mb-8"
            style={{ fontFamily: "var(--font-mono)", background: "rgba(193,39,45,0.06)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#e63939] animate-pulse" />
            Free · 30 Minutes · No Commitment
          </div>

          <h1 className="t-h1 text-[#f0f4ff] mb-4">
            Book a Free<br />
            <span className="text-gradient">Discovery Call</span>
          </h1>

          <p className="text-[#a8b8d8] text-lg max-w-[440px] mx-auto mb-10 leading-relaxed">
            Pick a time that works for you. We&apos;ll discuss your project and follow up with a custom proposal within 24 hours.
          </p>

          <div className="flex justify-center">
            <CalEmbed />
          </div>

          <div className="flex items-center justify-center gap-8 mt-10 flex-wrap text-[13px] text-[#5a7090]">
            {["No sales pitch", "NDA on request", "Proposal within 24hrs"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <span className="text-[#e63939]">✓</span> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <RedLine />
    </>
  );
}

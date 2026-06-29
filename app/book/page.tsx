import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { RedLine } from "@/components/ui";
import { COMPANY } from "@/lib/data";
import { Clock, Shield, Zap, MessageCircle } from "lucide-react";

const CalEmbed = dynamic(() => import("@/components/ui/CalEmbed"), { ssr: false });

export const metadata: Metadata = {
  title: "Book a Discovery Call — ZedroLabs",
  description: "Schedule a free 15–30 minute discovery call with the ZedroLabs team. We'll discuss your project, timeline, and budget — no commitment required.",
};

const WHAT_TO_EXPECT = [
  {
    icon: <Clock size={18} />,
    title: "15–30 minutes",
    desc: "Quick, focused call. We respect your time.",
  },
  {
    icon: <MessageCircle size={18} />,
    title: "No sales pitch",
    desc: "We listen first, ask the right questions, and advise honestly.",
  },
  {
    icon: <Shield size={18} />,
    title: "NDA on request",
    desc: "Happy to sign before you share any sensitive details.",
  },
  {
    icon: <Zap size={18} />,
    title: "Proposal within 24hrs",
    desc: "You'll receive a tailored proposal the next business day.",
  },
];

export default function BookPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 bg-[#080c14] relative overflow-hidden min-h-[42vh] flex items-center">
        <div className="blob-1" style={{ top:"-200px", left:"-100px", opacity:0.3 }} aria-hidden="true" />
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(193,39,45,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(193,39,45,0.04) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
            WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 0%, black 30%, transparent 100%)",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 0%, black 30%, transparent 100%)",
          }} />

        <div className="section-wrap relative z-10 py-16">
          <div className="max-w-[640px]">
            <div className="inline-flex items-center gap-2 border border-[rgba(193,39,45,0.3)] rounded-full px-4 py-2 text-[11px] font-bold text-[#e63939] mb-7"
              style={{ fontFamily:"var(--font-mono)", background:"rgba(193,39,45,0.06)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#e63939] animate-pulse" />
              Free · No Commitment · Response within 24hrs
            </div>
            <h1 className="t-h1 text-[#f0f4ff] mb-4">
              Book a Free<br />
              <span className="text-gradient">Discovery Call</span>
            </h1>
            <p className="text-[#a8b8d8] text-lg max-w-[480px] leading-relaxed">
              Pick a time that works for you. We&apos;ll talk through your project,
              answer every question, and follow up with a custom proposal — no pressure.
            </p>
          </div>
        </div>
      </section>

      <RedLine />

      {/* What to expect */}
      <section className="py-12 bg-[#0d1220]">
        <div className="section-wrap">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {WHAT_TO_EXPECT.map((item) => (
              <div key={item.title} className="card p-5 flex flex-col gap-3">
                <div className="w-9 h-9 rounded-xl bg-[rgba(193,39,45,0.1)] border border-[rgba(193,39,45,0.2)] flex items-center justify-center text-[#e63939] flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="font-bold text-[#f0f4ff] text-[14px] mb-1">{item.title}</div>
                  <p className="text-[12px] text-[#5a7090] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar embed */}
      <section className="bg-[#080c14] py-section">
        <div className="section-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.2fr] gap-12 items-start">

            {/* Left — contact info */}
            <div className="sticky top-24">
              <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#e63939] mb-3"
                style={{ fontFamily:"var(--font-mono)" }}>
                // Your Host
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c1272d] to-[#e63939] flex items-center justify-center text-white font-black text-lg flex-shrink-0"
                  style={{ fontFamily:"var(--font-display)" }}>
                  MO
                </div>
                <div>
                  <div className="font-bold text-[#f0f4ff] text-[15px]">Muhammad Osama</div>
                  <div className="text-[12px] text-[#e63939]">ZedroLabs</div>
                  <div className="text-[11px] text-[#5a7090] mt-0.5">{COMPANY.timezone}</div>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {[
                  { label: "Email",     value: COMPANY.email,    href: `mailto:${COMPANY.email}` },
                  { label: "Phone",     value: COMPANY.phone,    href: `tel:${COMPANY.phone}` },
                  { label: "Location",  value: COMPANY.location, href: undefined },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-0.5">
                    <div className="text-[10px] uppercase tracking-widest text-[#5a7090]"
                      style={{ fontFamily:"var(--font-mono)" }}>{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-[13px] text-[#a8b8d8] hover:text-[#e63939] transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-[13px] text-[#a8b8d8]">{item.value}</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[rgba(0,255,136,0.05)] border border-[rgba(0,255,136,0.15)]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
                  <span className="text-[#00ff88] text-xs font-semibold">Available for new projects</span>
                </div>
                <p className="text-[11px] text-[#5a7090]">Typically responds within a few hours during PKT business hours.</p>
              </div>
            </div>

            {/* Right — Cal.com embed */}
            <div className="card overflow-hidden" style={{ minHeight: "660px" }}>
              <CalEmbed />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { DEV_PRICING, FAQS } from "@/lib/data";
import { Label, Heading, Reveal, RedLine, FAQAccordion } from "@/components/ui";
import { CTASection } from "@/components/sections/SharedSections";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Dedicated Development Teams — Staff Augmentation from $800/month",
  description: "Hire pre-vetted dedicated development teams: junior, mid-level, senior engineers, AI/ML specialists, Web3 devs, and DevOps. From $800/month, 3-month minimum.",
  keywords: ["dedicated development team", "staff augmentation Pakistan", "hire developers Pakistan", "offshore development team", "dedicated software developers"],
};

export default function DedicatedTeamsPage() {
  return (
    <>
      <section className="pt-16 bg-[#080c14] relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="blob-1" style={{ top:"-200px", right:"-100px", opacity:0.4 }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(193,39,45,0.08) 0%,transparent 70%)" }} />
        <div className="section-wrap relative z-10 py-24 text-center">
          <div className="inline-flex items-center gap-2 border border-[rgba(193,39,45,0.3)] rounded-full px-4 py-2 text-[11px] font-bold text-[#e63939] mb-8"
            style={{ fontFamily:"var(--font-mono)", background:"rgba(193,39,45,0.06)" }}>
            Staff Augmentation · From $800/month
          </div>
          <h1 className="t-hero text-[#f0f4ff] mb-5 max-w-[700px] mx-auto">
            Scale Your Team<br />
            <span className="text-gradient">Instantly</span>
          </h1>
          <p className="text-[#a8b8d8] text-lg max-w-[520px] mx-auto mb-8">
            Pre-vetted engineers integrated directly into your team. Pay a flat monthly rate — no recruitment, no payroll, no overhead.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-[13px] text-[#a8b8d8]">
            {["160–180 hrs/month","3–6 month minimum","Vetted talent","NDA included","Flexible scaling"].map(item => (
              <span key={item} className="flex items-center gap-1.5">
                <Check size={13} className="text-[#e63939]" />{item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <RedLine />

      <section className="py-section bg-[#0d1220]">
        <div className="section-wrap">
          <Reveal><Label className="justify-center"> Pricing Tiers</Label><Heading className="text-center mb-14">Choose Your <span className="text-gradient">Tier</span></Heading></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
            {DEV_PRICING.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 100}>
                <div className={cn("card flex flex-col p-9 relative hover:-translate-y-2 transition-all duration-300",
                  tier.featured ? "border-[#c1272d] shadow-[0_0_40px_rgba(193,39,45,0.3)] bg-gradient-to-b from-[#0f1829] to-[#12101d]" : "hover:border-[rgba(193,39,45,0.4)]")}>
                  {tier.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#c1272d] text-white text-[10px] font-bold tracking-[0.1em] uppercase px-4 py-1.5 rounded-full">{tier.badge}</div>
                  )}
                  <div className="text-[11px] font-bold tracking-widest uppercase text-[#e63939] mb-3" style={{ fontFamily:"var(--font-mono)" }}>{tier.name}</div>
                  <div className="text-[3.2rem] font-black text-[#f0f4ff] leading-none mb-1" style={{ fontFamily:"var(--font-display)" }}>${tier.price.toLocaleString()}</div>
                  <div className="text-[12px] text-[#5a7090] mb-1">per resource / month</div>
                  <div className="text-[13px] text-[#a8b8d8] pb-6 border-b border-[#1a2540] mb-6">{tier.role}</div>
                  <ul className="space-y-2.5 flex-1 mb-7">
                    {tier.features.map(f => (
                      <li key={f} className="flex items-start gap-2.5 text-[13px] text-[#a8b8d8] pb-2.5 border-b border-white/[0.03] last:border-0">
                        <Check size={13} className="text-[#e63939] mt-0.5 flex-shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className={cn("flex items-center justify-center gap-2 py-3.5 text-sm", tier.featured ? "btn-primary" : "btn-ghost")}>
                    Get Started →
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section bg-[#080c14]">
        <div className="section-wrap">
          <Reveal><Label> How It Works</Label><Heading className="mb-12">Onboard in <span className="text-gradient">Days</span></Heading></Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { n:"01", t:"Share Needs", d:"Skills, seniority, tools. We send profiles within 48 hours." },
              { n:"02", t:"Interview",   d:"Interview 2–3 candidates per role. No obligation." },
              { n:"03", t:"Onboard",     d:"Contract + NDA signed. Team integrated within days." },
              { n:"04", t:"Scale",        d:"Add/remove resources as needs change." },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 80}>
                <div className="card p-7 h-full">
                  <div className="text-[2.8rem] font-black leading-none mb-3" style={{ fontFamily:"var(--font-display)", color:"rgba(193,39,45,0.25)" }}>{step.n}</div>
                  <h4 className="font-bold text-[#f0f4ff] mb-2" style={{ fontFamily:"var(--font-display)", fontSize:"1.1rem" }}>{step.t}</h4>
                  <p className="text-[13px] text-[#5a7090]">{step.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section bg-[#0d1220]">
        <div className="max-w-[800px] mx-auto px-5">
          <Reveal><Label> FAQ</Label><Heading className="mb-10">Team Questions</Heading></Reveal>
          <Reveal delay={100}><FAQAccordion faqs={FAQS} /></Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}

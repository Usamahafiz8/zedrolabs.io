import type { Metadata } from "next";
import Link from "next/link";
import { STATS, TECH_STACK, TEAM, FAQS, COMPANY } from "@/lib/data";
import { Label, Heading, Reveal, RedLine, Counter, FAQAccordion } from "@/components/ui";
import { CTASection } from "@/components/sections/SharedSections";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "About ZedroLabs — Software Development Company | Rawalpindi, Pakistan",
  description: "ZedroLabs: 8+ years of software development, AI, Web3, medical billing and VA services from Rawalpindi, Pakistan. 45+ engineers, 150+ projects, 98% satisfaction.",
  keywords: ["ZedroLabs about", "software company Rawalpindi", "IT company Pakistan", "offshore development company"],
};


export default function AboutPage() {
  return (
    <div>
      <section className="pt-16 bg-[#080c14] relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="bg-grid absolute inset-0 pointer-events-none opacity-60"
          style={{ backgroundImage:"linear-gradient(rgba(193,39,45,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(193,39,45,0.04) 1px,transparent 1px)", backgroundSize:"64px 64px",
            WebkitMaskImage:"radial-gradient(ellipse 80% 80% at 50% 0%, black 30%, transparent 100%)",
            maskImage:"radial-gradient(ellipse 80% 80% at 50% 0%, black 30%, transparent 100%)" }} />
        <div className="blob-1" style={{ top:"-200px", left:"-100px", opacity:0.4 }} />
        <div className="section-wrap relative z-10 py-24">
          <div className="inline-flex items-center gap-2 border border-[rgba(193,39,45,0.3)] rounded-full px-4 py-2 text-[11px] font-bold text-[#e63939] mb-8"
            style={{ fontFamily:"var(--font-mono)", background:"rgba(193,39,45,0.06)" }}>
            Founded {COMPANY.founded} · {COMPANY.location}
          </div>
          <h1 className="t-hero text-[#f0f4ff] mb-5">
            Pakistan&apos;s Most<br />
            <span className="text-gradient">Versatile</span><br />
            Tech Partner
          </h1>
          <p className="text-[#a8b8d8] text-lg max-w-[560px]">
            8+ years. 150+ projects. Clients on 3 continents. From DeFi protocols to hospital billing
            systems — we deliver excellence across every vertical.
          </p>
        </div>
      </section>

      <RedLine />

      {/* Story */}
      <section className="py-section bg-[#0d1220]">
        <div className="section-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <Label>Our Story</Label>
              <Heading className="mb-5">Built on Excellence,<br /><span className="text-gradient">Delivered Daily</span></Heading>
              <p className="text-[#a8b8d8] mb-4">Founded in {COMPANY.founded} in Rawalpindi, ZedroLabs was built on a simple premise: Pakistan has world-class engineering talent, and the world deserves access to it at fair prices.</p>
              <p className="text-[#a8b8d8] mb-4">Over 8+ years, we&apos;ve evolved from a web agency to a full-service IT company covering custom software, AI, blockchain, healthcare technology, and virtual services — all from one roof.</p>
              <p className="text-[#a8b8d8] mb-8">Today, our 45+ person team serves clients across the US, UK, Europe, and the Gulf — delivering the quality of a Silicon Valley firm at Pakistan&apos;s unbeatable cost advantage.</p>
              <Link href="/contact" className="btn-primary"><span>Work With Us →</span></Link>
            </Reveal>
            <Reveal delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((s) => (
                  <div key={s.label} className="card p-6 flex flex-col gap-2 hover:border-[rgba(193,39,45,0.3)] transition-colors">
                    <div className="text-2xl">{s.icon}</div>
                    <div className="text-[2.2rem] font-black text-[#f0f4ff] leading-none" style={{ fontFamily:"var(--font-display)" }}>
                      <Counter to={s.num} suffix={s.suffix} />
                    </div>
                    <div className="text-[11px] uppercase tracking-wider text-[#5a7090]">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-section bg-[#080c14]">
        <div className="section-wrap">
          <Reveal><Label> Core Values</Label><Heading className="mb-12">What Drives Us</Heading></Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon:"🚀", t:"Ship Fast",           d:"Agile delivery, sprint-based development, continuous deployment." },
              { icon:"🛡️", t:"Security First",      d:"IP-protected, NDA-signed, security-audited everything we ship." },
              { icon:"🌍", t:"Global Standards",    d:"ISO-aligned, CMMI-inspired quality control on every project." },
              { icon:"💬", t:"Radical Transparency", d:"Daily updates, shared dashboards, no surprises — ever." },
            ].map((v, i) => (
              <Reveal key={v.t} delay={i * 70}>
                <div className="card p-7 h-full">
                  <div className="text-3xl mb-4">{v.icon}</div>
                  <h4 className="font-bold text-[#f0f4ff] mb-2" style={{ fontFamily:"var(--font-display)", fontSize:"1.1rem" }}>{v.t}</h4>
                  <p className="text-[13px] text-[#5a7090] leading-relaxed">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-section bg-[#0d1220]">
        <div className="section-wrap">
          <Reveal><Label> Leadership</Label><Heading className="mb-12">Meet the <span className="text-gradient">Team</span></Heading></Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={i * 70}>
                <div className="card p-7 flex gap-5 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[rgba(193,39,45,0.2)] to-[rgba(193,39,45,0.05)] border border-[rgba(193,39,45,0.2)] flex items-center justify-center text-2xl flex-shrink-0">
                    {m.emoji}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#f0f4ff]" style={{ fontFamily:"var(--font-display)", fontSize:"1.05rem" }}>{m.name}</h4>
                    <div className="text-[#e63939] text-[12px] font-semibold mb-1">{m.role}</div>
                    <p className="text-[12px] text-[#5a7090]">{m.spec}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech */}
      <section className="py-section bg-[#080c14]">
        <div className="section-wrap">
          <Reveal><Label> Technologies</Label><Heading className="mb-10">Our Tech <span className="text-gradient">Stack</span></Heading></Reveal>
          <Reveal delay={100}>
            <div className="flex flex-wrap gap-2.5">
              {Object.values(TECH_STACK).flat().map((t) => (
                <span key={t} className="px-3.5 py-2 rounded-xl text-[12px] text-[#a8b8d8] border border-[#1a2540] bg-[rgba(255,255,255,0.02)] hover:border-[rgba(193,39,45,0.3)] hover:text-[#f0f4ff] transition-all">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-section bg-[#0d1220]">
        <div className="max-w-[800px] mx-auto px-5">
          <Reveal><Label> FAQ</Label><Heading className="mb-10">Frequently Asked</Heading></Reveal>
          <Reveal delay={100}><FAQAccordion faqs={FAQS} /></Reveal>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

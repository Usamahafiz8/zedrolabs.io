import type { Metadata } from "next";
import Link from "next/link";
import { VA_SERVICES, VA_PRICING } from "@/lib/data";
import { Label, Heading, Reveal, RedLine, FAQAccordion } from "@/components/ui";
import { CTASection } from "@/components/sections/SharedSections";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Virtual Assistant Services — Hire Dedicated VAs from $400/month",
  description: "Pre-vetted virtual assistants for executive support, customer service, social media, bookkeeping, e-commerce, and more. English-fluent, professional, ready in 3–5 days.",
  keywords: ["virtual assistant services", "hire virtual assistant Pakistan", "dedicated VA", "remote assistant", "executive virtual assistant", "customer support VA", "bookkeeping VA"],
};

const VA_FAQS = [
  { q: "How quickly can I get started?", a: "Most clients have a matched and onboarded VA within 3–5 business days. We pre-screen based on your requirements and present 2–3 matched profiles for you to interview." },
  { q: "What if my VA doesn't work out?", a: "We offer a 1-week free trial on full-time packages, and guarantee replacement within 24 hours if you're unhappy for any reason — no questions, no delays." },
  { q: "What hours do VAs work?", a: "Our VAs work your hours. Whether you need EST, PST, GMT, or Gulf timezone coverage, we have VAs who shift to match your business hours." },
  { q: "How do I communicate with my VA?", a: "However you prefer — Slack, Teams, WhatsApp, email, or any tool you use. We adapt to your workflow completely." },
];

export default function VirtualAssistantsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 bg-[#080c14] relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(245,166,35,0.1) 0%,transparent 70%)", filter:"blur(60px)" }} />
        <div className="section-wrap relative z-10 py-24">
          <div className="max-w-[760px]">
            <div className="inline-flex items-center gap-2.5 border border-[rgba(245,166,35,0.3)] rounded-full px-4 py-2 text-[12px] font-bold text-[#f5a623] mb-8"
              style={{ fontFamily:"var(--font-mono)", background:"rgba(245,166,35,0.06)" }}>
              🤝 Pre-Vetted · English-Fluent · Ready in 3–5 Days
            </div>
            <h1 className="t-hero text-[#f0f4ff] mb-6">
              Your Remote<br />
              <span className="text-gradient">A-Team</span><br />
              <span className="text-outline">Starts Here.</span>
            </h1>
            <p className="text-[#a8b8d8] text-lg max-w-[560px] mb-8">
              Hire dedicated, pre-vetted virtual assistants from $400/month. Executive support, customer service,
              social media, bookkeeping, and 20+ more specialties.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/contact" className="btn-primary">Hire a VA Now →</Link>
              <Link href="/contact" className="btn-ghost">Start Free Trial</Link>
            </div>
          </div>
        </div>
      </section>

      <RedLine />

      {/* VA Services */}
      <section className="py-section bg-[#0d1220]">
        <div className="section-wrap">
          <Reveal><Label> What VAs Can Do</Label><Heading className="mb-12">VA <span className="text-gradient">Specialties</span></Heading></Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VA_SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <div className="card p-6 h-full group hover:border-[rgba(245,166,35,0.3)]">
                  <div className="text-3xl mb-4">{s.icon}</div>
                  <h3 className="font-bold text-[#f0f4ff] mb-2 text-[1rem]" style={{ fontFamily:"var(--font-display)" }}>{s.title}</h3>
                  <p className="text-[13px] text-[#5a7090] leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-section bg-[#080c14]">
        <div className="section-wrap">
          <div className="text-center mb-14">
            <Reveal><Label className="justify-center"> Pricing</Label><Heading>Simple, Transparent<br /><span className="text-gradient">Pricing</span></Heading></Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[960px] mx-auto">
            {VA_PRICING.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 100}>
                <div className={cn("card flex flex-col p-8 relative hover:-translate-y-2", tier.featured ? "border-[#c1272d] shadow-[0_0_40px_rgba(193,39,45,0.25)]" : "hover:border-[rgba(193,39,45,0.3)]")}>
                  {tier.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#c1272d] text-white text-[10px] font-bold tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-full">{tier.badge}</div>
                  )}
                  <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#e63939] mb-1" style={{ fontFamily:"var(--font-mono)" }}>{tier.name}</div>
                  <div className="text-[12px] text-[#5a7090] mb-3">{tier.hours}</div>
                  <div className="text-[3rem] font-black text-[#f0f4ff] leading-none mb-1" style={{ fontFamily:"var(--font-display)" }}>${tier.price.toLocaleString()}</div>
                  <div className="text-[12px] text-[#5a7090] pb-5 border-b border-[#1a2540] mb-5">/{tier.period}</div>
                  <ul className="space-y-2.5 flex-1 mb-6">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[13px] text-[#a8b8d8] border-b border-white/[0.03] pb-2.5 last:border-0">
                        <Check size={13} className="text-[#e63939] mt-0.5 flex-shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className={cn("flex items-center justify-center gap-2 py-3.5 text-sm", tier.featured ? "btn-primary" : "btn-ghost")}>
                    Hire VA Now
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why ZedroLabs VAs */}
      <section className="py-section bg-[#0d1220]">
        <div className="section-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <Label> Why Our VAs?</Label>
              <Heading className="mb-6">Not Just<br /><span className="text-gradient">Contractors</span></Heading>
              <p className="text-[#a8b8d8] mb-8">Our VAs are career professionals — not freelancers with 50 other clients. They work exclusively for you, on your schedule, using your tools.</p>
              <ul className="space-y-3">
                {[
                  "Multi-stage vetting: interview, skills test, background check",
                  "Dedicated to 1 client at a time — not shared",
                  "Trained in 30+ business tools & platforms",
                  "100% English-fluent with professional communication",
                  "Performance reviewed monthly with reports",
                  "Free 1-week trial on full-time packages",
                  "24hr replacement guarantee — no disruption",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[14px] text-[#a8b8d8]">
                    <Check size={15} className="text-[#f5a623] mt-0.5 flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={150}>
              <div className="card p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full"
                  style={{ background:"radial-gradient(circle,rgba(245,166,35,0.12) 0%,transparent 70%)" }} />
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="font-black text-[1.4rem] text-[#f0f4ff] mb-4" style={{ fontFamily:"var(--font-display)" }}>
                  How We Match You
                </h3>
                {[
                  { n:"01", t:"Tell us your needs",   d:"Role, hours, tools, timezone, personality" },
                  { n:"02", t:"We find your match",   d:"From our vetted pool within 24–48 hours" },
                  { n:"03", t:"You interview",         d:"Meet 2–3 candidates, pick your match" },
                  { n:"04", t:"Onboard in days",       d:"NDA signed, tools setup, ready to work" },
                ].map((step) => (
                  <div key={step.n} className="flex gap-4 py-3.5 border-b border-[#1a2540] last:border-0">
                    <div className="text-[#f5a623] font-bold text-sm flex-shrink-0 w-8">{step.n}</div>
                    <div>
                      <div className="font-semibold text-[#f0f4ff] text-sm">{step.t}</div>
                      <div className="text-[12px] text-[#5a7090] mt-0.5">{step.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-section bg-[#080c14]">
        <div className="max-w-[800px] mx-auto px-5">
          <Reveal><Label> FAQ</Label><Heading className="mb-10">Virtual Assistant FAQ</Heading></Reveal>
          <Reveal delay={100}><FAQAccordion faqs={VA_FAQS} /></Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}

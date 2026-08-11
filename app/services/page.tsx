import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import {
  CORE_SERVICES, WEB3_SERVICES, MEDICAL_BILLING_SERVICES, VA_SERVICES,
  TECH_STACK, FAQS,
} from "@/lib/data";
import { Label, Heading, Badge, Reveal, RedLine, FAQAccordion } from "@/components/ui";
import { CTASection } from "@/components/sections/SharedSections";
import PricingTabs from "@/components/sections/PricingTabs";
import { ArrowUpRight, Check, CheckCircle, Shield, Zap, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Pricing: Custom Software, Web3, Medical Billing, VAs & Dev Teams",
  description:
    "Everything ZedroLabs offers in one place: custom software, Web3/blockchain, medical billing & RCM, virtual assistants, and dedicated dev teams, with transparent pricing for every service.",
  keywords: [
    "software development services", "IT services Pakistan", "web3 blockchain development",
    "medical billing services", "revenue cycle management", "virtual assistant services",
    "dedicated development team", "staff augmentation Pakistan", "ZedroLabs pricing",
    "hire virtual assistant", "smart contract development company", "medical billing outsourcing company",
  ],
  alternates: { canonical: "https://zedrolabs.io/services" },
  openGraph: {
    title: "Services & Pricing: Custom Software, Web3, Medical Billing, VAs & Dev Teams",
    description: "Every ZedroLabs service and price on one page: custom software, Web3, medical billing, virtual assistants, and dedicated dev teams.",
    url: "https://zedrolabs.io/services",
  },
};

const QUICK_NAV = [
  { id: "custom-software",    label: "💻 Custom Software" },
  { id: "web3",               label: "⛓️ Web3 & Blockchain" },
  { id: "medical-billing",    label: "🏥 Medical Billing" },
  { id: "virtual-assistants", label: "🤝 Virtual Assistants" },
  { id: "dedicated-teams",    label: "👥 Dedicated Teams" },
  { id: "pricing",            label: "💰 Pricing" },
];

const PROCESS = [
  { n: "01", t: "Discovery & Scoping",  d: "Requirements gathering, architecture planning, timeline & cost estimate." },
  { n: "02", t: "Design & Prototyping", d: "UI/UX wireframes, system design, API contracts, and prototype review." },
  { n: "03", t: "Development Sprints",  d: "2-week agile sprints, daily standups, continuous delivery, code reviews." },
  { n: "04", t: "QA & Testing",         d: "Automated testing, performance benchmarking, security audit, UAT." },
  { n: "05", t: "Deployment",           d: "CI/CD pipeline, containerization, monitoring, production go-live." },
  { n: "06", t: "Support & Growth",     d: "Ongoing maintenance, feature additions, scaling, and SLA support." },
];

const CHAINS = [
  { name: "Ethereum",  icon: "⬡",  color: "#627EEA" },
  { name: "Solana",    icon: "◎",  color: "#14F195" },
  { name: "Polygon",   icon: "⬟",  color: "#8247E5" },
  { name: "BSC",       icon: "◈",  color: "#F3BA2F" },
  { name: "Arbitrum",  icon: "◆",  color: "#28A0F0" },
  { name: "Base",      icon: "⬡",  color: "#0052FF" },
  { name: "Avalanche", icon: "△",  color: "#E84142" },
  { name: "Cosmos",    icon: "✦",  color: "#2E3148" },
];
const WEB3_FAQS = [
  { q: "Do you do smart contract security audits?", a: "Yes. All contracts we deploy undergo a thorough internal security review. For high-value DeFi protocols, we partner with top-tier audit firms or run formal verification." },
  { q: "Which blockchains do you support?", a: "Ethereum (EVM), Solana (Rust/Anchor), Polygon, BSC, Arbitrum, Base, Avalanche, Cosmos/IBC, and more." },
  { q: "What's your typical timeline for a DeFi protocol?", a: "A basic lending protocol takes 8–12 weeks from design to audited deployment. Full-featured AMMs or yield optimizers typically take 16–24 weeks." },
];

const MED_RESULTS = [
  { num: "34%",  label: "Average collections increase" },
  { num: "98%",  label: "Claim acceptance rate" },
  { num: "72hr", label: "Average claim turnaround" },
  { num: "30+",  label: "EMR/EHR integrations" },
];
const SPECIALTIES = [
  "Internal Medicine", "Family Practice", "Cardiology", "Orthopedics",
  "Oncology", "Radiology", "Mental Health", "Physical Therapy",
  "Urgent Care", "Pediatrics", "OB/GYN", "Dermatology",
];
const MED_FAQS = [
  { q: "Are you HIPAA compliant?", a: "Yes, completely. We sign Business Associate Agreements (BAA) with all healthcare clients and follow strict HIPAA protocols with annual compliance audits." },
  { q: "Which EHR/EMR systems do you integrate with?", a: "30+ systems including Epic, Cerner, Athena, eClinicalWorks, DrChrono, Kareo, Practice Fusion, and NextGen." },
  { q: "How quickly will you see results?", a: "Most practices see measurable improvement within 30–60 days. Full results (30%+ collection improvement) typically take 90–120 days." },
];

const VA_FAQS = [
  { q: "How quickly can I get started?", a: "Most clients have a matched and onboarded VA within 3–5 business days." },
  { q: "What if my VA doesn't work out?", a: "Free 1-week trial on full-time packages, and a 24-hour replacement guarantee, no questions asked." },
  { q: "What hours do VAs work?", a: "Whatever hours you need: EST, PST, GMT, or Gulf timezone coverage." },
];

const ALL_FAQS_FOR_SCHEMA = [...WEB3_FAQS, ...MED_FAQS, ...VA_FAQS, ...FAQS];
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ALL_FAQS_FOR_SCHEMA.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <Script id="faq-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="pt-16 bg-[#080c14] relative overflow-hidden min-h-[55vh] flex items-center">
        <div className="bg-grid absolute inset-0 pointer-events-none opacity-60"
          style={{ backgroundImage:"linear-gradient(rgba(193,39,45,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(193,39,45,0.04) 1px,transparent 1px)", backgroundSize:"64px 64px",
            WebkitMaskImage:"radial-gradient(ellipse 80% 80% at 50% 0%, black 30%, transparent 100%)",
            maskImage:"radial-gradient(ellipse 80% 80% at 50% 0%, black 30%, transparent 100%)" }} />
        <div className="blob-1" style={{ top:"-200px", right:"-100px", opacity:0.5 }} />
        <div className="section-wrap relative z-10 py-24">
          <div className="max-w-[720px]">
            <h1 className="t-hero text-[#f0f4ff] mb-5">
              Everything<br />
              You Need to<br />
              <span className="text-gradient">Build & Scale</span>
            </h1>
            <p className="text-[#a8b8d8] text-lg max-w-[520px] mb-8">
              Custom software, Web3, medical billing, virtual assistants, and dedicated dev teams:
              every service, and every price, on one page.
            </p>
            <div className="flex flex-wrap gap-2">
              {["B2B", "B2C", "B2G", "Web3"].map((m) => <Badge key={m} market={m} />)}
            </div>
          </div>
        </div>
      </section>

      <RedLine />

      {/* Quick nav */}
      <div className="bg-[#0d1220] border-b border-[#1a2540] sticky top-16 md:top-[70px] z-40">
        <div className="section-wrap py-3">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {QUICK_NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`}
                className="px-4 py-2 rounded-xl text-[12px] font-semibold whitespace-nowrap flex-shrink-0 bg-[#0f1829] border border-[#1a2540] text-[#a8b8d8] hover:border-[rgba(193,39,45,0.35)] hover:text-[#f0f4ff] transition-colors">
                {n.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Custom Software ── */}
      <section id="custom-software" className="py-section bg-[#0d1220] scroll-mt-32">
        <div className="section-wrap">
          <Reveal><Label> Custom Software</Label><Heading className="mb-12">What We <span className="text-gradient">Build</span></Heading></Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {CORE_SERVICES.map((svc, i) => (
              <Reveal key={svc.slug} delay={(i % 4) * 70}>
                <a href={`#${svc.slug}`}>
                  <article className={`card p-7 h-full flex flex-col group ${svc.featured ? "border-[rgba(193,39,45,0.3)]" : ""}`}>
                    <div className="w-12 h-12 rounded-xl bg-[rgba(193,39,45,0.1)] border border-[rgba(193,39,45,0.2)] flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">{svc.icon}</div>
                    <h3 className="font-bold text-[#f0f4ff] mb-1" style={{ fontFamily:"var(--font-display)", fontSize:"1.1rem" }}>{svc.title}</h3>
                    <p className="text-[11px] text-[#e63939] font-bold tracking-wider uppercase mb-3" style={{ fontFamily:"var(--font-mono)" }}>{svc.short}</p>
                    <p className="text-[13px] text-[#a8b8d8] leading-relaxed flex-1">{svc.desc}</p>
                    {svc.highlight && <div className="mt-3 text-[12px] font-bold text-[#e63939]">⚡ {svc.highlight}</div>}
                    <div className="flex flex-wrap gap-1.5 mt-4">{svc.markets.map((m) => <Badge key={m} market={m} />)}</div>
                    <div className="flex items-center gap-1 mt-4 text-[12px] text-[#5a7090] group-hover:text-[#e63939] transition-colors">
                      Jump to section <ArrowUpRight size={12} />
                    </div>
                  </article>
                </a>
              </Reveal>
            ))}
          </div>

          {/* Delivery process */}
          <Reveal><Label> How We Work</Label><Heading className="mb-12">Our Delivery <span className="text-gradient">Process</span></Heading></Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.n} delay={i * 70}>
                <div className="card p-7 h-full">
                  <div className="text-[3rem] font-black leading-none mb-3" style={{ fontFamily:"var(--font-display)", color:"rgba(193,39,45,0.2)" }}>{p.n}</div>
                  <h4 className="font-bold text-[#f0f4ff] mb-2" style={{ fontFamily:"var(--font-display)", fontSize:"1.1rem" }}>{p.t}</h4>
                  <p className="text-[13px] text-[#5a7090] leading-relaxed">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <div className="mt-8">
              <a href="#pricing" className="btn-ghost text-sm">See custom software pricing ↓</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Web3 & Blockchain ── */}
      <section id="web3" className="py-section bg-[#080c14] relative overflow-hidden scroll-mt-32">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:"linear-gradient(rgba(0,212,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,0.04) 1px,transparent 1px)", backgroundSize:"48px 48px" }} />
        <div className="section-wrap relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2.5 border border-[rgba(0,212,255,0.3)] rounded-full px-4 py-2 text-[12px] font-bold text-[#00d4ff] mb-6"
              style={{ fontFamily:"var(--font-mono)", background:"rgba(0,212,255,0.06)" }}>
              ⛓️ Web3 & Blockchain Development
            </div>
            <Heading className="mb-5">Build the <span style={{ color:"#00d4ff" }}>Decentralized</span> Future</Heading>
            <p className="text-[#a8b8d8] max-w-[620px] mb-10">
              From audited DeFi protocols to enterprise blockchain, our Web3 team has shipped $50M+ in TVL
              and 1000+ smart contracts across 8+ blockchains.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {WEB3_SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <div className="card p-7 h-full group hover:border-[rgba(0,212,255,0.3)]">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{s.icon}</div>
                  <h3 className="font-bold text-[#f0f4ff] mb-2 text-[1rem]" style={{ fontFamily:"var(--font-display)" }}>{s.title}</h3>
                  <p className="text-[13px] text-[#5a7090] leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-10">
              {CHAINS.map((c, i) => (
                <div key={c.name} className="card p-4 text-center hover:border-[rgba(0,212,255,0.3)] transition-colors group">
                  <div className="text-2xl mb-2" style={{ color: c.color }}>{c.icon}</div>
                  <div className="text-[12px] font-bold text-[#a8b8d8] group-hover:text-[#f0f4ff] transition-colors">{c.name}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
            <Reveal>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon:<Shield size={22}/>, title:"$0 Exploits", desc:"Zero post-launch exploits across all deployed contracts", color:"#00d4ff" },
                  { icon:<Zap size={22}/>,   title:"50M+ TVL",   desc:"Total value locked across deployed DeFi protocols",       color:"#f5a623" },
                  { icon:<Globe size={22}/>, title:"8 Chains",    desc:"Multi-chain expertise across major EVM and non-EVM",     color:"#e63939" },
                  { icon:<Check size={22}/>, title:"1000+ Contracts", desc:"Smart contracts deployed to mainnet since 2019",     color:"#00ff88" },
                ].map((s) => (
                  <div key={s.title} className="card p-6 text-center">
                    <div className="mb-3" style={{ color: s.color }}>{s.icon}</div>
                    <div className="font-black text-[1.4rem] text-[#f0f4ff]" style={{ fontFamily:"var(--font-display)" }}>{s.title}</div>
                    <p className="text-[12px] text-[#5a7090] mt-1">{s.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex flex-wrap gap-2.5">
                {[...TECH_STACK["Blockchain"], "Foundry", "OpenZeppelin", "Chainlink", "The Graph", "IPFS"].map((t) => (
                  <span key={t} className="px-3.5 py-2 rounded-lg text-[12px] text-[#00d4ff] border border-[rgba(0,212,255,0.2)] bg-[rgba(0,212,255,0.04)]">{t}</span>
                ))}
              </div>
              <div className="flex gap-3 mt-6 flex-wrap">
                <Link href="/contact" className="btn-primary">Get Web3 Quote →</Link>
                <a href="#pricing" className="btn-ghost">See Web3 pricing ↓</a>
              </div>
            </Reveal>
          </div>

          <Reveal><FAQAccordion faqs={WEB3_FAQS} /></Reveal>
        </div>
      </section>

      {/* ── Medical Billing ── */}
      <section id="medical-billing" className="py-section bg-[#0d1220] relative overflow-hidden scroll-mt-32">
        <div className="absolute -bottom-40 left-[10%] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(0,255,136,0.06) 0%,transparent 70%)", filter:"blur(60px)" }} />
        <div className="section-wrap relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <Reveal dir="left">
              <div className="card p-8 md:p-10 relative overflow-hidden">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="t-h3 text-[#f0f4ff] mb-2" style={{ fontFamily:"var(--font-display)" }}>Medical Billing That<br />Actually Performs</h3>
                <p className="text-sm text-[#a8b8d8] mb-8">Measurable results for practices of all sizes</p>
                <div className="grid grid-cols-2 gap-4">
                  {MED_RESULTS.map((r) => (
                    <div key={r.label} className="bg-[rgba(0,255,136,0.04)] border border-[rgba(0,255,136,0.1)] rounded-xl p-4">
                      <div className="text-[2rem] font-black text-[#00ff88]" style={{ fontFamily:"var(--font-display)" }}>{r.num}</div>
                      <div className="text-[11px] text-[#5a7090] mt-1">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <Label> Medical Billing & RCM</Label>
              <Heading className="mb-5">HIPAA-Compliant<br /><span style={{ color:"#00ff88" }}>Revenue Cycle Management</span></Heading>
              <p className="text-[#a8b8d8] leading-relaxed mb-8">
                Our HIPAA-certified billing specialists help healthcare providers increase collections,
                reduce denials, and focus on patient care, not paperwork. We sign BAAs and handle
                everything from coding to follow-up.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "ICD-10, CPT & HCPCS coding across all specialties",
                  "Real-time eligibility verification",
                  "Automated denial management & appeals",
                  "Custom reporting & performance dashboards",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[14px] text-[#a8b8d8]">
                    <CheckCircle size={15} className="text-[#00ff88] mt-0.5 flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 flex-wrap">
                <Link href="/contact" className="btn-primary">Get Free RCM Audit →</Link>
                <a href="#pricing" className="btn-ghost">See medical billing pricing ↓</a>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {MEDICAL_BILLING_SERVICES.map((s, i) => (
                <div key={s.title} className="card p-6 h-full group hover:border-[rgba(0,255,136,0.3)]">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{s.icon}</div>
                  <h3 className="font-bold text-[#f0f4ff] mb-2 text-[1rem]" style={{ fontFamily:"var(--font-display)" }}>{s.title}</h3>
                  <p className="text-[13px] text-[#5a7090] leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-wrap gap-3 mb-10">
              {SPECIALTIES.map((s) => (
                <span key={s} className="px-4 py-2 rounded-xl text-[13px] text-[#00ff88] border border-[rgba(0,255,136,0.2)] bg-[rgba(0,255,136,0.04)] font-medium">{s}</span>
              ))}
            </div>
          </Reveal>

          <Reveal><FAQAccordion faqs={MED_FAQS} /></Reveal>
        </div>
      </section>

      {/* ── Virtual Assistants ── */}
      <section id="virtual-assistants" className="py-section bg-[#080c14] relative overflow-hidden scroll-mt-32">
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(245,166,35,0.1) 0%,transparent 70%)", filter:"blur(60px)" }} />
        <div className="section-wrap relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2.5 border border-[rgba(245,166,35,0.3)] rounded-full px-4 py-2 text-[12px] font-bold text-[#f5a623] mb-6"
              style={{ fontFamily:"var(--font-mono)", background:"rgba(245,166,35,0.06)" }}>
              🤝 Pre-Vetted · English-Fluent · Ready in 3–5 Days
            </div>
            <Heading className="mb-5">Your Remote <span className="text-gradient">A-Team</span></Heading>
            <p className="text-[#a8b8d8] max-w-[600px] mb-10">
              Hire dedicated, pre-vetted virtual assistants from $320/month. Executive support, customer
              service, social media, bookkeeping, and 20+ more specialties.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-12">
            <Reveal>
              <Label> Why Our VAs?</Label>
              <Heading className="mb-6">Not Just <span className="text-gradient">Contractors</span></Heading>
              <p className="text-[#a8b8d8] mb-8">Our VAs are career professionals, not freelancers with 50 other clients. They work exclusively for you.</p>
              <ul className="space-y-3">
                {[
                  "Multi-stage vetting: interview, skills test, background check",
                  "Dedicated to 1 client at a time, not shared",
                  "100% English-fluent with professional communication",
                  "24hr replacement guarantee, no disruption",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[14px] text-[#a8b8d8]">
                    <Check size={15} className="text-[#f5a623] mt-0.5 flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 flex-wrap mt-8">
                <Link href="/contact" className="btn-primary">Hire a VA Now →</Link>
                <a href="#pricing" className="btn-ghost">See VA pricing ↓</a>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="card p-8 relative overflow-hidden">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="font-black text-[1.4rem] text-[#f0f4ff] mb-4" style={{ fontFamily:"var(--font-display)" }}>How We Match You</h3>
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

          <Reveal><FAQAccordion faqs={VA_FAQS} /></Reveal>
        </div>
      </section>

      {/* ── Dedicated Dev Teams ── */}
      <section id="dedicated-teams" className="py-section bg-[#0d1220] relative overflow-hidden scroll-mt-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(193,39,45,0.08) 0%,transparent 70%)" }} />
        <div className="section-wrap relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 border border-[rgba(193,39,45,0.3)] rounded-full px-4 py-2 text-[11px] font-bold text-[#e63939] mb-6"
              style={{ fontFamily:"var(--font-mono)", background:"rgba(193,39,45,0.06)" }}>
              Staff Augmentation · From $640/month
            </div>
            <Heading className="mb-5">Scale Your Team <span className="text-gradient">Instantly</span></Heading>
            <p className="text-[#a8b8d8] max-w-[600px] mb-10">
              Pre-vetted engineers integrated directly into your team. Pay a flat monthly rate: no
              recruitment, no payroll, no overhead.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
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

          <Reveal>
            <div className="flex gap-3 flex-wrap">
              <Link href="/contact" className="btn-primary">Get Started →</Link>
              <a href="#pricing" className="btn-ghost">See dedicated team pricing ↓</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Startup Program ── */}
      <section className="py-16 bg-[#0d1220] border-y border-[rgba(193,39,45,0.15)]">
        <div className="section-wrap">
          <Reveal>
            <div className="card p-8 md:p-10 relative overflow-hidden border-[rgba(193,39,45,0.25)]">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle,rgba(193,39,45,0.15) 0%,transparent 70%)" }} />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-6 items-center">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">🚀</div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-[#e63939] mb-1" style={{ fontFamily: "var(--font-mono)" }}>
                      Startup Program
                    </div>
                    <h3 className="t-h3 text-[#f0f4ff]">20% Off Your First 3 Months</h3>
                  </div>
                </div>
                <p className="text-[#a8b8d8] text-[14px] leading-relaxed">
                  Pre-seed or bootstrapped, under 2 years old, team of 10 or fewer? Ask about our startup
                  rate on any service: custom software, a dedicated dev team, or a virtual assistant.
                  Mention &quot;Startup&quot; when you reach out.
                </p>
                <Link href="/contact" className="btn-primary flex-shrink-0">
                  <span>Claim Startup Rate →</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Pricing (all 7 services) ── */}
      <div className="scroll-mt-32">
        <PricingTabs />
      </div>

      {/* Tech stack */}
      <section className="py-section bg-[#080c14]">
        <div className="section-wrap">
          <Reveal><Label> Technologies</Label><Heading className="mb-12">Tech Stack We <span className="text-gradient">Master</span></Heading></Reveal>
          <div className="space-y-6">
            {Object.entries(TECH_STACK).map(([category, techs]) => (
              <Reveal key={category}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <span className="text-[11px] font-bold text-[#e63939] w-[120px] flex-shrink-0 tracking-widest uppercase" style={{ fontFamily:"var(--font-mono)" }}>{category}</span>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((t) => (
                      <span key={t} className="px-3 py-1.5 rounded-lg text-[12px] text-[#a8b8d8] border border-[#1a2540] bg-[rgba(255,255,255,0.02)] hover:border-[rgba(193,39,45,0.3)] hover:text-[#f0f4ff] transition-all">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* General FAQ */}
      <section className="py-section bg-[#0d1220]">
        <div className="max-w-[800px] mx-auto px-5">
          <Reveal><Label> FAQ</Label><Heading className="mb-10">Common Questions</Heading></Reveal>
          <Reveal delay={100}><FAQAccordion faqs={FAQS} /></Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}

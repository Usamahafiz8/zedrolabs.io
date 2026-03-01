import type { Metadata } from "next";
import Link from "next/link";
import { CORE_SERVICES, TECH_STACK, FAQS } from "@/lib/data";
import { Label, Heading, Badge, Reveal, RedLine, FAQAccordion } from "@/components/ui";
import { CTASection } from "@/components/sections/SharedSections";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Software Development Services — Custom, AI, Web3, Mobile, Cloud",
  description: "Complete IT services: custom software, AI/ML, Web3/blockchain, medical billing, virtual assistants, cloud & DevOps, mobile apps, cybersecurity, and data analytics.",
  keywords: ["software development services", "IT services Pakistan", "custom software development", "AI development services", "cloud DevOps services", "mobile app development"],
};

const PROCESS = [
  { n:"01", t:"Discovery & Scoping",  d:"Requirements gathering, architecture planning, timeline & cost estimate." },
  { n:"02", t:"Design & Prototyping", d:"UI/UX wireframes, system design, API contracts, and prototype review." },
  { n:"03", t:"Development Sprints",  d:"2-week agile sprints, daily standups, continuous delivery, code reviews." },
  { n:"04", t:"QA & Testing",         d:"Automated testing, performance benchmarking, security audit, UAT." },
  { n:"05", t:"Deployment",           d:"CI/CD pipeline, containerization, monitoring, production go-live." },
  { n:"06", t:"Support & Growth",     d:"Ongoing maintenance, feature additions, scaling, and SLA support." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-16 bg-[#080c14] relative overflow-hidden min-h-[60vh] flex items-center">
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
              From MVP to enterprise, DeFi protocols to healthcare systems — ZedroLabs covers every technology
              vertical with expert teams and modern tooling.
            </p>
            <div className="flex flex-wrap gap-2">
              {["B2B", "B2C", "B2G", "Web3"].map((m) => <Badge key={m} market={m} />)}
            </div>
          </div>
        </div>
      </section>

      <RedLine />

      {/* All Services */}
      <section className="py-section bg-[#0d1220]">
        <div className="section-wrap">
          <Reveal><Label> All Services</Label><Heading className="mb-14">What We Do</Heading></Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CORE_SERVICES.map((svc, i) => (
              <Reveal key={svc.slug} delay={(i % 4) * 70}>
                <Link href={svc.slug === "virtual-assistants" ? "/virtual-assistants" : svc.slug === "medical-billing" ? "/medical-billing" : svc.slug === "web3" ? "/web3" : svc.slug === "dedicated-teams" ? "/dedicated-teams" : "/services#"+svc.slug}>
                  <article id={svc.slug} className={`card p-7 h-full flex flex-col group ${svc.featured ? "border-[rgba(193,39,45,0.3)]" : ""}`}>
                    <div className="w-12 h-12 rounded-xl bg-[rgba(193,39,45,0.1)] border border-[rgba(193,39,45,0.2)] flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">{svc.icon}</div>
                    <h3 className="font-bold text-[#f0f4ff] mb-1" style={{ fontFamily:"var(--font-display)", fontSize:"1.1rem" }}>{svc.title}</h3>
                    <p className="text-[11px] text-[#e63939] font-bold tracking-wider uppercase mb-3" style={{ fontFamily:"var(--font-mono)" }}>{svc.short}</p>
                    <p className="text-[13px] text-[#a8b8d8] leading-relaxed flex-1">{svc.desc}</p>
                    {svc.highlight && <div className="mt-3 text-[12px] font-bold text-[#e63939]">⚡ {svc.highlight}</div>}
                    <div className="flex flex-wrap gap-1.5 mt-4">{svc.markets.map((m) => <Badge key={m} market={m} />)}</div>
                    <div className="flex items-center gap-1 mt-4 text-[12px] text-[#5a7090] group-hover:text-[#e63939] transition-colors">
                      Learn more <ArrowUpRight size={12} />
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-section bg-[#080c14]">
        <div className="section-wrap">
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
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-section bg-[#0d1220]">
        <div className="section-wrap">
          <Reveal><Label> Tech Stack</Label><Heading className="mb-12">Technologies We <span className="text-gradient">Master</span></Heading></Reveal>
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

      <section className="py-section bg-[#080c14]">
        <div className="max-w-[800px] mx-auto px-5">
          <Reveal><Label> FAQ</Label><Heading className="mb-10">Common Questions</Heading></Reveal>
          <Reveal delay={100}><FAQAccordion faqs={FAQS} /></Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}

import Link from "next/link";
import { CORE_SERVICES } from "@/lib/data";
import { Label, Heading, Badge, Reveal } from "@/components/ui";
import { ArrowUpRight } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="py-section bg-[#080c14] relative" id="services">
      {/* Decorative vertical line */}
      <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgba(193,39,45,0.2)] to-transparent hidden lg:block" aria-hidden="true" />

      <div className="section-wrap">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <Reveal>
            <Label>// What We Build</Label>
            <Heading>Services That<br /><span className="text-gradient">Drive Results</span></Heading>
          </Reveal>
          <Reveal delay={100} dir="right">
            <div className="max-w-[360px]">
              <p className="text-[#a8b8d8] text-[15px] leading-relaxed mb-4">
                From MVP to enterprise scale, Web3 protocols to healthcare systems — we cover every technology vertical.
              </p>
              <Link href="/services" className="btn-ghost text-sm py-2.5 px-5">
                View All Services <ArrowUpRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {CORE_SERVICES.map((svc, i) => {
            const ServiceCard = (
              <Reveal key={svc.slug} delay={i * 60}>
                <Link href={svc.slug === "virtual-assistants" ? "/virtual-assistants" : svc.slug === "medical-billing" ? "/medical-billing" : svc.slug === "web3" ? "/web3" : svc.slug === "dedicated-teams" ? "/dedicated-teams" : "/services"}>
                  <article className={`card p-7 h-full flex flex-col relative group cursor-pointer ${svc.featured ? "border-[rgba(193,39,45,0.3)]" : ""}`}>
                    {/* BG gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${svc.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />

                    {svc.featured && (
                      <div className="absolute top-4 right-4 px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-widest text-[#f5a623] border border-[rgba(245,166,35,0.3)] bg-[rgba(245,166,35,0.08)]">
                        {svc.highlight}
                      </div>
                    )}

                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-[rgba(193,39,45,0.1)] border border-[rgba(193,39,45,0.2)] flex items-center justify-center text-xl mb-5 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(193,39,45,0.4)] transition-all duration-300">
                        {svc.icon}
                      </div>

                      <h3 className="t-h3 text-[#f0f4ff] mb-2">{svc.title}</h3>
                      <p className="text-xs text-[#e63939] font-semibold tracking-wider uppercase mb-3" style={{ fontFamily:"var(--font-mono)" }}>{svc.short}</p>
                      <p className="text-[13px] text-[#a8b8d8] leading-relaxed flex-1">{svc.desc}</p>

                      {svc.highlight && !svc.featured && (
                        <div className="mt-3 text-[12px] font-bold text-[#e63939]">⚡ {svc.highlight}</div>
                      )}

                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {svc.markets.map((m) => <Badge key={m} market={m} />)}
                      </div>

                      <div className="flex items-center gap-1.5 mt-5 text-[12px] text-[#5a7090] group-hover:text-[#e63939] transition-colors">
                        Learn more <ArrowUpRight size={12} />
                      </div>
                    </div>
                  </article>
                </Link>
              </Reveal>
            );
            return ServiceCard;
          })}
        </div>
      </div>
    </section>
  );
}

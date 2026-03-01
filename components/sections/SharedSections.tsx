import Link from "next/link";
import { PORTFOLIO_PROJECTS, TESTIMONIALS } from "@/lib/data";
import { Label, Heading, Badge, Reveal } from "@/components/ui";
import { ArrowUpRight, Star } from "lucide-react";

export function PortfolioPreview() {
  return (
    <section className="py-section bg-[#080c14]" id="portfolio">
      <div className="section-wrap">
        <div className="flex items-end justify-between flex-wrap gap-5 mb-14">
          <Reveal>
            <Label>// Recent Work</Label>
            <Heading>Work That <span className="text-gradient">Speaks</span></Heading>
          </Reveal>
          <Reveal delay={100} dir="right">
            <Link href="/portfolio" className="btn-ghost text-sm py-2.5 px-5">
              View All Projects <ArrowUpRight size={14} />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PORTFOLIO_PROJECTS.slice(0, 6).map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="card overflow-hidden group cursor-pointer" aria-label={p.title}>
                {/* Visual */}
                <div className={`relative aspect-[16/9] bg-gradient-to-br ${p.gradient} flex items-center justify-center text-5xl overflow-hidden`}>
                  {p.emoji}
                  {/* Scan line effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                    <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(193,39,45,0.8)] to-transparent"
                      style={{ animation:"scan 2s linear infinite" }} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080c14]/90 to-transparent" />
                  <div className="absolute bottom-3 left-4 text-[10px] text-white/50 font-mono">{p.stats}</div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge market={p.market} />
                  </div>
                  <h3 className="font-bold text-[#f0f4ff] text-[1.1rem] mb-2" style={{ fontFamily:"var(--font-display)" }}>
                    {p.title}
                  </h3>
                  <p className="text-[13px] text-[#a8b8d8] leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-[#0d1220] text-[#5a7090] border border-[#1a2540]">{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-section bg-[#0d1220] relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
      <div className="section-wrap relative z-10">
        <div className="text-center mb-14">
          <Reveal>
            <Label className="justify-center">// Client Love</Label>
            <Heading>What Our <span className="text-gradient">Clients Say</span></Heading>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <div className="card p-7 h-full">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={14} className="text-[#f5a623] fill-[#f5a623]" />
                  ))}
                </div>

                <p className="text-[#a8b8d8] text-[14px] leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c1272d] to-[#e63939] flex items-center justify-center text-white text-sm font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-[#f0f4ff] text-[14px]">{t.name}</div>
                    <div className="text-[12px] text-[#5a7090]">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background:"linear-gradient(135deg,#140608 0%,#080c14 50%,#080d16 100%)" }}>
      {/* Top/bottom lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c1272d] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c1272d] to-transparent" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{ background:"radial-gradient(ellipse,rgba(193,39,45,0.18) 0%,transparent 70%)" }} />

      <div className="section-wrap relative z-10 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 border border-[rgba(193,39,45,0.3)] rounded-full px-4 py-1.5 text-[11px] font-bold text-[#e63939] mb-7"
            style={{ fontFamily:"var(--font-mono)", background:"rgba(193,39,45,0.06)" }}>
            // Free consultation · 24hr response · No commitment
          </div>

          <h2 className="t-h1 text-[#f0f4ff] mb-5">
            Ready to Build<br />
            <span className="text-gradient">Something Legendary?</span>
          </h2>

          <p className="text-[#a8b8d8] max-w-[480px] mx-auto mb-10 text-[16px]">
            Join 150+ clients who trust ZedroLabs. From Web3 protocols to medical billing systems —
            we deliver results.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap mb-10">
            <Link href="/contact" className="btn-primary text-base py-4 px-10">
              <span className="flex items-center gap-2">Get Your Free Quote <ArrowUpRight size={16} /></span>
            </Link>
            <a href="https://wa.me/923000000000" target="_blank" rel="noopener noreferrer" className="btn-ghost text-base py-4 px-10">
              WhatsApp Us
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {[
              { icon:"🛡️", label:"NDA Protected"        },
              { icon:"⚡", label:"48hr Kickoff"          },
              { icon:"💰", label:"Fixed Price Available" },
              { icon:"🔄", label:"Agile Delivery"        },
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-2 text-[13px] text-[#5a7090]">
                {t.icon} {t.label}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

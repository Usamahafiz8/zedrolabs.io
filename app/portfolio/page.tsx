"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PORTFOLIO_PROJECTS, CURRENT_PROJECTS } from "@/lib/data";
import { Label, Heading, Badge, Reveal } from "@/components/ui";
import { CTASection } from "@/components/sections/SharedSections";
import { cn } from "@/lib/utils";
import { Lock } from "lucide-react";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const FILTERS = ["All", "B2B", "B2C", "B2G", "Web3"];
  const filtered = filter === "All" ? PORTFOLIO_PROJECTS : PORTFOLIO_PROJECTS.filter(p => p.market === filter);

  return (
    <>
      <section className="pt-16 bg-[#080c14] relative overflow-hidden min-h-[50vh] flex items-center">
        <div className="blob-1" style={{ top:"-200px", right:"-100px", opacity:0.4 }} />
        <div className="section-wrap relative z-10 py-24">
          <h1 className="t-hero text-[#f0f4ff] mb-5">
            Work That<br />
            <span className="text-gradient">Speaks.</span>
          </h1>
          <p className="text-[#a8b8d8] text-lg max-w-[500px]">150+ projects delivered. Here are some highlights.</p>
        </div>
      </section>

      <section className="py-section bg-[#0d1220]">
        <div className="section-wrap">
          <div className="flex items-end justify-between flex-wrap gap-5 mb-10">
            <Reveal><Label> Selected Work</Label><Heading>Recent <span className="text-gradient">Projects</span></Heading></Reveal>
            <div className="flex gap-2 flex-wrap">
              {FILTERS.map(f => (
                <button key={f} onClick={() => setFilter(f)}
                  className={cn("px-4 py-2 rounded-xl text-[12px] font-bold border transition-all duration-200",
                    filter === f ? "bg-[#c1272d] border-[#c1272d] text-white" : "bg-transparent border-[#1a2540] text-[#5a7090] hover:border-[#e63939] hover:text-[#e63939]")}>
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p, i) => (
              <a key={p.title} href={p.link} target="_blank" rel="noopener noreferrer"
                className="card overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(193,39,45,0.25)] block">
                <div className={`relative aspect-[16/9] bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                  {p.image && (
                    <Image src={p.image} alt={`${p.title} website preview`} fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                  )}
                  <div className="absolute top-3 right-3 w-9 h-9 rounded-lg bg-[#080c14]/70 backdrop-blur-sm border border-white/10 flex items-center justify-center text-base z-10">
                    {p.emoji}
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(193,39,45,0.8)] to-transparent"
                      style={{ animation:"scan 2s linear infinite" }} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080c14]/90 via-[#080c14]/5 to-transparent" />
                  <div className="absolute bottom-3 left-4 text-[10px] text-white/70" style={{ fontFamily:"var(--font-mono)" }}>{p.stats}</div>
                  <div className="absolute inset-0 bg-[#080c14]/85 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6">
  <p className="text-[13px] text-[#e8ecf5] leading-relaxed mb-4">{p.desc}</p>
  <span className="text-[12px] font-bold text-[#e63939] tracking-wide">Visit Live Site →</span>
</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3"><Badge market={p.market} /></div>
                  <h3 className="font-bold text-[#f0f4ff] text-[1.1rem] mb-2" style={{ fontFamily:"var(--font-display)" }}>{p.title}</h3>
                  <p className="text-[13px] text-[#a8b8d8] leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map(t => <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-[#0d1220] text-[#5a7090] border border-[#1a2540]">{t}</span>)}
                  </div>
                </div>
              </a>
            ))}
          </div>
          {filtered.length === 0 && <div className="text-center py-20 text-[#5a7090]">No projects for this filter.</div>}
        </div>
      </section>

      {/* ── Currently Building: exclusive preview of unreleased work ── */}
      <section className="py-section bg-[#080c14] relative overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse,rgba(193,39,45,0.1) 0%,transparent 70%)" }} />
        <div className="section-wrap relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 border border-[rgba(193,39,45,0.3)] rounded-full px-4 py-2 text-[11px] font-bold text-[#e63939] mb-6"
              style={{ fontFamily: "var(--font-mono)", background: "rgba(193,39,45,0.06)" }}>
              <Lock size={11} /> Exclusive Preview
            </div>
            <Heading className="mb-3">Currently <span className="text-gradient">Building</span></Heading>
            <p className="text-[#a8b8d8] max-w-[560px] mb-12">
              A look inside the ZedroLabs pipeline right now, before it&apos;s public. Some of these
              aren&apos;t live yet; the ones that are get an early preview badge instead of a finished case study.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CURRENT_PROJECTS.map((p, i) => {
              const inner = (
                <>
                  <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-md text-[9px] font-bold uppercase tracking-widest bg-[#080c14]/80 backdrop-blur-sm border border-[rgba(193,39,45,0.3)] text-[#e63939]">
                    In Development
                  </div>
                  <div className={`relative aspect-[16/9] bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                    {p.image ? (
                      <Image src={p.image} alt={`${p.title} preview`} fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-top opacity-70 grayscale-[30%] transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-40">{p.emoji}</div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080c14]/95 via-[#080c14]/20 to-transparent" />
                    <div className="absolute top-3 right-3 w-9 h-9 rounded-lg bg-[#080c14]/70 backdrop-blur-sm border border-white/10 flex items-center justify-center text-base z-10">
                      {p.emoji}
                    </div>
                    {p.link && (
                      <div className="absolute bottom-3 left-4 text-[10px] font-bold text-[#e63939] tracking-wide opacity-0 group-hover:opacity-100 transition-opacity">
                        Preview Live Site →
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3"><Badge market={p.market} /></div>
                    <h3 className="font-bold text-[#f0f4ff] text-[1.1rem] mb-2" style={{ fontFamily: "var(--font-display)" }}>{p.title}</h3>
                    <p className="text-[13px] text-[#a8b8d8] leading-relaxed mb-4">{p.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.map(t => <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-[#0d1220] text-[#5a7090] border border-[#1a2540]">{t}</span>)}
                    </div>
                  </div>
                </>
              );
              const cardClass = cn("card overflow-hidden group block relative border-dashed",
                p.link ? "cursor-pointer hover:border-[rgba(193,39,45,0.4)]" : "cursor-default opacity-90");
              return (
                <Reveal key={p.title} delay={i * 70}>
                  {p.link ? (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className={cardClass}>{inner}</a>
                  ) : (
                    <div className={cardClass}>{inner}</div>
                  )}
                </Reveal>
              );
            })}

            <Reveal delay={CURRENT_PROJECTS.length * 70}>
              <Link href="/contact"
                className="card border-dashed flex flex-col items-center justify-center text-center p-8 h-full min-h-[280px] hover:border-[rgba(193,39,45,0.4)] transition-colors group">
                <div className="text-3xl mb-3 opacity-60 group-hover:opacity-100 transition-opacity">+</div>
                <p className="text-[14px] font-semibold text-[#f0f4ff] mb-1">And More in the Pipeline</p>
                <p className="text-[12px] text-[#5a7090]">Want early access to what we&apos;re building? Get in touch.</p>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0d1220]">
        <div className="section-wrap">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[["150+","Projects Delivered"],["3","Continents Served"],["98%","Client Retention"],["$50M+","Revenue Enabled"]].map(([n,l]) => (
              <div key={l} className="card p-7 text-center">
                <div className="text-[2.8rem] font-black text-[#e63939] leading-none" style={{ fontFamily:"var(--font-display)" }}>{n}</div>
                <div className="text-[11px] uppercase tracking-wider text-[#5a7090] mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

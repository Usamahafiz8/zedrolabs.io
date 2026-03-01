"use client";
import { useState } from "react";
import Link from "next/link";
import { PORTFOLIO_PROJECTS } from "@/lib/data";
import { Label, Heading, Badge, Reveal } from "@/components/ui";
import { CTASection } from "@/components/sections/SharedSections";
import { cn } from "@/lib/utils";

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
            <Reveal><Label>// Selected Work</Label><Heading>Recent <span className="text-gradient">Projects</span></Heading></Reveal>
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
              <article key={p.title} className="card overflow-hidden group cursor-pointer">
                <div className={`relative aspect-[16/9] bg-gradient-to-br ${p.gradient} flex items-center justify-center text-5xl overflow-hidden`}>
                  {p.emoji}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(193,39,45,0.8)] to-transparent"
                      style={{ animation:"scan 2s linear infinite" }} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080c14]/90 to-transparent" />
                  <div className="absolute bottom-3 left-4 text-[10px] text-white/50" style={{ fontFamily:"var(--font-mono)" }}>{p.stats}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3"><Badge market={p.market} /></div>
                  <h3 className="font-bold text-[#f0f4ff] text-[1.1rem] mb-2" style={{ fontFamily:"var(--font-display)" }}>{p.title}</h3>
                  <p className="text-[13px] text-[#a8b8d8] leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map(t => <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-[#0d1220] text-[#5a7090] border border-[#1a2540]">{t}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
          {filtered.length === 0 && <div className="text-center py-20 text-[#5a7090]">No projects for this filter.</div>}
        </div>
      </section>

      <section className="py-20 bg-[#080c14]">
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

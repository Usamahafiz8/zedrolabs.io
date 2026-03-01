"use client";
import Link from "next/link";
import { STATS, MARQUEE_ITEMS } from "@/lib/data";
import { ParticleField, Counter, Reveal } from "@/components/ui";
import { ArrowRight, Zap, Shield, Globe } from "lucide-react";

const BADGES = [
  { label: "Web3 & Blockchain", color: "rgba(0,212,255,0.1)", border: "rgba(0,212,255,0.25)", text: "#00d4ff" },
  { label: "Medical Billing", color: "rgba(0,255,136,0.06)", border: "rgba(0,255,136,0.2)",  text: "#00ff88" },
  { label: "Virtual Assistants",color: "rgba(245,166,35,0.08)",border:"rgba(245,166,35,0.2)", text: "#f5a623" },
  { label: "AI & Automation",   color: "rgba(193,39,45,0.1)", border: "rgba(193,39,45,0.3)", text: "#ff4d4d" },
];

const TRUST = [
  { icon: <Zap size={14} />, label: "150+ Projects" },
  { icon: <Shield size={14} />, label: "NDA Protected" },
  { icon: <Globe size={14} />, label: "3 Continents" },
];

export default function HeroSection() {
  return (
    <>
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden" aria-label="Hero">
        {/* Particle canvas */}
        <ParticleField />

        {/* Grid bg */}
        <div className="absolute inset-0 bg-grid opacity-70 pointer-events-none"
          style={{ backgroundImage:"linear-gradient(rgba(193,39,45,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(193,39,45,0.05) 1px,transparent 1px)", backgroundSize:"64px 64px",
            WebkitMaskImage:"radial-gradient(ellipse 90% 90% at 50% 0%, black 30%, transparent 100%)",
            maskImage:"radial-gradient(ellipse 90% 90% at 50% 0%, black 30%, transparent 100%)" }} />

        {/* Blobs */}
        <div className="blob-1" style={{ top:"-150px", left:"-150px" }} aria-hidden="true" />
        <div className="blob-2" style={{ bottom:"-100px", right:"5%" }}  aria-hidden="true" />

        {/* Orbiting rings (decorative) */}
        <div className="absolute top-1/2 right-[8%] -translate-y-1/2 w-[380px] h-[380px] hidden xl:block" aria-hidden="true">
          {/* Outer ring */}
          <div className="absolute inset-0 border border-[rgba(193,39,45,0.15)] rounded-full animate-spin-slow" />
          {/* Mid ring */}
          <div className="absolute inset-[40px] border border-[rgba(0,212,255,0.1)] rounded-full" style={{ animation:"spin 30s linear infinite reverse" }} />
          {/* Inner ring */}
          <div className="absolute inset-[80px] border border-[rgba(193,39,45,0.2)] rounded-full animate-spin-slow" />
          {/* Center core */}
          <div className="absolute inset-[120px] rounded-full bg-gradient-to-br from-[rgba(193,39,45,0.15)] to-[rgba(0,212,255,0.05)] border border-[rgba(193,39,45,0.3)] flex items-center justify-center">
            <div className="text-center">
              <div className="text-[2rem] mb-1">⚡</div>
              <div className="text-[10px] font-bold text-[#e63939] tracking-widest uppercase" style={{ fontFamily:"var(--font-mono)" }}>ZedroLabs</div>
            </div>
          </div>
          {/* Orbiting dots */}
          {[0, 72, 144, 216, 288].map((deg, i) => (
            <div key={i} className="absolute w-2 h-2 rounded-full"
              style={{ top:"50%", left:"50%", transform:`rotate(${deg}deg) translateX(188px) rotate(-${deg}deg) translate(-50%,-50%)`, background: i%2===0 ? "#c1272d" : "#00d4ff", boxShadow: i%2===0 ? "0 0 8px #c1272d" : "0 0 8px #00d4ff", animation: `orbit ${10+i*2}s linear infinite` }} />
          ))}
        </div>

        {/* Content */}
        <div className="section-wrap relative z-10 w-full">
          <div className="max-w-[760px] py-24">

            {/* Live badge */}
            <div className="inline-flex items-center gap-2.5 border border-[rgba(193,39,45,0.3)] rounded-full px-4 py-2 text-[12px] font-medium text-[#e63939] mb-8 bg-[rgba(193,39,45,0.06)]"
              style={{ fontFamily:"var(--font-mono)", animation:"fadeIn 0.6s ease both" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#e63939] animate-pulse" />
              Rawalpindi, Pakistan · Available for new projects
            </div>

            {/* Headline */}
            <h1 className="t-hero text-[#f0f4ff] mb-6" style={{ animation:"slideUp 0.7s 0.1s ease both", animationFillMode:"forwards" }}>
              We Build<br />
              <span className="text-gradient">Digital</span><br />
              <span className="text-outline">Empires.</span>
            </h1>

            {/* Sub */}
            <p className="text-[clamp(1rem,1.6vw,1.15rem)] text-[#a8b8d8] max-w-[560px] mb-6 leading-relaxed"
              style={{ animation:"slideUp 0.7s 0.2s ease both",  animationFillMode:"forwards" }}>
              Custom software · AI & ML · Web3 & Blockchain · Medical Billing & RCM ·
              Virtual Assistants · Dedicated Teams from{" "}
              <strong className="text-[#f0f4ff]">$800/mo</strong>
            </p>

            {/* Service badges */}
            <div className="flex flex-wrap gap-2.5 mb-10"
              style={{ animation:"slideUp 0.7s 0.3s ease both",  animationFillMode:"forwards" }}>
              {BADGES.map((b) => (
                <span key={b.label}
                  className="px-3 py-1.5 rounded-lg text-[11px] font-bold tracking-wider uppercase"
                  style={{ background:b.color, border:`1px solid ${b.border}`, color:b.text }}>
                  {b.label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-4 flex-wrap mb-12"
              style={{ animation:"slideUp 0.7s 0.4s ease both",  animationFillMode:"forwards" }}>
              <Link href="/contact" className="btn-primary text-base py-4 px-8">
                <span className="relative z-10 flex items-center gap-2">
                  Get Your Free Quote <ArrowRight size={16} />
                </span>
              </Link>
              <Link href="/services" className="btn-ghost text-base py-4 px-8">
                Explore Services
              </Link>
            </div>

            {/* Trust signals */}
            <div className="flex items-center gap-6 flex-wrap"
              style={{ animation:"slideUp 0.7s 0.45s ease both",  animationFillMode:"forwards" }}>
              {TRUST.map((t) => (
                <div key={t.label} className="flex items-center gap-2 text-[12px] text-[#5a7090]">
                  <span className="text-[#c1272d]">{t.icon}</span>
                  {t.label}
                </div>
              ))}
              <div className="w-px h-4 bg-[#1a2540]" />
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_,i) => (
                  <span key={i} className="text-[#f5a623] text-xs">★</span>
                ))}
                <span className="text-[12px] text-[#5a7090]">5.0 — 98% Satisfaction</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-5 mt-16 pt-12 border-t border-[#1a2540]"
              style={{ animation:"slideUp 0.7s 0.5s ease both",  animationFillMode:"forwards" }}>
              {STATS.map((s) => (
                <div key={s.label} className="flex flex-col gap-1 stat-line">
                  <div className="text-[2rem] font-black text-[#f0f4ff] leading-none" style={{ fontFamily:"var(--font-display)" }}>
                    <Counter to={s.num} suffix={s.suffix} />
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.06em] text-[#5a7090]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-gradient-to-r from-[#c1272d] to-[#a81f24] py-3.5 overflow-hidden border-y border-[rgba(255,255,255,0.06)]" aria-hidden="true">
        <div className="flex gap-12 marquee w-max">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="text-white/90 text-[11px] font-bold tracking-[0.14em] uppercase whitespace-nowrap flex items-center gap-4"
              style={{ fontFamily:"var(--font-mono)" }}>
              {item}
              <span className="text-white/25 text-[8px]">◆</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

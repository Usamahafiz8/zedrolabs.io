"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ArrowRight, Sparkles } from "lucide-react";

/* Bump this key if you ever want a dismissed popup to reappear for a new promo. */
const STORAGE_KEY = "zl_promo_popup_dismissed_v1";
const SHOW_AFTER_MS = 4500;

const HIGHLIGHTS = [
  "Senior AI engineer embedded in your team, not a black-box vendor",
  "LLM agents, RAG pipelines & internal copilots shipped into your product",
  "Discovery sprint first: prototypes before commitment",
];

export default function PromoPopup() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname?.startsWith("/contact")) return;
    if (window.localStorage.getItem(STORAGE_KEY)) return;

    const timer = setTimeout(() => setOpen(true), SHOW_AFTER_MS);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") dismiss(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const dismiss = () => {
    setOpen(false);
    window.localStorage.setItem(STORAGE_KEY, "1");
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-popup-heading"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={dismiss} aria-hidden="true" />

      {/* Card */}
      <div className="relative w-full max-w-[480px] rounded-2xl border border-[rgba(124,58,237,0.35)] bg-[#0d1220] shadow-[0_30px_100px_rgba(0,0,0,0.7)] overflow-hidden animate-fade-in">
        {/* Glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(124,58,237,0.25) 0%,transparent 70%)" }} />

        <button
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-white/5 text-[#a8b8d8] hover:text-[#f0f4ff] hover:bg-white/10 transition-colors"
        >
          <X size={16} />
        </button>

        <div className="relative z-[1] p-7 md:p-8">
          <div className="inline-flex items-center gap-2 border border-[rgba(124,58,237,0.35)] rounded-full px-3 py-1.5 text-[11px] font-bold text-[#a78bfa] mb-5"
            style={{ fontFamily: "var(--font-mono)", background: "rgba(124,58,237,0.08)" }}>
            <Sparkles size={12} /> New Service
          </div>

          <h3 id="promo-popup-heading" className="t-h3 text-[#f0f4ff] mb-3" style={{ fontFamily: "var(--font-display)" }}>
            AI Forward-Deployed<br />Engineering
          </h3>
          <p className="text-[#a8b8d8] text-[14px] leading-relaxed mb-6">
            We embed senior AI engineers directly into your team to design, build, and ship real
            LLM features, agents, and internal tooling, inside your product, on your timeline.
          </p>

          <ul className="space-y-2.5 mb-7">
            {HIGHLIGHTS.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-[13px] text-[#a8b8d8]">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#7c3aed] flex-shrink-0" />
                {h}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/services#ai-fde"
              onClick={dismiss}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg,#7c3aed,#5b3df0)" }}
            >
              Explore the Service <ArrowRight size={14} />
            </Link>
            <button onClick={dismiss} className="btn-ghost justify-center text-sm">
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

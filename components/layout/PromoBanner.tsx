"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { X, Sparkles } from "lucide-react";

/* Bump this key if you ever want a dismissed banner to reappear for a new promo. */
const STORAGE_KEY = "zl_promo_banner_dismissed_v1";

export default function PromoBanner() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const dismissed = window.localStorage.getItem(STORAGE_KEY);
    if (!dismissed) setVisible(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("has-banner", visible);
    return () => document.documentElement.classList.remove("has-banner");
  }, [visible, mounted]);

  const dismiss = () => {
    setVisible(false);
    window.localStorage.setItem(STORAGE_KEY, "1");
  };

  if (!mounted || !visible) return null;

  return (
    <div
      className="fixed top-0 inset-x-0 z-[60] h-10 flex items-center justify-center bg-gradient-to-r from-[#5b3df0] via-[#7c3aed] to-[#5b3df0] text-white"
      role="region"
      aria-label="Promotion"
    >
      <div className="max-w-[1220px] w-full mx-auto px-5 flex items-center justify-center gap-2.5">
        <Link
          href="/services#ai-fde"
          className="flex items-center gap-2 text-[12px] sm:text-[13px] font-semibold text-center hover:opacity-90 transition-opacity"
        >
          <Sparkles size={13} className="flex-shrink-0" />
          <span className="truncate">
            New: <span className="hidden sm:inline">Introducing</span> AI Forward-Deployed Engineering, embedded AI engineers, shipping in weeks
          </span>
          <span className="hidden md:inline underline decoration-white/40 underline-offset-2 flex-shrink-0">Learn more →</span>
        </Link>
        <button
          onClick={dismiss}
          aria-label="Dismiss promotion"
          className="absolute right-3 sm:right-5 p-1 rounded-md hover:bg-white/15 transition-colors flex-shrink-0"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}

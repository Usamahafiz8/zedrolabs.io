"use client";
import { useEffect, useRef, ReactNode } from "react";

/* ── Scroll parallax depth ──
   Offsets children vertically as a fraction of scroll position, giving
   layered depth to background decoration (blobs, rings). Pure transform,
   passive scroll listener, no animation library. Respects
   prefers-reduced-motion and stops offsetting once the element scrolls
   well out of view (perf: avoids updating transforms for off-screen
   elements forever on a long page). */
export function Parallax({ children, speed = 0.15, className }: { children: ReactNode; speed?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;

    let ticking = false;
    const update = () => {
      ticking = false;
      const rect = el.getBoundingClientRect();
      // Only animate while the element is within ~1.5 viewport heights of the screen.
      if (rect.bottom < -window.innerHeight || rect.top > window.innerHeight * 2.5) return;
      el.style.transform = `translateY(${window.scrollY * speed}px)`;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return <div ref={ref} className={className} style={{ willChange: "transform" }}>{children}</div>;
}

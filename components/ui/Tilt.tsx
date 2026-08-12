"use client";
import { useRef, ReactNode, MouseEvent } from "react";

/* ── 3D cursor-tilt wrapper ──
   Wraps any card in a perspective container and rotates it toward the
   cursor on hover. Pure CSS transform driven by JS mouse position, no
   animation library. Respects prefers-reduced-motion. */
export function Tilt({ children, className, max = 8 }: { children: ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;   // 0 → 1
    const py = (e.clientY - rect.top) / rect.height;    // 0 → 1
    const rotateY = (px - 0.5) * max * 2;
    const rotateX = (0.5 - py) * max * 2;
    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015,1.015,1.015)`;
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
  };

  return (
    <div ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}
      className={className}
      style={{
        transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1), border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
        willChange: "transform",
      }}>
      {children}
    </div>
  );
}

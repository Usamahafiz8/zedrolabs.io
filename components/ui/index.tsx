"use client";
import { useEffect, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ── Scroll Reveal ── */
type RevealProps = { children: ReactNode; className?: string; delay?: number; dir?: "up"|"left"|"right" };
export function Reveal({ children, className, delay = 0, dir = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const cls = dir === "left" ? "reveal-left" : dir === "right" ? "reveal-right" : "reveal";
    el.classList.add(cls);
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => el.classList.add("show"), delay);
        obs.unobserve(el);
      }
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay, dir]);
  return <div ref={ref} className={className}>{children}</div>;
}

/* ── Section Label ── */
export function Label({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("label", className)}>{children}</div>;
}

/* ── Section Heading ── */
export function Heading({ children, className, size = "h2" }: { children: ReactNode; className?: string; size?: "h1"|"h2"|"h3" }) {
  const cls = size === "h1" ? "t-h1" : size === "h3" ? "t-h3" : "t-h2";
  if (size === "h1") return <h1 className={cn(cls, className)}>{children}</h1>;
  if (size === "h3") return <h3 className={cn(cls, className)}>{children}</h3>;
  return <h2 className={cn(cls, className)}>{children}</h2>;
}

/* ── Red separator line ── */
export function RedLine() {
  return <div className="h-px bg-gradient-to-r from-transparent via-[#c1272d] to-transparent" />;
}

/* ── Market Badge ── */
export function Badge({ market }: { market: string }) {
  const cls = market === "B2B" ? "badge-b2b" : market === "B2C" ? "badge-b2c" : market === "B2G" ? "badge-b2g" : market === "Web3" ? "badge-web3" : "badge-b2b";
  return <span className={cls}>{market}</span>;
}

/* ── FAQ Item ── */
export function FAQAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-[#1a2540]">
      {faqs.map((faq, i) => (
        <details key={i} className="group py-5">
          <summary className="flex items-center justify-between gap-4 text-[#f0f4ff] font-semibold text-[15px] select-none list-none cursor-pointer">
            <span>{faq.q}</span>
            <span className="text-[#c1272d] text-2xl font-light flex-shrink-0 transition-transform duration-300 group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 text-sm text-[#a8b8d8] leading-relaxed">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}

/* ── Particle Canvas ── */
export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d"); if (!ctx) return;
    let W = canvas.width  = canvas.offsetWidth;
    let H = canvas.height = canvas.offsetHeight;
    const particles: { x:number; y:number; r:number; dx:number; dy:number; alpha:number }[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push({ x: Math.random()*W, y: Math.random()*H, r: Math.random()*1.5+0.5, dx:(Math.random()-0.5)*0.4, dy:(Math.random()-0.5)*0.4, alpha: Math.random()*0.6+0.1 });
    }
    let raf: number;
    const draw = () => {
      ctx.clearRect(0,0,W,H);
      particles.forEach(p => {
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle = `rgba(193,39,45,${p.alpha})`; ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x<0||p.x>W) p.dx*=-1;
        if (p.y<0||p.y>H) p.dy*=-1;
      });
      // Connect close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i+1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx*dx+dy*dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(193,39,45,${0.12*(1-dist/100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x,particles[i].y);
            ctx.lineTo(particles[j].x,particles[j].y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    const resize = () => { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize",resize); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />;
}

/* ── Animated counter ── */
export function Counter({ to, suffix, duration = 2000 }: { to: number; suffix: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let start = 0; const step = to / (duration / 16);
        const timer = setInterval(() => {
          start = Math.min(start + step, to);
          el.textContent = Math.round(start) + suffix;
          if (start >= to) clearInterval(timer);
        }, 16);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, suffix, duration]);
  return <span ref={ref}>0{suffix}</span>;
}

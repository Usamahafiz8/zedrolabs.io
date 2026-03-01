import Link from "next/link";
import { VA_PRICING } from "@/lib/data";
import { Label, Heading, Reveal } from "@/components/ui";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function VAHighlight() {
  return (
    <section className="py-section bg-[#0d1220] relative overflow-hidden" id="vas">
      <div className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none"
        style={{ background:"radial-gradient(ellipse,rgba(245,166,35,0.06) 0%,transparent 70%)", filter:"blur(60px)" }} />

      <div className="section-wrap relative z-10">
        <div className="text-center mb-14">
          <Reveal>
            <Label className="justify-center">// Virtual Assistants</Label>
            <Heading className="mb-4">
              Expert VAs From<br />
              <span className="text-gradient">$400/Month</span>
            </Heading>
            <p className="text-[#a8b8d8] max-w-[520px] mx-auto">
              Pre-vetted, English-fluent virtual assistants ready in 3–5 days. Executive, customer support,
              social media, bookkeeping, and more.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[960px] mx-auto">
          {VA_PRICING.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 100}>
              <div className={cn(
                "card flex flex-col p-8 relative transition-all duration-300 hover:-translate-y-2",
                tier.featured ? "border-[#c1272d] shadow-[0_0_40px_rgba(193,39,45,0.25)] bg-gradient-to-b from-[#0f1829] to-[#12101d]" : "hover:border-[rgba(193,39,45,0.3)]"
              )}>
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#c1272d] text-white text-[10px] font-bold tracking-[0.1em] uppercase px-3.5 py-1 rounded-full whitespace-nowrap">
                    {tier.badge}
                  </div>
                )}

                <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#e63939] mb-3" style={{ fontFamily:"var(--font-mono)" }}>
                  {tier.name}
                </div>
                <div className="text-[12px] text-[#5a7090] mb-2">{tier.hours}</div>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-[2.8rem] font-black text-[#f0f4ff] leading-none" style={{ fontFamily:"var(--font-display)" }}>
                    ${tier.price.toLocaleString()}
                  </span>
                </div>
                <div className="text-[12px] text-[#5a7090] pb-5 border-b border-[#1a2540] mb-5">/{tier.period}</div>

                <ul className="space-y-2.5 flex-1 mb-6">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13px] text-[#a8b8d8] border-b border-white/[0.03] pb-2.5 last:border-0">
                      <Check size={13} className="text-[#e63939] mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href="/contact"
                  className={cn("w-full justify-center py-3.5 text-sm flex items-center gap-2", tier.featured ? "btn-primary" : "btn-ghost")}>
                  Hire VA Now
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <p className="text-center text-[13px] text-[#5a7090] mt-8">
            1-week free trial on all full-time plans · 24hr replacement guarantee ·{" "}
            <Link href="/virtual-assistants" className="text-[#e63939] hover:underline">Learn more →</Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

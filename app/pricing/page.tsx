import type { Metadata } from "next";
import Link from "next/link";
import PricingTabs from "@/components/sections/PricingTabs";
import { Label, Heading, Reveal, RedLine, FAQAccordion } from "@/components/ui";
import { CTASection } from "@/components/sections/SharedSections";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing — Transparent Plans for Every Service",
  description: "Transparent pricing for virtual assistants, dedicated dev teams, custom software, Web3/blockchain, medical billing, mobile apps, and cloud/DevOps. Custom quotes always available.",
  keywords: [
    "ZedroLabs pricing", "virtual assistant cost", "dedicated dev team pricing",
    "software development cost Pakistan", "web3 development pricing",
    "medical billing service cost", "mobile app development price",
  ],
};

const INCLUDED = [
  { icon: "🛡️", label: "NDA before any technical discussion" },
  { icon: "⚡", label: "Response within 24 hours" },
  { icon: "🤝", label: "Free initial consultation" },
  { icon: "💰", label: "Milestone-based payment options" },
  { icon: "🔄", label: "Agile delivery & weekly updates" },
  { icon: "📋", label: "Full IP transfer on completion" },
  { icon: "🌍", label: "Clients on 3 continents served" },
  { icon: "⭐", label: "98% client satisfaction rate" },
];

const PRICING_FAQS = [
  {
    q: "Can I negotiate the pricing?",
    a: "Absolutely. All our listed prices are starting points, not ceilings. If a quoted price doesn't fit your budget, tell us what you have to work with and we'll find a structure that makes sense — whether that's a phased approach, reduced scope, or a different engagement model.",
  },
  {
    q: "What payment terms do you offer?",
    a: "For project work, we offer milestone-based payments (typically 30% upfront, 40% at mid-point, 30% on delivery). For retainer-based services like VAs and dev teams, billing is monthly in advance. We also accept wire transfer, PayPal, and Wise.",
  },
  {
    q: "Do you offer discounts for long-term contracts?",
    a: "Yes. Clients committing to 6+ months on dev teams or VAs receive 5–10% off the monthly rate. Annual commitments receive additional discounts. Reach out to discuss volume and loyalty pricing.",
  },
  {
    q: "Can I start with a smaller engagement and scale up?",
    a: "Yes, and we encourage it. Many clients start with a part-time VA or a single junior developer, then expand as trust builds. For project work, we can start with a paid discovery phase before committing to full development.",
  },
  {
    q: "Are there any hidden fees?",
    a: "Never. All costs are outlined in the proposal and contract before work begins. Third-party costs (hosting, APIs, audit firm fees) are itemized separately and require your approval. What we quote is what you pay.",
  },
  {
    q: "What if my project goes over the estimated budget?",
    a: "For fixed-price engagements, the quoted price is the final price — scope changes are the only reason costs increase, and those are agreed upon before any additional work begins. For T&M projects, we flag budget thresholds proactively.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 bg-[#080c14] relative overflow-hidden min-h-[55vh] flex items-center">
        <div className="blob-1" style={{ top:"-200px", right:"-100px", opacity:0.35 }} aria-hidden="true" />
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(193,39,45,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(193,39,45,0.04) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
            WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 0%, black 30%, transparent 100%)",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 0%, black 30%, transparent 100%)"
          }} />

        <div className="section-wrap relative z-10 py-20">
          <div className="max-w-[700px]">
            <div className="inline-flex items-center gap-2 border border-[rgba(193,39,45,0.3)] rounded-full px-4 py-2 text-[11px] font-bold text-[#e63939] mb-8"
              style={{ fontFamily:"var(--font-mono)", background:"rgba(193,39,45,0.06)" }}>
              Transparent · Flexible · No Hidden Fees
            </div>
            <h1 className="t-hero text-[#f0f4ff] mb-5">
              Pricing That<br />
              <span className="text-gradient">Works for You</span>
            </h1>
            <p className="text-[#a8b8d8] text-lg max-w-[520px] leading-relaxed mb-8">
              Clear pricing across every service we offer. And if a price doesn&apos;t fit your budget —
              just tell us. We work with clients of all sizes and always find a way.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/contact" className="btn-primary"><span>Get a Free Quote →</span></Link>
              <a href="mailto:sales@zedrolabs.io" className="btn-ghost">sales@zedrolabs.io</a>
            </div>
          </div>
        </div>
      </section>

      <RedLine />

      {/* Pricing tabs (client component) */}
      <PricingTabs />

      {/* What's included in every engagement */}
      <section className="py-section bg-[#080c14] border-t border-[#1a2540]">
        <div className="section-wrap">
          <Reveal>
            <Label> Standard Benefits</Label>
            <Heading className="mb-3">Included in <span className="text-gradient">Every Engagement</span></Heading>
            <p className="text-[#a8b8d8] text-[15px] max-w-[480px] mb-12">
              Regardless of service or budget, every client gets these as standard — not add-ons.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {INCLUDED.map((item, i) => (
              <Reveal key={item.label} delay={i * 50}>
                <div className="card p-5 flex items-center gap-4 hover:border-[rgba(193,39,45,0.3)] transition-colors">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <span className="text-[13px] text-[#a8b8d8] leading-snug">{item.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Flexible pricing callout */}
      <section className="py-20 bg-[#0d1220] border-t border-[#1a2540]">
        <div className="section-wrap">
          <div className="max-w-[820px] mx-auto">
            <Reveal>
              <div className="card p-10 md:p-14 text-center relative overflow-hidden">
                {/* Background glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] pointer-events-none"
                  style={{ background:"radial-gradient(ellipse,rgba(193,39,45,0.12) 0%,transparent 70%)" }} />

                <div className="relative z-10">
                  <div className="text-4xl mb-5">💬</div>
                  <h2 className="t-h2 text-[#f0f4ff] mb-4">
                    Prices Are a<br /><span className="text-gradient">Starting Point</span>
                  </h2>
                  <p className="text-[#a8b8d8] max-w-[540px] mx-auto mb-4 leading-relaxed">
                    Every client has a different budget and different needs. Our pricing is transparent
                    but never rigid. If a listed price doesn&apos;t work for you — tell us what does,
                    and we&apos;ll build a plan around it.
                  </p>
                  <p className="text-[#5a7090] text-sm mb-8">
                    We&apos;d rather adjust scope or structure than lose a great client over a number.
                  </p>

                  <div className="flex gap-3 justify-center flex-wrap mb-8">
                    <Link href="/contact" className="btn-primary"><span>Discuss Your Budget →</span></Link>
                    <a href="https://wa.me/923000000000" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                      WhatsApp Us
                    </a>
                  </div>

                  <div className="flex items-center justify-center gap-6 flex-wrap text-[12px] text-[#5a7090]">
                    {["No commitment required", "NDA before discussions", "Response within 24hrs"].map((t) => (
                      <span key={t} className="flex items-center gap-1.5">
                        <Check size={11} className="text-[#e63939]" /> {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-section bg-[#080c14] border-t border-[#1a2540]">
        <div className="max-w-[800px] mx-auto px-5">
          <Reveal>
            <Label> Pricing FAQ</Label>
            <Heading className="mb-10">Questions About <span className="text-gradient">Pricing</span></Heading>
          </Reveal>
          <Reveal delay={100}>
            <FAQAccordion faqs={PRICING_FAQS} />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Label, Heading, Reveal } from "@/components/ui";
import { CheckCircle, ArrowRight } from "lucide-react";

const FEATURES = [
  "Branded invoices with your logo and colors",
  "Auto-numbered invoicing, no manual tracking",
  "Payment status dashboard: see who's paid at a glance",
  "PDF sharing and integrated bank details",
  "Free to start, no credit card required",
];

export default function ProductHighlight() {
  return (
    <section className="py-section bg-[#0d1220] relative overflow-hidden" id="invoice-control">
      <div className="absolute -top-40 left-[15%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(193,39,45,0.08) 0%,transparent 70%)", filter: "blur(60px)" }} />

      <div className="section-wrap relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal dir="left">
            <div className="relative rounded-2xl overflow-hidden border border-[#1a2540] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[16/10]">
                <Image src="/portfolio/invoice-control.jpg" alt="Invoice Control app screenshot" fill
                  sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="inline-flex items-center gap-2 border border-[rgba(193,39,45,0.3)] rounded-full px-4 py-2 text-[11px] font-bold text-[#e63939] mb-6"
              style={{ fontFamily: "var(--font-mono)", background: "rgba(193,39,45,0.06)" }}>
              🧾 Built by ZedroLabs
            </div>
            <Label> Our Own Product</Label>
            <Heading className="mb-5">
              Meet <span className="text-gradient">Invoice Control</span>
            </Heading>
            <p className="text-[#a8b8d8] leading-relaxed mb-8">
              We don&apos;t just build software for clients, we run our own. Invoice Control is our
              in-house invoicing app for freelancers and startup founders: create branded invoices in
              seconds and track who&apos;s paid, without the spreadsheet.
            </p>

            <ul className="space-y-3 mb-8">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[14px] text-[#a8b8d8]">
                  <CheckCircle size={15} className="text-[#e63939] mt-0.5 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex gap-3 flex-wrap">
              <a href="https://invoice.zedrolabs.io" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <span className="flex items-center gap-2">Try Invoice Control Free <ArrowRight size={15} /></span>
              </a>
              <Link href="/contact" className="btn-ghost">Want Something Similar Built?</Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

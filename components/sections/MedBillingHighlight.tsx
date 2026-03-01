import Link from "next/link";
import { Label, Heading, Reveal } from "@/components/ui";
import { ArrowRight, CheckCircle } from "lucide-react";

const RESULTS = [
  { num: "34%", label: "Average collections increase" },
  { num: "98%", label: "Claim acceptance rate"        },
  { num: "72hr",label: "Average claim turnaround"     },
  { num: "30+", label: "EMR/EHR integrations"         },
];

const FEATURES = [
  "ICD-10, CPT & HCPCS coding across all specialties",
  "Real-time eligibility verification",
  "Automated denial management & appeals",
  "HIPAA-compliant processes & BAA signed",
  "Dedicated billing specialists per practice",
  "Custom reporting & performance dashboards",
];

export default function MedBillingHighlight() {
  return (
    <section className="py-section bg-[#080c14] relative overflow-hidden" id="medical-billing">
      <div className="absolute -bottom-40 left-[10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background:"radial-gradient(circle,rgba(0,255,136,0.06) 0%,transparent 70%)", filter:"blur(60px)" }} />

      <div className="section-wrap relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: stats */}
          <Reveal dir="left">
            <div className="card p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full"
                style={{ background:"radial-gradient(circle,rgba(0,255,136,0.1) 0%,transparent 70%)" }} />

              <div className="text-4xl mb-4">🏥</div>
              <h3 className="t-h3 text-[#f0f4ff] mb-2" style={{ fontFamily:"var(--font-display)" }}>
                Medical Billing That<br />Actually Performs
              </h3>
              <p className="text-sm text-[#a8b8d8] mb-8">Measurable results for practices of all sizes</p>

              <div className="grid grid-cols-2 gap-4">
                {RESULTS.map((r) => (
                  <div key={r.label} className="bg-[rgba(0,255,136,0.04)] border border-[rgba(0,255,136,0.1)] rounded-xl p-4">
                    <div className="text-[2rem] font-black text-[#00ff88]" style={{ fontFamily:"var(--font-display)" }}>{r.num}</div>
                    <div className="text-[11px] text-[#5a7090] mt-1">{r.label}</div>
                  </div>
                ))}
              </div>

              {/* Scan line visual */}
              <div className="relative mt-6 h-1 bg-[#1a2540] rounded-full overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-3/4 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-full"
                  style={{ animation:"loadBar 2s ease 0.5s both" }} />
              </div>
              <div className="flex justify-between text-[10px] text-[#5a7090] mt-1">
                <span>Avg. Collection Rate</span><span className="text-[#00ff88]">97.2%</span>
              </div>
            </div>
          </Reveal>

          {/* Right: content */}
          <Reveal delay={150}>
            <Label> Medical Billing & RCM</Label>
            <Heading className="mb-5">
              Maximize Your<br />
              <span style={{ color:"#00ff88" }}>Revenue Cycle</span>
            </Heading>
            <p className="text-[#a8b8d8] leading-relaxed mb-8">
              Our HIPAA-certified billing specialists and RCM platform help healthcare providers increase
              collections, reduce denials, and focus on patient care — not paperwork. We sign BAAs and
              handle everything from coding to follow-up.
            </p>

            <ul className="space-y-3 mb-8">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[14px] text-[#a8b8d8]">
                  <CheckCircle size={15} className="text-[#00ff88] mt-0.5 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex gap-3">
              <Link href="/medical-billing" className="btn-primary">
                <span className="flex items-center gap-2">Medical Billing Services <ArrowRight size={15} /></span>
              </Link>
              <Link href="/contact" className="btn-ghost">Free RCM Audit</Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

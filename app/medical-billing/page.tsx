import type { Metadata } from "next";
import Link from "next/link";
import { MEDICAL_BILLING_SERVICES } from "@/lib/data";
import { Label, Heading, Reveal, RedLine, FAQAccordion } from "@/components/ui";
import { CTASection } from "@/components/sections/SharedSections";
import { Check, TrendingUp, Clock, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Medical Billing & Revenue Cycle Management (RCM) Services",
  description: "HIPAA-compliant medical billing, RCM, coding, denial management, and EHR integration. Increase collections by 30%+. Free RCM audit for all practices.",
  keywords: ["medical billing services", "revenue cycle management", "RCM company Pakistan", "HIPAA compliant billing", "medical coding", "denial management", "healthcare billing outsourcing"],
};

const SPECIALTIES = [
  "Internal Medicine", "Family Practice", "Cardiology", "Orthopedics",
  "Oncology", "Radiology", "Mental Health", "Physical Therapy",
  "Urgent Care", "Pediatrics", "OB/GYN", "Dermatology",
];

const MED_FAQS = [
  { q: "Are you HIPAA compliant?", a: "Yes, completely. We sign Business Associate Agreements (BAA) with all healthcare clients, use end-to-end encrypted data transfer, and follow strict HIPAA protocols. Our team is HIPAA-certified and we conduct annual compliance audits." },
  { q: "Which EHR/EMR systems do you integrate with?", a: "We integrate with 30+ systems including Epic, Cerner, Athena, eClinicalWorks, DrChrono, Kareo, Practice Fusion, NextGen, and many more. If you use a system not listed, we can likely still integrate." },
  { q: "How quickly will you see results?", a: "Most practices see measurable improvement within 30–60 days — reduced denial rates, faster payment posting, and improved AR days. Full results (30%+ collection improvement) typically take 90–120 days." },
  { q: "Do you handle patient billing and collections?", a: "Yes. We manage the complete patient billing cycle — statement generation, payment plan setup, patient calls, and collections. All with compassionate, HIPAA-trained staff." },
];

export default function MedicalBillingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 bg-[#080c14] relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(0,255,136,0.08) 0%,transparent 70%)", filter:"blur(60px)" }} />
        <div className="absolute bottom-0 left-[20%] w-[400px] h-[300px] rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(193,39,45,0.08) 0%,transparent 70%)", filter:"blur(60px)" }} />

        <div className="section-wrap relative z-10 py-24">
          <div className="max-w-[760px]">
            <div className="inline-flex items-center gap-2.5 border border-[rgba(0,255,136,0.3)] rounded-full px-4 py-2 text-[12px] font-bold text-[#00ff88] mb-8"
              style={{ fontFamily:"var(--font-mono)", background:"rgba(0,255,136,0.05)" }}>
              🏥 HIPAA-Certified · BAA Signed · 98% Claim Acceptance
            </div>
            <h1 className="t-hero text-[#f0f4ff] mb-6">
              Medical Billing<br />
              <span style={{ color:"#00ff88" }}>That Pays</span><br />
              <span className="text-outline">More.</span>
            </h1>
            <p className="text-[#a8b8d8] text-lg max-w-[560px] mb-8">
              HIPAA-compliant medical billing, RCM, and coding services that increase your collections
              by 30%+ and free your staff to focus on patients.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              {[
                { icon:<TrendingUp size={16}/>, label:"+34% avg collection increase" },
                { icon:<Clock size={16}/>,      label:"72hr average claim turnaround" },
                { icon:<Shield size={16}/>,     label:"HIPAA-certified & BAA signed" },
              ].map((t) => (
                <div key={t.label} className="flex items-center gap-2 text-[13px] text-[#00ff88] bg-[rgba(0,255,136,0.06)] border border-[rgba(0,255,136,0.15)] rounded-lg px-3 py-2">
                  {t.icon} {t.label}
                </div>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap">
              <Link href="/contact" className="btn-primary">Get Free RCM Audit →</Link>
              <Link href="/contact" className="btn-ghost">Schedule a Demo</Link>
            </div>
          </div>
        </div>
      </section>

      <RedLine />

      {/* Services */}
      <section className="py-section bg-[#0d1220]">
        <div className="section-wrap">
          <Reveal>
            <Label> RCM Services</Label>
            <Heading className="mb-12">Complete Revenue Cycle<br /><span className="text-gradient">Management</span></Heading>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {MEDICAL_BILLING_SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <div className="card p-6 h-full group hover:border-[rgba(0,255,136,0.3)]">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{s.icon}</div>
                  <h3 className="font-bold text-[#f0f4ff] mb-2 text-[1rem]" style={{ fontFamily:"var(--font-display)" }}>{s.title}</h3>
                  <p className="text-[13px] text-[#5a7090] leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-20 bg-[#080c14]">
        <div className="section-wrap">
          <Reveal>
            <Label> Specialties We Cover</Label>
            <Heading className="mb-10">All Medical <span className="text-gradient">Specialties</span></Heading>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-wrap gap-3">
              {SPECIALTIES.map((s) => (
                <span key={s} className="px-4 py-2 rounded-xl text-[13px] text-[#00ff88] border border-[rgba(0,255,136,0.2)] bg-[rgba(0,255,136,0.04)] hover:bg-[rgba(0,255,136,0.1)] transition-colors font-medium">
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="py-section bg-[#0d1220]">
        <div className="section-wrap">
          <Reveal><Label> Our Process</Label><Heading className="mb-12">RCM Workflow</Heading></Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { n:"01", title:"Patient Registration",    desc:"Demographics, insurance, eligibility verification" },
              { n:"02", title:"Coding & Charge Entry",   desc:"ICD-10, CPT coding by certified specialists" },
              { n:"03", title:"Claims Submission",        desc:"Scrubbed & submitted within 24hrs via EDI" },
              { n:"04", title:"Payment Posting",          desc:"EOB/ERA posting, adjustment, reconciliation" },
              { n:"05", title:"Denial Management",        desc:"Systematic follow-up, appeals, root cause fix" },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 80}>
                <div className="card p-6 h-full relative">
                  <div className="text-[2.5rem] font-black text-[rgba(0,255,136,0.15)] leading-none mb-3" style={{ fontFamily:"var(--font-display)" }}>{step.n}</div>
                  <h4 className="font-bold text-[#f0f4ff] mb-2 text-sm" style={{ fontFamily:"var(--font-display)" }}>{step.title}</h4>
                  <p className="text-[12px] text-[#5a7090]">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-section bg-[#080c14]">
        <div className="max-w-[800px] mx-auto px-5">
          <Reveal><Label> FAQ</Label><Heading className="mb-10">Medical Billing Questions</Heading></Reveal>
          <Reveal delay={100}><FAQAccordion faqs={MED_FAQS} /></Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}

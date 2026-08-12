import Link from "next/link";
import { Label, Heading, Reveal } from "@/components/ui";
import { ArrowRight, Sparkles } from "lucide-react";

const HIGHLIGHTS = [
  { icon: "🧑‍💻", label: "Embedded Engineers", desc: "Senior AI engineers inside your repo & sprints" },
  { icon: "🔌", label: "LLM & Agents",         desc: "RAG pipelines, tool-calling agents, orchestration" },
  { icon: "🛠️", label: "Internal Copilots",    desc: "Custom tooling built on your own data" },
  { icon: "📊", label: "Guardrails & Evals",    desc: "Production monitoring, hallucination guardrails" },
  { icon: "🔗", label: "API & Data Integration",desc: "Wired into your CRM, ERP & internal systems" },
  { icon: "🎯", label: "Outcome-Tied",           desc: "Weekly reporting tied to real business KPIs" },
];

export default function AIHighlight() {
  return (
    <section className="py-section bg-[#0d1220] relative overflow-hidden" id="ai-fde">
      {/* Grid bg */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage:"linear-gradient(rgba(124,58,237,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(124,58,237,0.04) 1px,transparent 1px)", backgroundSize:"48px 48px" }} />

      {/* Violet glow */}
      <div className="absolute -top-40 left-[8%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background:"radial-gradient(circle,rgba(124,58,237,0.12) 0%,transparent 70%)", filter:"blur(40px)" }} />

      <div className="section-wrap relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <Reveal dir="left">
            <div className="inline-flex items-center gap-2 border border-[rgba(124,58,237,0.35)] rounded-full px-3.5 py-1.5 text-[11px] font-bold text-[#a78bfa] mb-5"
              style={{ fontFamily:"var(--font-mono)", background:"rgba(124,58,237,0.08)" }}>
              <Sparkles size={12} /> New Service
            </div>
            <Label> AI Forward-Deployed Engineering</Label>
            <Heading className="mb-5">
              Ship AI That<br />
              <span style={{ color:"#a78bfa" }}>Actually Works</span>
            </Heading>
            <p className="text-[#a8b8d8] leading-relaxed mb-8">
              Most AI initiatives stall in slide decks. We embed senior AI engineers directly inside
              your team, your repo, and your sprint cycle, shipping real LLM features, agents, and
              internal copilots into your product, not a proof-of-concept that never ships.
            </p>

            <div className="flex flex-wrap gap-2.5 mb-8">
              {["OpenAI", "Anthropic / Claude", "RAG Pipelines", "Agent Orchestration", "Vector DBs"].map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-lg text-[11px] font-bold text-[#a78bfa] border border-[rgba(124,58,237,0.25)] bg-[rgba(124,58,237,0.06)]">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap">
              <Link href="/services#ai-fde"
                className="flex items-center gap-2 py-3 px-6 rounded-xl text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                style={{ background:"linear-gradient(135deg,#7c3aed,#5b3df0)" }}>
                Explore AI Services <ArrowRight size={15} />
              </Link>
              <Link href="/contact" className="btn-ghost">Book a Discovery Sprint</Link>
            </div>
          </Reveal>

          {/* Right: feature grid */}
          <Reveal delay={150}>
            <div className="grid grid-cols-2 gap-3">
              {HIGHLIGHTS.map((h, i) => (
                <div key={h.label}
                  className="card p-5 hover:border-[rgba(124,58,237,0.35)] transition-colors"
                  style={{ animationDelay:`${i*60}ms` }}>
                  <div className="text-2xl mb-3">{h.icon}</div>
                  <div className="font-bold text-[#f0f4ff] text-sm mb-1" style={{ fontFamily:"var(--font-display)" }}>{h.label}</div>
                  <p className="text-[12px] text-[#5a7090]">{h.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

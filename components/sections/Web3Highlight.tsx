import Link from "next/link";
import { Label, Heading, Reveal } from "@/components/ui";
import { ArrowRight } from "lucide-react";

const HIGHLIGHTS = [
  { icon: "📜", label: "Smart Contracts",    desc: "Audited, gas-optimized Solidity & Rust" },
  { icon: "🏦", label: "DeFi Protocols",     desc: "AMMs, lending, yield, staking platforms" },
  { icon: "🖼️", label: "NFT Marketplaces",  desc: "Custom minting, royalties, cross-chain" },
  { icon: "🏛️", label: "DAO Governance",    desc: "On-chain voting, treasury management" },
  { icon: "🔐", label: "Security Audits",    desc: "Comprehensive contract vulnerability review" },
  { icon: "🏢", label: "Enterprise Chain",  desc: "Supply chain, document auth, private networks" },
];

export default function Web3Highlight() {
  return (
    <section className="py-section bg-[#0d1220] relative overflow-hidden" id="web3">
      {/* Hex grid bg */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage:"linear-gradient(rgba(0,212,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,0.03) 1px,transparent 1px)", backgroundSize:"48px 48px" }} />

      {/* Top cyan glow */}
      <div className="absolute -top-40 right-[10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background:"radial-gradient(circle,rgba(0,212,255,0.08) 0%,transparent 70%)", filter:"blur(40px)" }} />

      <div className="section-wrap relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <Reveal dir="left">
            <Label>// Web3 & Blockchain</Label>
            <Heading className="mb-5">
              Build the<br />
              <span style={{ color:"#00d4ff" }}>Decentralized</span><br />
              Future
            </Heading>
            <p className="text-[#a8b8d8] leading-relaxed mb-8">
              From DeFi protocols to enterprise blockchain — our Web3 team has shipped over $50M in TVL
              across Ethereum, Solana, Polygon, and more. Every contract is internally audited before deployment.
            </p>

            {/* Chain logos (text-based) */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {["Ethereum","Solana","Polygon","BSC","Arbitrum","Base","Avalanche"].map((chain) => (
                <span key={chain} className="px-3 py-1.5 rounded-lg text-[11px] font-bold text-[#00d4ff] border border-[rgba(0,212,255,0.2)] bg-[rgba(0,212,255,0.06)]">
                  {chain}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <Link href="/web3" className="btn-primary">
                <span className="flex items-center gap-2">Explore Web3 Services <ArrowRight size={15} /></span>
              </Link>
              <Link href="/contact" className="btn-ghost">Get Audit Quote</Link>
            </div>
          </Reveal>

          {/* Right: feature grid */}
          <Reveal delay={150}>
            <div className="grid grid-cols-2 gap-3">
              {HIGHLIGHTS.map((h, i) => (
                <div key={h.label}
                  className="card p-5 hover:border-[rgba(0,212,255,0.3)] transition-colors"
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

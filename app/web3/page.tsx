import type { Metadata } from "next";
import Link from "next/link";
import { WEB3_SERVICES, TECH_STACK } from "@/lib/data";
import { Label, Heading, Reveal, RedLine, FAQAccordion } from "@/components/ui";
import { CTASection } from "@/components/sections/SharedSections";
import { Check, Shield, Zap, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Web3 & Blockchain Development Services",
  description: "Expert Web3 development: smart contracts, DeFi protocols, NFT marketplaces, DAO governance, cross-chain bridges, and enterprise blockchain. Audited, production-ready.",
  keywords: ["web3 development", "blockchain development Pakistan", "smart contract development", "DeFi development", "NFT marketplace development", "Solidity development"],
};

const CHAINS = [
  { name: "Ethereum",  icon: "⬡",  color: "#627EEA" },
  { name: "Solana",    icon: "◎",  color: "#14F195" },
  { name: "Polygon",   icon: "⬟",  color: "#8247E5" },
  { name: "BSC",       icon: "◈",  color: "#F3BA2F" },
  { name: "Arbitrum",  icon: "◆",  color: "#28A0F0" },
  { name: "Base",      icon: "⬡",  color: "#0052FF" },
  { name: "Avalanche", icon: "△",  color: "#E84142" },
  { name: "Cosmos",    icon: "✦",  color: "#2E3148" },
];

const WEB3_FAQS = [
  { q: "Do you do smart contract security audits?", a: "Yes — all contracts we deploy undergo a thorough internal security review. For high-value DeFi protocols, we partner with top-tier audit firms or run formal verification. We also offer standalone audit services for existing contracts." },
  { q: "Which blockchains do you support?", a: "Ethereum (EVM), Solana (Rust/Anchor), Polygon, BSC, Arbitrum, Base, Avalanche, Cosmos/IBC, and more. We select the optimal chain based on your use case and user base." },
  { q: "Can you help with token economics design?", a: "Absolutely. Our Web3 team includes tokenomics specialists who can design sustainable incentive structures, vesting schedules, and governance models before a single line of code is written." },
  { q: "What's your typical timeline for a DeFi protocol?", a: "A basic lending protocol takes 8–12 weeks from design to audited deployment. Full-featured AMMs or yield optimizers typically take 16–24 weeks. We provide detailed timelines after scoping." },
];

export default function Web3Page() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 bg-[#080c14] relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0"
          style={{ backgroundImage:"linear-gradient(rgba(0,212,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,0.04) 1px,transparent 1px)", backgroundSize:"48px 48px" }} />
        <div className="absolute -top-40 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(0,212,255,0.1) 0%,transparent 70%)", filter:"blur(60px)" }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(193,39,45,0.1) 0%,transparent 70%)", filter:"blur(60px)" }} />

        <div className="section-wrap relative z-10 py-24">
          <div className="max-w-[720px]">
            <div className="inline-flex items-center gap-2.5 border border-[rgba(0,212,255,0.3)] rounded-full px-4 py-2 text-[12px] font-bold text-[#00d4ff] mb-8"
              style={{ fontFamily:"var(--font-mono)", background:"rgba(0,212,255,0.06)" }}>
              ⛓️ Web3 & Blockchain Development
            </div>
            <h1 className="t-hero text-[#f0f4ff] mb-6">
              Build the<br />
              <span style={{ color:"#00d4ff" }}>Decentralized</span><br />
              Future with Us
            </h1>
            <p className="text-[#a8b8d8] text-lg max-w-[560px] mb-8">
              From audited DeFi protocols to enterprise blockchain — our Web3 team has shipped $50M+ in TVL
              and 1000+ smart contracts across 8+ blockchains.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/contact" className="btn-primary">Get Web3 Quote →</Link>
              <Link href="/contact" className="btn-ghost">Request Contract Audit</Link>
            </div>
          </div>
        </div>
      </section>

      <RedLine />

      {/* Services */}
      <section className="py-section bg-[#0d1220]">
        <div className="section-wrap">
          <Reveal>
            <Label>// Services</Label>
            <Heading className="mb-12">Web3 Development<br /><span className="text-gradient">Services</span></Heading>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {WEB3_SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <div className="card p-7 h-full group hover:border-[rgba(0,212,255,0.3)]">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{s.icon}</div>
                  <h3 className="font-bold text-[#f0f4ff] mb-2 text-[1rem]" style={{ fontFamily:"var(--font-display)" }}>{s.title}</h3>
                  <p className="text-[13px] text-[#5a7090] leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Chains */}
      <section className="py-20 bg-[#080c14]">
        <div className="section-wrap">
          <Reveal>
            <Label>// Blockchain Networks</Label>
            <Heading className="mb-10">Multi-Chain <span className="text-gradient">Expertise</span></Heading>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {CHAINS.map((c, i) => (
              <Reveal key={c.name} delay={i * 40}>
                <div className="card p-4 text-center hover:border-[rgba(0,212,255,0.3)] transition-colors group">
                  <div className="text-2xl mb-2" style={{ color: c.color }}>{c.icon}</div>
                  <div className="text-[12px] font-bold text-[#a8b8d8] group-hover:text-[#f0f4ff] transition-colors">{c.name}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-section bg-[#0d1220]">
        <div className="section-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <Label>// Why ZedroLabs Web3</Label>
              <Heading className="mb-6">Security-First <span style={{ color:"#00d4ff" }}>Web3</span><br />Development</Heading>
              <p className="text-[#a8b8d8] mb-8">Every contract we ship goes through rigorous security review. We've never had a post-launch exploit.</p>
              <ul className="space-y-3">
                {[
                  "All contracts internally audited before deployment",
                  "Gas optimization as standard — not an add-on",
                  "Comprehensive test suites (unit, fuzz, invariant)",
                  "Mainnet deployment checklist & monitoring setup",
                  "Post-launch incident response protocol",
                  "Open-source & upgradeable architecture options",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[14px] text-[#a8b8d8]">
                    <Check size={15} className="text-[#00d4ff] mt-0.5 flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon:<Shield size={24}/>, title:"$0 Exploits", desc:"Zero post-launch exploits across all deployed contracts", color:"#00d4ff" },
                  { icon:<Zap size={24}/>,   title:"50M+ TVL",   desc:"Total value locked across deployed DeFi protocols",       color:"#f5a623" },
                  { icon:<Globe size={24}/>, title:"8 Chains",    desc:"Multi-chain expertise across major EVM and non-EVM",     color:"#e63939" },
                  { icon:<Check size={24}/>, title:"1000+ Contracts", desc:"Smart contracts deployed to mainnet since 2019",     color:"#00ff88" },
                ].map((s) => (
                  <div key={s.title} className="card p-6 text-center">
                    <div className="mb-3" style={{ color: s.color }}>{s.icon}</div>
                    <div className="font-black text-[1.5rem] text-[#f0f4ff]" style={{ fontFamily:"var(--font-display)" }}>{s.title}</div>
                    <p className="text-[12px] text-[#5a7090] mt-1">{s.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-20 bg-[#080c14]">
        <div className="section-wrap">
          <Reveal>
            <Label>// Tech Stack</Label>
            <Heading className="mb-8">Blockchain <span className="text-gradient">Tools We Use</span></Heading>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-wrap gap-2.5">
              {[...TECH_STACK["Blockchain"], "Foundry", "OpenZeppelin", "Chainlink", "The Graph", "IPFS", "Moralis", "Alchemy"].map((t) => (
                <span key={t} className="px-3.5 py-2 rounded-lg text-[12px] text-[#00d4ff] border border-[rgba(0,212,255,0.2)] bg-[rgba(0,212,255,0.04)] hover:bg-[rgba(0,212,255,0.1)] transition-colors">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-section bg-[#0d1220]">
        <div className="max-w-[800px] mx-auto px-5">
          <Reveal><Label>// FAQ</Label><Heading className="mb-10">Web3 Questions Answered</Heading></Reveal>
          <Reveal delay={100}><FAQAccordion faqs={WEB3_FAQS} /></Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}

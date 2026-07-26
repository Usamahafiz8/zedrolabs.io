"use client";
import { useState } from "react";
import Link from "next/link";
import { Check, MessageCircle, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* ── Types ── */
type Tier = {
  name: string;
  price: string | number;
  period?: string;
  priceNote?: string;
  badge?: string;
  featured?: boolean;
  custom?: boolean;
  features: string[];
  cta: string;
};

type ServiceData = {
  description: string;
  flexNote: string;
  tiers: Tier[];
};

/* ── Tab definitions ── */
const TABS = [
  { id: "va",       label: "Virtual Assistants",  icon: "🤝", badge: "From $400/mo"  },
  { id: "dev",      label: "Dev Teams",            icon: "👥", badge: "From $800/mo"  },
  { id: "software", label: "Custom Software",      icon: "💻", badge: "From $5K"      },
  { id: "web3",     label: "Web3 & Blockchain",    icon: "⛓️", badge: "From $3K"      },
];

/* ── Pricing data ── */
const PRICING: Record<string, ServiceData> = {
  va: {
    description: "Dedicated, pre-vetted virtual assistants for any business function. English-fluent, professional, ready to onboard in 3–5 days.",
    flexNote: "Need custom hours, a mixed specialty team, or have a different budget in mind? We'll build a plan that fits.",
    tiers: [
      {
        name: "Part-Time",
        price: 400,
        period: "/month",
        priceNote: "20 hrs/week · 1 dedicated VA",
        features: [
          "Any role / specialty",
          "Email + chat communication",
          "Weekly status reports",
          "2-day replacement guarantee",
          "Onboarding within 3–5 days",
        ],
        cta: "Hire Part-Time VA",
      },
      {
        name: "Full-Time",
        price: 800,
        period: "/month",
        priceNote: "40 hrs/week · 1 dedicated VA",
        
        featured: true,
        features: [
          "Any role / specialty",
          "All communication channels",
          "Daily reports & standups",
          "24hr replacement guarantee",
          "Free 1-week trial",
          "Onboarding within 48 hours",
        ],
        cta: "Hire Full-Time VA",
      },
      {
        name: "VA Team",
        price: 2200,
        period: "/month",
        priceNote: "3 dedicated VAs · team lead included",
        features: [
          "3 VAs with mixed specialties",
          "Dedicated team lead",
          "Priority support channel",
          "Same-day replacement",
          "Free 1-week trial",
          "Dedicated account manager",
        ],
        cta: "Build a VA Team",
      },
      {
        name: "Enterprise",
        price: "Custom",
        custom: true,
        priceNote: "5+ VAs · custom SLAs & workflows",
        features: [
          "5+ dedicated VAs",
          "Custom workflows & SLAs",
          "Dedicated operations manager",
          "Custom reporting & integrations",
          "Volume discounts",
          "Flexible contract terms",
          "Monthly business reviews",
        ],
        cta: "Let's Talk",
      },
    ],
  },

  dev: {
    description: "Pre-vetted, full-time engineers integrated directly into your team. Flat monthly rate — no recruitment, no payroll, no overhead.",
    flexNote: "Need a specific stack, seniority mix, or tighter budget? We have 45+ engineers across all levels — reach out and we'll match you.",
    tiers: [
      {
        name: "Starter",
        price: 800,
        period: "/month per resource",
        priceNote: "Junior devs & QA · 160–180 hrs/month",
        features: [
          "Junior front-end / back-end devs",
          "Manual & automated QA testers",
          "Daily standups",
          "Weekly progress reports",
          "Managed onboarding",
        ],
        cta: "Hire Starter Devs",
      },
      {
        name: "Standard",
        price: 1200,
        period: "/month per resource",
        priceNote: "Mid-level · full-stack, mobile, DevOps",
        badge: "Most Popular",
        featured: true,
        features: [
          "Mid-level full-stack developers",
          "iOS & Android mobile engineers",
          "CI/CD & DevOps engineers",
          "UI/UX designers",
          "Agile sprint integration",
          "All Starter features",
        ],
        cta: "Hire Standard Devs",
      },
      {
        name: "Premium",
        price: 1800,
        period: "/month per resource",
        priceNote: "Senior · AI/ML, Web3, architects",
        features: [
          "Senior software architects",
          "AI/ML & data scientists",
          "Blockchain / Web3 specialists",
          "Cloud infrastructure leads",
          "Code review & tech leadership",
          "All Standard features",
        ],
        cta: "Hire Senior Devs",
      },
      {
        name: "Enterprise Team",
        price: "Custom",
        custom: true,
        priceNote: "Full squads · custom composition",
        features: [
          "Multiple engineers across levels",
          "Dedicated tech lead & PM",
          "Custom team composition",
          "Volume pricing for 5+ resources",
          "Flexible billing structures",
          "Priority talent matching",
          "Executive account management",
        ],
        cta: "Build Your Team",
      },
    ],
  },

  software: {
    description: "End-to-end custom software — from validated MVPs to enterprise-scale platforms. Fixed-price and time-and-material engagements available.",
    flexNote: "Software costs vary by scope. Share your requirements and we'll deliver a detailed fixed-price proposal within 48 hours.",
    tiers: [
      {
        name: "MVP / Starter",
        price: "from $5,000",
        period: "one-time project",
        priceNote: "4–8 weeks · web or desktop app",
        features: [
          "Up to 10 core features",
          "Auth & user management",
          "Responsive design",
          "REST API integration",
          "Deployment & hosting setup",
          "30-day post-launch support",
        ],
        cta: "Get MVP Quote",
      },
      {
        name: "Business App",
        price: "from $20,000",
        period: "one-time project",
        priceNote: "8–16 weeks · full-stack SaaS or platform",
        badge: "Most Requested",
        featured: true,
        features: [
          "Multi-role auth & permissions",
          "Third-party API integrations",
          "Admin dashboard & analytics",
          "Payment gateway integration",
          "AI / ML features available",
          "90-day post-launch support",
        ],
        cta: "Get Business Quote",
      },
      {
        name: "Enterprise",
        price: "from $75,000",
        period: "project-based",
        priceNote: "16+ weeks · large-scale systems",
        features: [
          "Microservices architecture",
          "Custom ERP / CRM systems",
          "Advanced AI & automation",
          "Multi-tenant SaaS platforms",
          "Legacy system migrations",
          "12-month support plan",
        ],
        cta: "Get Enterprise Quote",
      },
      {
        name: "Custom Quote",
        price: "Custom",
        custom: true,
        priceNote: "Any scope · fixed price or time-material",
        features: [
          "Requirements workshop included",
          "Detailed technical proposal",
          "Fixed-price or T&M options",
          "Phased delivery available",
          "Milestone-based payments",
          "NDA signed before discussions",
          "Response within 24 hours",
        ],
        cta: "Request a Quote",
      },
    ],
  },

  web3: {
    description: "Audited smart contracts, DeFi protocols, NFT platforms, and enterprise blockchain solutions across 8+ networks.",
    flexNote: "Web3 pricing depends on contract complexity, audit requirements, and chain selection. Tell us your idea and we'll scope it accurately.",
    tiers: [
      {
        name: "Smart Contract",
        price: "from $3,000",
        period: "one-time",
        priceNote: "1–3 contracts · internal audit included",
        features: [
          "Solidity / Rust / Cairo development",
          "Unit + fuzz test suite",
          "Internal security audit",
          "Gas optimization",
          "Mainnet deployment",
          "Technical documentation",
        ],
        cta: "Get Contract Quote",
      },
      {
        name: "DeFi / dApp",
        price: "from $25,000",
        period: "one-time project",
        priceNote: "8–16 weeks · full protocol or NFT platform",
        badge: "High Demand",
        featured: true,
        features: [
          "Full DeFi / NFT / DAO platform",
          "Frontend dApp (React / Next.js)",
          "Subgraph (The Graph) indexing",
          "Multi-contract architecture",
          "3rd-party security audit option",
          "Tokenomics design support",
          "90-day post-launch monitoring",
        ],
        cta: "Get DeFi Quote",
      },
      {
        name: "Enterprise Blockchain",
        price: "from $80,000",
        period: "project-based",
        priceNote: "20+ weeks · full platform or private chain",
        features: [
          "Private / consortium blockchain",
          "Cross-chain bridge development",
          "DAO governance systems",
          "Token launch & liquidity strategy",
          "Top-tier security audit firm",
          "Formal verification (on request)",
          "12-month support & monitoring",
        ],
        cta: "Get Enterprise Quote",
      },
      {
        name: "Security Audit",
        price: "Custom",
        custom: true,
        priceNote: "Standalone audits · any existing contracts",
        features: [
          "Full vulnerability assessment",
          "Gas optimization review",
          "Upgrade path recommendations",
          "Detailed audit report",
          "Remediation support",
          "Certificate of audit",
          "Public / private disclosure options",
        ],
        cta: "Request Audit Quote",
      },
    ],
  },

  medical: {
    description: "End-to-end medical billing, RCM outsourcing, denial management, and HIPAA-compliant healthcare software. Trusted by physicians, group practices, and hospitals.",
    flexNote: "RCM pricing varies by specialty and claim volume. We analyze your current collections and demonstrate the ROI before you commit.",
    tiers: [
      {
        name: "RCM Outsourcing",
        price: "4–7%",
        period: "of monthly collections",
        priceNote: "Full-cycle RCM · end-to-end billing",
        features: [
          "Eligibility verification",
          "Medical coding (ICD-10, CPT)",
          "Claims submission & scrubbing",
          "Payment posting",
          "AR follow-up",
          "Monthly analytics reports",
          "Denial management included",
        ],
        cta: "Start RCM Services",
      },
      {
        name: "Flat Rate Billing",
        price: "from $600",
        period: "/provider/month",
        priceNote: "Predictable cost · best for high-volume practices",
        badge: "Best Value",
        featured: true,
        features: [
          "Unlimited claims per month",
          "All coding specialties covered",
          "Denial management & appeals",
          "EHR / EMR integration",
          "Patient billing & follow-up",
          "HIPAA-compliant infrastructure",
          "Dedicated billing specialist",
        ],
        cta: "Get Flat Rate Quote",
      },
      {
        name: "Denial Management",
        price: "from $500",
        period: "/month",
        priceNote: "Standalone denial management & appeals",
        features: [
          "Systematic denial analysis",
          "Appeal filing & tracking",
          "Root-cause resolution",
          "Payer-specific strategies",
          "Weekly denial reports",
          "Collections improvement target",
        ],
        cta: "Fix Denials Now",
      },
      {
        name: "Custom / Software",
        price: "Custom",
        custom: true,
        priceNote: "HIPAA software · multi-provider groups · hospitals",
        features: [
          "Custom medical billing software",
          "HIPAA-compliant infrastructure",
          "HL7 FHIR / EHR integrations",
          "Custom reporting & analytics",
          "Multi-provider group pricing",
          "Hospital / health system RFPs",
          "BAA signed before engagement",
        ],
        cta: "Request Custom Quote",
      },
    ],
  },

  mobile: {
    description: "Native iOS & Android apps and cross-platform solutions with polished UX, offline-first architecture, and App Store optimization.",
    flexNote: "Mobile pricing depends on platform count, backend complexity, and feature depth. Share requirements for a detailed fixed-price quote.",
    tiers: [
      {
        name: "Simple App",
        price: "from $8,000",
        period: "one-time project",
        priceNote: "6–10 weeks · 1 platform · 5–10 screens",
        features: [
          "iOS or Android (one platform)",
          "Up to 10 screens",
          "Basic auth & user profiles",
          "REST API integration",
          "Push notifications",
          "App Store submission",
          "60-day post-launch support",
        ],
        cta: "Get Simple App Quote",
      },
      {
        name: "Cross-Platform",
        price: "from $20,000",
        period: "one-time project",
        priceNote: "10–18 weeks · iOS + Android",
        badge: "Most Popular",
        featured: true,
        features: [
          "iOS + Android (React Native / Flutter)",
          "Custom backend & API",
          "Offline-first architecture",
          "In-app purchases & payments",
          "Analytics & crash reporting",
          "Deep link & push notification",
          "90-day post-launch support",
        ],
        cta: "Get Cross-Platform Quote",
      },
      {
        name: "Enterprise Mobile",
        price: "from $60,000",
        period: "one-time project",
        priceNote: "18+ weeks · native iOS + Android separately",
        features: [
          "Native iOS + Android codebases",
          "Real-time features (chat, maps, video)",
          "Advanced security & encryption",
          "MDM / enterprise device management",
          "ERP / CRM integration",
          "Dedicated QA & testing team",
          "12-month support plan",
        ],
        cta: "Get Enterprise Quote",
      },
      {
        name: "Custom Quote",
        price: "Custom",
        custom: true,
        priceNote: "Any scope · any platform · any timeline",
        features: [
          "Discovery & wireframes first",
          "Fixed-price guarantee",
          "Milestone-based payments",
          "NDA before discussions",
          "48-hour proposal turnaround",
          "Post-launch maintenance plans",
          "App Store optimization included",
        ],
        cta: "Request Custom Quote",
      },
    ],
  },

  cloud: {
    description: "Cloud architecture, Kubernetes, CI/CD pipelines, IaC, and cost-optimized multi-cloud solutions on AWS, Azure, and GCP.",
    flexNote: "Cloud needs vary widely — one-time setup or ongoing management. Tell us your current state and goals, we'll price it transparently.",
    tiers: [
      {
        name: "Audit & Setup",
        price: "from $2,000",
        period: "one-time",
        priceNote: "1–2 weeks · assessment & initial setup",
        features: [
          "Current infrastructure audit",
          "Cost optimization analysis",
          "Security posture review",
          "IaC setup (Terraform / CDK)",
          "CI/CD pipeline configuration",
          "Detailed recommendations report",
        ],
        cta: "Get Audit Quote",
      },
      {
        name: "Managed DevOps",
        price: "from $800",
        period: "/month",
        priceNote: "Ongoing retainer · infrastructure management",
        badge: "Best Value",
        featured: true,
        features: [
          "Ongoing infrastructure management",
          "CI/CD pipeline maintenance",
          "Monitoring & alerting setup",
          "Auto-scaling & cost optimization",
          "Security patching & updates",
          "Incident response support",
          "Monthly infrastructure reports",
        ],
        cta: "Start Managed DevOps",
      },
      {
        name: "Cloud Architecture",
        price: "from $5,000",
        period: "one-time project",
        priceNote: "Full architecture design & migration",
        features: [
          "Full cloud architecture design",
          "Multi-cloud / hybrid setup",
          "Kubernetes cluster configuration",
          "Microservices migration planning",
          "Data pipeline & storage design",
          "Security & compliance review",
          "Handover documentation",
        ],
        cta: "Get Architecture Quote",
      },
      {
        name: "Enterprise",
        price: "Custom",
        custom: true,
        priceNote: "Large teams · complex infra · long-term SLA",
        features: [
          "Dedicated DevOps engineer(s)",
          "Multi-region, multi-cloud setup",
          "Enterprise security & compliance",
          "24/7 monitoring & SLA guarantee",
          "Disaster recovery planning",
          "FinOps — cloud cost governance",
          "Quarterly architecture reviews",
        ],
        cta: "Request Enterprise Quote",
      },
    ],
  },
};

/* ── Pricing Card ── */
function PricingCard({ tier }: { tier: Tier }) {
  const isCustom  = tier.custom;
  const isFeatured = tier.featured;

  const priceStr  = typeof tier.price === "number" ? `$${tier.price.toLocaleString()}` : tier.price;
  const isFrom    = priceStr.startsWith("from ");
  const mainPrice = isFrom ? priceStr.replace("from ", "") : priceStr;

  return (
    <div className={cn(
      "relative flex flex-col rounded-2xl border transition-all duration-300 hover:-translate-y-1 p-7",
      isCustom
        ? "bg-[rgba(255,255,255,0.01)] border-dashed border-[#1a2540] hover:border-[rgba(193,39,45,0.25)]"
        : isFeatured
          ? "bg-[#0f1829] border-[#c1272d] shadow-[0_0_40px_rgba(193,39,45,0.2)]"
          : "bg-[#0f1829] border-[#1a2540] hover:border-[rgba(193,39,45,0.3)]"
    )}>
      {tier.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#c1272d] text-white text-[10px] font-bold tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-full whitespace-nowrap">
          {tier.badge}
        </div>
      )}

      {/* Plan name */}
      <div className="text-[11px] font-bold tracking-[0.14em] uppercase mb-4"
        style={{ fontFamily:"var(--font-mono)", color: isCustom ? "#5a7090" : "#e63939" }}>
        {tier.name}
      </div>

      {/* Price */}
      <div className="mb-1">
        {isCustom ? (
          <div className="text-[2.6rem] font-black leading-none"
            style={{ fontFamily:"var(--font-display)", color:"#5a7090" }}>
            Custom
          </div>
        ) : (
          <div className="flex items-end gap-1.5">
            {isFrom && (
              <span className="text-sm text-[#5a7090] mb-2.5">from</span>
            )}
            <span className="text-[2.6rem] font-black text-[#f0f4ff] leading-none"
              style={{ fontFamily:"var(--font-display)" }}>
              {mainPrice}
            </span>
          </div>
        )}
      </div>

      {/* Period */}
      {tier.period && (
        <div className="text-[12px] text-[#5a7090]">{tier.period}</div>
      )}

      {/* Price note */}
      {tier.priceNote && (
        <div className="text-[12px] text-[#a8b8d8] mt-1 pb-5 mb-5 border-b border-[#1a2540]">
          {tier.priceNote}
        </div>
      )}

      {/* Features */}
      <ul className="space-y-2.5 flex-1 mb-6">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-[13px] text-[#a8b8d8] pb-2.5 border-b border-white/[0.03] last:border-0">
            <Check size={13} className={cn("mt-0.5 flex-shrink-0", isCustom ? "text-[#5a7090]" : "text-[#e63939]")} />
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link href="/contact"
        className={cn(
          "flex items-center justify-center gap-2 py-3.5 text-sm rounded-xl font-semibold transition-all duration-300",
          isFeatured ? "btn-primary" : isCustom ? "btn-ghost" : "btn-ghost"
        )}>
        <span>{tier.cta}</span>
        {!isFeatured && <ArrowUpRight size={13} />}
      </Link>
    </div>
  );
}

/* ── Main Export ── */
export default function PricingTabs() {
  const [active, setActive] = useState<string>("va");
  const service = PRICING[active];

  return (
    <section className="py-section bg-[#0d1220]" id="pricing">
      <div className="section-wrap">

        {/* Tab strip */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-3 mb-10">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-medium whitespace-nowrap transition-all duration-200 flex-shrink-0",
                active === tab.id
                  ? "bg-[#c1272d] text-white shadow-[0_4px_20px_rgba(193,39,45,0.35)]"
                  : "bg-[#0f1829] border border-[#1a2540] text-[#a8b8d8] hover:border-[rgba(193,39,45,0.3)] hover:text-[#f0f4ff]"
              )}
            >
              <span className="text-base">{tab.icon}</span>
              <span>{tab.label}</span>
              <span className={cn(
                "text-[10px] font-bold px-1.5 py-0.5 rounded-md hidden sm:block",
                active === tab.id
                  ? "bg-white/20 text-white"
                  : "bg-[rgba(193,39,45,0.08)] text-[#e63939]"
              )}>
                {tab.badge}
              </span>
            </button>
          ))}
        </div>

        {/* Description + flexible pricing banner */}
        <div className="mb-8 space-y-3">
          <p className="text-[#a8b8d8] text-[15px]">{service.description}</p>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-[rgba(193,39,45,0.05)] border border-[rgba(193,39,45,0.18)]">
            <MessageCircle size={15} className="text-[#e63939] flex-shrink-0 mt-0.5" />
            <div className="flex-1 flex items-center justify-between gap-4 flex-wrap">
              <p className="text-[13px] text-[#a8b8d8]">{service.flexNote}</p>
              <Link href="/contact"
                className="text-[#e63939] text-[13px] font-semibold flex items-center gap-1 hover:text-[#ff4d4d] whitespace-nowrap transition-colors">
                Discuss Pricing <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {service.tiers.map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </div>

      </div>
    </section>
  );
}

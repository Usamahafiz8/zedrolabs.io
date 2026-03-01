export const COMPANY = {
  name:      "ZedroLabs",
  domain:    "zedrolabs.io",
  tagline:   "Software Development · AI · Web3 · Medical Billing · Virtual Assistants",
  location:  "Rawalpindi, Punjab, Pakistan",
  email:     "hello@zedrolabs.io",
  sales:     "sales@zedrolabs.io",
  phone:     "+92 51 XXX XXXX",
  whatsapp:  "+92 300 XXX XXXX",
  founded:   "2016",
  timezone:  "PKT (UTC+5)",
  linkedin:  "https://linkedin.com/company/zedrolabs",
  twitter:   "https://twitter.com/zedrolabs",
  github:    "https://github.com/zedrolabs",
};

export const STATS = [
  { num: 150, suffix: "+", label: "Projects Delivered",    icon: "🚀" },
  { num: 45,  suffix: "+", label: "Expert Engineers",       icon: "👥" },
  { num: 8,   suffix: "+", label: "Years Experience",       icon: "📅" },
  { num: 98,  suffix: "%", label: "Client Satisfaction",    icon: "⭐" },
  { num: 3,   suffix: "",  label: "Continents Served",      icon: "🌍" },
  { num: 50,  suffix: "M+",label: "Revenue Enabled ($)",   icon: "💰" },
];

export const MARQUEE_ITEMS = [
  "Custom Software", "AI & ML", "Web3 & Blockchain",
  "Medical Billing & RCM", "Virtual Assistants",
  "Cloud & DevOps", "Mobile Apps", "Cybersecurity",
  "IoT Solutions", "Data Analytics", "UI/UX Design",
  "Staff Augmentation",
];

export const CORE_SERVICES = [
  {
    icon: "💻",
    title: "Custom Software",
    short: "Web & Desktop Apps",
    desc: "Full-cycle development of enterprise web apps, SaaS platforms, and desktop software built for scale.",
    markets: ["B2B", "B2C", "B2G"],
    slug: "custom-software",
    color: "from-red-900/30 to-transparent",
    featured: false,
  },
  {
    icon: "🤖",
    title: "AI & Machine Learning",
    short: "Intelligent Systems",
    desc: "LLM integrations, NLP, computer vision, predictive analytics, and AI-powered automation at enterprise scale.",
    markets: ["B2B", "B2G"],
    slug: "ai-ml",
    color: "from-cyan-900/25 to-transparent",
    featured: false,
  },
  {
    icon: "⛓️",
    title: "Web3 & Blockchain",
    short: "DeFi · NFT · Smart Contracts",
    desc: "End-to-end blockchain development — DeFi protocols, NFT platforms, DAO governance, and enterprise blockchain.",
    markets: ["B2B", "Web3"],
    slug: "web3",
    color: "from-purple-900/30 to-transparent",
    featured: true,
    highlight: "🔥 High Demand",
  },
  {
    icon: "🏥",
    title: "Medical Billing & RCM",
    short: "Revenue Cycle Management",
    desc: "End-to-end medical billing, RCM, claims processing, denial management, and HIPAA-compliant software.",
    markets: ["B2B", "B2G"],
    slug: "medical-billing",
    color: "from-emerald-900/25 to-transparent",
    featured: true,
    highlight: "⚕️ Healthcare Specialist",
  },
  {
    icon: "🤝",
    title: "Virtual Assistants",
    short: "Remote Professional Support",
    desc: "Dedicated VAs for admin, customer support, data entry, scheduling, social media, and executive assistance.",
    markets: ["B2B", "B2C"],
    slug: "virtual-assistants",
    color: "from-amber-900/25 to-transparent",
    featured: true,
    highlight: "From $400/mo",
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    short: "AWS · Azure · GCP",
    desc: "Cloud architecture, Kubernetes, CI/CD pipelines, IaC, and cost-optimized multi-cloud infrastructure.",
    markets: ["B2B", "B2G"],
    slug: "cloud-devops",
    color: "from-blue-900/25 to-transparent",
    featured: false,
  },
  {
    icon: "📱",
    title: "Mobile Apps",
    short: "iOS & Android",
    desc: "Native and cross-platform apps with polished UX, offline-first architecture, and App Store optimization.",
    markets: ["B2C", "B2B"],
    slug: "mobile-apps",
    color: "from-pink-900/25 to-transparent",
    featured: false,
  },
  {
    icon: "👥",
    title: "Dedicated Dev Teams",
    short: "Staff Augmentation",
    desc: "Pre-vetted, full-time engineers integrated directly into your team. From $800/month.",
    markets: ["B2B", "B2G"],
    slug: "dedicated-teams",
    color: "from-orange-900/25 to-transparent",
    featured: false,
    highlight: "From $800/mo",
  },
];

export const WEB3_SERVICES = [
  { icon: "📜", title: "Smart Contract Development", desc: "Solidity, Rust, and Cairo contracts — audited, gas-optimized, and production-ready." },
  { icon: "🏦", title: "DeFi Protocol Development", desc: "AMMs, lending protocols, yield optimizers, staking platforms, and liquidity pools." },
  { icon: "🖼️", title: "NFT Platforms & Marketplaces", desc: "Custom NFT minting, marketplaces, royalty systems, and fractional ownership." },
  { icon: "🏛️", title: "DAO & Governance Systems", desc: "On-chain governance, voting mechanisms, treasury management, and token economics." },
  { icon: "🔗", title: "Cross-Chain Bridges", desc: "Interoperability solutions, wrapped tokens, and cross-chain messaging protocols." },
  { icon: "🎮", title: "Web3 Gaming & Metaverse", desc: "Play-to-earn mechanics, in-game economies, virtual land, and metaverse integrations." },
  { icon: "🏢", title: "Enterprise Blockchain", desc: "Supply chain tracking, document authentication, and private blockchain deployments." },
  { icon: "🔐", title: "Security Audits", desc: "Comprehensive smart contract security audits, vulnerability assessments, and formal verification." },
];

export const MEDICAL_BILLING_SERVICES = [
  { icon: "📋", title: "Medical Billing & Coding", desc: "ICD-10, CPT, and HCPCS coding expertise across all specialties with 98%+ accuracy." },
  { icon: "💊", title: "Revenue Cycle Management", desc: "End-to-end RCM — eligibility verification, claim submission, payment posting, and AR follow-up." },
  { icon: "🔄", title: "Denial Management", desc: "Systematic denial analysis, appeal filing, and root-cause resolution to maximize collections." },
  { icon: "🏥", title: "EHR/EMR Integration", desc: "Seamless integration with Epic, Cerner, Athena, DrChrono, and 30+ EMR systems." },
  { icon: "📊", title: "Analytics & Reporting", desc: "Custom financial dashboards, payer analysis, KPI tracking, and collection forecasting." },
  { icon: "🔒", title: "HIPAA-Compliant Software", desc: "Custom healthcare software with end-to-end encryption, audit trails, and HIPAA compliance." },
  { icon: "⚡", title: "Claims Scrubbing & EDI", desc: "Automated claims scrubbing, EDI 837/835 processing, and real-time eligibility verification." },
  { icon: "📞", title: "Patient Collections", desc: "Compassionate patient billing, payment plans, and collection optimization strategies." },
];

export const VA_SERVICES = [
  { icon: "📅", title: "Executive VAs", desc: "Calendar management, travel booking, correspondence, and executive-level admin support." },
  { icon: "💬", title: "Customer Support VAs", desc: "Live chat, email support, ticket management, and CRM maintenance across time zones." },
  { icon: "📊", title: "Data Entry & Research", desc: "Web research, data collection, database management, and market intelligence gathering." },
  { icon: "📱", title: "Social Media VAs", desc: "Content scheduling, community management, DM handling, and analytics reporting." },
  { icon: "📝", title: "Content & Copywriting VAs", desc: "Blog writing, product descriptions, email campaigns, and SEO-optimized content." },
  { icon: "🛒", title: "E-Commerce VAs", desc: "Order processing, inventory management, supplier coordination, and listing optimization." },
  { icon: "💰", title: "Bookkeeping VAs", desc: "QuickBooks/Xero management, invoicing, expense tracking, and financial reporting." },
  { icon: "🎨", title: "Design & Creative VAs", desc: "Canva designs, social graphics, presentation creation, and basic video editing." },
];

export const VA_PRICING = [
  {
    name: "Part-Time VA",
    hours: "20 hrs/week",
    price: 400,
    period: "month",
    features: ["1 dedicated VA", "Any role/specialty", "Email + chat communication", "Weekly reports", "2-day replacement guarantee"],
    featured: false,
  },
  {
    name: "Full-Time VA",
    hours: "40 hrs/week",
    price: 800,
    period: "month",
    features: ["1 dedicated full-time VA", "Any role/specialty", "All communication channels", "Daily reports & standups", "24hr replacement guarantee", "Free 1-week trial"],
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "VA Team",
    hours: "Multiple VAs",
    price: 2200,
    period: "month",
    features: ["3 dedicated VAs", "Mixed specialties", "Team lead included", "Priority support", "Same-day replacement", "Free 1-week trial", "Dedicated account manager"],
    featured: false,
  },
];

export const DEV_PRICING = [
  {
    name: "Starter",
    price: 800,
    role: "Junior Devs, QA, Basic Roles",
    features: [
      "Junior front-end / back-end devs",
      "Manual & automated QA testers",
      "160–180 hrs/month",
      "Daily standups",
      "Weekly progress reports",
      "Managed onboarding",
    ],
    featured: false,
  },
  {
    name: "Standard",
    price: 1200,
    role: "Mid-Level Full-Stack, Mobile, DevOps",
    features: [
      "Mid-level full-stack developers",
      "iOS & Android mobile engineers",
      "CI/CD & DevOps engineers",
      "UI/UX designers",
      "All Starter features",
      "Agile sprint integration",
    ],
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "Premium",
    price: 1800,
    role: "Senior Engineers, AI/ML, Architects",
    features: [
      "Senior software architects",
      "AI/ML & data scientists",
      "Blockchain / Web3 specialists",
      "Cloud infrastructure leads",
      "All Standard features",
      "Code review & tech leadership",
    ],
    featured: false,
  },
];

export const PORTFOLIO_PROJECTS = [
  {
    title: "ChainVault DeFi",
    desc: "Multi-chain DeFi lending protocol — $18M TVL at launch. Audited Solidity contracts, React frontend.",
    tech: ["Solidity", "React", "Hardhat", "The Graph"],
    market: "Web3",
    emoji: "🔗",
    gradient: "from-purple-900 via-indigo-950 to-[#080c14]",
    stats: "$18M TVL · 3 chains",
    link: "#",
  },
  {
    title: "MedFlowRCM Platform",
    desc: "End-to-end RCM platform for a 200-physician group — increased collections by 34% in 6 months.",
    tech: ["Next.js", "Python", "AWS", "HL7 FHIR"],
    market: "B2B",
    emoji: "🏥",
    gradient: "from-emerald-950 via-teal-950 to-[#080c14]",
    stats: "+34% collections · 200 physicians",
    link: "#",
  },
  {
    title: "GovTrack Citizen Portal",
    desc: "National digital services platform — 200K+ active citizens across 12 government departments.",
    tech: ["Django", "PostgreSQL", "Azure", "React"],
    market: "B2G",
    emoji: "🏛️",
    gradient: "from-amber-950 via-orange-950 to-[#080c14]",
    stats: "200K+ citizens · 12 depts",
    link: "#",
  },
  {
    title: "PixelPunks NFT Marketplace",
    desc: "Full-featured NFT marketplace with lazy minting, royalties, and cross-chain bridging.",
    tech: ["Solidity", "Next.js", "IPFS", "Ethers.js"],
    market: "Web3",
    emoji: "🎨",
    gradient: "from-pink-950 via-purple-950 to-[#080c14]",
    stats: "12K+ NFTs minted · $2.4M volume",
    link: "#",
  },
  {
    title: "VirtuDesk VA Platform",
    desc: "VA management SaaS — time tracking, task management, and client billing for 400+ VAs.",
    tech: ["React", "Node.js", "Stripe", "Supabase"],
    market: "B2B",
    emoji: "💼",
    gradient: "from-blue-950 via-cyan-950 to-[#080c14]",
    stats: "400+ VAs · 180 clients",
    link: "#",
  },
  {
    title: "SmartCity IoT",
    desc: "Urban monitoring across Rawalpindi — traffic, air quality, energy consumption on one dashboard.",
    tech: ["Python", "MQTT", "TimescaleDB", "Grafana"],
    market: "B2G",
    emoji: "🏙️",
    gradient: "from-cyan-950 via-sky-950 to-[#080c14]",
    stats: "500+ sensors · Live 24/7",
    link: "#",
  },
];

export const TESTIMONIALS = [
  {
    name: "Marcus Chen",
    role: "CTO, FinTech Startup — San Francisco",
    avatar: "MC",
    rating: 5,
    text: "ZedroLabs delivered our DeFi protocol 3 weeks early and under budget. The smart contract audit they ran caught 2 critical vulnerabilities before launch. These guys are absolute pros.",
  },
  {
    name: "Dr. Sarah Williams",
    role: "Practice Administrator — Houston Medical Group",
    avatar: "SW",
    rating: 5,
    text: "Our collections went up 34% after switching to ZedroLabs for RCM. Their medical billing team knows the industry inside-out and their denial management is phenomenal.",
  },
  {
    name: "Alex Rodriguez",
    role: "CEO, E-Commerce Brand — Miami",
    avatar: "AR",
    rating: 5,
    text: "The virtual assistant they matched me with is incredible. She manages my entire inbox, social media, and customer support. It's like having a superstar employee for a fraction of the cost.",
  },
  {
    name: "James O'Brien",
    role: "VP Engineering, Enterprise SaaS — London",
    avatar: "JO",
    rating: 5,
    text: "We've used ZedroLabs for dedicated engineering teams for 2 years. Consistently excellent talent, transparent communication, and the time zone overlap with UK hours is perfect.",
  },
];

export const TECH_STACK = {
  "Frontend":   ["React", "Next.js", "Vue.js", "Angular", "React Native", "Flutter"],
  "Backend":    ["Node.js", "Python", "Django", "FastAPI", "Go", "Java / Spring"],
  "Blockchain": ["Solidity", "Rust", "Hardhat", "Foundry", "Ethers.js", "Web3.js"],
  "Cloud":      ["AWS", "Azure", "GCP", "Kubernetes", "Docker", "Terraform"],
  "AI/ML":      ["TensorFlow", "PyTorch", "OpenAI API", "LangChain", "Hugging Face", "scikit-learn"],
  "Database":   ["PostgreSQL", "MongoDB", "Redis", "Supabase", "PlanetScale", "TimescaleDB"],
  "Healthcare": ["HL7 FHIR", "Epic API", "Athena", "DrChrono", "EDI 837/835", "HL7 v2"],
};

export const FAQS = [
  {
    q: "How quickly can you start a project?",
    a: "For dedicated teams and VAs, we can onboard resources within 3–7 business days. For custom projects, we begin with a discovery workshop and can start development within 1–2 weeks of kickoff.",
  },
  {
    q: "Do you have HIPAA expertise for medical billing?",
    a: "Yes. Our medical billing team is HIPAA-certified and we sign Business Associate Agreements (BAA) with all healthcare clients. All data is encrypted in transit and at rest.",
  },
  {
    q: "Are your smart contracts audited?",
    a: "All smart contracts we deploy go through internal security review. For production DeFi protocols, we partner with leading audit firms (Certik, Trail of Bits, etc.) or conduct full in-house audits.",
  },
  {
    q: "What's the minimum contract for VAs?",
    a: "We offer 1-month minimum commitments for Virtual Assistants, with a free 1-week trial on full-time packages. For dedicated dev teams, the minimum is 3 months.",
  },
  {
    q: "Do you sign NDAs before discussions?",
    a: "Always. We sign mutual NDAs before any technical discussions and ensure full IP transfer on project completion. Your ideas are safe with us.",
  },
  {
    q: "What time zone coverage do you offer?",
    a: "Our core team is PKT (UTC+5) but we offer flexible shift options for US EST/PST, UK GMT, and Gulf GST overlap. Most clients get 4–6 hours of daily overlap.",
  },
];

export const TEAM = [
  { name: "Ahmed Zedro", role: "CEO & Founder", spec: "15+ yrs · Enterprise & Strategy", emoji: "👨‍💼", linkedin: "#" },
  { name: "Sana Malik", role: "CTO", spec: "12+ yrs · Cloud, AI & Architecture", emoji: "👩‍💻", linkedin: "#" },
  { name: "Omar Khan", role: "Head of Blockchain", spec: "8+ yrs · DeFi & Web3", emoji: "⛓️", linkedin: "#" },
  { name: "Dr. Fatima Ali", role: "Healthcare Tech Lead", spec: "10+ yrs · RCM & HealthIT", emoji: "🏥", linkedin: "#" },
  { name: "Usman Riaz", role: "Head of Design", spec: "9+ yrs · Product & UX", emoji: "🎨", linkedin: "#" },
  { name: "Zara Hussain", role: "VA Operations Lead", spec: "7+ yrs · Remote Teams & Ops", emoji: "🤝", linkedin: "#" },
];

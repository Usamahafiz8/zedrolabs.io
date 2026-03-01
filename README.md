# ZedroLabs — Next.js Website

**zedrolabs.io** — Complete, production-ready Next.js 14 website.

## Quick Start

```bash
unzip zedrolabs.zip
cd zedrolabs
npm install
npm run dev
# → http://localhost:3000
```

## Pages

| Route | Page | SEO Focus |
|-------|------|-----------|
| `/` | Home | Main brand + all services overview |
| `/about` | About | Company story, team, tech stack |
| `/services` | Services | All services + tech stack + process |
| `/web3` | Web3 & Blockchain | DeFi, NFT, smart contracts |
| `/medical-billing` | Medical Billing | RCM, HIPAA, coding |
| `/virtual-assistants` | Virtual Assistants | VA pricing & specialties |
| `/dedicated-teams` | Dev Teams Pricing | Staff augmentation |
| `/portfolio` | Portfolio | 6 projects with filter |
| `/contact` | Contact | Full form + map |

## SEO

- Full metadata on every page (title, description, keywords, OG, Twitter Card)
- JSON-LD structured data (Organization schema)
- `sitemap.xml` auto-generated
- `robots.txt` configured
- Canonical URLs set
- Semantic HTML throughout
- H1→H2→H3 hierarchy on every page

## Design System

- **Fonts**: Syne (display) + Outfit (body) + JetBrains Mono (code/labels)
- **Colors**: Deep navy backgrounds, crimson red accents, cyan Web3, green health
- **Animations**: Particle network hero, floating blobs, orbiting rings, scroll reveal, animated counters, scan lines, marquee

## Customize

All content is in `lib/data.ts` — edit once, updates everywhere.

For contact form emails, add to `app/api/contact/route.ts`:
```ts
// npm install resend
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
await resend.emails.send({
  from: 'noreply@zedrolabs.io',
  to: 'hello@zedrolabs.io',
  subject: `New inquiry from ${name}`,
  html: `<p>${message}</p>`,
});
```

## Deploy

```bash
# Vercel (recommended)
npm install -g vercel
vercel --prod

# Or build manually
npm run build
npm start
```

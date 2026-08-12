import Link from "next/link";
import { COMPANY } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#05080f] border-t border-[#1a2540]">
      {/* Top CTA strip */}
      <div className="bg-gradient-to-r from-[#c1272d]/20 via-[#c1272d]/10 to-transparent border-b border-[#1a2540]">
        <div className="max-w-[1220px] mx-auto px-5 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-[#f0f4ff] font-bold text-lg" style={{ fontFamily:"var(--font-display)" }}>
              Ready to transform your business?
            </p>
            <p className="text-[#a8b8d8] text-sm">Free consultation · 24hr response · No commitment</p>
          </div>
          <Link href="/contact" className="btn-primary flex-shrink-0">
            <span>Start Today →</span>
          </Link>
        </div>
      </div>

      <div className="max-w-[1220px] mx-auto px-5 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-gradient-to-br from-[#c1272d] to-[#e63939] rounded-lg rotate-12" />
                <div className="absolute inset-[3px] bg-[#05080f] rounded-md flex items-center justify-center">
                  <span className="text-[#e63939] font-black text-xs" style={{ fontFamily:"var(--font-display)" }}>Z</span>
                </div>
              </div>
              <span className="font-black text-lg text-[#f0f4ff]" style={{ fontFamily:"var(--font-display)", letterSpacing:"-0.02em" }}>
                Zedro<span className="text-[#e63939]">Labs</span>
              </span>
            </Link>
            <p className="text-sm text-[#5a7090] leading-relaxed max-w-[280px]">
              Software development, Web3 & virtual assistant services, trusted by 150+ clients worldwide.
            </p>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-xs font-bold tracking-[0.12em] uppercase text-[#f0f4ff] mb-5" style={{ fontFamily:"var(--font-mono)" }}>Services</h5>
            <ul className="space-y-2.5 text-sm text-[#5a7090]">
              {[
                ["Custom Software",       "/services#custom-software"],
                ["Web3 & Blockchain",     "/services#web3"],
                ["Medical Billing",       "/services#medical-billing"],
                ["Virtual Assistants",    "/services#virtual-assistants"],
                ["Dedicated Dev Teams",   "/services#dedicated-teams"],
              ].map(([l, h]) => (
                <li key={l}><Link href={h} className="hover:text-[#e63939] transition-colors">{l}</Link></li>
              ))}
              <li>
                <a href="https://invoice.zedrolabs.io" target="_blank" rel="noopener noreferrer" className="hover:text-[#e63939] transition-colors">
                  Invoice Control 🧾
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-xs font-bold tracking-[0.12em] uppercase text-[#f0f4ff] mb-5" style={{ fontFamily:"var(--font-mono)" }}>Company</h5>
            <ul className="space-y-2.5 text-sm text-[#5a7090]">
              {[["About", "/about"],["Portfolio","/portfolio"],["Pricing","/services#pricing"],["Contact","/contact"],["Careers","/contact"],["Privacy","#"]].map(([l,h]) => (
                <li key={l}><Link href={h} className="hover:text-[#e63939] transition-colors">{l}</Link></li>
              ))}
              <li>
                <a href="https://cal.com/muhammad-osama/30min" target="_blank" rel="noopener noreferrer" className="hover:text-[#e63939] transition-colors">
                  Book a Call
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-xs font-bold tracking-[0.12em] uppercase text-[#f0f4ff] mb-5" style={{ fontFamily:"var(--font-mono)" }}>Contact</h5>
            <ul className="space-y-3 text-sm text-[#5a7090]">
              <li><a href={`mailto:${COMPANY.email}`} className="hover:text-[#e63939] transition-colors">{COMPANY.email}</a></li>
              <li><a href={`tel:${COMPANY.phone}`} className="hover:text-[#e63939] transition-colors">{COMPANY.phone}</a></li>
            </ul>
            <div className="mt-5 px-3 py-2 bg-[rgba(0,255,136,0.06)] border border-[rgba(0,255,136,0.15)] rounded-lg flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse flex-shrink-0" />
              <span className="text-[#00ff88] text-xs font-medium">Available for new projects</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#1a2540] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#5a7090]">
            © {year} <span className="text-[#e63939]">ZedroLabs</span>. All rights reserved. Built with ❤️ in Rawalpindi, Pakistan.
          </p>
          <div className="flex gap-5 text-xs text-[#5a7090]">
            <a href="/contact" className="hover:text-[#a8b8d8] transition-colors">Privacy Policy</a>
            <a href="/contact" className="hover:text-[#a8b8d8] transition-colors">Terms of Service</a>
            <a href="/contact" className="hover:text-[#a8b8d8] transition-colors">Request NDA</a>
            <a href="https://github.com/Usamahafiz8" target="_blank" rel="noopener noreferrer" className="hover:text-[#a8b8d8] transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

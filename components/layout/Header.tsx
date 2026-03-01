"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Home",      href: "/" },
  { label: "About",     href: "/about" },
  {
    label: "Services", href: "/services",
    children: [
      { label: "Custom Software & AI",    href: "/services",            icon: "💻" },
      { label: "Web3 & Blockchain",        href: "/web3",               icon: "⛓️" },
      { label: "Medical Billing & RCM",    href: "/medical-billing",    icon: "🏥" },
      { label: "Virtual Assistants",       href: "/virtual-assistants", icon: "🤝" },
      { label: "Dedicated Dev Teams",      href: "/dedicated-teams",    icon: "👥" },
      { label: "Cloud & DevOps",           href: "/services#cloud",     icon: "☁️" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact",   href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [mobile,   setMobile]     = useState(false);
  const [dropdown, setDropdown]   = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => { setMobile(false); setDropdown(false); }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-400",
        scrolled
          ? "bg-[rgba(8,12,20,0.97)] border-b border-[#1a2540] shadow-[0_8px_40px_rgba(0,0,0,0.6)]"
          : "bg-[rgba(8,12,20,0.7)] backdrop-blur-2xl border-b border-white/[0.04]"
      )}
    >
      <div className="max-w-[1220px] mx-auto px-5">
        <nav className="flex items-center justify-between h-16 md:h-[70px]" aria-label="Main navigation">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="ZedroLabs home">
            {/* Geometric logo mark */}
            <div className="relative w-8 h-8 flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#c1272d] to-[#e63939] rounded-lg rotate-12 group-hover:rotate-[22deg] transition-transform duration-300" />
              <div className="absolute inset-[3px] bg-[#080c14] rounded-md flex items-center justify-center">
                <span className="text-[#e63939] font-black text-xs" style={{ fontFamily:"var(--font-display)" }}>Z</span>
              </div>
            </div>
            <span className="font-black text-lg text-[#f0f4ff]" style={{ fontFamily:"var(--font-display)", letterSpacing:"-0.02em" }}>
              Zedro<span className="text-[#e63939]">Labs</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-7">
            {NAV.map((item) => (
              <li key={item.href} className="relative">
                {item.children ? (
                  <div onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                    <button
                      className={cn("nav-link flex items-center gap-1", pathname.startsWith("/services") || pathname === "/web3" || pathname === "/medical-billing" || pathname === "/virtual-assistants" || pathname === "/dedicated-teams" ? "active" : "")}
                    >
                      {item.label} <ChevronDown size={13} className={cn("transition-transform", dropdown ? "rotate-180" : "")} />
                    </button>
                    {dropdown && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[320px]">
                        <div className="bg-[#0d1220] border border-[#1a2540] rounded-2xl p-2 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
                          {item.children.map((child) => (
                            <Link
                              key={child.href} href={child.href}
                              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[rgba(193,39,45,0.08)] transition-all group"
                            >
                              <span className="text-lg">{child.icon}</span>
                              <span className="text-[13px] text-[#a8b8d8] group-hover:text-[#f0f4ff] transition-colors">{child.label}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link href={item.href} className={cn("nav-link", pathname === item.href ? "active" : "")}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="mailto:hello@zedrolabs.io" className="btn-ghost text-[13px] py-2.5 px-5">
              hello@zedrolabs.io
            </a>
            <Link href="/contact" className="btn-primary text-[13px] py-2.5 px-5">
              <span>Get Free Quote</span>
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden p-2 text-[#a8b8d8] hover:text-[#f0f4ff] transition-colors"
            onClick={() => setMobile(!mobile)}
            aria-label={mobile ? "Close menu" : "Open menu"}
            aria-expanded={mobile}
          >
            {mobile ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile menu */}
        <div className={cn("lg:hidden overflow-hidden transition-all duration-300", mobile ? "max-h-[600px]" : "max-h-0")}>
          <div className="border-t border-[#1a2540] py-5 flex flex-col gap-1">
            {NAV.map((item) => (
              item.children ? (
                <div key={item.label}>
                  <div className="px-2 py-2.5 text-[13px] text-[#5a7090] font-bold uppercase tracking-widest">{item.label}</div>
                  {item.children.map((c) => (
                    <Link key={c.href} href={c.href} className="flex items-center gap-2 px-4 py-2.5 text-[14px] text-[#a8b8d8] hover:text-[#e63939] transition-colors border-b border-[#1a2540]/50">
                      {c.icon} {c.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link key={item.href} href={item.href} className="px-2 py-3 text-[15px] text-[#a8b8d8] hover:text-[#e63939] border-b border-[#1a2540]/50 transition-colors">
                  {item.label}
                </Link>
              )
            ))}
            <div className="pt-4">
              <Link href="/contact" className="btn-primary w-full justify-center">
                <span>Get Free Quote →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        zed: {
          bg:      "#080c14",
          "bg-2":  "#0d1220",
          "bg-3":  "#111827",
          card:    "#0f1829",
          "card-2":"#162035",
          border:  "#1a2540",
          red:     "#c1272d",
          "red-2": "#e63939",
          "red-3": "#ff4d4d",
          text:    "#f0f4ff",
          "text-2":"#a8b8d8",
          "text-3":"#5a7090",
          gold:    "#f5a623",
          cyan:    "#00d4ff",
          green:   "#00ff88",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body:    ["var(--font-body)", "sans-serif"],
        mono:    ["var(--font-mono)", "monospace"],
      },
      animation: {
        "spin-slow":    "spin 20s linear infinite",
        "float":        "float 6s ease-in-out infinite",
        "float-slow":   "float 9s ease-in-out infinite",
        "glow-pulse":   "glowPulse 3s ease-in-out infinite",
        "scan":         "scan 4s linear infinite",
        "counter":      "counter 2s ease-out forwards",
        "marquee":      "marquee 30s linear infinite",
        "slide-up":     "slideUp 0.6s ease forwards",
        "fade-in":      "fadeIn 0.8s ease forwards",
        "border-spin":  "borderSpin 4s linear infinite",
        "flicker":      "flicker 4s ease-in-out infinite",
        "typewriter":   "typewriter 3s steps(40) forwards",
        "orbit":        "orbit 12s linear infinite",
        "orbit-rev":    "orbit 18s linear infinite reverse",
        "ping-slow":    "ping 3s cubic-bezier(0,0,0.2,1) infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%":     { transform: "translateY(-18px)" },
        },
        glowPulse: {
          "0%,100%": { opacity: "0.6", transform: "scale(1)" },
          "50%":     { opacity: "1",   transform: "scale(1.05)" },
        },
        scan: {
          "0%":   { top: "0%" },
          "100%": { top: "100%" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-50%)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        borderSpin: {
          from: { "--angle": "0deg" } as any,
          to:   { "--angle": "360deg" } as any,
        },
        flicker: {
          "0%,95%,100%": { opacity: "1" },
          "96%,98%":     { opacity: "0.4" },
        },
        typewriter: {
          from: { width: "0" },
          to:   { width: "100%" },
        },
        orbit: {
          from: { transform: "rotate(0deg) translateX(120px) rotate(0deg)" },
          to:   { transform: "rotate(360deg) translateX(120px) rotate(-360deg)" },
        },
      },
      backgroundImage: {
        "grid-red":   "linear-gradient(rgba(193,39,45,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(193,39,45,0.06) 1px, transparent 1px)",
        "grid-cyan":  "linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)",
        "hero-radial":"radial-gradient(ellipse 100% 80% at 50% -20%, rgba(193,39,45,0.25) 0%, transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;

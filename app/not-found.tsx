import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#080c14] flex items-center justify-center pt-16">
      <div className="text-center px-5">
        <div className="text-[8rem] font-black leading-none mb-4"
          style={{ fontFamily:"var(--font-display)", color:"rgba(193,39,45,0.15)" }}>404</div>
        <h1 className="t-h1 text-[#f0f4ff] mb-4">Page Not Found</h1>
        <p className="text-[#a8b8d8] mb-8 max-w-[380px] mx-auto">The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/" className="btn-primary"><span>← Back Home</span></Link>
          <Link href="/contact" className="btn-ghost">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}

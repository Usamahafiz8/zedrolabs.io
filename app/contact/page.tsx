"use client";
import { useState } from "react";
import { COMPANY } from "@/lib/data";
import { Label, Heading, Reveal, RedLine } from "@/components/ui";
import { Check, Mail, Phone, MapPin, Clock } from "lucide-react";
import toast from "react-hot-toast";

interface FormData {
  name: string; email: string; company: string; phone: string;
  market: string; service: string; budget: string; message: string;
}
const INIT: FormData = { name:"", email:"", company:"", phone:"", market:"", service:"", budget:"", message:"" };

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(INIT);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) { toast.error("Please fill required fields."); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { toast.error("Enter a valid email."); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 1600));
    setLoading(false); setDone(true);
    toast.success("Message sent! We'll respond within 24 hours. ✓");
  };

  const F = "form-field";
  const L = "block text-[12px] font-medium text-[#5a7090] mb-2 tracking-wide";

  return (
    <>
      <section className="pt-16 bg-[#080c14] relative overflow-hidden min-h-[50vh] flex items-center">
        <div className="blob-1" style={{ top:"-200px", left:"-100px", opacity:0.35 }} />
        <div className="section-wrap relative z-10 py-20">
          <div className="max-w-[650px]">
            <h1 className="t-hero text-[#f0f4ff] mb-5">
              Let&apos;s Build<br />
              <span className="text-gradient">Something</span><br />
              <span className="text-outline">Legendary.</span>
            </h1>
            <p className="text-[#a8b8d8] text-lg">Free consultation · 24hr response · No commitment required.</p>
          </div>
        </div>
      </section>

      <RedLine />

      <section className="py-section bg-[#0d1220]">
        <div className="section-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 items-start">

            {/* Info */}
            <div>
              <Reveal>
                <Label>// Get in Touch</Label>
                <Heading className="mb-5">We&apos;d Love<br />to Hear<br />From You</Heading>
                <p className="text-[#a8b8d8] mb-8 leading-relaxed">
                  Whether you have a full brief or just an idea — reach out. Our team responds within
                  24 hours with a tailored proposal.
                </p>
              </Reveal>

              <Reveal delay={100}>
                <div className="space-y-4 mb-8">
                  {[
                    { icon:<MapPin size={15}/>, l:"Location", v:COMPANY.location },
                    { icon:<Mail  size={15}/>, l:"Email",    v:COMPANY.email,  href:`mailto:${COMPANY.email}` },
                    { icon:<Phone size={15}/>, l:"Phone / WhatsApp", v:COMPANY.phone, href:`tel:${COMPANY.phone}` },
                    { icon:<Clock size={15}/>, l:"Hours",    v:`Mon–Fri 9AM–6PM ${COMPANY.timezone}` },
                  ].map((item) => (
                    <div key={item.l} className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-[rgba(193,39,45,0.1)] border border-[rgba(193,39,45,0.2)] flex items-center justify-center flex-shrink-0 mt-0.5 text-[#e63939]">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-[#5a7090] mb-0.5" style={{ fontFamily:"var(--font-mono)" }}>{item.l}</div>
                        {item.href ? (
                          <a href={item.href} className="text-[14px] text-[#a8b8d8] hover:text-[#e63939] transition-colors">{item.v}</a>
                        ) : (
                          <p className="text-[14px] text-[#a8b8d8]">{item.v}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={150}>
                <div className="card p-6">
                  <h5 className="text-[11px] font-bold uppercase tracking-widest text-[#f0f4ff] mb-4" style={{ fontFamily:"var(--font-mono)" }}>
                    Why ZedroLabs?
                  </h5>
                  <ul className="space-y-2.5">
                    {["Free consultation & estimate","Response within 24 hours","NDA before any discussion","No commitment required","Fixed-price & time-material options","Serving clients since 2016"].map(item => (
                      <li key={item} className="flex items-center gap-2 text-[13px] text-[#a8b8d8]">
                        <Check size={13} className="text-[#e63939] flex-shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <Reveal delay={200}>
              <div className="card p-8 md:p-10">
                {done ? (
                  <div className="text-center py-14">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#c1272d] to-[#e63939] flex items-center justify-center text-2xl mx-auto mb-5">✓</div>
                    <h3 className="t-h3 text-[#f0f4ff] mb-3">Message Sent!</h3>
                    <p className="text-[#a8b8d8] text-sm mb-6">Thanks, {form.name || "there"}! We&apos;ll get back to you within 24 hours.</p>
                    <button onClick={() => { setForm(INIT); setDone(false); }} className="btn-ghost text-sm">Send Another</button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} noValidate>
                    <h3 className="t-h3 text-[#f0f4ff] mb-2">Tell Us About Your Project</h3>
                    <p className="text-[#5a7090] text-sm mb-7">We respond within 24 hours with a custom proposal.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div><label htmlFor="name" className={L}>Full Name *</label>
                        <input className={F} type="text" id="name" name="name" required placeholder="John Smith" value={form.name} onChange={onChange} /></div>
                      <div><label htmlFor="email" className={L}>Email *</label>
                        <input className={F} type="email" id="email" name="email" required placeholder="john@company.com" value={form.email} onChange={onChange} /></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div><label htmlFor="company" className={L}>Company</label>
                        <input className={F} type="text" id="company" name="company" placeholder="Company Name" value={form.company} onChange={onChange} /></div>
                      <div><label htmlFor="phone" className={L}>Phone / WhatsApp</label>
                        <input className={F} type="tel" id="phone" name="phone" placeholder="+1 555 000 0000" value={form.phone} onChange={onChange} /></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div><label htmlFor="market" className={L}>Market Type</label>
                        <select id="market" name="market" className={F} value={form.market} onChange={onChange}>
                          <option value="">Select...</option>
                          <option>B2B — Enterprise</option><option>B2C — Consumer</option>
                          <option>B2G — Government</option><option>Web3 / DeFi</option><option>Startup</option>
                        </select></div>
                      <div><label htmlFor="service" className={L}>Service</label>
                        <select id="service" name="service" className={F} value={form.service} onChange={onChange}>
                          <option value="">Select service...</option>
                          <option>Custom Software</option><option>AI & Machine Learning</option>
                          <option>Web3 & Blockchain</option><option>Medical Billing & RCM</option>
                          <option>Virtual Assistant</option><option>Dedicated Dev Team</option>
                          <option>Mobile Apps</option><option>Cloud & DevOps</option>
                          <option>UI/UX Design</option><option>Other</option>
                        </select></div>
                    </div>
                    <div className="mb-4"><label htmlFor="budget" className={L}>Budget Range</label>
                      <select id="budget" name="budget" className={F} value={form.budget} onChange={onChange}>
                        <option value="">Select budget...</option>
                        <option>Under $5,000</option><option>$5,000–$15,000</option>
                        <option>$15,000–$50,000</option><option>$50,000–$150,000</option>
                        <option>$150,000+</option><option>Dedicated Team ($800–$1,800/mo)</option>
                        <option>Virtual Assistant ($400–$2,200/mo)</option>
                      </select></div>
                    <div className="mb-6"><label htmlFor="message" className={L}>Project Description *</label>
                      <textarea id="message" name="message" required className={`${F} min-h-[130px] resize-y`}
                        placeholder="Describe your project, timeline, and any specific requirements..."
                        value={form.message} onChange={onChange} /></div>

                    <button type="submit" disabled={loading}
                      className="btn-primary w-full justify-center py-4 text-[15px] disabled:opacity-60">
                      {loading ? (
                        <span className="flex items-center gap-2.5">
                          <span className="w-4 h-4 border-2 border-white/25 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span>Send Message →</span>
                      )}
                    </button>
                    <p className="text-[11px] text-[#5a7090] text-center mt-4">
                      By sending, you agree to our Privacy Policy. NDA available before technical discussions.
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

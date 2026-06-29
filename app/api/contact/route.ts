import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, phone, market, service, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Required fields missing." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email." }, { status: 400 });
    }

    await transporter.sendMail({
      from: `"ZedroLabs" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` · ${company}` : ""}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#222">
          <h2 style="color:#c1272d;margin:0 0 20px">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;font-weight:bold;width:140px">Name</td><td>${name}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
            ${company ? `<tr><td style="padding:8px 0;font-weight:bold">Company</td><td>${company}</td></tr>` : ""}
            ${phone ? `<tr><td style="padding:8px 0;font-weight:bold">Phone</td><td>${phone}</td></tr>` : ""}
            ${market ? `<tr><td style="padding:8px 0;font-weight:bold">Market</td><td>${market}</td></tr>` : ""}
            ${service ? `<tr><td style="padding:8px 0;font-weight:bold">Service</td><td>${service}</td></tr>` : ""}
            ${budget ? `<tr><td style="padding:8px 0;font-weight:bold">Budget</td><td>${budget}</td></tr>` : ""}
          </table>
          <hr style="margin:20px 0;border:none;border-top:1px solid #eee"/>
          <h3 style="margin:0 0 10px">Message</h3>
          <p style="line-height:1.6;white-space:pre-wrap;margin:0">${message}</p>
          <hr style="margin:20px 0;border:none;border-top:1px solid #eee"/>
          <p style="color:#888;font-size:12px;margin:0">Sent from zedrolabs.io contact form</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (e: any) {
    console.error("[ZedroLabs Contact Error]", e.message);
    return NextResponse.json({ error: "Failed to send. Please try again." }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;
    if (!name || !email || !message) return NextResponse.json({ error: "Required fields missing." }, { status: 400 });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: "Invalid email." }, { status: 400 });
    console.log("[ZedroLabs Contact]", { ...body, ts: new Date().toISOString() });
    // TODO: Integrate Resend/SendGrid/Nodemailer here
    return NextResponse.json({ success: true, message: "Message received. We'll respond within 24 hours." });
  } catch (e) {
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}

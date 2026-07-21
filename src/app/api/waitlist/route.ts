import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables (fallback for build process)
const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy_key_for_build");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, goal } = body;

    if (!name || !email || !goal) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // TODO: Add Vercel Postgres insert logic here later

    // Send confirmation email
    const { data, error } = await resend.emails.send({
      from: 'Real Leveling <waitlist@realleveling.com>', // User needs to verify domain in Resend or use standard testing email
      to: [email],
      subject: 'Quest Accepted: Welcome to the Real Leveling Waitlist',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #03030A; color: #ffffff; padding: 40px; border-radius: 12px; border: 1px solid #1a1a2e;">
          <h1 style="color: #60a5fa; margin-bottom: 20px;">Welcome to the Guild, ${name}!</h1>
          <p style="font-size: 16px; line-height: 1.5; color: #cbd5e1;">
            Your quest has been officially registered. You've taken the first step towards leveling up your real life, focusing on <strong>${goal}</strong>.
          </p>
          <p style="font-size: 16px; line-height: 1.5; color: #cbd5e1;">
            We're currently forging the ultimate AI-powered RPG experience. You are on the priority list for our Private Beta.
          </p>
          <div style="background-color: #0f172a; padding: 20px; border-radius: 8px; margin: 30px 0; border: 1px solid #3b82f6;">
            <p style="margin: 0; font-size: 14px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Current Hunter Status</p>
            <p style="margin: 5px 0 0; font-size: 24px; font-weight: bold; color: #fff;">Level 1 - Waiting for Awakening</p>
          </div>
          <p style="font-size: 16px; color: #94a3b8;">
            Stay sharp.<br/>
            - The Real Leveling System
          </p>
        </div>
      `
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Waitlist API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';

function isValidEmail(value: string): boolean {
  return /.+@.+\..+/.test(value);
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const name = String(data?.name || '').trim();
    const email = String(data?.email || '').trim();
    const company = String(data?.company || '').trim();
    const message = String(data?.message || '').trim();

    if (!name || !isValidEmail(email) || message.length < 10) {
      return NextResponse.json({ error: 'Invalid submission' }, { status: 400 });
    }

    // In production, integrate with your email provider or CRM here.
    // For now we simply acknowledge receipt.
    const receivedAt = new Date().toISOString();
    return NextResponse.json({ ok: true, receivedAt, name, email, company });
  } catch (err) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

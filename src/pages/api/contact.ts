import { Resend } from 'resend';
import { getResendApiKey } from '../../lib/env';

// Naive in-memory rate limiter (best-effort). For distributed setups,
// replace with a centralized store (e.g., Redis/Upstash).
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX = 10; // max requests per window per IP
const rateMap = new Map<string, { count: number; resetAt: number }>();

export const prerender = false;

export async function POST({ request }: { request: Request }) {
  try {
    // Basic origin/referrer check (CSRF mitigation for public form)
    const origin = request.headers.get('origin');
    const referer = request.headers.get('referer');
    const urlOrigin = new URL(request.url).origin;
    if ((origin && origin !== urlOrigin) || (referer && !referer.startsWith(urlOrigin))) {
      return new Response(JSON.stringify({ error: 'Invalid origin' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Rate limiting by IP (via forwarded headers)
    const ip =
      (request.headers.get('x-forwarded-for') || '')
        .split(',')[0]
        .trim() ||
      request.headers.get('x-real-ip') ||
      'unknown';
    const now = Date.now();
    const info = rateMap.get(ip);
    if (!info || now > info.resetAt) {
      rateMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    } else {
      info.count += 1;
      if (info.count > RATE_LIMIT_MAX) {
        return new Response(JSON.stringify({ error: 'Rate limit exceeded' }), {
          status: 429,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    const formData = await request.formData();
    const website = (formData.get('website') || '').toString().trim();
    if (website) {
      // Honeypot triggered; treat as success without sending.
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const name = (formData.get('name') || '').toString().trim();
    const email = (formData.get('email') || '').toString().trim();
    const project = (formData.get('project') || '').toString().trim();
    const message = (formData.get('message') || '').toString().trim();

    if (!name || !email || !project) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Server-side validation
    const emailValid = /^\S+@\S+\.\S+$/.test(email);
    if (!emailValid) {
      return new Response(JSON.stringify({ error: 'Invalid email' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    if (name.length > 100 || project.length > 100 || message.length > 2000) {
      return new Response(JSON.stringify({ error: 'Payload too large' }), {
        status: 413,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const resend = new Resend(getResendApiKey());
    const subject = 'Nueva consulta desde el sitio web';
    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;">
        <h2>Nueva consulta</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Proyecto:</strong> ${escapeHtml(project)}</p>
        ${message ? `<p><strong>Mensaje:</strong><br/>${escapeHtml(message)}</p>` : ''}
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: 'Malaya Web <onboarding@resend.dev>',
      to: ['hola@malayaweb.com'],
      replyTo: email || undefined,
      subject,
      html,
    });

    if (error) {
      return new Response(JSON.stringify({ error: 'Failed to send email' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ ok: true, id: data?.id }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err?.message || 'Unknown error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export function GET() {
  return new Response('OK', { status: 200 });
}

function escapeHtml(input: string): string {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

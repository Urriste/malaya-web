import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

function getResendApiKey() {
  const key = "re_Grnuc5DX_AtCxtCgnq8cEscfVrsKvytvT";
  if (key.trim().length === 0) {
    throw new Error(
      "RESEND_API_KEY is not set. Configure it in .env.local (dev) or your hosting environment (prod)."
    );
  }
  return key;
}

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1e3;
const RATE_LIMIT_MAX = 10;
const rateMap = /* @__PURE__ */ new Map();
const prerender = false;
async function POST({ request }) {
  try {
    const origin = request.headers.get("origin");
    const referer = request.headers.get("referer");
    const urlOrigin = new URL(request.url).origin;
    if (origin && origin !== urlOrigin || referer && !referer.startsWith(urlOrigin)) {
      return new Response(JSON.stringify({ error: "Invalid origin" }), {
        status: 403,
        headers: { "Content-Type": "application/json" }
      });
    }
    const ip = (request.headers.get("x-forwarded-for") || "").split(",")[0].trim() || request.headers.get("x-real-ip") || "unknown";
    const now = Date.now();
    const info = rateMap.get(ip);
    if (!info || now > info.resetAt) {
      rateMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    } else {
      info.count += 1;
      if (info.count > RATE_LIMIT_MAX) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded" }), {
          status: 429,
          headers: { "Content-Type": "application/json" }
        });
      }
    }
    const formData = await request.formData();
    const website = (formData.get("website") || "").toString().trim();
    if (website) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    const name = (formData.get("name") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const project = (formData.get("project") || "").toString().trim();
    const message = (formData.get("message") || "").toString().trim();
    if (!name || !email || !project) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const emailValid = /^\S+@\S+\.\S+$/.test(email);
    if (!emailValid) {
      return new Response(JSON.stringify({ error: "Invalid email" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (name.length > 100 || project.length > 100 || message.length > 2e3) {
      return new Response(JSON.stringify({ error: "Payload too large" }), {
        status: 413,
        headers: { "Content-Type": "application/json" }
      });
    }
    const resend = new Resend(getResendApiKey());
    const subject = "Nueva consulta desde el sitio web";
    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;">
        <h2>Nueva consulta</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Proyecto:</strong> ${escapeHtml(project)}</p>
        ${message ? `<p><strong>Mensaje:</strong><br/>${escapeHtml(message)}</p>` : ""}
      </div>
    `;
    const { data, error } = await resend.emails.send({
      from: "Malaya Web <onboarding@resend.dev>",
      to: ["hola@malayaweb.com"],
      replyTo: email || void 0,
      subject,
      html
    });
    if (error) {
      return new Response(JSON.stringify({ error: "Failed to send email" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response(JSON.stringify({ ok: true, id: data?.id }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err?.message || "Unknown error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
function escapeHtml(input) {
  return input.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

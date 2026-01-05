export function getResendApiKey(): string {
  const key = import.meta.env.RESEND_API_KEY || process.env?.RESEND_API_KEY;
  if (!key || typeof key !== "string" || key.trim().length === 0) {
    throw new Error(
      "RESEND_API_KEY is not set. Configure it in .env.local (dev) or your hosting environment (prod)."
    );
  }
  return key;
}

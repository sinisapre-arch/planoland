/**
 * PlanoLand lead-capture worker (Cloudflare Worker).
 *
 * The contact form on the site POSTs a small JSON payload here; the worker
 * holds the Telegram bot token + chat id as secrets and forwards the lead to
 * the studio's Telegram chat. No secret ever reaches the browser.
 *
 * Contract (must match src/lib/telegram.ts):
 *   POST /            Content-Type: application/json
 *   body: { name: string, message: string, projectType: string }
 *   → 200 { success: true }
 *   → 4xx/5xx { error: string }
 *
 * Secrets (set with `wrangler secret put`):
 *   TELEGRAM_BOT_TOKEN — bot token from @BotFather
 *   TELEGRAM_CHAT_ID   — numeric chat id that receives the leads
 */

export interface Env {
  TELEGRAM_BOT_TOKEN: string;
  TELEGRAM_CHAT_ID: string;
}

type LeadPayload = {
  name?: unknown;
  message?: unknown;
  projectType?: unknown;
};

const CORS_HEADERS: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "86400",
};

const LIMITS = {
  name: { min: 2, max: 100 },
  message: { min: 0, max: 2000 },
} as const;

/** Strip control characters that would break Telegram's Markdown-free parsing. */
function sanitize(value: string): string {
  return value.replace(/\p{Cc}/gu, " ").trim();
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    if (request.method !== "POST") {
      return json({ error: "method_not_allowed" }, 405);
    }

    if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) {
      return json({ error: "worker_not_configured" }, 500);
    }

    let payload: LeadPayload;
    try {
      payload = (await request.json()) as LeadPayload;
    } catch {
      return json({ error: "invalid_json" }, 400);
    }

    const name = isNonEmptyString(payload.name) ? sanitize(payload.name) : "";
    const message = isNonEmptyString(payload.message)
      ? sanitize(payload.message)
      : "";
    const projectType = isNonEmptyString(payload.projectType)
      ? sanitize(payload.projectType)
      : "unknown";

    if (name.length < LIMITS.name.min || name.length > LIMITS.name.max) {
      return json({ error: "invalid_name" }, 400);
    }
    if (message.length > LIMITS.message.max) {
      return json({ error: "invalid_message" }, 400);
    }

    const text = [
      "🌿 Новая заявка с сайта planoland.ru",
      "",
      `👤 Имя: ${name}`,
      `📌 Тип: ${projectType}`,
      message ? `\n${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: env.TELEGRAM_CHAT_ID,
          text,
          disable_web_page_preview: true,
        }),
      },
    );

    if (!telegramResponse.ok) {
      const detail = await telegramResponse.text().catch(() => "");
      console.error(`telegram error ${telegramResponse.status}: ${detail}`);
      return json({ error: "telegram_failed" }, 502);
    }

    return json({ success: true });
  },
};

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...CORS_HEADERS },
  });
}

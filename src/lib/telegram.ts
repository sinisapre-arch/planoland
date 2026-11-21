/**
 * Telegram contact-form submission.
 *
 * The client POSTs a small JSON payload to a Cloudflare Worker, which holds
 * the bot token + chat ID server-side and calls the Telegram sendMessage API.
 * This keeps all secrets off the client.
 *
 * Worker source lives in `worker/` (same repo). Override the endpoint with
 * VITE_TELEGRAM_WORKER_URL if the worker is hosted elsewhere.
 *
 * TEMPORARY (owner decision 2026-11-21): the dedicated `planoland-bot` worker
 * is written but not deployed — it still needs a bot token + chat id from the
 * owner. Until it is live the form posts to the legacy shared worker so
 * leads keep arriving. Swap this default back to
 * "https://planoland-bot.sinisapre.workers.dev" (and drop the legacy hostname
 * from this file) as soon as that worker is deployed.
 *
 * Worker contract (must match the deployed worker):
 *   POST {workerUrl}
 *   Content-Type: application/json
 *   body: { name: string, message: string, projectType: string }
 *   → 200 { success: true }  on success
 *   → 4xx/5xx { error: string } on failure
 */

export const TELEGRAM_WORKER_URL =
  import.meta.env.VITE_TELEGRAM_WORKER_URL ??
  "https://mscw-bureau-bot.sinisapre.workers.dev";

export type ProjectType =
  | "landscape"
  | "3d"
  | "drone"
  | "other"
  | "contact";

export type TelegramFormData = {
  name: string;
  contact: string;
  message?: string;
  /** Which form the submission came from — used as the worker's projectType. */
  source: ProjectType;
};

export type TelegramSubmitResult = { ok: true } | { ok: false; error: string };

/** Validation limits mirror the reference project + the form's maxLength attrs. */
export const FIELD_LIMITS = {
  name: { min: 2, max: 100 },
  contact: { min: 5, max: 254 },
  message: { min: 0, max: 2000 },
} as const;

export type FieldName = keyof typeof FIELD_LIMITS;

export function validateField(
  value: string,
  field: FieldName,
): { ok: true } | { ok: false; reason: "required" | "too_short" | "too_long" } {
  const { min, max } = FIELD_LIMITS[field];
  // Message is optional; only validate length if the user provided one.
  if (field === "message") {
    if (value.length === 0) return { ok: true };
    if (value.length < min) return { ok: false, reason: "too_short" };
    if (value.length > max) return { ok: false, reason: "too_long" };
    return { ok: true };
  }
  if (value.length === 0) return { ok: false, reason: "required" };
  if (value.length < min) return { ok: false, reason: "too_short" };
  if (value.length > max) return { ok: false, reason: "too_long" };
  return { ok: true };
}

/**
 * Submit the contact form to the Telegram worker. The contact info (phone or
 * email) and optional message are folded into a single Telegram message body,
 * matching how the reference project formats its payload.
 */
export async function submitToTelegram(
  data: TelegramFormData,
): Promise<TelegramSubmitResult> {
  const safeName = data.name.substring(0, FIELD_LIMITS.name.max);
  const safeContact = data.contact.substring(0, FIELD_LIMITS.contact.max);
  const safeMessage = (data.message ?? "").substring(
    0,
    FIELD_LIMITS.message.max,
  );

  // Build the body the worker expects. The reference format prefixes lines
  // with emoji markers so the Telegram message reads cleanly.
  const lines = [`📧 ${safeContact}`];
  if (safeMessage) lines.push(`✉️ ${safeMessage}`);
  const messageBody = lines.join("\n");

  const payload = {
    name: safeName,
    message: messageBody,
    projectType: data.source,
  };

  try {
    const response = await fetch(TELEGRAM_WORKER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      return { ok: true };
    }

    const errBody = (await response.json().catch(() => ({}))) as {
      error?: string;
    };
    return { ok: false, error: errBody.error ?? `HTTP ${response.status}` };
  } catch (err) {
    // Network error, CORS, worker unreachable, etc.
    return {
      ok: false,
      error: err instanceof Error ? err.message : "network_error",
    };
  }
}

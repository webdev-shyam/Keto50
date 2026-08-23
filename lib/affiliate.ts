/**
 * ─────────────────────────────────────────────────────────────
 * AFFILIATE URL ARCHITECTURE — the single source of truth.
 * Every affiliate CTA on the site points to the SAME destination,
 * configured in ONE place. Changing the affiliate link takes
 * less than 30 seconds:
 *
 *   Option A (recommended): set the NEXT_PUBLIC_AFFILIATE_URL
 *     environment variable (see .env.example and README.md).
 *   Option B: paste your link into AFFILIATE_URL_FALLBACK below.
 * ─────────────────────────────────────────────────────────────
 */

export const AFFILIATE_URL_PLACEHOLDER =
  "PASTE_YOUR_DIGISTORE24_AFFILIATE_LINK_HERE";

/** Quick local alternative to an environment variable. */
const AFFILIATE_URL_FALLBACK = AFFILIATE_URL_PLACEHOLDER;

export const AFFILIATE_URL = (
  process.env.NEXT_PUBLIC_AFFILIATE_URL || AFFILIATE_URL_FALLBACK
).trim();

/** True once a real affiliate link has been configured. */
export const isAffiliateUrlConfigured =
  AFFILIATE_URL !== AFFILIATE_URL_PLACEHOLDER && /^https:\/\//i.test(AFFILIATE_URL);

/**
 * Single hook point for analytics. Every affiliate CTA calls this
 * BEFORE navigating, so analytics can be added later in one place.
 *
 * To wire up Google Analytics / Vercel Analytics later, extend here:
 *   window.gtag?.("event", "affiliate_click", { label });
 *   window.va?.("event", { name: "affiliate_click", data: { label } });
 */
export function trackAffiliateClick(label: string): void {
  if (typeof window === "undefined") return;
  console.info(`[affiliate] Affiliate CTA clicked — label: "${label}"`);
}

/**
 * Central site configuration.
 * Replace the placeholders before launch (see README.md).
 */

export const SITE_NAME = "Keto Dessert Finds";

export const SITE_TAGLINE =
  "Independent recommendations for low-carb dessert ideas";

export const PRODUCT_NAME = "Keto After 50 Desserts";

/** Public domain, used for canonical URL, sitemap and Open Graph metadata. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://ketoafter50.vercel.app/"
).replace(/\/$/, "");

/** TODO: replace with your real contact address. */
export const CONTACT_EMAIL = "contact@vynoramarket.me";

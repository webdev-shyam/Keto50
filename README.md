# Keto After 50 Desserts — Affiliate Landing Page

A production-ready, mobile-first **affiliate landing page** recommending the
third-party product **Keto After 50 Desserts** (a keto-friendly dessert recipe
collection for people 50+).

> ⚠️ This is an **independent recommendation page**. It is NOT the official
> vendor website, and it never claims to be. All CTAs point to your affiliate
> link and purchases happen on the official merchant's checkout (Digistore24).

**Stack:** Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS ·
zero extra UI dependencies · deployable to Vercel as-is.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # ESLint
```

---

## 1. Add your affiliate link (takes < 30 seconds)

Every CTA on the site reads from **one** constant in
[`lib/affiliate.ts`](lib/affiliate.ts). Choose either:

**Option A — environment variable (recommended for Vercel)**

Copy `.env.example` to `.env.local` and set:

```
NEXT_PUBLIC_AFFILIATE_URL=https://www.digistore24.com/...your-link...
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Then set the same variables in your Vercel project settings.

**Option B — code constant**

Open [`lib/affiliate.ts`](lib/affiliate.ts) and paste your link into
`AFFILIATE_URL_FALLBACK`.

> While the placeholder is still in place, clicking any CTA shows a small
> “Affiliate link not configured” notice instead of navigating. Once you set a
> real URL, all buttons go live automatically — nothing else to change.

### Verify the wiring

Every CTA on the page renders through the single `AffiliateLink` component.
The only places the affiliate URL is defined are `lib/affiliate.ts`,
`.env.example` and this README.

---

## 2. Add your assets

| Asset | Path | Notes |
| --- | --- | --- |
| Official product artwork | `public/images/keto-after-50-desserts.png` | **Not included.** Until you add it, a clearly-marked placeholder is shown. Add the file and it appears automatically (shown with `object-contain` — never distorted). |
| UGC hero video (optional) | `public/ugc/keto-after-50-desserts.mp4` | **Not included.** When present, it plays in the hero (muted, inline, looped). When missing, the hero gracefully falls back to the dessert photo. See `public/ugc/README.md`. |
| Open Graph / Pinterest image | `public/images/og-keto-desserts.jpg` | Included (1200×630, auto-generated). Regenerate with `python3 scripts/make-og-image.py` after changing the base photo in `public/images/og-base.jpg`. |

All other imagery (hero, problem section, CTA panel) is original generated
photography in `public/images/`.

---

## 3. Replace the launch placeholders

| What | Where | Placeholder |
| --- | --- | --- |
| Public domain (canonical, sitemap, OG) | `lib/site.ts` → `SITE_URL` / `.env` | `https://your-domain.com` |
| Contact email | `lib/site.ts` → `CONTACT_EMAIL` | `hello@your-domain.com` |
| Operator name on legal pages | `app/privacy/page.tsx`, `app/disclaimer/page.tsx` | `[YOUR NAME / YOUR COMPANY]` |

The legal pages (`/privacy`, `/disclaimer`, `/contact`) are honest starting
templates and show a visible “template note” until you remove `templateNote`
from each page.

---

## 4. Analytics (optional, later)

Every CTA already calls `trackAffiliateClick(label)` **before** navigating —
see [`lib/affiliate.ts`](lib/affiliate.ts). To add Google Analytics or Vercel
Analytics later, extend that one function (examples are in the comments) and
drop your provider's snippet into `app/layout.tsx`. No other changes needed.

---

## 5. Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel: **Add New → Project → import the repo** (framework auto-detected).
3. Set environment variables:
   - `NEXT_PUBLIC_AFFILIATE_URL` — your Digistore24 affiliate link
   - `NEXT_PUBLIC_SITE_URL` — your production domain (e.g. `https://dessertfinds.com`)
4. Deploy. No custom server, no database, no build tweaks required.

---

## Page structure (homepage)

1. **Hero** — headline, sub-headline, primary CTA, affiliate disclosure, optional UGC video with photo fallback
2. **Problem section** — “Missing Dessert on Your Keto Journey?”
3. **Product intro** — “Meet Keto After 50 Desserts” + official artwork slot
4. **What's inside** — feature grid (recipe categories researched from the official product page)
5. **Bonuses** — Superfood Milkshakes & Breads & Pastas (as named on the official page) + CTA
6. **Why it helps** — convenience comparison, hedged language
7. **Social-proof replacement** — general lifestyle observations (no fake reviews)
8. **FAQ** — accessible accordion + FAQPage JSON-LD
9. **Final CTA** — dark premium panel + disclosure
10. **Footer** — site name, disclosure, legal pages, independent-site statement
11. **Sticky mobile CTA** — dismissible bottom bar (mobile only)

### CTA placements (intentionally limited)

Header · Hero · Bonuses · Final CTA · Sticky mobile bar — all via one
`AffiliateLink` component with a unique `trackLabel` per placement.

---

## Compliance notes (built into the design)

- ✅ Affiliate disclosure near the primary CTA, final CTA and footer
- ✅ Independent-site language everywhere; no fake “official” branding, badges or support
- ✅ No invented testimonials, reviews, star ratings or statistics
  (a vendor-approved `Testimonials` slot exists but renders nothing until you fill it)
- ✅ No medical, health or guaranteed weight-loss claims
- ✅ No checkout, database, auth or APIs — the merchant handles all of that
- ✅ Accessible: semantic HTML, heading hierarchy, keyboard-friendly accordion,
  focus states, alt text, contrast-checked palette

---

## Project structure

```
app/                 # pages, layout, metadata, robots, sitemap, favicon
components/          # Header, Hero, UGCVideo, ProductIntro, FeatureGrid,
                     # BonusSection, WhySection, SocialProof, Testimonials,
                     # FAQ, AffiliateCTA, AffiliateLink, AffiliateDisclosure,
                     # Footer, StickyMobileCTA, Reveal, Logo, icons, LegalShell
lib/                 # affiliate.ts (URL + tracking), site.ts (brand config),
                     # faq.ts (accordion + JSON-LD source), utils.ts
public/images/       # photography, OG image, (your) product artwork
public/ugc/          # (your) UGC video
scripts/             # make-og-image.py — regenerates the OG image + apple icon
```

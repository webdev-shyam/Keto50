# Image assets

| File | Purpose | Source |
| --- | --- | --- |
| `hero-dessert.jpg` | Hero photo / video fallback | Generated (original) |
| `problem-dessert.jpg` | Problem section photo | Generated (original) |
| `flatlay-desserts.jpg` | Final CTA panel photo | Generated (original) |
| `og-base.jpg` | Base photo for the OG image | Generated (original) |
| `og-keto-desserts.jpg` | Open Graph / Pinterest preview (1200×630) | Built by `scripts/make-og-image.py` |
| `keto-after-50-desserts.png` | **Official product artwork — ADD THIS FILE** | You supply it |

## Product artwork

Add the official Keto After 50 Desserts artwork as
`keto-after-50-desserts.png`. The product section shows it with
`object-contain` (never distorted). Until the file exists, a clearly-marked
placeholder is displayed instead — we never fake the product cover.

## Regenerating the OG image

```bash
python3 scripts/make-og-image.py
```

This crops `og-base.jpg` to 1200×630, adds the title overlay and writes
`og-keto-desserts.jpg`, and also regenerates `public/apple-icon.png`.

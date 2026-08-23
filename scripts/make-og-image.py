#!/usr/bin/env python3
"""
Builds the Open Graph / Pinterest social preview image (1200x630) and the
apple-touch icon from generated photography.

Usage:  python3 scripts/make-og-image.py
Output: public/images/og-keto-desserts.jpg, public/apple-icon.png
"""
import os
from PIL import Image, ImageDraw, ImageFont, ImageOps

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG_DIR = os.path.join(ROOT, "public", "images")

# --- palette -----------------------------------------------------------------
COCOA = (43, 31, 22)        # #2B1F16  dark chocolate
COCOA_SOFT = (59, 44, 32)   # #3B2C20
BERRY = (156, 59, 59)       # #9C3B3B  berry red accent
CREAM = (251, 247, 239)     # #FBF7EF  warm cream
MOSS = (92, 122, 87)        # #5C7A57  sage green

FONT_DIRS = [
    "/usr/share/fonts/truetype/dejavu",
    "/usr/share/fonts/TTF",
    "/usr/share/fonts/truetype",
]


def find_font(name: str) -> str:
    for d in FONT_DIRS:
        p = os.path.join(d, name)
        if os.path.exists(p):
            return p
    raise FileNotFoundError(name)


def og_image():
    base = Image.open(os.path.join(IMG_DIR, "og-base.jpg")).convert("RGB")

    # Crop to exact 1200x630 (center)
    W, H = 1200, 630
    base = ImageOps.fit(base, (W, H), Image.LANCZOS, centering=(0.5, 0.5))

    # Soft cream-to-transparent scrim on the left so text always reads well
    scrim = Image.new("L", (W, H), 0)
    sd = ImageDraw.Draw(scrim)
    for x in range(W // 2 + 60):
        a = int(215 * max(0.0, 1 - (x / (W // 2 + 60)) ** 1.6))
        sd.line([(x, 0), (x, H)], fill=a)
    cream = Image.new("RGB", (W, H), CREAM)
    base = Image.composite(cream, base, scrim)

    draw = ImageDraw.Draw(base)

    title_f = find_font("DejaVuSerif-Bold.ttf")
    sub_f = find_font("DejaVuSans.ttf")
    tiny_f = find_font("DejaVuSans-Bold.ttf")

    # Eyebrow with berry rule
    draw.rectangle([48, 208, 116, 212], fill=BERRY)
    draw.text((48, 152), "KETO-FRIENDLY DESSERT IDEAS", font=ImageFont.truetype(tiny_f, 30), fill=MOSS)

    # Title
    title = "Keto After 50"
    draw.text((44, 230), title, font=ImageFont.truetype(title_f, 92), fill=COCOA)
    draw.text((44, 340), "Desserts", font=ImageFont.truetype(title_f, 92), fill=BERRY)

    # Subtitle
    sub = "A digital recipe collection for enjoying something sweet"
    draw.text((48, 470), sub, font=ImageFont.truetype(sub_f, 32), fill=COCOA_SOFT)
    sub2 = "while staying mindful of your low-carb lifestyle."
    draw.text((48, 516), sub2, font=ImageFont.truetype(sub_f, 32), fill=COCOA_SOFT)

    out = os.path.join(IMG_DIR, "og-keto-desserts.jpg")
    base.save(out, "JPEG", quality=86, optimize=True, progressive=True)
    print("wrote", out, os.path.getsize(out) // 1024, "KB")


def apple_icon():
    S = 512
    im = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)

    # Rounded square background
    d.rounded_rectangle([8, 8, S - 8, S - 8], radius=112, fill=COCOA)

    # Cup / bowl (cream)
    d.rounded_rectangle([118, 178, 394, 384], radius=40, fill=CREAM)
    # Bowl base
    d.rounded_rectangle([168, 356, 344, 406], radius=22, fill=(237, 228, 210))

    # Mousse swirl
    d.ellipse([150, 190, 362, 296], fill=(178, 133, 100))
    d.ellipse([190, 172, 322, 268], fill=(198, 154, 116))

    # Berries on top
    for cx, cy, r in [(216, 210, 26), (268, 178, 26), (306, 214, 26)]:
        d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=BERRY)
        d.ellipse([cx - 6, cy - 10, cx + 4, cy - 2], fill=(232, 190, 180))

    # Mint leaf
    d.ellipse([330, 150, 384, 186], fill=MOSS, outline=(72, 96, 70), width=4)
    d.line([356, 152, 350, 184], fill=(72, 96, 70), width=4)

    # Resize down to 180
    im = im.resize((180, 180), Image.LANCZOS)
    out = os.path.join(ROOT, "public", "apple-icon.png")
    im.save(out, "PNG", optimize=True)
    print("wrote", out)


if __name__ == "__main__":
    og_image()
    apple_icon()

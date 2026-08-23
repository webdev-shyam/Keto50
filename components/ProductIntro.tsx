"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import { CheckIcon, ImagePlaceholderIcon } from "@/components/icons";
import { PRODUCT_NAME } from "@/lib/site";

/**
 * Real official product artwork lives at:
 *   /public/images/keto-after-50-desserts.png
 * If that file is missing (or fails to load), a clearly-marked
 * placeholder is shown instead. We never fake the product cover.
 */
const PRODUCT_IMAGE = "/images/keto-after-50-desserts.webp";

const HIGHLIGHTS = [
  "A digital dessert cookbook you can browse right away",
  "Step-by-step instructions for every recipe",
  "Macronutrient details — protein, fat and carbs — per serving",
  "Categories from cakes and cookies to chocolates and ice cream",
];

export default function ProductIntro() {
  const [imageMissing, setImageMissing] = useState(false);

  return (
    <section id="product" className="scroll-mt-24">
      <div className="mx-auto max-w-container px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Reveal>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-moss-600">
                Product overview
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-cocoa-900 sm:text-4xl">
                Meet {PRODUCT_NAME}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-cocoa-600">
                {PRODUCT_NAME} is a recipe collection available with digital
                access, with the current offer also including physical books and
                two bonus collections. Check the official offer page for the
                latest pricing, delivery and format details.
              </p>
              <p className="mt-4 leading-relaxed text-cocoa-600">
                Inside, you’ll find dessert recipes built around low-carb,
                sugar-free alternatives to everyday baking ingredients. The
                collection spans the kinds of treats that usually feel
                off-limits — cakes, cookies, chocolates, ice cream and more —
                with clear guidance for making them yourself.
              </p>

              <ul className="mt-8 space-y-3.5">
                {HIGHLIGHTS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-cocoa-800"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-moss-100 text-moss-700">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    <span className="font-semibold">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-xs leading-relaxed text-cocoa-400">
                * Product details are based on the official product page. Check
                the current offer page for the latest contents and pricing.
              </p>
            </div>

            <div className="mx-auto w-full max-w-sm">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-white shadow-lift ring-1 ring-cocoa-100">
                {imageMissing ? (
                  <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
                    <ImagePlaceholderIcon className="h-10 w-10 text-cocoa-300" />
                    <p className="font-display text-lg font-semibold text-cocoa-700">
                      Product artwork placeholder
                    </p>
                    <p className="text-sm leading-relaxed text-cocoa-500">
                      Add the official artwork as{" "}
                      <code className="break-all rounded bg-cream-100 px-1.5 py-0.5 text-xs font-bold text-cocoa-700">
                        /public/images/keto-after-50-desserts.webp
                      </code>{" "}
                      — it will appear here automatically.
                    </p>
                  </div>
                ) : (
                  <Image
                    src={PRODUCT_IMAGE}
                    alt={`Official artwork for ${PRODUCT_NAME}`}
                    fill
                    sizes="(min-width: 1024px) 384px, 90vw"
                    className="object-cover p-5"
                    onError={() => setImageMissing(true)}
                  />
                )}
              </div>
              <p className="mt-3 text-center text-xs text-cocoa-400">
                Official product artwork — shown for illustration only
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

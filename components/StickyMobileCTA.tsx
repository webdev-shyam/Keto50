"use client";

import { useEffect, useState } from "react";
import AffiliateLink from "@/components/AffiliateLink";
import { XIcon } from "@/components/icons";
import { PRODUCT_NAME } from "@/lib/site";

/**
 * Sticky bottom CTA on mobile only.
 * Appears after the visitor scrolls past the hero, is dismissible,
 * and never blocks content while it is visible.
 */
export default function StickyMobileCTA() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed || !show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 animate-sticky-in border-t border-cocoa-100 bg-cream-50/95 backdrop-blur md:hidden">
      <div
        className="flex items-center gap-3 px-4 py-3"
        style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
      >
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-bold text-cocoa-900">
            {PRODUCT_NAME}
          </p>
          <p className="truncate text-[11px] text-cocoa-500">
            We may earn a commission if you purchase through our link.
          </p>
        </div>
        <AffiliateLink trackLabel="sticky-mobile" size="md" className="shrink-0">
          Explore →
        </AffiliateLink>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss bottom bar"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-cocoa-400 transition-colors hover:bg-cocoa-100 hover:text-cocoa-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss-500"
        >
          <XIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

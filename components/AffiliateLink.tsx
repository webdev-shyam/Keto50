"use client";

import { useEffect, useRef, useState } from "react";
import {
  AFFILIATE_URL,
  isAffiliateUrlConfigured,
  trackAffiliateClick,
} from "@/lib/affiliate";
import { cn } from "@/lib/utils";

type Variant = "primary" | "inverse" | "outline";
type Size = "md" | "lg";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-berry-500 text-white shadow-card hover:bg-berry-600 active:bg-berry-700",
  inverse:
    "bg-cream-50 text-cocoa-900 shadow-card hover:bg-cream-100 active:bg-cream-200",
  outline:
    "border border-cocoa-300 bg-white/70 text-cocoa-800 hover:border-cocoa-400 hover:bg-white",
};

const SIZE_CLASSES: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base sm:text-lg",
};

interface AffiliateLinkProps {
  children: React.ReactNode;
  /** Unique analytics label for this placement (e.g. "hero", "bonuses"). */
  trackLabel: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  withArrow?: boolean;
}

/**
 * The ONE component every affiliate CTA uses.
 * - Points to the centralized AFFILIATE_URL (lib/affiliate.ts).
 * - Calls trackAffiliateClick() before navigating (analytics-ready).
 * - Shows a friendly notice if the affiliate URL has not been configured yet.
 */
export default function AffiliateLink({
  children,
  trackLabel,
  variant = "primary",
  size = "md",
  className,
  withArrow = true,
}: AffiliateLinkProps) {
  const [showNotice, setShowNotice] = useState(false);
  const noticeTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => window.clearTimeout(noticeTimer.current);
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    trackAffiliateClick(trackLabel);
    if (!isAffiliateUrlConfigured) {
      event.preventDefault();
      setShowNotice(true);
      window.clearTimeout(noticeTimer.current);
      noticeTimer.current = window.setTimeout(() => setShowNotice(false), 4000);
    }
  };

  return (
    <span className="relative inline-flex flex-col items-center">
      <a
        href={AFFILIATE_URL}
        target="_blank"
        rel="noopener noreferrer sponsored"
        onClick={handleClick}
        className={cn(
          "group inline-flex items-center justify-center gap-2 rounded-full font-bold tracking-tight transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50",
          VARIANT_CLASSES[variant],
          SIZE_CLASSES[size],
          className
        )}
      >
        <span>{children}</span>
        {withArrow && (
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        )}
      </a>
      {showNotice && (
        <span
          role="status"
          aria-live="polite"
          className="absolute top-full z-10 mt-2 whitespace-nowrap rounded-full bg-cocoa-900 px-4 py-2 text-xs font-semibold text-cream-50 shadow-lift"
        >
          Affiliate link not configured yet — see README.md
        </span>
      )}
    </span>
  );
}

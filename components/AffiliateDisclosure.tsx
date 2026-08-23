import { cn } from "@/lib/utils";

interface AffiliateDisclosureProps {
  className?: string;
  /** Shorter one-liner for tight spaces (sticky bar, small cards). */
  compact?: boolean;
}

/** FTC-style affiliate disclosure, shown near CTAs and in the footer. */
export default function AffiliateDisclosure({
  className,
  compact = false,
}: AffiliateDisclosureProps) {
  return (
    <p className={cn("text-xs leading-relaxed text-cocoa-500", className)}>
      {compact ? (
        "We may earn a commission if you purchase through our link."
      ) : (
        <>
          <span className="font-bold">Affiliate disclosure:</span> We may earn a
          commission if you purchase through links on this page. This does not
          affect the price you pay.
        </>
      )}
    </p>
  );
}

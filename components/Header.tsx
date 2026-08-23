import AffiliateLink from "@/components/AffiliateLink";
import Logo from "@/components/Logo";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

const NAV_LINKS = [
  { href: "#product", label: "The Product" },
  { href: "#inside", label: "What's Inside" },
  { href: "#bonuses", label: "Bonuses" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-cocoa-100/70 bg-cream-50/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-container items-center justify-between gap-3 px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <a
          href="/"
          className="flex min-w-0 items-center gap-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss-500 focus-visible:ring-offset-2"
          aria-label={`${SITE_NAME} — homepage`}
        >
          <Logo className="h-9 w-9 shrink-0" />
          <span className="min-w-0">
            <span className="block truncate font-display text-lg font-semibold leading-tight text-cocoa-900">
              {SITE_NAME}
            </span>
            <span className="hidden text-[11px] font-medium leading-tight text-cocoa-500 sm:block">
              {SITE_TAGLINE}
            </span>
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-cocoa-600 transition-colors hover:text-cocoa-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss-500 focus-visible:ring-offset-2 rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <AffiliateLink trackLabel="header" size="md" className="shrink-0">
          Explore →
        </AffiliateLink>
      </div>
    </header>
  );
}

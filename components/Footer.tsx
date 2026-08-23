import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import Logo from "@/components/Logo";
import { PRODUCT_NAME, SITE_NAME, SITE_TAGLINE } from "@/lib/site";

const EXPLORE_LINKS = [
  { href: "#product", label: "The Product" },
  { href: "#inside", label: "What's Inside" },
  { href: "#bonuses", label: "Bonuses" },
  { href: "#why", label: "Why It Helps" },
  { href: "#faq", label: "FAQ" },
];

const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cocoa-950 text-cream-100/80">
      <div className="mx-auto max-w-container px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo className="h-9 w-9" />
              <span className="font-display text-lg font-semibold text-cream-50">
                {SITE_NAME}
              </span>
            </div>
            <p className="mt-3 text-sm text-cream-100/60">{SITE_TAGLINE}.</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-cream-100/70">
              {SITE_NAME} is an independent product recommendation page. We are
              not the owner, publisher or official website of {PRODUCT_NAME}.
              We simply share dessert ideas worth exploring.
            </p>
          </div>

          <nav aria-label="Page sections">
            <h3 className="text-xs font-bold uppercase tracking-widest text-cream-100/50">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-semibold text-cream-100/80 transition-colors hover:text-cream-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss-400 rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal">
            <h3 className="text-xs font-bold uppercase tracking-widest text-cream-100/50">
              Legal
            </h3>
            <ul className="mt-4 space-y-2.5">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-semibold text-cream-100/80 transition-colors hover:text-cream-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss-400 rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 rounded-2xl bg-cocoa-900 p-5 ring-1 ring-cocoa-800">
          <AffiliateDisclosure className="text-cream-100/70" />
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-cocoa-800 pt-6 text-xs leading-relaxed text-cream-100/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE_NAME}. All rights reserved.
          </p>
          <p className="sm:text-right">
            “{PRODUCT_NAME}” is a third-party product. All product names, logos
            and trademarks belong to their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}

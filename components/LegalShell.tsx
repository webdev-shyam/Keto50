import Link from "next/link";

interface LegalShellProps {
  title: string;
  subtitle?: string;
  /** Shows the "template" notice — keep on until you replace the placeholders. */
  templateNote?: boolean;
  children: React.ReactNode;
}

/** Shared layout for the /privacy, /disclaimer and /contact pages. */
export default function LegalShell({
  title,
  subtitle,
  templateNote = false,
  children,
}: LegalShellProps) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <Link
        href="/"
        className="rounded text-sm font-semibold text-moss-600 transition-colors hover:text-moss-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss-500 focus-visible:ring-offset-2"
      >
        ← Back to the homepage
      </Link>
      <h1 className="mt-6 font-display text-3xl font-semibold tracking-tight text-cocoa-900 sm:text-4xl">
        {title}
      </h1>
      {subtitle && <p className="mt-3 leading-relaxed text-cocoa-600">{subtitle}</p>}
      {templateNote && (
        <div className="mt-6 rounded-2xl bg-moss-50 px-5 py-4 text-sm leading-relaxed text-moss-800 ring-1 ring-moss-200">
          <strong>Template note:</strong> this page is a starting template.
          Replace the [placeholders] with your own details before you publish
          the site.
        </div>
      )}
      <div className="mt-8 space-y-8 text-base leading-relaxed text-cocoa-600">
        {children}
      </div>
    </div>
  );
}

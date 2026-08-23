import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";
import { CONTACT_EMAIL, PRODUCT_NAME, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact this independent product recommendation page with questions or corrections.",
};

export default function ContactPage() {
  return (
    <LegalShell
      title="Contact"
      subtitle={`Have a question about ${SITE_NAME} — or spotted something that needs correcting? We'd love to hear from you.`}
      templateNote
    >
      <div className="rounded-3xl bg-white p-7 shadow-card ring-1 ring-cocoa-100/70 sm:p-8">
        <h2 className="font-display text-xl font-semibold text-cocoa-900">
          Email us
        </h2>
        <p className="mt-3">
          The fastest way to reach us is by email:{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-bold text-moss-600 underline decoration-moss-300 underline-offset-2 hover:text-moss-700"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>

      <div className="rounded-3xl bg-cream-100/70 p-7 ring-1 ring-cocoa-100/70 sm:p-8">
        <h2 className="font-display text-xl font-semibold text-cocoa-900">
          Questions about the product itself?
        </h2>
        <p className="mt-3">
          Please note: we cannot provide support for {PRODUCT_NAME} — orders,
          downloads, refunds and product questions are handled by the merchant
          (Digistore24). For product support, contact the merchant through the
          official checkout page or the confirmation email you received with
          your order.
        </p>
      </div>

      <div>
        <h2 className="font-display text-xl font-semibold text-cocoa-900">
          Corrections & press
        </h2>
        <p className="mt-3">
          We aim to describe products fairly and accurately. If you believe any
          information on this page is outdated or incorrect, please email us and
          we will review it as soon as possible.
        </p>
      </div>
    </LegalShell>
  );
}

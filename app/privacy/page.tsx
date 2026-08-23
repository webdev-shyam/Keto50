import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";
import { CONTACT_EMAIL, PRODUCT_NAME, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for this independent affiliate recommendation page.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-xl font-semibold text-cocoa-900">
        {title}
      </h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      subtitle={`How ${SITE_NAME} handles your information. Last updated: ${new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}.`}
      templateNote
    >
      <Section title="Who we are">
        <p>
          This website (“{SITE_NAME}”, “we”, “us”) is an independent affiliate
          marketing page operated by [YOUR NAME / YOUR COMPANY]. We recommend
          the third-party product {PRODUCT_NAME}. We are not the product
          creator, publisher or official vendor website.
        </p>
      </Section>

      <Section title="Affiliate disclosure">
        <p>
          We may earn a commission if you purchase through links on this page.
          This does not affect the price you pay.
        </p>
      </Section>

      <Section title="Information we collect">
        <p>
          This is a static marketing page. We do not operate user accounts,
          contact forms or a database, and we do not knowingly collect personal
          information from visitors.
        </p>
        <p>
          Like most websites, our hosting provider (e.g. Vercel) may record
          standard technical logs — such as IP address, browser type and pages
          visited — for security, reliability and aggregated analytics
          purposes. These logs are managed by the hosting provider under their
          own privacy policies.
        </p>
      </Section>

      <Section title="Cookies">
        <p>
          We do not set tracking cookies ourselves. If we add analytics tools
          (for example Google Analytics) at a later date, we will update this
          policy accordingly before doing so.
        </p>
      </Section>

      <Section title="Third-party links">
        <p>
          Links on this page lead to external websites, including the official
          product page and the merchant platform Digistore24. We are not
          responsible for the content or privacy practices of third-party
          sites. Please review their privacy policies before providing any
          personal information — for example, during checkout.
        </p>
      </Section>

      <Section title="Your rights">
        <p>
          Depending on your location, you may have rights regarding your
          personal data (for example under the GDPR or CCPA). Because we do not
          collect personal data directly, there is typically nothing for us to
          access or delete. If you have questions, contact us at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-semibold text-moss-600 underline decoration-moss-300 underline-offset-2 hover:text-moss-700"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Questions about this policy? Email us at {CONTACT_EMAIL} or visit our{" "}
          <a href="/contact" className="font-semibold text-moss-600 underline decoration-moss-300 underline-offset-2 hover:text-moss-700">
            contact page
          </a>
          . Note that {SITE_URL} is a placeholder domain — update it with your
          real address before launch.
        </p>
      </Section>
    </LegalShell>
  );
}

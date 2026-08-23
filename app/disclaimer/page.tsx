import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";
import { CONTACT_EMAIL, PRODUCT_NAME, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Affiliate, earnings and medical disclaimers for this independent recommendation page.",
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

export default function DisclaimerPage() {
  return (
    <LegalShell
      title="Disclaimer"
      subtitle="Please read this page carefully before using this website or purchasing the recommended product."
      templateNote
    >
      <Section title="Independent affiliate website">
        <p>
          {SITE_NAME} is an independent marketing and recommendation page
          operated by [YOUR NAME / YOUR COMPANY]. We are not the owner,
          publisher or official representative of {PRODUCT_NAME}, and this is
          not the official vendor website.
        </p>
        <p>
          “{PRODUCT_NAME}” and any related product names, logos and trademarks
          belong to their respective owners. All references on this site are
          made for identification and discussion purposes only.
        </p>
      </Section>

      <Section title="Affiliate disclosure">
        <p>
          Some links on this page are affiliate links. We may earn a commission
          if you click a link and make a purchase through the official
          merchant. This does not affect the price you pay, and it does not
          influence our honest presentation of the product.
        </p>
      </Section>

      <Section title="Not medical or nutritional advice">
        <p>
          The content on this page is for general informational purposes only
          and is not medical, nutritional or dietary advice. It is not intended
          to diagnose, treat, cure or prevent any disease or condition.
        </p>
        <p>
          Before changing your diet — including starting a keto or low-carb
          eating plan, or using sugar substitutes — always consult a qualified
          healthcare professional, especially if you have a medical condition,
          take medication, or are over the age of 50.
        </p>
      </Section>

      <Section title="No guarantees">
        <p>
          We describe {PRODUCT_NAME} based on publicly available information at
          the time of writing. We make no guarantees about results, weight
          loss, health outcomes, recipe quality or suitability for your
          personal situation. Individual experiences vary.
        </p>
      </Section>

      <Section title="Accuracy of product information">
        <p>
          Product details, contents, bonuses and pricing may change at any
          time and are controlled by the vendor and merchant (Digistore24).
          Always verify the current details on the official offer page before
          making a purchase.
        </p>
      </Section>

      <Section title="External links">
        <p>
          This website contains links to third-party websites. We are not
          responsible for their content, policies or practices. Purchases made
          through external links are subject to the terms of those third
          parties.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Questions about this disclaimer? Email us at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-semibold text-moss-600 underline decoration-moss-300 underline-offset-2 hover:text-moss-700"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </Section>
    </LegalShell>
  );
}

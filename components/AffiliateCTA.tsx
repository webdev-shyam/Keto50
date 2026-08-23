import Image from "next/image";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AffiliateLink from "@/components/AffiliateLink";
import Reveal from "@/components/Reveal";
import { CheckIcon } from "@/components/icons";
import { PRODUCT_NAME } from "@/lib/site";

const REASSURANCES = [
  "You’ll land on the official offer page — this site never handles payments.",
  "Digital access — browse the collection on your phone, tablet or computer.",
];

export default function AffiliateCTA() {
  return (
    <section>
      <div className="mx-auto max-w-container px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-cocoa-900 shadow-lift">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-berry-500/20 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 right-1/3 h-72 w-72 rounded-full bg-moss-500/20 blur-3xl"
            />

            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative px-6 py-12 sm:px-12 sm:py-16 lg:py-20">
                <p className="text-xs font-bold uppercase tracking-widest text-moss-300">
                  Your move
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-cream-50 sm:text-4xl lg:text-[2.6rem]">
                  Ready to Explore More Keto Dessert Ideas?
                </h2>
                <p className="mt-4 max-w-lg text-lg leading-relaxed text-cream-100/80">
                  Take a look at {PRODUCT_NAME} and see whether the recipe
                  collection is right for you.
                </p>

                <ul className="mt-6 space-y-2.5">
                  {REASSURANCES.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-cream-100/75"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-moss-500/30 text-moss-200">
                        <CheckIcon className="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <AffiliateLink trackLabel="final-cta" variant="inverse" size="lg">
                    Explore {PRODUCT_NAME}
                  </AffiliateLink>
                </div>
                <AffiliateDisclosure className="mt-4 text-cream-100/60" />
              </div>

              <div className="relative hidden min-h-[320px] lg:block">
                <Image
                  src="/images/flatlay-desserts.jpg"
                  alt="An assortment of low-carb desserts including brownies, cheesecake bites, cookies and a milkshake"
                  fill
                  sizes="45vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-r from-cocoa-900 via-cocoa-900/35 to-transparent"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

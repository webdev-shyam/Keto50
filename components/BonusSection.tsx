import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AffiliateLink from "@/components/AffiliateLink";
import Reveal from "@/components/Reveal";

/**
 * Bonus names confirmed on the official product page
 * ("Keto After 50 Superfood Milkshakes" and "Keto After 50 Breads & Pastas").
 * Descriptions are our own wording — see the official offer for full details.
 */
const BONUSES = [
  {
    badge: "Free bonus #1",
    icon: "🥤",
    title: "Keto After 50 Superfood Milkshakes",
    text: "A companion collection of keto-friendly milkshake recipes — thick, creamy, drinkable desserts — plus guidance on nutrient-dense superfoods you can add to your shakes.",
  },
  {
    badge: "Free bonus #2",
    icon: "🍝",
    title: "Keto After 50 Breads & Pastas",
    text: "A companion collection of bread and pasta recipes made with low-carb alternative ingredients, for the savory side of the keto table.",
  },
];

export default function BonusSection() {
  return (
    <section id="bonuses" className="scroll-mt-24">
      <div className="mx-auto max-w-container px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-berry-500">
              Included with the offer
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-cocoa-900 sm:text-4xl">
              Two Bonus Collections to Explore
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-cocoa-600">
              Alongside the main cookbook, the current offer comes with two
              extra recipe collections to round out your low-carb kitchen.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            {BONUSES.map((bonus, index) => (
              <Reveal key={bonus.title} delay={index * 100}>
                <div className="relative h-full overflow-hidden rounded-3xl bg-white p-7 shadow-card ring-1 ring-cocoa-100/70 sm:p-8">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-berry-400 via-berry-500 to-moss-500"
                  />
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center rounded-full bg-berry-50 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-berry-600">
                      {bonus.badge}
                    </span>
                    <span
                      aria-hidden="true"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-cream-100 text-xl"
                    >
                      {bonus.icon}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-cocoa-900">
                    {bonus.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cocoa-600">
                    {bonus.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-3 text-center">
            <AffiliateLink trackLabel="bonuses" size="lg">
              See What’s Included
            </AffiliateLink>
            <AffiliateDisclosure compact />
          </div>
          <p className="mt-6 text-center text-xs text-cocoa-400">
            * Bonus names shown as they appear on the official product page.
            Availability and contents may change — always confirm on the offer
            page.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

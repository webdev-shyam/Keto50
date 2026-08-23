import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AffiliateLink from "@/components/AffiliateLink";
import UGCVideo from "@/components/UGCVideo";
import { CheckIcon } from "@/components/icons";
import { PRODUCT_NAME } from "@/lib/site";

const QUICK_POINTS = [
  "A dessert-focused recipe collection",
  "Keto & low-carb friendly ideas",
  "Created with people 50 and over in mind",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft decorative tints */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -top-28 h-96 w-96 rounded-full bg-moss-100/70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-64 h-80 w-80 rounded-full bg-berry-50/80 blur-3xl"
      />

      <div className="relative mx-auto max-w-container px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-moss-200 bg-moss-50 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-moss-700 sm:text-xs">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-moss-500"
              />
              Independent product recommendation
            </p>

            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-cocoa-900 sm:text-5xl lg:text-[3.5rem]">
              Who Said Keto Means{" "}
              <span className="italic text-berry-500">Giving Up Dessert?</span>
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-cocoa-600 sm:text-xl">
              Discover delicious keto-friendly dessert ideas designed for people
              who want to enjoy something sweet while staying mindful of their
              low-carb lifestyle.
            </p>

            <div className="mt-8">
              <AffiliateLink trackLabel="hero" size="lg">
                Explore {PRODUCT_NAME}
              </AffiliateLink>
            </div>
            <AffiliateDisclosure className="mt-4" />

            <ul className="mt-8 space-y-2.5">
              {QUICK_POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2.5 text-sm font-semibold text-cocoa-700"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-moss-100 text-moss-700">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative  overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-cocoa-100">
              <UGCVideo
                fallbackSrc="/images/hero-dessert.jpg"
                fallbackAlt="A glass of rich chocolate mousse topped with fresh raspberries and a mint leaf"
                priority
                sizes="(min-width: 1024px) 45vw, 92vw"
              />
            </div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-cocoa-800 shadow-card ring-1 ring-cocoa-100 backdrop-blur">
              🍓 Sweet ideas for a low-carb lifestyle
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

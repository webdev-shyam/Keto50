import Reveal from "@/components/Reveal";
import { CheckIcon, XIcon } from "@/components/icons";

const OLD_WAY = [
  "Scattered recipes spread across dozens of different sites",
  "Hard to tell which recipes are actually low-carb",
  "An evening lost to searching and trial-and-error",
];

const COLLECTED_WAY = [
  "Sweet ideas gathered together in one place",
  "Recipes written for a keto / low-carb lifestyle",
  "A collection you can browse whenever a craving hits",
];

export default function WhySection() {
  return (
    <section id="why" className="scroll-mt-24 border-y border-cocoa-100/60 bg-cream-100/60">
      <div className="mx-auto max-w-container px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-moss-600">
              Convenience
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-cocoa-900 sm:text-4xl">
              Why This May Be Interesting
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-cocoa-600">
              Instead of searching the internet every time you want a dessert
              idea, a dedicated collection can make it easier to find something
              that fits your way of eating.
            </p>
          </div>

          <div className="relative mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2 md:gap-6">
            <div className="rounded-3xl bg-white p-7 shadow-card ring-1 ring-cocoa-100/70 sm:p-8">
              <h3 className="font-display text-lg font-semibold text-cocoa-700">
                Searching the web every time
              </h3>
              <ul className="mt-5 space-y-3.5">
                {OLD_WAY.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-cocoa-600">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cream-200 text-cocoa-400">
                      <XIcon className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-moss-50 p-7 shadow-card ring-1 ring-moss-200 sm:p-8">
              <h3 className="font-display text-lg font-semibold text-moss-800">
                A dessert-focused recipe collection
              </h3>
              <ul className="mt-5 space-y-3.5">
                {COLLECTED_WAY.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-moss-800">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-moss-100 text-moss-700">
                      <CheckIcon className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* "vs" chip */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-berry-500 font-display text-sm font-bold text-white shadow-lift ring-4 ring-cream-50 md:flex"
            >
              vs
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center leading-relaxed text-cocoa-600">
            We can’t promise you’ll love every recipe — taste is personal. But
            if you’re tired of hunting for low-carb dessert ideas, a ready-made
            collection offers a convenient place to start. Worth exploring if
            you love dessert and want to keep things low-carb.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

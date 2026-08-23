import Reveal from "@/components/Reveal";

/**
 * NO invented reviews, names, ratings or statistics on this page.
 * Instead of fake testimonials, this section shares general lifestyle
 * observations about low-carb eating — clearly framed as our own take.
 */
const OBSERVATIONS = [
  {
    icon: "🍰",
    title: "Dessert can feel off-limits",
    text: "Cutting back on carbs and sugar often means the sweet end of a meal is the first thing to go — and that’s exactly the part people tend to miss most.",
  },
  {
    icon: "🔍",
    title: "Finding good ideas takes time",
    text: "Hunting for dessert recipes that truly fit a low-carb lifestyle usually means a lot of scrolling, comparing and trial-and-error in the kitchen.",
  },
  {
    icon: "🔁",
    title: "Variety is hard to keep up",
    text: "Even committed home cooks run out of fresh ideas once the usual treats are off the menu — which is where a dedicated collection comes in handy.",
  },
];

export default function SocialProof() {
  return (
    <section>
      <div className="mx-auto max-w-container px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-moss-600">
              The bigger picture
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-cocoa-900 sm:text-4xl">
              Why Dessert Lovers Are Looking for More Keto-Friendly Ideas
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-cocoa-600">
              These are general observations about low-carb eating — not
              customer reviews or testimonials.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3 lg:gap-6">
            {OBSERVATIONS.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <div className="h-full rounded-3xl bg-white p-7 shadow-card ring-1 ring-cocoa-100/70">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cream-100 text-2xl">
                    <span aria-hidden="true">{item.icon}</span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-cocoa-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cocoa-600">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import Reveal from "@/components/Reveal";

/**
 * Recipe categories based on the official product page (researched,
 * described in our own words — no fabricated counts or claims).
 */
const FEATURES = [
  {
    icon: "🍰",
    title: "Cakes & pastries",
    text: "Cake, cheesecake and pastry-style ideas reworked with low-carb ingredients — so the celebration stays, without the sugar.",
  },
  {
    icon: "🍪",
    title: "Cookies",
    text: "Cookie recipes for the classics — chocolate chip, snickerdoodle-style and more — baked the sugar-free way.",
  },
  {
    icon: "🍫",
    title: "Chocolates & candies",
    text: "Chocolate-forward treats and candy ideas for when nothing but chocolate will do.",
  },
  {
    icon: "🍨",
    title: "Ice cream & frozen desserts",
    text: "Creamy frozen dessert ideas you can make at home and flavor your own way.",
  },
  {
    icon: "📖",
    title: "Step-by-step guidance",
    text: "Clear, beginner-friendly instructions that walk you through every recipe from start to finish.",
  },
  {
    icon: "📊",
    title: "Recipe information",
    text: "Macronutrient details and complete ingredient lists to help you plan each treat with confidence.",
  },
];

export default function FeatureGrid() {
  return (
    <section id="inside" className="scroll-mt-24 border-y border-cocoa-100/60 bg-cream-100/60">
      <div className="mx-auto max-w-container px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-moss-600">
              A peek inside
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-cocoa-900 sm:text-4xl">
              What You’ll Find Inside
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-cocoa-600">
              The cookbook spans the classic dessert categories — with the sugar
              swapped out for low-carb-friendly alternatives.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {FEATURES.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 60}>
                <div className="group h-full rounded-3xl bg-white p-6 shadow-card ring-1 ring-cocoa-100/70 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cream-100 text-2xl">
                    <span aria-hidden="true">{feature.icon}</span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-cocoa-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cocoa-600">
                    {feature.text}
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

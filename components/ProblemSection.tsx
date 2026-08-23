import Image from "next/image";
import Reveal from "@/components/Reveal";
import { CheckIcon } from "@/components/icons";

const POINTS = [
  {
    title: "More dessert inspiration",
    text: "A whole collection of sweet ideas, so you're not starting from scratch every time a craving hits.",
  },
  {
    title: "Keto-friendly recipe ideas",
    text: "Recipes built around lower-carb, sugar-conscious ingredients — written for the keto and low-carb way of eating.",
  },
  {
    title: "Something sweet to look forward to",
    text: "Because a way of eating you actually enjoy is a way of eating you can stick with.",
  },
];

export default function ProblemSection() {
  return (
    <section className="border-y border-cocoa-100/60 bg-cream-100/60">
      <div className="mx-auto max-w-container px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Reveal>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[16/11] overflow-hidden rounded-[2rem] shadow-card ring-1 ring-cocoa-100">
                <Image
                  src="/images/problem-dessert.jpg"
                  alt="A slice of creamy berry cheesecake beside a cup of coffee on a wooden table"
                  fill
                  sizes="(min-width: 1024px) 50vw, 92vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 right-4 max-w-[240px] rounded-2xl bg-white p-4 shadow-lift ring-1 ring-cocoa-100 sm:right-8">
                <p className="font-display text-sm italic leading-relaxed text-cocoa-700">
                  “Dessert doesn’t have to disappear just because the sugar
                  does.”
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-xs font-bold uppercase tracking-widest text-moss-600">
                For the sweet tooth
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-cocoa-900 sm:text-4xl">
                Missing Dessert on Your Keto Journey?
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-cocoa-600">
                For a lot of people, going keto can feel like saying goodbye to
                the best part of a meal — something sweet at the end of the day.
                Cake, cookies, ice cream: suddenly they’re all off the table.
              </p>
              <p className="mt-4 leading-relaxed text-cocoa-600">
                That’s the problem this recipe collection was built around. You
                shouldn’t have to choose between a low-carb lifestyle and a
                treat you actually look forward to.
              </p>

              <ul className="mt-8 space-y-5">
                {POINTS.map((point) => (
                  <li key={point.title} className="flex gap-4">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-moss-100 text-moss-700">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-bold text-cocoa-800">{point.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-cocoa-600">
                        {point.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

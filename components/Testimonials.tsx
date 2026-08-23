import Reveal from "@/components/Reveal";

/**
 * OPTIONAL testimonials section — renders nothing by default.
 *
 * ⚠️ Do NOT invent reviews, names or ratings.
 * Only add quotes that the product vendor has officially approved,
 * with real attribution. The list below is intentionally empty.
 */
interface Testimonial {
  quote: string;
  name: string;
  detail?: string;
}

const TESTIMONIALS: Testimonial[] = [];

export default function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section aria-label="Vendor-approved testimonials">
      <div className="mx-auto max-w-container px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-cocoa-900 sm:text-4xl">
            What Readers Are Saying
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="flex h-full flex-col rounded-3xl bg-white p-7 shadow-card ring-1 ring-cocoa-100/70"
              >
                <blockquote className="text-sm leading-relaxed text-cocoa-600">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-5 border-t border-cocoa-100 pt-4 text-sm">
                  <span className="block font-bold text-cocoa-900">
                    {testimonial.name}
                  </span>
                  {testimonial.detail && (
                    <span className="block text-cocoa-500">
                      {testimonial.detail}
                    </span>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-cocoa-400">
            Testimonials provided by the product vendor.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

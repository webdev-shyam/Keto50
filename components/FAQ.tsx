"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { ChevronDownIcon } from "@/components/icons";
import { FAQ_ITEMS } from "@/lib/faq";
import { cn } from "@/lib/utils";

/** Accessible FAQ accordion (keyboard-friendly buttons + aria attributes). */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 border-y border-cocoa-100/60 bg-cream-100/60">
      <div className="mx-auto max-w-container px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-cocoa-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-cocoa-600">
              Everything you need to know before clicking through to the
              official offer page.
            </p>

            <div className="mt-10 space-y-3">
              {FAQ_ITEMS.map((item, index) => {
                const isOpen = openIndex === index;
                const panelId = `faq-panel-${index}`;
                const buttonId = `faq-button-${index}`;
                return (
                  <div
                    key={item.question}
                    className="overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-cocoa-100/70"
                  >
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left transition-colors hover:bg-cream-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss-500 focus-visible:ring-offset-2 sm:px-6 sm:py-5"
                      >
                        <span className="font-bold text-cocoa-900 sm:text-lg">
                          {item.question}
                        </span>
                        <ChevronDownIcon
                          className={cn(
                            "h-5 w-5 shrink-0 text-cocoa-400 transition-transform duration-300",
                            isOpen && "rotate-180"
                          )}
                        />
                      </button>
                    </h3>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={cn(
                        "grid transition-[grid-template-rows] duration-300 ease-out",
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 text-base leading-relaxed text-cocoa-600 sm:px-6">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

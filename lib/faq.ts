/**
 * FAQ content — shared by the FAQ accordion (components/FAQ.tsx)
 * and the FAQPage JSON-LD structured data (app/page.tsx).
 * Keep both in sync by editing this file only.
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is Keto After 50 Desserts?",
    answer:
      "Keto After 50 Desserts is a digital cookbook of dessert recipes created with keto and low-carb lifestyles in mind, aimed especially at people 50 and older. It is published by Nutrition Hacks and sold through the Digistore24 platform.",
  },
  {
    question: "Who is this recipe collection intended for?",
    answer:
      "Anyone — and particularly adults over 50 — who follows (or is interested in) a keto or low-carb way of eating and would like more dessert ideas. It focuses on treats that fit a lower-carb lifestyle, so the sweet end of a meal does not have to disappear.",
  },
  {
    question: "Is this a physical cookbook or a digital product?",
    answer:
      "The current offer includes the Keto After 50 Desserts program with digital access, and the offer may also include physical books. Availability, pricing, shipping and delivery details can change, so check the official offer page before purchasing.",
  },
  {
    question: "How do I get access?",
    answer:
      "Click any “Explore Keto After 50 Desserts” button on this page. You will be taken to the official offer page, where you can review the product details and place an order if it looks right for you.",
  },
  {
    question: "Where does checkout happen?",
    answer:
      "After clicking the button, you'll be taken to the official merchant's sales/checkout page. Payment, delivery and support are handled by the merchant (Digistore24), not by this website — we never see or process any payment details.",
  },
  {
    question: "Is this website affiliated with the product creator?",
    answer:
      "No. This is an independent recommendation page. We do not own, publish or officially represent Keto After 50 Desserts, and this is not the official vendor website.",
  },
  {
    question: "Do you receive a commission?",
    answer:
      "Yes. This is an affiliate recommendation, which means we may earn a commission if you purchase through our link. This does not affect the price you pay.",
  },
];

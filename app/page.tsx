import AffiliateCTA from "@/components/AffiliateCTA";
import BonusSection from "@/components/BonusSection";
import FAQ from "@/components/FAQ";
import FeatureGrid from "@/components/FeatureGrid";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ProductIntro from "@/components/ProductIntro";
import SocialProof from "@/components/SocialProof";
import Testimonials from "@/components/Testimonials";
import WhySection from "@/components/WhySection";
import { FAQ_ITEMS } from "@/lib/faq";

/** FAQPage structured data — kept in sync with components/FAQ.tsx via lib/faq.ts */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <ProblemSection />
      <ProductIntro />
      <FeatureGrid />
      <BonusSection />
      <WhySection />
      <SocialProof />
      <Testimonials />
      <FAQ />
      <AffiliateCTA />
    </>
  );
}

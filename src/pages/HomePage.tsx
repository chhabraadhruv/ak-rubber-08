
import { lazy, Suspense } from "react";
import HeroSection from "@/components/sections/HeroSection";

// Lazy load less critical components
const LocalBusinessSection = lazy(() => import("@/components/sections/LocalBusinessSection"));
const ProductsSection = lazy(() => import("@/components/sections/ProductsSection"));
const IndustryExpertiseSection = lazy(() => import("@/components/sections/IndustryExpertiseSection"));
const PartnersSection = lazy(() => import("@/components/sections/PartnersSection"));
const FAQSection = lazy(() => import("@/components/sections/FAQSection"));
const AboutSection = lazy(() => import("@/components/sections/AboutSection"));

// Loading fallback
const SectionLoading = () => (
  <div className="flex justify-center items-center py-24">
    <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
  </div>
);

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen animate-slide-in bg-black text-white">
      <main className="flex-1">
        {/* Critical path rendered immediately */}
        <HeroSection />
        
        {/* Lazy loaded components */}
        <Suspense fallback={<SectionLoading />}>
          <LocalBusinessSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <ProductsSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <IndustryExpertiseSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <PartnersSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <FAQSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <AboutSection />
        </Suspense>
      </main>
    </div>
  );
}

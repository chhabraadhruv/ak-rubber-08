
import HeroSection from "@/components/sections/HeroSection";
import LocalBusinessSection from "@/components/sections/LocalBusinessSection";
import ProductsSection from "@/components/sections/ProductsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import AboutSection from "@/components/sections/AboutSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen animate-slide-in bg-black text-white">
      <main className="flex-1">
        <HeroSection />
        <LocalBusinessSection />
        <ProductsSection />
        <PartnersSection />
        <AboutSection />
      </main>
    </div>
  );
}

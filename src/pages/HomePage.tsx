import FilmReel from "@/components/FilmReel";
import DownloadButton from "@/components/DownloadButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen animate-slide-in bg-black text-white">
      <main className="flex-1">
        {/* Hero section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/lovable-uploads/9110a679-cf87-406f-96ce-295cf2ab79f8.png" 
              alt="O-rings with hydraulic fluid - AK Rubber Spares Gurugram" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <div className="container mx-auto px-6 z-20 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Ethics Drives Quality.</h1>
            <p className="text-xl md:text-2xl mb-8">Gurugram's Premier Rubber & Hydraulic Components Supplier Since 1991</p>
            <a 
              href="https://drive.google.com/file/d/1hRptF7ex5d9Mgm8AiLzmn7-Fo2mRGla_/view?usp=drive_link"
              className="inline-block mt-8 rounded-full bg-white text-black px-8 py-4 font-medium hover:bg-gray-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              DOWNLOAD OUR LATEST CATALOG
            </a>
          </div>
        </section>

        {/* Local Business section */}
        <section className="bg-gray-900 py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-gray-800 rounded-lg">
              <div className="mb-6 md:mb-0">
                <h2 className="text-2xl font-bold mb-2">Visit Our Store in Gurugram</h2>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-white" />
                  <address className="not-italic">
                    Shop No. 2, 434/8 Madanpuri Road, Opp. Laxmi Bazaar, New Colony, Gurugram (HR)
                  </address>
                </div>
              </div>
              <Link 
                to="/contact" 
                className="inline-block rounded-full bg-white text-black px-6 py-3 font-medium hover:bg-gray-200 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Products section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold mb-6">Our Products:</h2>
          <p className="text-lg mb-8 max-w-4xl">
            All kinds of Hydraulic & Pneumatic Seals, V Seals, O Rings, 
            Oil Seals & All Types of Rubber in Synthetic, Neoprene, 
            Silicon, Viton Rubber, P.U. Rubber & P.U. Seals etc.
            Available in Gurugram and nationwide delivery.
          </p>
          
          <div className="my-8">
            <FilmReel />
          </div>
        </section>
        
        {/* Partners section */}
        <section className="bg-gray-900 py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-10 text-center">Our Partners</h2>
            <div className="flex flex-wrap justify-center gap-12 items-center">
              <div className="w-72 h-36 bg-white p-4 flex items-center justify-center rounded">
                <img 
                  src="/lovable-uploads/01ec75d4-fc5f-4035-a025-89303f0fb7fc.png" 
                  alt="KASTAS logo" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="w-72 h-36 bg-white p-4 flex items-center justify-center rounded">
                <img 
                  src="/lovable-uploads/1365cee0-5826-4aed-9445-ff8b249ed2b2.png" 
                  alt="TECNOLAN logo" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* About us section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold mb-6">About us:</h2>
          <div className="space-y-6 max-w-4xl">
            <p className="text-lg">
              Since 1991, AK Rubber Spares has been a trusted name in
              providing high-quality rubber and hydraulic components in Gurugram.
            </p>
            <p className="text-lg">
              We specialize in delivering precision-engineered seals, O-
              rings, and industrial rubber products to businesses across Gurugram and surrounding areas. Our commitment to
              customer satisfaction and top-notch quality has made us
              a reliable partner in the industry for over three decades.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

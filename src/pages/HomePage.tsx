
import FilmReel from "@/components/FilmReel";
import DownloadButton from "@/components/DownloadButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Star, Award, Clock } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen animate-slide-in bg-black text-white">
      <main className="flex-1">
        {/* Hero section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/lovable-uploads/9110a679-cf87-406f-96ce-295cf2ab79f8.png" 
              alt="Premium O-rings and hydraulic components supplier in Gurgaon - AK Rubber Spares" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <div className="container mx-auto px-6 z-20 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Best O-Rings & Hydraulic Components in <span className="text-primary">Gurgaon</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4">
              #1 Trusted Supplier Since 1991 | Premium Quality Guaranteed
            </p>
            <p className="text-lg mb-8">
              Serving Industries Across Gurgaon, Delhi & NCR with Expert Solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-black/50 px-4 py-2 rounded-full">
                <Star className="h-5 w-5 text-yellow-400" />
                <span>4.8★ Rating</span>
              </div>
              <div className="flex items-center space-x-2 bg-black/50 px-4 py-2 rounded-full">
                <Award className="h-5 w-5 text-green-400" />
                <span>30+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2 bg-black/50 px-4 py-2 rounded-full">
                <Clock className="h-5 w-5 text-blue-400" />
                <span>Same Day Delivery in Gurgaon</span>
              </div>
            </div>
            <a 
              href="https://drive.google.com/file/d/1hRptF7ex5d9Mgm8AiLzmn7-Fo2mRGla_/view?usp=drive_link"
              className="inline-block mt-8 rounded-full bg-primary text-black px-8 py-4 font-medium hover:bg-primary/90 transition-colors text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              DOWNLOAD COMPLETE CATALOG
            </a>
          </div>
        </section>

        {/* Local Business section with enhanced SEO content */}
        <section className="bg-gray-900 py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                Leading O-Rings & Hydraulic Components Supplier in Gurgaon
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Located in the heart of New Colony, Gurgaon, we are your trusted local partner for all hydraulic seals, 
                O-rings, pneumatic components, and industrial rubber products. Serving Gurgaon industries since 1991.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-800 rounded-lg">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-2" />
                  Gurgaon Store (Main Branch)
                </h3>
                <address className="not-italic text-gray-300 mb-3">
                  Shop No. 2, 434/8 Madanpuri Road, Opp. Laxmi Bazaar, New Colony, Gurgaon (HR) - 122001
                </address>
                <p className="text-sm text-gray-400 mb-4">Open Mon-Sat: 10 AM - 8 PM</p>
                <Link 
                  to="/contact" 
                  className="inline-block rounded-full bg-primary text-black px-6 py-3 font-medium hover:bg-primary/90 transition-colors"
                >
                  Visit Our Gurgaon Store
                </Link>
              </div>
              <div className="p-6 bg-gray-800 rounded-lg">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-2" />
                  Delhi Store
                </h3>
                <address className="not-italic text-gray-300 mb-3">
                  2789/5, Lothian Road, Near P.N.B. Bank, Kashmere Gate, Delhi - 110006
                </address>
                <p className="text-sm text-gray-400 mb-4">Open Mon-Sat: 10 AM - 8 PM</p>
                <Link 
                  to="/contact" 
                  className="inline-block rounded-full bg-primary text-black px-6 py-3 font-medium hover:bg-primary/90 transition-colors"
                >
                  Visit Our Delhi Store
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Products section with local keywords */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Complete Range of O-Rings & Hydraulic Components in Gurgaon
          </h2>
          <div className="text-center mb-8">
            <p className="text-lg mb-4 max-w-4xl mx-auto">
              AK Rubber Spares is Gurgaon's most trusted supplier of premium quality hydraulic seals, O-rings, 
              pneumatic components, and industrial rubber products. We stock all major brands and custom sizes.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8 text-center">
              <div className="p-4 bg-gray-900 rounded-lg">
                <h3 className="font-bold text-primary mb-2">O-Rings Gurgaon</h3>
                <p className="text-sm text-gray-300">NBR, Viton, EPDM, Silicone - All sizes & custom specifications</p>
              </div>
              <div className="p-4 bg-gray-900 rounded-lg">
                <h3 className="font-bold text-primary mb-2">Hydraulic Seals</h3>
                <p className="text-sm text-gray-300">Rod seals, Piston seals, Wiper seals for all hydraulic systems</p>
              </div>
              <div className="p-4 bg-gray-900 rounded-lg">
                <h3 className="font-bold text-primary mb-2">Industrial Rubber</h3>
                <p className="text-sm text-gray-300">Rubber sheets, gaskets, V-seals & pneumatic components</p>
              </div>
            </div>
          </div>
          
          <div className="my-8">
            <FilmReel />
          </div>
          
          <div className="text-center">
            <p className="text-lg mb-6">
              <strong>Serving Industries:</strong> Manufacturing, Automotive, Construction, Agriculture, 
              Textile, Food Processing, and more across Gurgaon, Delhi NCR.
            </p>
          </div>
        </section>
        
        {/* Partners section */}
        <section className="bg-gray-900 py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-10 text-center">Our Trusted Partners</h2>
            <div className="flex flex-wrap justify-center gap-12 items-center">
              <div className="w-72 h-36 bg-white p-4 flex items-center justify-center rounded">
                <img 
                  src="/lovable-uploads/01ec75d4-fc5f-4035-a025-89303f0fb7fc.png" 
                  alt="KASTAS - Premium hydraulic seals partner" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="w-72 h-36 bg-white p-4 flex items-center justify-center rounded">
                <img 
                  src="/lovable-uploads/1365cee0-5826-4aed-9445-ff8b249ed2b2.png" 
                  alt="TECNOLAN - Quality rubber components manufacturer" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* About section with local focus */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Why Choose AK Rubber Spares in Gurgaon?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2 text-primary">30+ Years of Excellence</h3>
                <p className="text-lg text-gray-300">
                  Since 1991, AK Rubber Spares has been Gurgaon's most trusted name in hydraulic components 
                  and industrial rubber products. We have served thousands of satisfied customers across NCR.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-primary">Local Expertise</h3>
                <p className="text-lg text-gray-300">
                  Located in New Colony, Gurgaon, we understand the specific needs of local industries. 
                  Our team provides expert guidance and quick solutions for all your sealing requirements.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2 text-primary">Premium Quality Guaranteed</h3>
                <p className="text-lg text-gray-300">
                  We stock only the highest quality O-rings, hydraulic seals, and rubber components from 
                  leading manufacturers. All products come with quality assurance and technical support.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-primary">Fast Delivery in Gurgaon</h3>
                <p className="text-lg text-gray-300">
                  Same-day delivery available across Gurgaon and next-day delivery to Delhi NCR. 
                  Emergency supplies available 24/7 for critical industrial requirements.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

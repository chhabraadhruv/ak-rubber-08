
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

export default function LocalBusinessSection() {
  return (
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
  );
}

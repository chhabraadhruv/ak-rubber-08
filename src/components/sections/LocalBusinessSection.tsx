
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

export default function LocalBusinessSection() {
  return (
    <section className="bg-gray-900 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Leading Hydraulic Components Supplier in Delhi NCR
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto px-2">
            Your trusted local partner for hydraulic seals, O-rings, pneumatic components, and industrial rubber products. 
            Serving industries across Delhi NCR since 1991.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="p-4 sm:p-6 bg-gray-800 rounded-lg">
            <h3 className="text-lg sm:text-xl font-bold mb-3 flex items-center">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-2 flex-shrink-0" />
              <span>Main Branch</span>
            </h3>
            <address className="not-italic text-gray-300 mb-3 text-sm sm:text-base leading-relaxed">
              Shop No. 2, 434/8 Madanpuri Road, Opp. Laxmi Bazaar, New Colony, Gurgaon (HR) - 122001
            </address>
            <p className="text-xs sm:text-sm text-gray-400 mb-4">Open Mon-Sat: 9 AM - 7 PM</p>
            <Link 
              to="https://maps.app.goo.gl/vBQU1hLDcEVsRxFn9?g_st=aw" 
              className="inline-block rounded-full bg-primary text-black px-4 sm:px-6 py-2 sm:py-3 font-medium hover:bg-primary/90 transition-colors text-sm sm:text-base"
            >
              Visit Our Store
            </Link>
          </div>
          <div className="p-4 sm:p-6 bg-gray-800 rounded-lg">
            <h3 className="text-lg sm:text-xl font-bold mb-3 flex items-center">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-2 flex-shrink-0" />
              <span>Delhi Store</span>
            </h3>
            <address className="not-italic text-gray-300 mb-3 text-sm sm:text-base leading-relaxed">
              2789/5, Lothian Road, Near P.N.B. Bank, Kashmere Gate, Delhi - 110006
            </address>
            <p className="text-xs sm:text-sm text-gray-400 mb-4">Open Mon-Sat: 11 AM - 7 PM</p>
            <Link 
              to="https://maps.app.goo.gl/BK32g6479Zzd5Qxo7?g_st=aw" 
              className="inline-block rounded-full bg-primary text-black px-4 sm:px-6 py-2 sm:py-3 font-medium hover:bg-primary/90 transition-colors text-sm sm:text-base"
            >
              Visit Our Delhi Store
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

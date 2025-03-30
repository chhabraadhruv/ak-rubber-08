
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="flex flex-col space-y-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contact us:</h2>
      
      <div className="flex items-start space-x-4">
        <Phone className="w-6 h-6 mt-1 flex-shrink-0" />
        <span className="text-lg">9810580983, 9910249777</span>
      </div>
      
      <div className="flex items-start space-x-4">
        <Mail className="w-6 h-6 mt-1 flex-shrink-0" />
        <span className="text-lg">chhabraajay25@gmail.com</span>
      </div>
      
      <div className="flex items-start space-x-4">
        <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
        <span className="text-lg">
          Shop No. 2, 434/8 Madanpuri Road, Opp. Laxmi Bazaar, New Colony, Gurugram (HR)
        </span>
      </div>
    </div>
  );
}


import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactInfo() {
  // Function to open WhatsApp with the given phone number
  const openWhatsApp = (phoneNumber: string) => {
    // Remove any non-digit characters
    const cleanNumber = phoneNumber.replace(/\D/g, '');
    // WhatsApp API requires country code (assuming India +91)
    window.open(`https://wa.me/91${cleanNumber}`, '_blank');
  };

  // Function to open email client with the given email
  const openEmail = (email: string) => {
    window.open(`mailto:${email}`, '_blank');
  };

  // Function to open Google Maps with the given address
  const openGoogleMaps = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <div className="flex flex-col space-y-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contact us:</h2>
      
      <div className="flex items-start space-x-4">
        <Phone className="w-6 h-6 mt-1 flex-shrink-0" />
        <div className="flex flex-col space-y-2">
          <button 
            onClick={() => openWhatsApp('9810580983')}
            className="text-lg text-left hover:text-primary transition-colors"
          >
            9810580983
          </button>
          <button 
            onClick={() => openWhatsApp('9910249777')}
            className="text-lg text-left hover:text-primary transition-colors"
          >
            9910249777
          </button>
        </div>
      </div>
      
      <div className="flex items-start space-x-4">
        <Mail className="w-6 h-6 mt-1 flex-shrink-0" />
        <button 
          onClick={() => openEmail('chhabraajay25@gmail.com')}
          className="text-lg text-left hover:text-primary transition-colors"
        >
          chhabraajay25@gmail.com
        </button>
      </div>
      
      <div className="flex items-start space-x-4">
        <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
        <button 
          onClick={() => openGoogleMaps('Shop No. 2, 434/8 Madanpuri Road, Opp. Laxmi Bazaar, New Colony, Gurugram (HR)')}
          className="text-lg text-left hover:text-primary transition-colors"
        >
          Shop No. 2, 434/8 Madanpuri Road, Opp. Laxmi Bazaar, New Colony, Gurugram (HR)
        </button>
      </div>
    </div>
  );
}


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
    window.open(`https://maps.app.goo.gl/`, '_blank');
  };

  return (
    <div className="flex flex-col space-y-6 max-w-xl mx-auto bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Contact us:</h2>
      
      <div className="flex items-start space-x-4">
        <Phone className="w-6 h-6 mt-1 flex-shrink-0 text-primary" />
        <div className="flex flex-col space-y-2">
          <button 
            onClick={() => openWhatsApp('9810580983')}
            className="text-lg text-left hover:text-primary transition-colors flex items-center"
          >
            <span>9810580983</span>
            <span className="ml-2 text-xs px-2 py-0.5 bg-green-800/30 text-green-400 rounded-full">WhatsApp</span>
          </button>
          <button 
            onClick={() => openWhatsApp('9910249777')}
            className="text-lg text-left hover:text-primary transition-colors flex items-center"
          >
            <span>9910249777</span>
            <span className="ml-2 text-xs px-2 py-0.5 bg-green-800/30 text-green-400 rounded-full">WhatsApp</span>
          </button>
        </div>
      </div>
      
      <div className="flex items-start space-x-4">
        <Mail className="w-6 h-6 mt-1 flex-shrink-0 text-primary" />
        <button 
          onClick={() => openEmail('chhabraajay25@gmail.com')}
          className="text-lg text-left hover:text-primary transition-colors"
        >
          chhabraajay25@gmail.com
        </button>
      </div>
      
      <div className="flex items-start space-x-4">
        <MapPin className="w-6 h-6 mt-1 flex-shrink-0 text-primary" />
        <div className="space-y-4 w-full">
          <div className="p-3 border border-gray-700 rounded-md bg-gray-800/30">
            <h3 className="font-medium text-lg mb-1">Gurugram Store</h3>
            <button 
              onClick={() => openGoogleMaps('https://maps.app.goo.gl/vBQU1hLDcEVsRxFn9?g_st=aw')}
              className="text-lg text-left hover:text-primary transition-colors"
            >
              Shop No. 2, 434/8 Madanpuri Road, Opp. Laxmi Bazaar, New Colony, Gurugram (HR)
            </button>
            <p className="text-sm text-gray-400 mt-1">Open Monday to Saturday, 9:00 AM to 7:00 PM</p>
          </div>
          
          <div className="p-3 border border-gray-700 rounded-md bg-gray-800/30">
            <h3 className="font-medium text-lg mb-1">Delhi Store</h3>
            <button 
              onClick={() => openGoogleMaps('https://maps.app.goo.gl/BK32g6479Zzd5Qxo7?g_st=aw')}
              className="text-lg text-left hover:text-primary transition-colors"
            >
              2789/5, Lothian Road, Near P.N.B. Bank, Kashmere Gate, Delhi-110006
            </button>
            <p className="text-sm text-gray-400 mt-1">Open Monday to Saturday, 11:00 AM to 7:00 PM</p>
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-700">
        <p className="text-sm text-center text-gray-400">
          GST: <span className="font-medium text-white">06AAGPC8120M2ZS</span>
        </p>
      </div>
    </div>
  );
}

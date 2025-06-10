
import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-800 text-white border-t border-gray-700 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/2a21abce-8b19-4b07-aa41-ee149b44b972.png" 
              alt="AK Rubber Spares Logo" 
              className="h-12 w-auto" 
            />
          </div>
          <div className="flex flex-col items-center md:items-end">
            <p className="text-gray-300 mb-1">GST: <span className="font-medium">06AAGPC8120M2ZS</span></p>
            <p className="text-gray-300 mb-3">Contact: <a href="tel:+919810580983" className="hover:text-white transition-colors">+91 9810580983</a></p>
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 text-sm">Follow us:</span>
              <a 
                href="https://www.instagram.com/akrubberspares?igsh=aWFjY3JzdzM0d2h4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-pink-400 transition-colors duration-300 group"
              >
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">@akrubberspares</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">
              Copyrights © {currentYear} AK Rubber | Made by DC
            </p>
          </div>
          <div className="flex space-x-4">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


import { Link } from "react-router-dom";

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
            <p className="text-gray-300">Contact: <a href="tel:+919871059983" className="hover:text-white transition-colors">+91 9871059983</a></p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">
              Copyrights © {currentYear} AK Rubber | Made by DC
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

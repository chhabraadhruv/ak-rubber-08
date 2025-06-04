
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-800 text-white border-t border-gray-700 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
            <img 
              src="https://akrubberspares.in/logo.png" 
              alt="AK Rubber Industry Logo" 
              className="h-12 w-auto" 
            />
            <p className="text-sm text-gray-300 mt-2">AK Rubber Industry - Leading supplier since 1991</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <p className="text-gray-300 mb-1">GST: <span className="font-medium">06AAGPC8120M2ZS</span></p>
            <p className="text-gray-300">Contact AK Rubber: <a href="tel:+919810580983" className="hover:text-white transition-colors">+91 9810580983</a></p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">
              Copyrights © {currentYear} AK Rubber Industry | Made by DC
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

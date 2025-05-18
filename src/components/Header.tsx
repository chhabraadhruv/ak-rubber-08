
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Phone } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`px-6 lg:px-8 py-4 bg-black text-white fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg bg-black/90 backdrop-blur-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center justify-center md:justify-start w-full md:w-auto mb-4 md:mb-0">
          <Link to="/" className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
            <img 
              src="/lovable-uploads/2a21abce-8b19-4b07-aa41-ee149b44b972.png" 
              alt="AK Rubber Spares Logo" 
              className="h-16 w-auto" 
            />
          </Link>
        </div>
        
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors duration-300">
            <Phone className="h-4 w-4" />
            <a href="tel:+919810580983" className="font-medium">+91 9810580983</a>
          </div>
          
          <nav className="flex items-center space-x-8">
            {[
              { to: "/", label: "Home" },
              { to: "/products", label: "Products" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact Us" },
            ].map((link) => (
              <Link 
                key={link.to}
                to={link.to} 
                className="relative group font-medium"
              >
                <span className="transition-colors duration-300 group-hover:text-gray-300">
                  {link.label}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

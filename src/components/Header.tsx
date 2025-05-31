
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Phone, Menu } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-black text-white fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg bg-black/90 backdrop-blur-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
              <img 
                src="/lovable-uploads/2a21abce-8b19-4b07-aa41-ee149b44b972.png" 
                alt="AK Rubber Spares Logo" 
                className="h-12 lg:h-16 w-auto" 
              />
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors duration-300">
              <Phone className="h-4 w-4" />
              <a href="tel:+919810580983" className="font-medium text-sm lg:text-base">+91 9810580983</a>
            </div>
            
            <nav className="flex items-center space-x-6 lg:space-x-8">
              {[
                { to: "/", label: "Home" },
                { to: "/products", label: "Products" },
                { to: "/about", label: "About Us" },
                { to: "/blog", label: "Blog" },
                { to: "/contact", label: "Contact Us" },
              ].map((link) => (
                <Link 
                  key={link.to}
                  to={link.to} 
                  className="relative group font-medium text-sm lg:text-base"
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

        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/2a21abce-8b19-4b07-aa41-ee149b44b972.png" 
                alt="AK Rubber Spares Logo" 
                className="h-10 w-auto" 
              />
            </Link>
            
            <div className="flex items-center space-x-3">
              <a href="tel:+919810580983" className="flex items-center space-x-1 text-white">
                <Phone className="h-4 w-4" />
                <span className="text-xs font-medium">Call</span>
              </a>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-gray-800">
              <nav className="flex flex-col py-4">
                {[
                  { to: "/", label: "Home" },
                  { to: "/products", label: "Products" },
                  { to: "/about", label: "About Us" },
                  { to: "/blog", label: "Blog" },
                  { to: "/contact", label: "Contact Us" },
                ].map((link) => (
                  <Link 
                    key={link.to}
                    to={link.to} 
                    className="px-6 py-3 text-white hover:bg-gray-800 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Phone, Menu, X } from "lucide-react";
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
      className={`px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-black/90 backdrop-blur-md text-white fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "shadow-2xl bg-black/95 border-b border-gray-800" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 transition-all duration-300 hover:scale-105 group">
              <img 
                src="https://akrubberspares.in/logo.png" 
                alt="AK Rubber Industry Logo - Leading O-rings and Hydraulic Seals Supplier Gurgaon" 
                className="h-12 lg:h-16 w-auto group-hover:brightness-110 transition-all duration-300" 
              />
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3 text-white hover:text-primary transition-all duration-300 group">
              <Phone className="h-5 w-5 group-hover:animate-bounce" />
              <a href="tel:+919810580983" className="font-semibold text-base lg:text-lg">+91 9810580983</a>
            </div>
            
            <nav className="flex items-center space-x-8 lg:space-x-10">
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
                  className="relative group font-semibold text-base lg:text-lg"
                >
                  <span className="transition-all duration-300 group-hover:text-primary">
                    {link.label}
                  </span>
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
              <img 
                src="https://akrubberspares.in/logo.png" 
                alt="AK Rubber Industry Logo" 
                className="h-10 w-auto" 
              />
            </Link>
            
            <div className="flex items-center space-x-4">
              <a href="tel:+919810580983" className="flex items-center space-x-2 text-white hover:text-primary transition-colors duration-300">
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium">Call</span>
              </a>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors duration-300"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-gray-800 animate-slide-in">
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
                    className="px-6 py-4 text-white hover:bg-gray-800 hover:text-primary transition-all duration-300 font-medium border-l-4 border-transparent hover:border-primary"
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

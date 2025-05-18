import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  return (
    <header className="px-6 lg:px-8 py-4 bg-black text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center justify-center md:justify-start w-full md:w-auto mb-4 md:mb-0">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/2a21abce-8b19-4b07-aa41-ee149b44b972.png" 
              alt="AK Rubber Spares Logo" 
              className="h-16 w-auto" 
            />
          </Link>
        </div>
        
        <nav className="flex items-center space-x-8">
          <Link to="/" className="hover:text-gray-300 font-medium">Home</Link>
          <Link to="/products" className="hover:text-gray-300 font-medium">Products</Link>
          <Link to="/about" className="hover:text-gray-300 font-medium">About Us</Link>
          <Link to="/contact" className="hover:text-gray-300 font-medium">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}

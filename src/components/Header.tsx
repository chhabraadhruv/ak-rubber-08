
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  return (
    <header className="px-6 lg:px-8 py-4 border-b border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center justify-center md:justify-start w-full md:w-auto mb-4 md:mb-0">
          <Link to="/" className="flex flex-col items-center">
            <img
              src="/lovable-uploads/1bb1fcca-f7f5-42de-8260-bf4e040c64c0.png"
              alt="AK Rubber Logo"
              className="h-20 w-20"
            />
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold">AK Rubber Spares</h1>
              <p className="text-xs uppercase tracking-wider mt-1">SINCE 1991</p>
            </div>
          </Link>
        </div>
        
        <nav className="flex items-center space-x-8">
          <Link to="/" className="hover:text-primary/80 font-medium">Home</Link>
          <Link to="/products" className="hover:text-primary/80 font-medium">Products</Link>
          <Link to="/about" className="hover:text-primary/80 font-medium">About us</Link>
          <Link to="/contact" className="hover:text-primary/80 font-medium">Contact Us</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}


import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Copyrights © {currentYear} AK Rubber | Made by DC
          </p>
        </div>
      </div>
    </footer>
  );
}

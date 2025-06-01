
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";

import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import { useEffect } from "react";

const queryClient = new QueryClient();

// Component to scroll to top on route change
const ScrollToTop = () => {
  useEffect(() => {
    console.log("ScrollToTop: Current pathname:", window.location.pathname);
    console.log("ScrollToTop: Current href:", window.location.href);
    window.scrollTo(0, 0);
  }, []);
  return null;
};

const App = () => {
  useEffect(() => {
    console.log("App mounted. Current URL:", window.location.href);
    console.log("Base URL:", import.meta.env.BASE_URL);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter basename={import.meta.env.BASE_URL}>
            <div className="flex flex-col min-h-screen bg-black text-white">
              <Header />
              <Routes>
                <Route path="/" element={<><ScrollToTop /><HomePage /></>} />
                <Route path="/products" element={<><ScrollToTop /><ProductsPage /></>} />
                <Route path="/about" element={<><ScrollToTop /><AboutPage /></>} />
                <Route path="/contact" element={<><ScrollToTop /><ContactPage /></>} />
                <Route path="/blog" element={<><ScrollToTop /><BlogPage /></>} />
                <Route path="/blog/:slug" element={<><ScrollToTop /><BlogPostPage /></>} />
                <Route path="*" element={<><ScrollToTop /><NotFound /></>} />
              </Routes>
              <Footer />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;

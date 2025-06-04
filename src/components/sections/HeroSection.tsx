
import { MapPin, Star, Award, Clock, Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/9110a679-cf87-406f-96ce-295cf2ab79f8.png" 
          alt="AK Rubber Industry - Premium O-rings and hydraulic components supplier Gurgaon" 
          className="w-full h-full object-cover animate-scale-in"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-10"></div>
      <div className="container mx-auto px-4 sm:px-6 z-20 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-slide-in">
            <span className="text-primary bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent animate-pulse-subtle">AK Rubber Industry</span> - Premium O-Rings & Hydraulic Seals Gurgaon
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-10 font-medium text-gray-100 animate-fade-in" style={{animationDelay: '0.3s'}}>
            AK Rubber Spares - Ethics Drive Quality Since 1991 | Leading Rubber Components Dealer Gurgaon
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="flex items-center justify-center space-x-3 bg-black/60 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-black/70 transition-all duration-300 hover:scale-105">
              <Star className="h-5 w-5 text-yellow-400 animate-bounce-subtle" />
              <span className="font-semibold">4.8★ Customer Rating</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-black/60 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-black/70 transition-all duration-300 hover:scale-105">
              <Award className="h-5 w-5 text-green-400 animate-bounce-subtle" style={{animationDelay: '0.5s'}} />
              <span className="font-semibold">30+ Years AK Rubber Excellence</span>
            </div>
          </div>
          <a 
            href="https://drive.google.com/file/d/1hRptF7ex5d9Mgm8AiLzmn7-Fo2mRGla_/view?usp=drive_link"
            className="group inline-flex items-center space-x-3 rounded-full bg-gradient-to-r from-primary to-yellow-400 text-black px-8 py-4 font-bold hover:from-yellow-400 hover:to-primary transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-105 animate-fade-in"
            style={{animationDelay: '0.9s'}}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="h-5 w-5 group-hover:animate-bounce" />
            <span>Download AK Rubber Complete Catalog</span>
          </a>
        </div>
      </div>
    </section>
  );
}

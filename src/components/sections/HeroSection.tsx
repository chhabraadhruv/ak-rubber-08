
import { MapPin, Star, Award, Clock } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/9110a679-cf87-406f-96ce-295cf2ab79f8.png" 
          alt="Premium O-rings and hydraulic components supplier - AK Rubber Spares" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <div className="container mx-auto px-4 sm:px-6 z-20 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Premium <span className="text-primary">O-Rings</span> & Hydraulic Components
        </h1>
        <p className="text-xl sm:text-2xl mb-8 font-medium">
          Ethics Drive Quality
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-center space-x-2 bg-black/50 px-4 py-2 rounded-full">
            <Star className="h-5 w-5 text-yellow-400" />
            <span>4.8★ Rating</span>
          </div>
          <div className="flex items-center justify-center space-x-2 bg-black/50 px-4 py-2 rounded-full">
            <Award className="h-5 w-5 text-green-400" />
            <span>30+ Years Experience</span>
          </div>
        </div>
        <a 
          href="https://drive.google.com/file/d/1hRptF7ex5d9Mgm8AiLzmn7-Fo2mRGla_/view?usp=drive_link"
          className="inline-block rounded-full bg-primary text-black px-8 py-4 font-medium hover:bg-primary/90 transition-colors text-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Complete Catalog
        </a>
      </div>
    </section>
  );
}

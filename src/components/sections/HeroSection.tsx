
import { MapPin, Star, Award, Clock } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/9110a679-cf87-406f-96ce-295cf2ab79f8.png" 
          alt="Premium O-rings and hydraulic components supplier in Gurgaon - AK Rubber Spares" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <div className="container mx-auto px-4 sm:px-6 z-20 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
          Best O-Rings & Hydraulic Components in <span className="text-primary">Gurgaon</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4">
          Ethics Drive Quality
        </p>
        <p className="text-base sm:text-lg mb-6 sm:mb-8 px-2">
          Serving Industries Across Gurgaon, Delhi & NCR with Expert Solutions
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-2">
          <div className="flex items-center justify-center space-x-2 bg-black/50 px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base">
            <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
            <span>4.8★ Rating</span>
          </div>
          <div className="flex items-center justify-center space-x-2 bg-black/50 px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base">
            <Award className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
            <span>30+ Years Experience</span>
          </div>
          <div className="flex items-center justify-center space-x-2 bg-black/50 px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base">
            <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
            <span className="text-center">Same Day Delivery in Gurgaon</span>
          </div>
        </div>
        <a 
          href="https://drive.google.com/file/d/1hRptF7ex5d9Mgm8AiLzmn7-Fo2mRGla_/view?usp=drive_link"
          className="inline-block mt-4 sm:mt-8 rounded-full bg-primary text-black px-6 sm:px-8 py-3 sm:py-4 font-medium hover:bg-primary/90 transition-colors text-base sm:text-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          DOWNLOAD COMPLETE CATALOG
        </a>
      </div>
    </section>
  );
}

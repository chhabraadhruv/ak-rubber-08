
import { MapPin, Star, Award, Clock } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/9110a679-cf87-406f-96ce-295cf2ab79f8.png" 
          alt="Premium O-rings and hydraulic components supplier in Gurgaon - AK Rubber Spares" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <div className="container mx-auto px-6 z-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Best O-Rings & Hydraulic Components in <span className="text-primary">Gurgaon</span>
        </h1>
        <p className="text-xl md:text-2xl mb-4">
          Ethics Drive Quality
        </p>
        <p className="text-lg mb-8">
          Serving Industries Across Gurgaon, Delhi & NCR with Expert Solutions
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center space-x-2 bg-black/50 px-4 py-2 rounded-full">
            <Star className="h-5 w-5 text-yellow-400" />
            <span>4.8★ Rating</span>
          </div>
          <div className="flex items-center space-x-2 bg-black/50 px-4 py-2 rounded-full">
            <Award className="h-5 w-5 text-green-400" />
            <span>30+ Years Experience</span>
          </div>
          <div className="flex items-center space-x-2 bg-black/50 px-4 py-2 rounded-full">
            <Clock className="h-5 w-5 text-blue-400" />
            <span>Same Day Delivery in Gurgaon</span>
          </div>
        </div>
        <a 
          href="https://drive.google.com/file/d/1hRptF7ex5d9Mgm8AiLzmn7-Fo2mRGla_/view?usp=drive_link"
          className="inline-block mt-8 rounded-full bg-primary text-black px-8 py-4 font-medium hover:bg-primary/90 transition-colors text-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          DOWNLOAD COMPLETE CATALOG
        </a>
      </div>
    </section>
  );
}

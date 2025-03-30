
import { useEffect, useState } from "react";

type FilmReelImage = {
  src: string;
  alt: string;
};

const defaultImages: FilmReelImage[] = [
  { 
    src: "https://images.unsplash.com/photo-1628355955311-d1fe75549c00?auto=format&fit=crop&q=80&w=300&h=200", 
    alt: "Rubber O-rings in various colors" 
  },
  { 
    src: "https://images.unsplash.com/photo-1530424920872-1e0462a26d0c?auto=format&fit=crop&q=80&w=300&h=200", 
    alt: "Industrial rubber hose" 
  },
  { 
    src: "https://images.unsplash.com/photo-1623000951624-e9a7ab7baaf9?auto=format&fit=crop&q=80&w=300&h=200", 
    alt: "Hydraulic components" 
  },
  { 
    src: "https://images.unsplash.com/photo-1606701845789-c24a32b12aa4?auto=format&fit=crop&q=80&w=300&h=200", 
    alt: "Rubber seals" 
  },
  { 
    src: "https://images.unsplash.com/photo-1530968831117-fde74630ecf2?auto=format&fit=crop&q=80&w=300&h=200", 
    alt: "Industrial machinery parts" 
  }
];

// Create placeholders for the film reel
const createFilmFrames = (count: number) => {
  return Array.from({ length: count }, (_, index) => (
    <div key={`frame-${index}`} className="film-frame"></div>
  ));
};

type FilmReelProps = {
  images?: FilmReelImage[];
  autoPlay?: boolean;
};

export default function FilmReel({ images = defaultImages, autoPlay = true }: FilmReelProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [autoPlay, images.length]);

  const duplicatedImages = [...images, ...images]; // Duplicate images for infinite scroll effect

  return (
    <div className="w-full overflow-hidden bg-black">
      {/* Top film strip */}
      <div className="film-strip">
        <div className="film-content">
          {createFilmFrames(30)}
        </div>
      </div>
      
      {/* Images container */}
      <div className="relative overflow-hidden">
        <div className="flex film-content">
          {duplicatedImages.map((image, index) => (
            <div 
              key={`image-${index}`} 
              className="flex-shrink-0 w-[300px] h-[200px] mx-1"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom film strip */}
      <div className="film-strip">
        <div className="film-content">
          {createFilmFrames(30)}
        </div>
      </div>
    </div>
  );
}

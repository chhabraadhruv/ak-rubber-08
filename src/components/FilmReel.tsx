
import { useEffect, useState } from "react";

type FilmReelImage = {
  src: string;
  alt: string;
};

const productImages: FilmReelImage[] = [
  { 
    src: "/lovable-uploads/2e5a1442-2857-486c-8446-c671d4622228.png", 
    alt: "Colorful rubber O-rings and seals" 
  },
  { 
    src: "/lovable-uploads/3e229a8e-00d4-41da-8c22-1ec8b03b4000.png", 
    alt: "Brown and black oil seals" 
  },
  { 
    src: "/lovable-uploads/d6eb41ee-6682-4830-89c2-3a53a217a4f3.png", 
    alt: "Black, red and white rubber sheets" 
  },
  { 
    src: "/lovable-uploads/fb02f5e3-3b67-45de-b57a-af2d71a48ae4.png", 
    alt: "Spiral rubber seals in different colors" 
  },
  { 
    src: "/lovable-uploads/6e4f34e0-f85f-4012-b926-11f8a03ba2c1.png", 
    alt: "Hydraulic seals in various colors" 
  },
  { 
    src: "/lovable-uploads/0f89117a-42c8-45fc-8348-7921d1318ed8.png", 
    alt: "Various sizes of black O-rings" 
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

export default function FilmReel({ images = productImages, autoPlay = true }: FilmReelProps) {
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

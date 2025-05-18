import { useEffect, useState } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

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

type FilmReelProps = {
  images?: FilmReelImage[];
  autoPlay?: boolean;
};

export default function FilmReel({ images = productImages, autoPlay = true }: FilmReelProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [api, setApi] = useState<any>(null);

  useEffect(() => {
    if (!autoPlay || !api) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);
    
    return () => clearInterval(interval);
  }, [autoPlay, api]);

  return (
    <div className="w-full bg-black border-t border-b border-gray-800 py-8">
      <Carousel
        setApi={setApi}
        className="max-w-3xl mx-auto"
        opts={{
          loop: true,
          align: "center"
        }}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={`image-${index}`} className="flex items-center justify-center">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center mt-4">
          <CarouselPrevious className="relative -left-0 mx-2" />
          <CarouselNext className="relative -right-0 mx-2" />
        </div>
      </Carousel>
    </div>
  );
}

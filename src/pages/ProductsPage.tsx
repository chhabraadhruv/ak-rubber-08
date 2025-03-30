
import { Card, CardContent } from "@/components/ui/card";
import FilmReel from "@/components/FilmReel";
import DownloadButton from "@/components/DownloadButton";

const products = [
  {
    id: 1,
    name: "Hydraulic Seals",
    description: "High-quality hydraulic seals for industrial applications",
    image: "/lovable-uploads/6e4f34e0-f85f-4012-b926-11f8a03ba2c1.png"
  },
  {
    id: 2,
    name: "O-Rings",
    description: "Precision-engineered O-rings in various materials and sizes",
    image: "/lovable-uploads/0f89117a-42c8-45fc-8348-7921d1318ed8.png"
  },
  {
    id: 3,
    name: "V Seals",
    description: "Specialized V seals for demanding industrial environments",
    image: "/lovable-uploads/3e229a8e-00d4-41da-8c22-1ec8b03b4000.png"
  },
  {
    id: 4,
    name: "Rubber Sheets",
    description: "High-quality rubber sheets in various colors and thicknesses",
    image: "/lovable-uploads/d6eb41ee-6682-4830-89c2-3a53a217a4f3.png"
  },
  {
    id: 5,
    name: "Colorful Rubber Components",
    description: "Customized rubber components in various colors and specifications",
    image: "/lovable-uploads/2e5a1442-2857-486c-8446-c671d4622228.png"
  },
  {
    id: 6,
    name: "Spiral Rubber Seals",
    description: "Durable spiral rubber seals for specialized applications",
    image: "/lovable-uploads/fb02f5e3-3b67-45de-b57a-af2d71a48ae4.png"
  }
];

export default function ProductsPage() {
  return (
    <div className="animate-slide-in">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-6">Our Products</h1>
        
        <p className="text-lg mb-8 max-w-4xl">
          All kinds of Hydraulic & Pneumatic Seals, V Seals, O Rings, 
          Oil Seals & All Types of Rubber in Synthetic, Neoprene, 
          Silicon, Viton Rubber, P.U. Rubber & P.U. Seals etc.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="my-8">
          <FilmReel />
        </div>
        
        <DownloadButton />
      </div>
    </div>
  );
}

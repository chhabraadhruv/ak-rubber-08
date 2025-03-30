
import { Card, CardContent } from "@/components/ui/card";
import FilmReel from "@/components/FilmReel";
import DownloadButton from "@/components/DownloadButton";

const products = [
  {
    id: 1,
    name: "Hydraulic Seals",
    description: "High-quality hydraulic seals for industrial applications",
    image: "https://images.unsplash.com/photo-1628355955311-d1fe75549c00?auto=format&fit=crop&q=80&w=300&h=200"
  },
  {
    id: 2,
    name: "O-Rings",
    description: "Precision-engineered O-rings in various materials and sizes",
    image: "https://images.unsplash.com/photo-1530424920872-1e0462a26d0c?auto=format&fit=crop&q=80&w=300&h=200"
  },
  {
    id: 3,
    name: "V Seals",
    description: "Specialized V seals for demanding industrial environments",
    image: "https://images.unsplash.com/photo-1623000951624-e9a7ab7baaf9?auto=format&fit=crop&q=80&w=300&h=200"
  },
  {
    id: 4,
    name: "PU Components",
    description: "Polyurethane components with excellent durability",
    image: "https://images.unsplash.com/photo-1530968831117-fde74630ecf2?auto=format&fit=crop&q=80&w=300&h=200"
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

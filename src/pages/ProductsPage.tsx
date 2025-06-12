
import { Card, CardContent } from "@/components/ui/card";
import FilmReel from "@/components/FilmReel";
import DownloadButton from "@/components/DownloadButton";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <div className="animate-slide-in">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 pt-20 md:pt-24">
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
                <p className="text-muted-foreground mb-2">{product.description}</p>
                {product.category && (
                  <p className="text-sm text-primary font-medium">{product.category}</p>
                )}
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

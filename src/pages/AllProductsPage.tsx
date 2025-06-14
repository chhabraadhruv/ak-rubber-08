
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { getAllProductPages, getProductPagesByCategory } from "@/data/product-pages";
import FilmReel from "@/components/FilmReel";
import { useState } from "react";

export default function AllProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const allProducts = getAllProductPages();
  
  // Get unique categories
  const categories = ["all", ...Array.from(new Set(allProducts.map(p => p.category)))];
  
  const displayProducts = selectedCategory === "all" ? allProducts : getProductPagesByCategory(selectedCategory);

  return (
    <div className="animate-slide-in">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 pt-20 md:pt-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Complete Product Range</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive collection of hydraulic seals, O-rings, and industrial rubber components. 
            Trusted quality since 1991.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80"
              }`}
            >
              {category === "all" ? "All Products" : category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayProducts.map((product) => (
            <Link key={product.id} to={`/products/${product.slug}`}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                <div className="overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{product.category}</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {product.description}
                  </p>
                  <div className="space-y-2">
                    <div className="text-sm">
                      <span className="font-medium">Materials:</span> {product.materials.join(", ")}
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Size Range:</span> {product.sizeRange}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="my-8">
          <FilmReel />
        </div>
        
        <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Technical Assistance?</h2>
            <p className="text-lg mb-6">Our experienced team can help you select the right products for your specific application</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+919810580983" 
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                📞 Call: +91 9810580983
              </a>
              <Link 
                to="/contact" 
                className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
              >
                Get Expert Advice
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

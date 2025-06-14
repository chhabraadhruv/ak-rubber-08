
import { useState, useEffect } from "react";
import { getAllProductPages, getProductPagesByCategory } from "@/data/product-pages";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import FilmReel from "@/components/FilmReel";

export default function AllProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const allProducts = getAllProductPages();
  const categories = ["All", ...new Set(allProducts.map(product => product.category))];
  
  const filteredProducts = selectedCategory === "All" 
    ? allProducts 
    : getProductPagesByCategory(selectedCategory);

  useEffect(() => {
    // Set SEO meta tags
    document.title = "Industrial Seals & Hydraulic Components | AK Rubber Spares Catalog";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Complete catalog of premium industrial seals, O-rings, hydraulic components by AK Rubber Spares. Serving Gurgaon, Delhi NCR since 1991. Quality guaranteed.";
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const keywords = "industrial seals, hydraulic components, O-rings, pneumatic seals, rubber products, AK Rubber Spares, Gurgaon, Delhi NCR";
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = keywords;
      document.head.appendChild(meta);
    }

    // Add structured data for product catalog
    const structuredData = {
      "@context": "https://schema.org/",
      "@type": "ItemList",
      "name": "AK Rubber Spares Product Catalog",
      "description": "Complete range of industrial seals and hydraulic components",
      "numberOfItems": allProducts.length,
      "itemListElement": allProducts.map((product, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Product",
          "name": product.name,
          "description": product.description,
          "category": product.category,
          "url": `https://www.akrubberspares.in/products/${product.slug}`
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [allProducts]);

  return (
    <div className="animate-slide-in">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 pt-20 md:pt-24">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link to="/" className="text-primary hover:underline">Home</Link></li>
            <li className="text-muted-foreground">/</li>
            <li className="text-muted-foreground">Products</li>
          </ol>
        </nav>

        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Premium Industrial Seals & Components
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive range of high-quality hydraulic seals, O-rings, and industrial rubber components. 
            Trusted by industries across Gurgaon and Delhi NCR since 1991.
          </p>
        </header>

        <section className="mb-8" aria-label="Product categories">
          <h2 className="text-2xl font-bold mb-4">Product Categories</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </section>

        <section aria-label="Product grid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredProducts.map((product) => (
              <article key={product.id}>
                <Link to={`/products/${product.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img 
                        src={product.image} 
                        alt={`${product.name} - Industrial sealing solution`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{product.category}</Badge>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {product.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {product.description}
                      </p>
                      <div className="space-y-2">
                        <div>
                          <span className="font-medium text-sm">Materials: </span>
                          <span className="text-sm text-muted-foreground">
                            {product.materials.slice(0, 2).join(', ')}
                            {product.materials.length > 2 && '...'}
                          </span>
                        </div>
                        <div>
                          <span className="font-medium text-sm">Size Range: </span>
                          <span className="text-sm text-muted-foreground">{product.sizeRange}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12" aria-label="Company showcase">
          <FilmReel />
        </section>

        <section className="text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Need Custom Solutions?</h2>
              <p className="text-lg mb-6 max-w-3xl mx-auto">
                AK Rubber Spares specializes in custom sealing solutions for unique industrial requirements. 
                Contact our technical team for expert consultation and competitive pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="tel:+919810580983" 
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  aria-label="Call AK Rubber Spares for custom solutions"
                >
                  📞 Call: +91 9810580983
                </a>
                <Link 
                  to="/contact" 
                  className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
                >
                  Get Quote
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}

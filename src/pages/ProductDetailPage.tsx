
import { useParams, Link } from "react-router-dom";
import { getProductPageBySlug } from "@/data/product-pages";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Package, Settings, Wrench } from "lucide-react";
import FilmReel from "@/components/FilmReel";

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <div>Product not found</div>;
  }

  const product = getProductPageBySlug(slug);

  if (!product) {
    return (
      <div className="animate-slide-in">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 pt-20 md:pt-24">
          <h1 className="text-3xl font-bold mb-6">Product Not Found</h1>
          <p className="text-lg mb-6">The product you're looking for doesn't exist.</p>
          <Link to="/products" className="text-primary hover:underline">
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-slide-in">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 pt-20 md:pt-24">
        <Link 
          to="/products" 
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6 group"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <Badge className="mb-4">{product.category}</Badge>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl text-muted-foreground mb-6">
              {product.description}
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              {product.detailedDescription}
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Materials Available:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.materials.map((material, index) => (
                    <Badge key={index} variant="outline">{material}</Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Size Range:</h3>
                <p className="text-muted-foreground">{product.sizeRange}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="h-5 w-5 mr-2 text-primary" />
                Special Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {product.specialFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Wrench className="h-5 w-5 mr-2 text-primary" />
                Applications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {product.applications.map((application, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {application}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="h-5 w-5 mr-2 text-primary" />
                Specifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key}>
                    <dt className="font-medium text-sm text-muted-foreground">{key}</dt>
                    <dd className="text-sm">{value}</dd>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="my-8">
          <FilmReel />
        </div>

        <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need This Product?</h2>
            <p className="text-lg mb-6">Contact us for pricing, availability, and technical specifications</p>
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
                Contact Us
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

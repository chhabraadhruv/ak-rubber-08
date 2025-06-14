import { useParams, Link } from "react-router-dom";
import { getProductPageBySlug } from "@/data/product-pages";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Package, Settings, Wrench } from "lucide-react";
import { useEffect } from "react";

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <div>Product not found</div>;
  }

  const product = getProductPageBySlug(slug);

  useEffect(() => {
    if (product) {
      // Set page title
      document.title = `${product.name} - AK Rubber Spares | Premium Quality Industrial Seals`;
      
      // Set meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', `${product.description} Available in ${product.materials.join(', ')} materials. Size range: ${product.sizeRange}. Contact AK Rubber Spares for pricing.`);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = `${product.description} Available in ${product.materials.join(', ')} materials. Size range: ${product.sizeRange}. Contact AK Rubber Spares for pricing.`;
        document.head.appendChild(meta);
      }

      // Set meta keywords
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      const keywords = `${product.name}, ${product.materials.join(', ')}, ${product.category}, AK Rubber Spares, Gurgaon, Delhi NCR, Industrial Seals, Hydraulic Components`;
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'keywords';
        meta.content = keywords;
        document.head.appendChild(meta);
      }

      // Add structured data
      const structuredData = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": product.name,
        "description": product.description,
        "image": product.image,
        "category": product.category,
        "brand": {
          "@type": "Brand",
          "name": "AK Rubber Spares"
        },
        "manufacturer": {
          "@type": "Organization",
          "name": "AK Rubber Spares",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Gurgaon",
            "addressRegion": "Haryana",
            "addressCountry": "IN"
          },
          "telephone": "+91-9810580983"
        },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "INR"
        },
        "additionalProperty": Object.entries(product.specifications).map(([key, value]) => ({
          "@type": "PropertyValue",
          "name": key,
          "value": value
        }))
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);

      // Cleanup function
      return () => {
        document.title = 'AK Rubber Spares - Premium Quality Industrial Seals';
        const existingScript = document.querySelector('script[type="application/ld+json"]');
        if (existingScript) {
          document.head.removeChild(existingScript);
        }
      };
    }
  }, [product]);

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
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link to="/" className="text-primary hover:underline">Home</Link></li>
            <li className="text-muted-foreground">/</li>
            <li><Link to="/products" className="text-primary hover:underline">Products</Link></li>
            <li className="text-muted-foreground">/</li>
            <li className="text-muted-foreground">{product.name}</li>
          </ol>
        </nav>

        <Link 
          to="/products" 
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6 group"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Products
        </Link>

        <article>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <img 
                src={product.image} 
                alt={`${product.name} - ${product.description}`}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
            
            <div>
              <Badge className="mb-4">{product.category}</Badge>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-xl text-muted-foreground mb-6">
                {product.description}
              </p>
              <div className="text-lg mb-6 leading-relaxed">
                {product.detailedDescription}
              </div>
              
              <div className="space-y-4">
                <div>
                  <h2 className="font-semibold text-lg mb-2">Materials Available:</h2>
                  <div className="flex flex-wrap gap-2">
                    {product.materials.map((material, index) => (
                      <Badge key={index} variant="outline">{material}</Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h2 className="font-semibold text-lg mb-2">Size Range:</h2>
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
                  Technical Specifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key}>
                      <dt className="font-medium text-sm text-muted-foreground">{key}</dt>
                      <dd className="text-sm">{value}</dd>
                    </div>
                  ))}
                </dl>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Need This Product?</h2>
              <p className="text-lg mb-6">Contact AK Rubber Spares for competitive pricing, availability, and detailed technical specifications. Serving Gurgaon, Delhi NCR since 1991.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="tel:+919810580983" 
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  aria-label="Call AK Rubber Spares at +91 9810580983"
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
        </article>
      </div>
    </div>
  );
}

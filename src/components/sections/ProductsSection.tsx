
import FilmReel from "@/components/FilmReel";
import { Package, Wrench, Cog } from "lucide-react";

export default function ProductsSection() {
  const products = [
    {
      icon: Package,
      title: "O-Rings",
      description: "NBR, Viton, EPDM, Silicone - All sizes & custom specifications",
      delay: "0.1s"
    },
    {
      icon: Wrench,
      title: "Hydraulic Seals",
      description: "Rod seals, Piston seals, Wiper seals for all hydraulic systems",
      delay: "0.3s"
    },
    {
      icon: Cog,
      title: "Industrial Rubber",
      description: "Rubber sheets, gaskets, V-seals & pneumatic components",
      delay: "0.5s"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Complete Range of O-Rings & Hydraulic Components
        </h2>
        <p className="text-lg sm:text-xl mb-8 max-w-4xl mx-auto text-gray-300 leading-relaxed">
          AK Rubber Spares is your most trusted supplier of premium quality hydraulic seals, O-rings, 
          pneumatic components, and industrial rubber products. We stock all major brands and custom sizes.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {products.map((product, index) => (
          <div 
            key={product.title}
            className="group p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in cursor-pointer"
            style={{animationDelay: product.delay}}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-yellow-400 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <product.icon className="h-8 w-8 text-black" />
            </div>
            <h3 className="font-bold text-xl mb-3 text-primary group-hover:text-yellow-400 transition-colors duration-300">
              {product.title}
            </h3>
            <p className="text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
              {product.description}
            </p>
          </div>
        ))}
      </div>
      
      <div className="my-12 animate-fade-in" style={{animationDelay: '0.7s'}}>
        <FilmReel />
      </div>
      
      <div className="text-center animate-fade-in" style={{animationDelay: '0.9s'}}>
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700">
          <p className="text-lg sm:text-xl mb-4 text-gray-300">
            <strong className="text-primary">Serving Industries:</strong> Manufacturing, Automotive, Construction, Agriculture, 
            Textile, Food Processing, and more across Delhi NCR.
          </p>
        </div>
      </div>
    </section>
  );
}

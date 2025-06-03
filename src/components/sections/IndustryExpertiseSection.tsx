
import { Wrench, Factory, Truck, Building2, Zap, Droplets, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Complete sealing solutions for manufacturing equipment, assembly lines, and production machinery across Delhi NCR."
  },
  {
    icon: Truck,
    name: "Automotive",
    description: "High-quality O-rings and seals for automotive industry, including engine seals, transmission components, and hydraulic systems."
  },
  {
    icon: Building2,
    name: "Construction",
    description: "Heavy-duty hydraulic seals for construction equipment, excavators, cranes, and earth-moving machinery."
  },
  {
    icon: Wrench,
    name: "Industrial Machinery",
    description: "Precision-engineered seals for pumps, compressors, valves, and various industrial equipment applications."
  },
  {
    icon: Zap,
    name: "Power Generation",
    description: "Specialized sealing solutions for power plants, generators, and energy sector equipment operating under extreme conditions."
  },
  {
    icon: Droplets,
    name: "Chemical & Pharmaceutical",
    description: "Chemical-resistant seals and gaskets for chemical processing, pharmaceutical manufacturing, and laboratory equipment."
  }
];

const expertise = [
  "30+ years of industry experience since 1991",
  "Expert knowledge in rubber compound selection",
  "Custom sealing solutions for unique applications",
  "Technical consultation and application support",
  "Quality assurance and testing protocols",
  "Fast delivery across Gurgaon and Delhi NCR"
];

export default function IndustryExpertiseSection() {
  return (
    <section className="bg-black py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Industry Expertise & Applications
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Serving diverse industries across Gurgaon and Delhi NCR with specialized sealing solutions 
            tailored to meet the unique demands of each sector. Learn more about our <Link to="/products" className="text-primary hover:text-yellow-400 underline">complete product range</Link>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => (
            <div 
              key={industry.name}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-center mb-4">
                <industry.icon className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold">{industry.name}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Why Choose AK Rubber Spares for Your Sealing Needs?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {expertise.map((item, index) => (
              <div 
                key={index}
                className="flex items-start space-x-3 animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-700 pt-6">
            <h4 className="text-lg font-semibold mb-4 text-center">Industry Resources & Partners</h4>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a 
                href="https://www.iso.org/standard/74020.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:text-yellow-400 transition-colors"
              >
                ISO Standards for O-Rings <ExternalLink className="h-3 w-3 ml-1" />
              </a>
              <span className="text-gray-500">•</span>
              <a 
                href="https://www.parkerlegris.com/seal-technology" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:text-yellow-400 transition-colors"
              >
                Hydraulic Seal Technology <ExternalLink className="h-3 w-3 ml-1" />
              </a>
              <span className="text-gray-500">•</span>
              <Link to="/about" className="text-primary hover:text-yellow-400 transition-colors">
                Our Company History
              </Link>
              <span className="text-gray-500">•</span>
              <Link to="/contact" className="text-primary hover:text-yellow-400 transition-colors">
                Technical Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

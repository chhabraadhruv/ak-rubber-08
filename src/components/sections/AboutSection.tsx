
import { Award, Clock, Shield, Zap } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: Clock,
      title: "30+ Years of Excellence",
      description: "Since 1991, AK Rubber Spares has been Delhi NCR's most trusted name in hydraulic components and industrial rubber products. We have served thousands of satisfied customers.",
      delay: "0.1s"
    },
    {
      icon: Award,
      title: "Local Expertise",
      description: "Located in New Colony, we understand the specific needs of local industries. Our team provides expert guidance and quick solutions for all your sealing requirements.",
      delay: "0.3s"
    },
    {
      icon: Shield,
      title: "Premium Quality Guaranteed",
      description: "We stock only the highest quality O-rings, hydraulic seals, and rubber components from leading manufacturers. All products come with quality assurance and technical support.",
      delay: "0.5s"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Same-day delivery available across the region and next-day delivery to Delhi NCR. Emergency supplies available 24/7 for critical industrial requirements.",
      delay: "0.7s"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-gradient-to-b from-gray-900/50 to-black">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">
          Why Choose AK Rubber Spares?
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div 
            key={feature.title}
            className="group p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in"
            style={{animationDelay: feature.delay}}
          >
            <div className="flex items-start space-x-4">
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary to-yellow-400 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <feature.icon className="h-7 w-7 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-yellow-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

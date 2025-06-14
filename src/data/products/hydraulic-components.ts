
import { ProductPage } from "@/types/productPage";

export const hydraulicComponents: ProductPage[] = [
  {
    id: "hydraulic-seals",
    name: "Hydraulic Seals",
    slug: "hydraulic-seals",
    description: "Relatively soft, non-metallic rings designed to block or separate fluid in reciprocating motion applications.",
    detailedDescription: "These seals are vital in machinery for converting fluid power to linear motion. Available in both static and dynamic configurations, including rod seals, piston seals, and wiper seals.",
    materials: ["PU Rubber", "Nitrile Rubber"],
    sizeRange: "10mm to 600mm diameter",
    specialFeatures: ["High pressure resistance", "Dynamic sealing", "Reciprocating motion"],
    applications: ["Construction equipment", "Agricultural machinery", "Industrial hydraulics", "Manufacturing systems"],
    specifications: {
      "Material": "PU and Nitrile Rubber",
      "Size Range": "10mm to 600mm diameter",
      "Pressure Rating": "Up to 700 bar",
      "Temperature Range": "-40°C to +120°C"
    },
    image: "/lovable-uploads/6e4f34e0-f85f-4012-b926-11f8a03ba2c1.png",
    category: "Hydraulic Components"
  }
];

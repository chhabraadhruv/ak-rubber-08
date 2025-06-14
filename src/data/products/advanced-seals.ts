
import { ProductPage } from "@/types/productPage";

export const advancedSeals: ProductPage[] = [
  {
    id: "x-rings",
    name: "X-Rings (Quad-Rings)",
    slug: "x-rings-quad-rings",
    description: "Sealing rings with X-shaped cross-sections that provide enhanced sealing performance compared to standard O-rings.",
    detailedDescription: "These rings feature four lips instead of two, resulting in better sealing and superior resistance to pressure variations. Ideal for hydraulics, pneumatics, automotive, and mechanical engineering applications.",
    materials: ["Nitrile", "Silicon", "Viton Rubber"],
    sizeRange: "10mm to 300mm diameter",
    specialFeatures: ["Four-lip design", "Superior sealing", "Better pressure resistance"],
    applications: ["Hydraulics", "Pneumatics", "Automotive", "Mechanical engineering"],
    specifications: {
      "Material": "Nitrile, Silicon, Viton Rubber",
      "Size Range": "10mm to 300mm diameter",
      "Cross-section": "X-shaped profile",
      "Pressure Rating": "Up to 500 bar"
    },
    image: "/lovable-uploads/3e229a8e-00d4-41da-8c22-1ec8b03b4000.png",
    category: "Advanced Seals"
  }
];

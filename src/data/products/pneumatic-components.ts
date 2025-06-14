
import { ProductPage } from "@/types/productPage";

export const pneumaticComponents: ProductPage[] = [
  {
    id: "pneumatic-seals",
    name: "Pneumatic Seals",
    slug: "pneumatic-seals",
    description: "Critical components in compressed air or gas systems designed to prevent leakage and maintain pressure.",
    detailedDescription: "These seals feature low friction design, excellent pressure resistance, and temperature tolerance. Engineered for durability with materials like nitrile, polyurethane, or PTFE.",
    materials: ["PU Rubber", "Nitrile Rubber"],
    sizeRange: "10mm to 400mm diameter",
    specialFeatures: ["Low friction", "Compressed air applications", "Temperature tolerance"],
    applications: ["Air compressors", "Pneumatic cylinders", "Automation equipment", "Air brake systems"],
    specifications: {
      "Material": "PU and Nitrile Rubber",
      "Size Range": "10mm to 400mm diameter",
      "Pressure Rating": "Up to 16 bar",
      "Temperature Range": "-40°C to +80°C"
    },
    image: "/lovable-uploads/fb02f5e3-3b67-45de-b57a-af2d71a48ae4.png",
    category: "Pneumatic Components"
  }
];


import { ProductPage } from "@/types/productPage";

export const rubberProducts: ProductPage[] = [
  {
    id: "rubber-sheets",
    name: "Rubber Sheets",
    slug: "rubber-sheets",
    description: "Versatile rubber sheet materials suitable for gasket fabrication, vibration damping, and general industrial applications.",
    detailedDescription: "Available in various thicknesses and grades to meet specific application requirements for chemical resistance and durability.",
    materials: ["Nitrile", "Silicone", "Viton Rubber"],
    sizeRange: "2mm to 25mm thickness",
    specialFeatures: ["Various grades available", "Chemical resistance", "Durability"],
    applications: ["Gasket fabrication", "Vibration damping", "Industrial applications", "Custom sealing solutions"],
    specifications: {
      "Material": "Nitrile, Silicone, Viton Rubber",
      "Thickness Range": "2mm to 25mm",
      "Standard Sizes": "1m x 1m, 1.2m x 2m",
      "Custom Cutting": "Available"
    },
    image: "/lovable-uploads/d6eb41ee-6682-4830-89c2-3a53a217a4f3.png",
    category: "Rubber Products"
  }
];

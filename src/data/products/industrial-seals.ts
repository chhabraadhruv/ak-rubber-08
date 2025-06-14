
import { ProductPage } from "@/types/productPage";

export const industrialSeals: ProductPage[] = [
  {
    id: "u-cup-seals",
    name: "U-Cup Seals (UHS, UNS, PU)",
    slug: "u-cup-seals",
    description: "Non-loaded, single material U-shaped seals popular in low-pressure applications where low friction is beneficial.",
    detailedDescription: "These seals provide excellent heavy-duty sealing for both piston and rod applications. Available in symmetrical and non-symmetric styles for various industrial uses.",
    materials: ["PU Rubber"],
    sizeRange: "10mm to 500mm diameter",
    specialFeatures: ["U-cup design", "Low friction", "Heavy-duty sealing"],
    applications: ["Low-pressure hydraulics", "Industrial machinery", "Mobile equipment", "Agricultural systems"],
    specifications: {
      "Material": "PU Rubber",
      "Size Range": "10mm to 500mm diameter",
      "Design": "U-shaped profile",
      "Pressure Rating": "Up to 250 bar"
    },
    image: "/lovable-uploads/2e5a1442-2857-486c-8446-c671d4622228.png",
    category: "Industrial Seals"
  }
];

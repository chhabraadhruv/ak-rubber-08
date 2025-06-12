
import { Product } from "@/types/products";

export const products: Product[] = [
  {
    id: 1,
    name: "Hydraulic Seals",
    description: "High-quality hydraulic seals for industrial applications",
    image: "/lovable-uploads/6e4f34e0-f85f-4012-b926-11f8a03ba2c1.png",
    category: "Hydraulic Components",
    specifications: ["Various sizes available", "High temperature resistant", "Chemical resistant"],
    applications: ["Construction equipment", "Agricultural machinery", "Industrial hydraulics"]
  },
  {
    id: 2,
    name: "O-Rings",
    description: "Precision-engineered O-rings in various materials and sizes",
    image: "/lovable-uploads/0f89117a-42c8-45fc-8348-7921d1318ed8.png",
    category: "Sealing Solutions",
    specifications: ["NBR, Viton, EPDM materials", "Standard and custom sizes", "Food grade options"],
    applications: ["Automotive", "Aerospace", "Food processing", "Medical equipment"]
  },
  {
    id: 3,
    name: "V Seals",
    description: "Specialized V seals for demanding industrial environments",
    image: "/lovable-uploads/3e229a8e-00d4-41da-8c22-1ec8b03b4000.png",
    category: "Industrial Seals",
    specifications: ["High pressure rating", "Wear resistant", "Custom profiles available"],
    applications: ["Heavy machinery", "Mining equipment", "Marine applications"]
  },
  {
    id: 4,
    name: "Rubber Sheets",
    description: "High-quality rubber sheets in various colors and thicknesses",
    image: "/lovable-uploads/d6eb41ee-6682-4830-89c2-3a53a217a4f3.png",
    category: "Rubber Products",
    specifications: ["Multiple thickness options", "Various hardness levels", "Custom cutting available"],
    applications: ["Gasket manufacturing", "Vibration damping", "Electrical insulation"]
  },
  {
    id: 5,
    name: "Colorful Rubber Components",
    description: "Customized rubber components in various colors and specifications",
    image: "/lovable-uploads/2e5a1442-2857-486c-8446-c671d4622228.png",
    category: "Custom Components",
    specifications: ["Custom colors", "Various durometer options", "Precision molding"],
    applications: ["Consumer products", "Automotive trim", "Medical devices"]
  },
  {
    id: 6,
    name: "Spiral Rubber Seals",
    description: "Durable spiral rubber seals for specialized applications",
    image: "/lovable-uploads/fb02f5e3-3b67-45de-b57a-af2d71a48ae4.png",
    category: "Specialized Seals",
    specifications: ["Spiral design", "High flexibility", "Chemical resistance"],
    applications: ["Rotary equipment", "Pumps", "Compressors"]
  }
];

// Helper function to get products by category
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

// Helper function to get all categories
export const getAllCategories = (): string[] => {
  const categories = products.map(product => product.category).filter(Boolean) as string[];
  return [...new Set(categories)];
};

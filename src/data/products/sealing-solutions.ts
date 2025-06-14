
import { ProductPage } from "@/types/productPage";

export const sealingSolutions: ProductPage[] = [
  {
    id: "o-rings",
    name: "O-Rings",
    slug: "o-rings",
    description: "One-piece molded sealing rings with circular cross-sections designed to prevent fluid movement between mechanical parts.",
    detailedDescription: "These elastomeric seals maintain contact with inner and outer walls, providing zero-pressure sealing capability. When pressure is applied, the O-ring deforms to create an effective seal against leakage.",
    materials: ["Nitrile", "Silicon", "Viton Rubber"],
    sizeRange: "1mm to 350mm diameter - Available in comprehensive size ranges",
    specialFeatures: [
      "Self-energizing", 
      "Circular cross-section", 
      "Zero-pressure sealing",
      "Available in 35+ size ranges from 1mm to 350mm",
      "Complete millimeter sizing coverage"
    ],
    applications: ["Industrial machinery", "Automotive systems", "Hydraulic equipment", "Pneumatic systems"],
    specifications: {
      "Material": "Nitrile, Silicon, Viton Rubber",
      "Size Range": "1mm to 350mm diameter",
      "Temperature Range": "-40°C to +200°C",
      "Pressure Rating": "Up to 400 bar",
      "Available Sizes (M.M)": "1-10, 11-20, 21-30, 31-40, 41-50, 51-60, 61-70, 71-80, 81-90, 91-100, 101-110, 111-120, 121-130, 131-140, 141-150, 151-160, 161-170, 171-180, 181-190, 191-200, 201-210, 211-220, 221-230, 231-240, 241-250, 251-260, 261-270, 271-280, 281-290, 291-300, 301-310, 311-320, 321-330, 331-340, 341-350"
    },
    image: "/lovable-uploads/0f89117a-42c8-45fc-8348-7921d1318ed8.png",
    category: "Sealing Solutions"
  },
  {
    id: "dowty-seals",
    name: "Dowty Seals",
    slug: "dowty-seals",
    description: "Self-centering sealing washers that combine the sealing properties of an O-ring with the anti-extrusion characteristics of a metal washer.",
    detailedDescription: "Ideal for high-pressure hydraulic connections and threaded fittings. These seals provide reliable sealing in challenging applications.",
    materials: ["Nitrile Rubber"],
    sizeRange: "10mm to 75mm diameter (All inch sizes)",
    specialFeatures: ["Self-centering", "Anti-extrusion", "High-pressure capability"],
    applications: ["Hydraulic connections", "Threaded fittings", "High-pressure systems", "Aerospace applications"],
    specifications: {
      "Material": "Nitrile Rubber",
      "Size Range": "10mm to 75mm diameter",
      "Design": "All inch sizes, self-centering",
      "Pressure Rating": "Up to 600 bar"
    },
    image: "/lovable-uploads/0f89117a-42c8-45fc-8348-7921d1318ed8.png",
    category: "Specialized Seals"
  }
];

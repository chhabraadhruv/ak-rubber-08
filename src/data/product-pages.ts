import { ProductPage } from "@/types/productPage";

export const productPages: ProductPage[] = [
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
  },
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
  },
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
  },
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
  },
  {
    id: "chevron-seals",
    name: "Chevron Seals",
    slug: "chevron-seals",
    description: "Dynamic sealing solutions designed for high-pressure applications with excellent sealing performance.",
    detailedDescription: "These seals feature a V-shaped profile that provides effective sealing under varying pressure conditions while maintaining low friction operation.",
    materials: ["PU Rubber", "Nitrile Rubber"],
    sizeRange: "20mm to 500mm OD",
    specialFeatures: ["V-shaped profile", "High pressure applications", "Low friction operation"],
    applications: ["High-pressure hydraulics", "Heavy machinery", "Press applications", "Industrial equipment"],
    specifications: {
      "Material": "PU and Nitrile Rubber",
      "Size Range": "20mm to 500mm OD",
      "Profile": "V-shaped chevron",
      "Pressure Rating": "Up to 1000 bar"
    },
    image: "/lovable-uploads/3e229a8e-00d4-41da-8c22-1ec8b03b4000.png",
    category: "High-Pressure Seals"
  },
  {
    id: "oil-seals",
    name: "Oil Seals",
    slug: "oil-seals",
    description: "Rotary shaft seals designed to prevent lubricant leakage and contamination ingress in rotating machinery.",
    detailedDescription: "These seals maintain effective sealing contact between stationary and rotating surfaces while accommodating shaft runout and misalignment.",
    materials: ["Nitrile Rubber"],
    sizeRange: "Various standard sizes",
    specialFeatures: ["Rotary sealing", "Contamination protection", "Shaft accommodation"],
    applications: ["Automotive engines", "Industrial gearboxes", "Pump systems", "Motor applications"],
    specifications: {
      "Material": "Nitrile Rubber",
      "Applications": "Automotive, Industrial machinery",
      "Speed Rating": "Up to 15 m/s",
      "Temperature Range": "-40°C to +150°C"
    },
    image: "/lovable-uploads/fb02f5e3-3b67-45de-b57a-af2d71a48ae4.png",
    category: "Rotary Seals"
  },
  {
    id: "ptfe-guide-strips",
    name: "PTFE Guide Strips",
    slug: "ptfe-guide-strips",
    description: "Low-friction guide elements that provide bearing support and prevent metal-to-metal contact in hydraulic cylinders.",
    detailedDescription: "These strips offer excellent wear resistance and chemical compatibility while reducing system friction and extending component life.",
    materials: ["Bronze", "Teflon"],
    sizeRange: "All standard sizes available",
    specialFeatures: ["Low friction", "Wear resistant", "Chemical compatibility"],
    applications: ["Hydraulic cylinders", "Linear actuators", "Guide systems", "Bearing applications"],
    specifications: {
      "Material": "Bronze, Teflon",
      "Size Range": "All Sizes",
      "Friction Coefficient": "Ultra-low",
      "Temperature Range": "-200°C to +260°C"
    },
    image: "/lovable-uploads/d6eb41ee-6682-4830-89c2-3a53a217a4f3.png",
    category: "Guide Elements"
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
  },
  {
    id: "compact-seals",
    name: "Compact Seals",
    slug: "compact-seals",
    description: "Space-saving sealing solutions designed for applications with limited installation space.",
    detailedDescription: "These seals provide reliable sealing performance while minimizing the required groove dimensions and installation complexity.",
    materials: ["NBR (KASTAS, TECHNOLAN)"],
    sizeRange: "25mm to 400mm OD",
    specialFeatures: ["Space-saving design", "Reliable performance", "Easy installation"],
    applications: ["Compact machinery", "Mobile equipment", "Limited space applications", "Modern hydraulic systems"],
    specifications: {
      "Material": "NBR (KASTAS, TECHNOLAN)",
      "Size Range": "25mm to 400mm OD",
      "Design": "Space-saving",
      "Pressure Rating": "Up to 400 bar"
    },
    image: "/lovable-uploads/2e5a1442-2857-486c-8446-c671d4622228.png",
    category: "Compact Solutions"
  },
  {
    id: "o-ring-kits",
    name: "O-Ring Kits",
    slug: "o-ring-kits",
    description: "Comprehensive assortments of commonly used O-ring sizes for maintenance and repair applications.",
    detailedDescription: "These kits provide convenient access to frequently needed seal sizes for quick repairs and preventive maintenance.",
    materials: ["Nitrile Rubber"],
    sizeRange: "2mm to 50mm (mm and inch sizes)",
    specialFeatures: ["386 pieces per box", "Common sizes", "Maintenance convenience"],
    applications: ["Maintenance kits", "Repair services", "Emergency supplies", "Workshop inventory"],
    specifications: {
      "Material": "Nitrile Rubber",
      "Contents": "386 pieces per box",
      "Size Range": "2mm to 50mm (mm and inch sizes)",
      "Packaging": "Organized storage box"
    },
    image: "/lovable-uploads/0f89117a-42c8-45fc-8348-7921d1318ed8.png",
    category: "Maintenance Kits"
  },
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

export const getProductPageBySlug = (slug: string): ProductPage | undefined => {
  return productPages.find(product => product.slug === slug);
};

export const getAllProductPages = (): ProductPage[] => {
  return productPages;
};

export const getProductPagesByCategory = (category: string): ProductPage[] => {
  return productPages.filter(product => product.category === category);
};

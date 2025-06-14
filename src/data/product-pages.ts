
import { ProductPage } from "@/types/productPage";
import { sealingSolutions } from "./products/sealing-solutions";
import { advancedSeals } from "./products/advanced-seals";
import { hydraulicComponents } from "./products/hydraulic-components";
import { pneumaticComponents } from "./products/pneumatic-components";
import { industrialSeals } from "./products/industrial-seals";
import { highPressureSeals } from "./products/high-pressure-seals";
import { rotarySeals } from "./products/rotary-seals";
import { guideElements } from "./products/guide-elements";
import { compactSolutions } from "./products/compact-solutions";
import { maintenanceKits } from "./products/maintenance-kits";
import { rubberProducts } from "./products/rubber-products";

export const productPages: ProductPage[] = [
  ...sealingSolutions,
  ...advancedSeals,
  ...hydraulicComponents,
  ...pneumaticComponents,
  ...industrialSeals,
  ...highPressureSeals,
  ...rotarySeals,
  ...guideElements,
  ...compactSolutions,
  ...maintenanceKits,
  ...rubberProducts
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

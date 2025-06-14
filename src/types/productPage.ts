
export interface ProductPage {
  id: string;
  name: string;
  slug: string;
  description: string;
  detailedDescription: string;
  materials: string[];
  sizeRange: string;
  specialFeatures: string[];
  applications: string[];
  specifications: {
    [key: string]: string;
  };
  image: string;
  category: string;
}

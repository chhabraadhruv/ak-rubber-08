
export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category?: string;
  specifications?: string[];
  applications?: string[];
  keywords?: string[];
  location?: string;
}


export interface SizeListItem {
  profile: string;
  od: number;
  id: number;
  thickness: number;
}

export interface SizeList {
  id: string;
  productName: string;
  productCode: string;
  category: string;
  description?: string;
  data: SizeListItem[];
  slug: string;
}

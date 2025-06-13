
import { kastasK18SizeList } from "./kastas-compact-seal-k18";
import { dowtyWashersSizeList } from "./dowty-washers-bonded-seal";
import { SizeList } from "@/types/sizeList";

export const sizeLists: SizeList[] = [
  kastasK18SizeList,
  dowtyWashersSizeList,
  // Add more size lists here as they are created
];

export const getSizeListBySlug = (slug: string): SizeList | undefined => {
  return sizeLists.find(list => list.slug === slug);
};

export const getSizeListsByCategory = (category: string): SizeList[] => {
  return sizeLists.filter(list => list.category === category);
};

export const getAllSizeListCategories = (): string[] => {
  const categories = sizeLists.map(list => list.category);
  return [...new Set(categories)];
};

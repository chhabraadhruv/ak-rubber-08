
# Adding New Size Lists

To add new size lists to the website, follow these steps:

## 1. Create Size List Data File

Create a new file in `src/data/size-lists/` with a descriptive name:

```typescript
// src/data/size-lists/your-product-name.ts
import { SizeList } from "@/types/sizeList";

export const yourProductSizeList: SizeList = {
  id: "unique-id", // Unique identifier
  productName: "Your Product Name",
  productCode: "PRODUCT-CODE",
  category: "Product Category", // e.g., "Hydraulic Seals", "O-Rings"
  description: "Brief description of the product",
  slug: "your-product-slug", // Used in URL
  data: [
    { profile: "PROFILE", od: 25, id: 15, thickness: 16.4 },
    // Add more size data...
  ]
};
```

## 2. Add to Index File

Add your size list to `src/data/size-lists/index.ts`:

```typescript
import { yourProductSizeList } from "./your-product-name";

export const sizeLists: SizeList[] = [
  kastasK18SizeList,
  yourProductSizeList, // Add your size list here
  // Add more size lists...
];
```

## 3. Data Structure

Each size list item should have:
- `profile`: Product profile/model code
- `od`: Outer diameter (in mm)
- `id`: Inner diameter (in mm) 
- `thickness`: Thickness measurement

## 4. Categories

Common categories include:
- Hydraulic Seals
- Pneumatic Seals
- O-Rings
- V-Seals
- Oil Seals
- Custom Components

## 5. URL Structure

Size lists will be accessible at: `/size-lists/your-product-slug`

## 6. Bulk Import

For importing data from spreadsheets:
1. Export your data as CSV
2. Convert to the TypeScript format
3. Create the data file as shown above

This structure makes it easy to maintain hundreds of size lists while keeping the code organized.

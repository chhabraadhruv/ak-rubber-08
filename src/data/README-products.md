
# Adding New Products

To add new products to the website, follow these simple steps:

## 1. Add Product Data

Edit the `src/data/products.ts` file and add your new product to the `products` array:

```typescript
{
  id: 7, // Use the next available ID
  name: "Your Product Name",
  description: "Brief description of your product",
  image: "/lovable-uploads/your-image-filename.png", // Upload image first
  category: "Product Category", // Optional
  specifications: ["Spec 1", "Spec 2", "Spec 3"], // Optional
  applications: ["Application 1", "Application 2"] // Optional
}
```

## 2. Upload Product Image

1. Upload your product image to the `public/lovable-uploads/` directory
2. Use the filename in the `image` field of your product data

## 3. Categories

Common categories include:
- Hydraulic Components
- Sealing Solutions
- Industrial Seals
- Rubber Products
- Custom Components
- Specialized Seals

## 4. Product Structure

Each product must have:
- `id`: Unique number
- `name`: Product name
- `description`: Brief description
- `image`: Path to product image

Optional fields:
- `category`: Product category for grouping
- `specifications`: Array of technical specifications
- `applications`: Array of use cases/applications

## 5. Bulk Adding Products

For adding many products at once, you can:
1. Prepare a CSV or JSON file with your product data
2. Convert it to the TypeScript format
3. Add all products to the array in one go

This structure makes it easy to maintain and add hundreds of products while keeping the code organized.

export type ProductCategory =
  | "accessories"
  | "clothing";

export type ProductAvailability =
    | "in-stock"
    | "low-stock"
    | "out-of-stock";

export interface ProductImage {
  src: string;
  alt: string;
}

export interface Product {
  id: string;
  name: string;
  sku: number;

  // Internal inventory information.
  // The customer-facing UI should show availability status,
  // not the actual stock count.
  stockCount: number;

  category: ProductCategory;
  productType: string;
  audience?: string[];

  shortDescription: string;

  price: number | null;
  availability: ProductAvailability;

  sizes?: string[];

  material?: string;
  fabric?: string;

  occasionTags?: string[];
  setContents?: string;
  pattern?: string;
  careInformation?: string;

  // Indicates that a multi-item offer may be available.
  // Actual offer terms are intentionally not exposed here.
  offerAvailable: boolean;

  images: ProductImage[];
}
export type ProductCategory =
  | "accessories"
  | "clothing";

export type ProductType =
  | "necklace"
  | "earrings"
  | "bracelet"
  | "earrings"
  | "kada"
  | "ring"
  | "hair-accessories"
  | "frock"
  | "full-sleeve-set"
  | "jabla-shorts-set"
  | "knot-frock";

export type ProductAvailability =
    | "in-stock"
    | "low-stock"
    | "out-of-stock";

export interface ProductImage {
  src: string;
  alt: string;
  color?: string;
}

export interface Product {
  id: string;
  name: string;
  sku: number;

  legacySkus?: string[];
  sizeAvailability?: { label: string; available: boolean }[];

  category: ProductCategory;
  productType: ProductType;
  audience?: string[];
  color?: string;

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

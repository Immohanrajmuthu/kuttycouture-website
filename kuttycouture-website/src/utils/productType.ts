import type { ProductType } from "../types/product";

export function formatProductType(productType: ProductType): string {
  return productType
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

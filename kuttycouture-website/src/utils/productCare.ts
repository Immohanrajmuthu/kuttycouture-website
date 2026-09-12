import type { Product } from "../types/product";

export type CareGuideAnchor = "jewellery" | "baby-wear" | "clothing";

export function getCareGuideAnchor(product: Product): CareGuideAnchor {
  if (product.category === "accessories") {
    return "jewellery";
  }

  const hasBabyAudience = product.audience?.some(
    (audience) => audience.toLowerCase() === "baby",
  );
  const hasMuslinFabric = product.fabric?.toLowerCase() === "muslin";

  return hasBabyAudience || hasMuslinFabric ? "baby-wear" : "clothing";
}

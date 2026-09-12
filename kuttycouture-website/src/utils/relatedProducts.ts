import type { Product } from "../types/product";

function hasOverlappingAudience(product: Product, candidate: Product): boolean {
  if (!product.audience || !candidate.audience) {
    return false;
  }

  const audience = new Set(product.audience);

  return candidate.audience.some((value) => audience.has(value));
}

export function getRelatedProducts(
  product: Product,
  catalogue: Product[],
): Product[] {
  const relatedProducts: Product[] = [];
  const includedSkus = new Set<number>([product.sku]);

  const addCandidates = (candidates: Product[]) => {
    for (const candidate of candidates) {
      if (relatedProducts.length === 3) {
        return;
      }

      if (!includedSkus.has(candidate.sku)) {
        includedSkus.add(candidate.sku);
        relatedProducts.push(candidate);
      }
    }
  };

  addCandidates(
    catalogue.filter((candidate) => candidate.productType === product.productType),
  );
  addCandidates(
    catalogue.filter(
      (candidate) =>
        candidate.category === product.category &&
        hasOverlappingAudience(product, candidate),
    ),
  );
  addCandidates(catalogue.filter((candidate) => candidate.category === product.category));
  addCandidates(catalogue);

  return relatedProducts;
}

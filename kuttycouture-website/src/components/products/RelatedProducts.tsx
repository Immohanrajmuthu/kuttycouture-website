import type { Product } from "../../types/product";
import { ProductCard } from "./ProductCard";

type RelatedProductsProps = {
  products: Product[];
};

export function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="related-products-heading" className="mt-14 sm:mt-16 lg:mt-20">
      <div className="max-w-2xl">
        <h2
          id="related-products-heading"
          className="text-2xl font-semibold tracking-tight text-[var(--kc-text)] sm:text-3xl"
        >
          You May Also Like
        </h2>

        <p className="mt-3 text-sm leading-6 text-[var(--kc-muted)] sm:text-base">
          A few more pieces from our current collection.
        </p>
      </div>

      <ul aria-label="Related products" className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <li key={product.sku}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}

import { products } from "../../data/products";
import { ProductCard } from "../products/ProductCard";

const featuredProducts = [
  ...products.filter((product) => product.category === "accessories").slice(0, 4),
  ...products.filter((product) => product.category === "clothing").slice(0, 2),
];

export function FeaturedProducts() {
  return (
    <section
      aria-labelledby="featured-products-heading"
      className="bg-[var(--kc-background)] px-6 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Section introduction */}
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="featured-products-heading"
            className="text-2xl font-semibold tracking-tight text-[var(--kc-primary)] sm:text-3xl"
          >
            Featured Picks
          </h2>

          <p className="mt-3 text-sm leading-6 text-[var(--kc-muted)] sm:text-base">
            Handpicked favourites from our current collections.
          </p>
        </div>

        {/* Featured products */}
        <ul
          aria-label="Featured products"
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featuredProducts.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>

        {/* View all */}
        <div className="mt-10 text-center">
          <a
            href="/collections"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--kc-primary)] bg-white px-6 py-3 text-sm font-medium text-[var(--kc-primary)] transition-colors hover:bg-[var(--kc-background)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kc-primary)] focus-visible:ring-offset-2"
          >
            Explore All Collections
          </a>
        </div>
      </div>
    </section>
  );
}

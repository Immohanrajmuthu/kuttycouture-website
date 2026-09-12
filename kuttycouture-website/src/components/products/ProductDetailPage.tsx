import { Link, useParams } from "react-router-dom";
import { products } from "../../data/products";
import { ProductDetails } from "./ProductDetails";
import { ProductGallery } from "./ProductGallery";
import { ProductPrimaryInfo } from "./ProductPrimaryInfo";
import { Container } from "../ui/Container";

function getProductBySku(skuParam: string | undefined) {
  if (!skuParam || !/^\d+$/.test(skuParam)) {
    return undefined;
  }

  const sku = Number(skuParam);

  if (!Number.isSafeInteger(sku)) {
    return undefined;
  }

  return products.find((product) => product.sku === sku);
}

export function ProductDetailPage() {
  const { sku } = useParams();
  const product = getProductBySku(sku);

  if (!product) {
    return (
      <section aria-labelledby="product-not-found-heading" className="py-14 sm:py-16 lg:py-20">
        <Container className="max-w-2xl">
          <h1
            id="product-not-found-heading"
            className="text-3xl font-semibold tracking-tight text-[var(--kc-text)] sm:text-4xl"
          >
            Product not found
          </h1>

          <p className="mt-4 text-base leading-7 text-[var(--kc-muted)] sm:text-lg">
            This product may no longer be available, or the link may be incorrect.
          </p>

          <Link
            to="/collections"
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--kc-primary)] px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kc-primary)] focus-visible:ring-offset-2"
          >
            Browse collections
          </Link>
        </Container>
      </section>
    );
  }

  return (
    <section aria-labelledby="product-heading" className="py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2">
          <ProductGallery images={product.images} productName={product.name} />
          <ProductPrimaryInfo key={product.sku} product={product} />
        </div>

        <ProductDetails product={product} />
      </Container>
    </section>
  );
}

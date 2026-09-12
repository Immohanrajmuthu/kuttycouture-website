import type { Product } from "../../types/product";
import { Link } from "react-router-dom";
import { getAvailabilityClassName, getAvailabilityLabel } from "../../utils/productAvailability";
import { getProductEnquiryUrl } from "../../utils/productEnquiry";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const availabilityLabel = getAvailabilityLabel(product.availability);

  const isAvailable = product.availability !== "out-of-stock";

  const whatsappUrl = getProductEnquiryUrl(product);
  const productUrl = `/products/${product.sku}`;

  return (
    <article className="overflow-hidden rounded-[var(--kc-radius-lg)] border border-[var(--kc-border)] bg-[var(--kc-surface)]">
      {/* Product image */}
      <Link
        to={productUrl}
        className="block rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kc-primary)] focus-visible:ring-offset-2"
        aria-label={`View ${product.name}`}
      >
        <div className="aspect-square overflow-hidden bg-[var(--kc-background)]">
        <img
          src={product.images[0].src}
          alt={product.images[0].alt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        </div>
      </Link>

      {/* Product information */}
      <div className="p-5 sm:p-6">
        <h3 className="text-lg font-semibold leading-snug text-[var(--kc-text)]">
          <Link
            to={productUrl}
            className="rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kc-primary)] focus-visible:ring-offset-2"
          >
            {product.name}
          </Link>
        </h3>

        <p className="mt-1 text-xs  text-[var(--kc-muted)]">
          SKU: {product.sku}
        </p>

        <p className="mt-2 text-sm leading-6 text-[var(--kc-muted)]">
          {product.shortDescription}
        </p>

        {/* <p className="mt-3 text-xs font-medium tracking-wide text-[var(--kc-muted)]">
          SKU: {product.sku}
        </p> */}

        {/* Availability and offer */}
        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
          <span
            className={`text-sm font-medium ${getAvailabilityClassName(product.availability)}`}
          >
            {availabilityLabel}
          </span>

          {product.offerAvailable && isAvailable && (
            <span className="text-xs text-[var(--kc-muted)]">
              · Multi-item offer available
            </span>
          )}
        </div>

        {/* Price */}
        <p className="mt-4 text-xl font-semibold text-[var(--kc-text)]">
          {product.price !== null ? `₹${product.price}` : "Price on enquiry"}
        </p>

        {/* WhatsApp action */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[var(--kc-primary)] px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kc-primary)] focus-visible:ring-offset-2"
        >
          Enquire on WhatsApp
        </a>
      </div>
    </article>
  );
}

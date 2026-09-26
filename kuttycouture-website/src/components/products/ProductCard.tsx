import type { MouseEvent } from "react";
import type { Product } from "../../types/product";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAvailabilityClassName, getAvailabilityLabel } from "../../utils/productAvailability";
import { getProductEnquiryUrl } from "../../utils/productEnquiry";
import {
  getProductNavigationState,
  isProductDetailPathname,
} from "../../utils/productNavigation";

interface ProductCardProps {
  product: Product;
  collectionFilter?: string;
}

export function ProductCard({ product, collectionFilter }: ProductCardProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const availabilityLabel = getAvailabilityLabel(product.availability);

  const isAvailable = product.availability !== "out-of-stock";

  const whatsappUrl = getProductEnquiryUrl(product);
  const productUrl = `/products/${product.sku}`;
  const collectionNavigationState = getProductNavigationState(location);
  const productNavigationState =
    collectionNavigationState && isProductDetailPathname(location.pathname)
      ? { ...collectionNavigationState, fromProductDetail: true as const }
      : collectionNavigationState
        ? { ...collectionNavigationState, ...(collectionFilter ? { collectionFilter } : {}) }
        : undefined;

  function handleProductNavigation(event: MouseEvent<HTMLAnchorElement>) {
    if (
      !productNavigationState ||
      event.button !== 0 ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey
    ) {
      return;
    }

    event.preventDefault();
    navigate(productUrl, {
      state: {
        ...productNavigationState,
        ...(isProductDetailPathname(location.pathname)
          ? {}
          : { collectionScrollPosition: window.scrollY }),
      },
    });
  }

  return (
    <article className="overflow-hidden rounded-[var(--kc-radius-lg)] border border-[var(--kc-border)] bg-[var(--kc-surface)]">
      {/* Product image */}
      <Link
        to={productUrl}
        state={productNavigationState}
        onClick={handleProductNavigation}
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
            state={productNavigationState}
            onClick={handleProductNavigation}
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

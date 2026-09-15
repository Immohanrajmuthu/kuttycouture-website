import { useState } from "react";
import type { Product } from "../../types/product";
import { getAvailabilityClassName, getAvailabilityLabel } from "../../utils/productAvailability";
import { getProductEnquiryUrl } from "../../utils/productEnquiry";

type ProductPrimaryInfoProps = {
  product: Product;
};

export function ProductPrimaryInfo({ product }: ProductPrimaryInfoProps) {
  const [selectedSize, setSelectedSize] = useState<string>();
  const sizes = product.sizes?.filter(Boolean) ?? [];
  const color = product.color?.trim();
  const whatsappUrl = getProductEnquiryUrl(product, {
    size: selectedSize,
    useLowStockWording: true,
  });

  return (
    <section className="rounded-[var(--kc-radius-lg)] border border-[var(--kc-border)] bg-[var(--kc-surface)] p-6 sm:p-8 lg:self-start">
      <h1
        id="product-heading"
        className="text-3xl font-semibold tracking-tight text-[var(--kc-text)] sm:text-4xl"
      >
        {product.name}
      </h1>

      <p className="mt-2 text-sm text-[var(--kc-muted)]">SKU: {product.sku}</p>

      <p className="mt-6 text-base leading-7 text-[var(--kc-muted)] sm:text-lg">
        {product.shortDescription}
      </p>

      {color && (
        <dl className="mt-6">
          <dt className="text-sm font-medium text-[var(--kc-muted)]">Color</dt>
          <dd className="mt-1 text-base leading-6 text-[var(--kc-text)]">{color}</dd>
        </dl>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
        <span
          className={`text-sm font-medium ${getAvailabilityClassName(product.availability)}`}
        >
          {getAvailabilityLabel(product.availability)}
        </span>

        {product.offerAvailable && product.availability !== "out-of-stock" && (
          <span className="text-xs text-[var(--kc-muted)]">
            · Multi-item offer available
          </span>
        )}
      </div>

      <p className="mt-6 text-2xl font-semibold text-[var(--kc-text)]">
        {product.price !== null ? `₹${product.price}` : "Price on enquiry"}
      </p>

      {sizes.length > 0 && (
        <fieldset className="mt-6">
          <legend className="text-sm font-medium text-[var(--kc-text)]">
            Select a size <span className="text-[var(--kc-muted)]">(optional)</span>
          </legend>

          <div className="mt-3 flex flex-wrap gap-3">
            {sizes.map((size) => {
              const isSelected = selectedSize === size;

              return (
                <button
                  key={size}
                  type="button"
                  onClick={() =>
                    setSelectedSize((currentSize) =>
                      currentSize === size ? undefined : size,
                    )
                  }
                  aria-pressed={isSelected}
                  className={`min-h-11 rounded-full border px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kc-primary)] focus-visible:ring-offset-2 ${
                    isSelected
                      ? "border-[var(--kc-primary)] bg-[var(--kc-background)] ring-2 ring-[var(--kc-primary)] ring-offset-2"
                      : "border-[var(--kc-border)] bg-[var(--kc-surface)] text-[var(--kc-text)] hover:border-[var(--kc-accent)]"
                  }`}
                >
                  {size}
                  {isSelected && <span className="sr-only"> Selected</span>}
                </button>
              );
            })}
          </div>
        </fieldset>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[var(--kc-primary)] px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kc-primary)] focus-visible:ring-offset-2"
      >
        Enquire on WhatsApp
      </a>
    </section>
  );
}

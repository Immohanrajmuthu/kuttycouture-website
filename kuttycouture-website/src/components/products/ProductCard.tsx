import type { Product } from "../../types/product";

interface ProductCardProps {
  product: Product;
}

function getAvailabilityLabel(availability: Product["availability"]): string {
  switch (availability) {
    case "in-stock":
      return "Available";

    case "low-stock":
      return "Limited Availability";

    case "out-of-stock":
      return "Currently Unavailable";
  }
}

function getWhatsAppMessage(product: Product): string {
  const whatsappMessage =
    product.availability === "out-of-stock"
      ? `Hi KuttyCouture, I'm interested in ${product.name} (SKU: ${product.sku}). I see it's currently unavailable. Could you let me know if it will be available again?`
      : `Hi KuttyCouture, I'm interested in ${product.name} (SKU: ${product.sku}). Is it available?`;

  return whatsappMessage;
  // return `Hi KuttyCouture, I'm interested in ${product.name} (SKU: ${product.sku}). Is it available?`;
}

export function ProductCard({ product }: ProductCardProps) {
  const availabilityLabel = getAvailabilityLabel(product.availability);

  const isAvailable = product.availability !== "out-of-stock";

  const whatsappUrl = `https://wa.me/918610971628?text=${encodeURIComponent(
    getWhatsAppMessage(product),
  )}`;

  return (
    <article className="overflow-hidden rounded-[var(--kc-radius-lg)] border border-[var(--kc-border)] bg-[var(--kc-surface)]">
      {/* Product image */}
      <div className="aspect-square overflow-hidden bg-[var(--kc-background)]">
        <img
          src={product.images[0].src}
          alt={product.images[0].alt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Product information */}
      <div className="p-5 sm:p-6">
        <h3 className="text-lg font-semibold leading-snug text-[var(--kc-text)]">
          {product.name}
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
            className={`text-sm font-medium ${
              product.availability === "in-stock"
                ? "text-[var(--kc-availability-available)]"
                : product.availability === "low-stock"
                  ? "text-[var(--kc-availability-limited)]"
                  : "text-[var(--kc-availability-unavailable)]"
            }`}
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

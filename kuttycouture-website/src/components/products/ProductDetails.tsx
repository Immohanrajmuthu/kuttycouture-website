import type { Product } from "../../types/product";
import { Link } from "react-router-dom";
import { getCareGuideAnchor } from "../../utils/productCare";

type ProductDetailsProps = {
  product: Product;
};

type Detail = {
  label: string;
  value: string | undefined;
};

function formatValue(value: string): string {
  return value
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function formatList(values: string[] | undefined): string | undefined {
  const formattedValues = values?.filter(Boolean).map(formatValue);

  return formattedValues?.length ? formattedValues.join(", ") : undefined;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const careGuideAnchor = getCareGuideAnchor(product);
  const details: Detail[] = [
    { label: "Product type", value: formatValue(product.productType) },
    { label: "Audience", value: formatList(product.audience) },
    { label: "Sizes", value: product.sizes?.filter(Boolean).join(", ") },
    { label: "Material", value: product.material },
    { label: "Fabric", value: product.fabric },
    { label: "Occasion", value: formatList(product.occasionTags) },
    { label: "Pattern", value: product.pattern },
    { label: "Set contents", value: product.setContents },
  ].filter((detail): detail is { label: string; value: string } => Boolean(detail.value));

  if (details.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="product-details-heading"
      className="mt-10 rounded-[var(--kc-radius-lg)] border border-[var(--kc-border)] bg-[var(--kc-surface)] p-6 sm:mt-12 sm:p-8"
    >
      <h2
        id="product-details-heading"
        className="text-xl font-semibold text-[var(--kc-text)] sm:text-2xl"
      >
        Product details
      </h2>

      <dl className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
        {details.map((detail) => (
          <div key={detail.label}>
            <dt className="text-sm font-medium text-[var(--kc-muted)]">
              {detail.label}
            </dt>
            <dd className="mt-1 text-base leading-6 text-[var(--kc-text)]">
              {detail.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-6 border-t border-[var(--kc-border)] pt-5">
        <Link
          to={`/care-guide#${careGuideAnchor}`}
          className="rounded-sm text-sm font-medium text-[var(--kc-primary)] transition-colors hover:text-[var(--kc-text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kc-primary)] focus-visible:ring-offset-2"
        >
          How to care for this product →
        </Link>
      </div>
    </section>
  );
}

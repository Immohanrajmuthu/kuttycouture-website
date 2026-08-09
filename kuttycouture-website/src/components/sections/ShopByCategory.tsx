import accessoriesImage from "../../assets/collections/accessories/Delicate Gold Flower Necklace.png";
import babyWearImage from "../../assets/collections/baby-wears/FS Set-Model 1.png";

const collections = [
  {
    title: "Korean Stainless-Steel Accessories",
    description: "Chains, bracelets & hair clips for everyday style.",
    image: accessoriesImage,
    imageAlt:
      "Gold flower necklace displayed as part of the KuttyCouture accessories collection.",
    href: "/collections/accessories",
    linkLabel: "Explore Accessories",
  },
  {
    title: "Muslin Baby Wear",
    description:
      "Thoughtfully selected styles for little ones aged 0–1 year.",
    image: babyWearImage,
    imageAlt:
      "Baby wearing a muslin clothing set from the KuttyCouture baby-wear collection.",
    href: "/collections/baby-wear",
    linkLabel: "Explore Baby Wear",
  },
];

export function ShopByCategory() {
  return (
    <section
      aria-labelledby="collections-heading"
      className="border-b border-[var(--kc-border)] bg-[var(--kc-background)] px-6 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="collections-heading"
            className="text-3xl font-semibold tracking-tight text-[var(--kc-text)] sm:text-4xl"
          >
            Explore Our Collections
          </h2>

          <p className="mt-4 text-base leading-7 text-[var(--kc-muted)] sm:text-lg">
            Discover the collections currently available at KuttyCouture.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-12 lg:gap-8">
          {collections.map((collection) => (
            <article
              key={collection.href}
              className="overflow-hidden rounded-[var(--kc-radius-lg)] border border-[var(--kc-border)] bg-[var(--kc-surface)]"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.imageAlt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-[var(--kc-text)] sm:text-2xl">
                  {collection.title}
                </h3>

                <p className="mt-3 text-base leading-7 text-[var(--kc-muted)]">
                  {collection.description}
                </p>

                <a
                  href={collection.href}
                  className="mt-6 inline-flex min-h-11 items-center rounded-full bg-[var(--kc-primary)] px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kc-primary)] focus-visible:ring-offset-2"
                >
                  {collection.linkLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
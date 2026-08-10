import bowNecklace from "../../assets/products/bow-necklace.png";
import floralBracelet from "../../assets/products/floral-bracelet.png";
import rectangleNecklace from "../../assets/products/rectangle-necklace.png";
import heartBracelet from "../../assets/products/heart-bracelet.png";
import muslinJablaSet from "../../assets/products/muslin-jabla-shorts.png";
import muslinKnotFrock from "../../assets/products/muslin-knot-frock.png";

const featuredProducts = [
  {
    name: "Bow Detail Necklace",
    description: "A delicate everyday necklace with graceful bow details.",
    image: bowNecklace,
    alt: "Gold-tone necklace with multiple bow-shaped details displayed on a soft mauve jewellery stand.",
    href: "/collections/accessories",
  },
  {
    name: "Floral Stone Bracelet",
    description: "A delicate floral bracelet designed for everyday elegance.",
    image: floralBracelet,
    alt: "Gold-tone bracelet with four small floral stone details displayed on a beige jewellery cushion.",
    href: "/collections/accessories",
  },
  {
    name: "Rectangle Pendant Necklace",
    description: "A simple statement piece with a refined rectangular pendant.",
    image: rectangleNecklace,
    alt: "Gold-tone necklace with a rectangular stone pendant displayed on a burgundy jewellery stand.",
    href: "/collections/accessories",
  },
  {
    name: "Heart Detail Bracelet",
    description: "A graceful bracelet featuring delicate heart-shaped details.",
    image: heartBracelet,
    alt: "Gold-tone bracelet with a heart-shaped centre detail displayed on a round jewellery stand.",
    href: "/collections/accessories",
  },
  {
    name: "Muslin Jabla & Shorts Set",
    description: "Soft muslin baby wear thoughtfully designed for little ones.",
    image: muslinJablaSet,
    alt: "White printed muslin baby jabla top and matching shorts laid flat.",
    href: "/collections/baby-wear",
  },
  {
    name: "Muslin Knot Frock",
    description: "A light and comfortable muslin frock for little everyday moments.",
    image: muslinKnotFrock,
    alt: "Smiling baby wearing a white printed muslin knot frock with a yellow headband.",
    href: "/collections/baby-wear",
  },
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
            <li key={product.name}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition-shadow hover:shadow-md">
                <a
                  href={product.href}
                  className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kc-primary)] focus-visible:ring-offset-2"
                >
                  <div className="aspect-square overflow-hidden bg-[var(--kc-background)]">
                    <img
                      src={product.image}
                      alt={product.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                </a>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-base font-semibold text-[var(--kc-primary)]">
                    {product.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[var(--kc-muted)]">
                    {product.description}
                  </p>

                  <div className="mt-auto pt-5">
                    <a
                      href={product.href}
                      className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--kc-primary)] px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kc-primary)] focus-visible:ring-offset-2"
                    >
                      Explore Product
                    </a>
                  </div>
                </div>
              </article>
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
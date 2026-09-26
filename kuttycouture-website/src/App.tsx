import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Hero } from "./components/sections/Hero";
import { ShopByCategory } from "./components/sections/ShopByCategory";
import {FeaturedProducts} from "./components/sections/FeaturedProducts";
import { AboutKuttyCouture } from "./components/sections/AboutKuttyCouture";
import { ProductCard } from "./components/products/ProductCard";
import {
  ProductTypeFilter,
  type ProductTypeFilterOption,
} from "./components/products/ProductTypeFilter";
import { ProductDetailPage } from "./components/products/ProductDetailPage";
import { CareGuidePage } from "./pages/CareGuidePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { products } from "./data/products";
import type { Product } from "./types/product";
import { formatProductType } from "./utils/productType";

function HomePage() {
   return (
    <>
      <Hero />
      <ShopByCategory />
      <FeaturedProducts />
      <AboutKuttyCouture />
    </>
  );
}


type CollectionsPageProps = {
  heading?: string;
  description?: string;
  filterProducts?: (product: Product) => boolean;
  filterLabel?: string;
};

type CollectionFilter = ProductTypeFilterOption & {
  matches: (product: Product) => boolean;
};

function isMuslinProduct(product: Product): boolean {
  return product.fabric?.toLowerCase() === "muslin";
}

function CollectionsPage({
  heading = "Discover Something Beautiful",
  description = "Explore our carefully selected accessories and comfortable clothing for little ones.",
  filterProducts = () => true,
  filterLabel,
}: CollectionsPageProps) {
  const collectionProducts = products.filter(filterProducts);
  const productTypes = Array.from(
    new Set(collectionProducts.map((product) => product.productType)),
  );
  const muslinProductTypes = new Set(
    collectionProducts.filter(isMuslinProduct).map((product) => product.productType),
  );
  const filterOptions: CollectionFilter[] = productTypes
    .filter((productType) => {
      const productsOfType = collectionProducts.filter(
        (product) => product.productType === productType,
      );

      return productsOfType.some((product) => !isMuslinProduct(product));
    })
    .map((productType) => ({
      value: productType,
      label: formatProductType(productType),
      matches: (product) => product.productType === productType,
    }));

  if (muslinProductTypes.size > 0) {
    filterOptions.push({
      value: "muslin-cloths",
      label: "Muslin Cloths",
      matches: isMuslinProduct,
    });
  }

  const [selectedFilter, setSelectedFilter] = useState("all");
  const activeFilter = filterOptions.some((option) => option.value === selectedFilter)
    ? selectedFilter
      : "all";
  const selectedFilterOption = filterOptions.find(
    (option) => option.value === activeFilter,
  );
  const displayedProducts =
    activeFilter === "all"
      ? collectionProducts
      : collectionProducts.filter((product) => selectedFilterOption?.matches(product));
  const resultLabel = `${displayedProducts.length} ${
    displayedProducts.length === 1 ? "product" : "products"
  }`;

  return (
    <section
      aria-labelledby="collections-heading"
      className="px-6 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Page introduction */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-[0.18em] text-[var(--kc-primary)]">
            OUR COLLECTIONS
          </p>

          <h1
            id="collections-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-[var(--kc-text)] sm:text-4xl"
          >
            {heading}
          </h1>

          <p className="mt-4 text-base leading-7 text-[var(--kc-muted)] sm:text-lg">
            {description}
          </p>
        </div>

        <ProductTypeFilter
          options={filterOptions}
          selectedValue={activeFilter}
          onValueChange={setSelectedFilter}
          label={filterLabel}
        />

        <p className="mt-5 text-sm text-[var(--kc-muted)]">{resultLabel}</p>

        {/* Product grid */}
        {displayedProducts.length > 0 ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="mt-6 rounded-[var(--kc-radius-md)] border border-[var(--kc-border)] bg-[var(--kc-surface)] p-5 text-sm leading-6 text-[var(--kc-muted)]">
            No products are currently available for this selection.
          </p>
        )}
      </div>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collections" element={<CollectionsPage key="all" />} />
          <Route
            path="/collections/accessories"
            element={
              <CollectionsPage
                key="accessories"
                heading="Accessories"
                description="Explore our current accessories collection."
                filterProducts={(product) => product.category === "accessories"}
              />
            }
          />
          <Route
            path="/collections/baby-wear"
            element={
              <CollectionsPage
                key="baby-wear"
                heading="Baby Wear"
                description="Explore our current baby wear collection."
                filterLabel="Collection"
                filterProducts={(product) =>
                  product.category === "clothing" && product.audience?.includes("baby") === true
                }
              />
            }
          />
          <Route path="/products/:sku" element={<ProductDetailPage />} />
          <Route path="/care-guide" element={<CareGuidePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;

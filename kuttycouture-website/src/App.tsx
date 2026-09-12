import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Hero } from "./components/sections/Hero";
import { ShopByCategory } from "./components/sections/ShopByCategory";
import {FeaturedProducts} from "./components/sections/FeaturedProducts";
import { AboutKuttyCouture } from "./components/sections/AboutKuttyCouture";
import { ProductCard } from "./components/products/ProductCard";
import { ProductDetailPage } from "./components/products/ProductDetailPage";
import { CareGuidePage } from "./pages/CareGuidePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { products } from "./data/products";

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


function CollectionsPage() {
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
            Discover Something Beautiful
          </h1>

          <p className="mt-4 text-base leading-7 text-[var(--kc-muted)] sm:text-lg">
            Explore our carefully selected accessories and comfortable
            clothing for little ones.
          </p>
        </div>

        {/* Product grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return <>About KuttyCouture</>;
}

function ContactPage() {
  return <>Contact KuttyCouture</>;
}

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collections" element={<CollectionsPage />} />
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

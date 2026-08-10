import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Hero } from "./components/sections/Hero";
import { ShopByCategory } from "./components/sections/ShopByCategory";
import {FeaturedProducts} from "./components/sections/FeaturedProducts";
import { AboutKuttyCouture } from "./components/sections/AboutKuttyCouture";

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
  return <>Collections</>;
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
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
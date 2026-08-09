import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";

function HomePage() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1200px]">
        <h1 className="text-3xl font-semibold text-[var(--kc-text)] sm:text-4xl">
          Welcome to KuttyCouture
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--kc-muted)]">
          Beautifully curated collections for little moments and memorable
          occasions.
        </p>
      </div>
    </section>
  );
}

function CollectionsPage() {
  return <div className="px-4 py-16">Collections</div>;
}

function AboutPage() {
  return <div className="px-4 py-16">About KuttyCouture</div>;
}

function ContactPage() {
  return <div className="px-4 py-16">Contact KuttyCouture</div>;
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
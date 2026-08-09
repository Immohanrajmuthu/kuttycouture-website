import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Hero } from "./components/sections/Hero";

function HomePage() {
  return <Hero />;
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
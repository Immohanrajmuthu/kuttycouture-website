import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

type MainLayoutProps = {
  children: React.ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen">
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
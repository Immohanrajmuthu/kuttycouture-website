import heroImage from "../../assets/hero/kuttycouture-hero.png";
import { getWhatsAppUrl } from "../../utils/productEnquiry";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="overflow-hidden border-b border-[var(--kc-border)] bg-[var(--kc-background)]"
    >
      {/* Mobile image */}
      <div className="block md:hidden">
        <img
          src={heroImage}
          alt="Two happy children surrounded by thoughtfully arranged children's clothing and accessories in a warm boutique setting."
          className="h-auto w-full"
        />
      </div>

      {/* Desktop / tablet hero */}
      <div className="relative hidden md:block">
        <img
          src={heroImage}
          alt="Two happy children surrounded by thoughtfully arranged children's clothing and accessories in a warm boutique setting."
          className="h-auto w-full"
        />

        <div className="absolute inset-0">
          <div className="mx-auto flex h-full w-full max-w-[1200px] items-center px-6 sm:px-8 lg:px-10">
            <HeroContent />
          </div>
        </div>
      </div>

      {/* Mobile content */}
      <div className="block px-6 py-10 sm:px-8 sm:py-12 md:hidden">
        <HeroContent />
      </div>
    </section>
  );
}

function HeroContent() {
  const whatsappUrl = getWhatsAppUrl(
    "Hi KuttyCouture! I would like to inquire about your products.",
  );

  return (
    <div className="max-w-[440px]">
      <h1
        id="hero-heading"
        className="text-3xl font-semibold leading-tight tracking-tight text-[var(--kc-text)] sm:text-4xl lg:text-5xl"
      >
        Little Moments,
        <span className="block">Beautifully Curated</span>
      </h1>

      <p className="mt-5 max-w-[400px] text-base leading-7 text-[var(--kc-muted)] sm:text-lg">
        Thoughtfully selected collections for little moments, beautiful
        memories, and everyday celebrations.
      </p>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <a
          href="/collections"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--kc-primary)] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kc-primary)] focus-visible:ring-offset-2"
        >
          Explore Collections
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--kc-primary)] bg-white px-6 py-3 text-sm font-medium text-[var(--kc-primary)] transition-colors hover:bg-[var(--kc-background)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kc-primary)] focus-visible:ring-offset-2"
        >
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}

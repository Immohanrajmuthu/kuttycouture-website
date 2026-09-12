import { Link } from "react-router-dom";
import { Container } from "../components/ui/Container";

export function NotFoundPage() {
  return (
    <section aria-labelledby="not-found-heading" className="py-14 sm:py-16 lg:py-20">
      <Container className="max-w-2xl">
        <h1
          id="not-found-heading"
          className="text-3xl font-semibold tracking-tight text-[var(--kc-text)] sm:text-4xl"
        >
          Page not found
        </h1>

        <p className="mt-4 text-base leading-7 text-[var(--kc-muted)] sm:text-lg">
          The page you are looking for could not be found.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--kc-primary)] px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kc-primary)] focus-visible:ring-offset-2"
          >
            Go to Home
          </Link>

          <Link
            to="/collections"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--kc-primary)] bg-[var(--kc-surface)] px-5 py-3 text-sm font-medium text-[var(--kc-primary)] transition-colors hover:bg-[var(--kc-background)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kc-primary)] focus-visible:ring-offset-2"
          >
            Browse Collections
          </Link>
        </div>
      </Container>
    </section>
  );
}

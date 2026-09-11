import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-[var(--kc-border)] bg-[var(--kc-surface)]">
      <div className="mx-auto w-full max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="rounded-sm text-xl font-semibold tracking-wide text-[var(--kc-text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kc-primary)] focus-visible:ring-offset-2"
            >
              KuttyCouture
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--kc-muted)]">
              Beautifully curated collections for little moments and
              memorable occasions.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--kc-text)]">
              Explore
            </h2>

            <nav aria-label="Footer navigation" className="mt-4">
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/collections"
                    className="rounded-sm text-sm text-[var(--kc-muted)] transition-colors hover:text-[var(--kc-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kc-primary)] focus-visible:ring-offset-2"
                  >
                    Collections
                  </Link>
                </li>

                <li>
                  <Link
                    to="/about"
                    className="rounded-sm text-sm text-[var(--kc-muted)] transition-colors hover:text-[var(--kc-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kc-primary)] focus-visible:ring-offset-2"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className="rounded-sm text-sm text-[var(--kc-muted)] transition-colors hover:text-[var(--kc-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kc-primary)] focus-visible:ring-offset-2"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--kc-text)]">
              Connect
            </h2>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="https://wa.me/918610971628?text=Hi%20KuttyCouture!%20I%20would%20like%20to%20inquire%20about%20your%20products."
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-sm text-sm text-[var(--kc-muted)] transition-colors hover:text-[var(--kc-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kc-primary)] focus-visible:ring-offset-2"
                >
                  WhatsApp
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/kuttycouture.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-sm text-sm text-[var(--kc-muted)] transition-colors hover:text-[var(--kc-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kc-primary)] focus-visible:ring-offset-2"
                >
                  Instagram
                </a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61575384851277"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-sm text-sm text-[var(--kc-muted)] transition-colors hover:text-[var(--kc-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kc-primary)] focus-visible:ring-offset-2"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-[var(--kc-border)] pt-6">
          <p className="text-center text-xs text-[var(--kc-muted)]">
            © {new Date().getFullYear()} KuttyCouture. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
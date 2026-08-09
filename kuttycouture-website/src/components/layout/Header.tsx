import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navigation = [
  { label: "Home", to: "/" },
  { label: "Collections", to: "/collections" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="border-b border-[var(--kc-border)] bg-[var(--kc-surface)]">
      <div className="mx-auto flex min-h-16 w-full min-w-0 max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link
          to="/"
          onClick={closeMenu}
          className="min-w-0 shrink truncate rounded-sm text-xl font-semibold tracking-wide text-[var(--kc-text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kc-primary)] focus-visible:ring-offset-2"
          aria-label="KuttyCouture home"
        >
          KuttyCouture
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:block"
        >
          <ul className="flex items-center gap-6">
            {navigation.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      "rounded-sm text-sm font-medium transition-colors",
                      "focus:outline-none focus-visible:ring-2",
                      "focus-visible:ring-[var(--kc-primary)]",
                      "focus-visible:ring-offset-2",
                      isActive
                        ? "text-[var(--kc-primary)]"
                        : "text-[var(--kc-text)] hover:text-[var(--kc-primary)]",
                    ].join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop WhatsApp CTA */}
        <a
          href="https://wa.me/918610971628?text=Hi%20KuttyCouture!%20I%20would%20like%20to%20inquire%20about%20your%20products."
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-[var(--kc-primary)] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kc-primary)] focus-visible:ring-offset-2 md:inline-flex"
        >
          Chat with us
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-[var(--kc-text)] transition-colors hover:bg-[var(--kc-background)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kc-primary)] focus-visible:ring-offset-2 md:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? (
            <X aria-hidden="true" size={24} />
          ) : (
            <Menu aria-hidden="true" size={24} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-[var(--kc-border)] bg-[var(--kc-surface)] md:hidden"
        >
          <ul className="mx-auto w-full max-w-[1200px] px-4 py-4 sm:px-6">
            {navigation.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    [
                      "block rounded-md px-3 py-3 text-base font-medium",
                      "focus:outline-none focus-visible:ring-2",
                      "focus-visible:ring-[var(--kc-primary)]",
                      isActive
                        ? "bg-[var(--kc-background)] text-[var(--kc-primary)]"
                        : "text-[var(--kc-text)] hover:bg-[var(--kc-background)]",
                    ].join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}

            <li className="mt-3 border-t border-[var(--kc-border)] pt-3">
              <a
                href="https://wa.me/918610971628?text=Hi%20KuttyCouture!%20I%20would%20like%20to%20inquire%20about%20your%20products."
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="flex min-h-11 items-center justify-center rounded-full bg-[var(--kc-primary)] px-4 py-3 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kc-primary)] focus-visible:ring-offset-2"
              >
                Chat with us
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
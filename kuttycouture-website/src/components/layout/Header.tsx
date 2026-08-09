import { Link, NavLink } from "react-router-dom";

const navigation = [
  { label: "Home", to: "/" },
  { label: "Collections", to: "/collections" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  return (
    <header className="border-b border-[var(--kc-border)] bg-[var(--kc-surface)]">
      <div className="mx-auto flex min-h-16 w-full max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link
          to="/"
          className="rounded-sm text-xl font-semibold tracking-wide text-[var(--kc-text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kc-primary)] focus-visible:ring-offset-2"
          aria-label="KuttyCouture home"
        >
          KuttyCouture
        </Link>

        {/* Navigation */}
        <nav aria-label="Primary navigation">
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

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/918610971628?text=Hi%20KuttyCouture!%20I%20would%20like%20to%20inquire%20about%20your%20products."
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-[var(--kc-primary)] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kc-primary)] focus-visible:ring-offset-2"
        >
          Chat with us
        </a>
      </div>
    </header>
  );
}
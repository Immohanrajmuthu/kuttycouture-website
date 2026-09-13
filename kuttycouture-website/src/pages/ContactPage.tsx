import { Container } from "../components/ui/Container";
import { getWhatsAppUrl } from "../utils/productEnquiry";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/kuttycouture.in/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61575384851277",
  },
];

export function ContactPage() {
  const whatsappUrl = getWhatsAppUrl(
    "Hi KuttyCouture, I’d like to know more about your products.",
  );

  return (
    <section aria-labelledby="contact-heading" className="py-14 sm:py-16 lg:py-20">
      <Container className="max-w-3xl">
        <p className="text-sm font-medium tracking-[0.18em] text-[var(--kc-primary)]">
          CONTACT KUTTYCOUTURE
        </p>

        <h1
          id="contact-heading"
          className="mt-3 text-3xl font-semibold tracking-tight text-[var(--kc-text)] sm:text-4xl"
        >
          We’d Love to Hear From You
        </h1>

        <div className="mt-5 space-y-3 text-base leading-7 text-[var(--kc-muted)] sm:text-lg">
          <p>
            Have a question about a product, size or availability? Or found something you
            love and want to know more?
          </p>
          <p>I&apos;m happy to help.</p>
        </div>

        <section
          aria-labelledby="contact-whatsapp-heading"
          className="mt-10 rounded-[var(--kc-radius-lg)] border border-[var(--kc-border)] bg-[var(--kc-surface)] p-6 sm:mt-12 sm:p-8"
        >
          <h2
            id="contact-whatsapp-heading"
            className="text-xl font-semibold text-[var(--kc-text)] sm:text-2xl"
          >
            Chat With Us on WhatsApp
          </h2>

          <div className="mt-4 space-y-4 text-base leading-7 text-[var(--kc-muted)]">
            <p>WhatsApp is the easiest way to reach KuttyCouture.</p>
            <p>
              Whether you&apos;d like to enquire about a product, check availability or ask a
              question before deciding, feel free to message us.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--kc-primary)] px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kc-primary)] focus-visible:ring-offset-2"
          >
            Chat with us on WhatsApp
          </a>
        </section>

        <section aria-labelledby="contact-social-heading" className="mt-10 sm:mt-12">
          <h2
            id="contact-social-heading"
            className="text-xl font-semibold text-[var(--kc-text)] sm:text-2xl"
          >
            Follow KuttyCouture
          </h2>

          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
            {socialLinks.map((socialLink) => (
              <li key={socialLink.label}>
                <a
                  href={socialLink.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-sm text-sm font-medium text-[var(--kc-primary)] transition-colors hover:text-[var(--kc-text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kc-primary)] focus-visible:ring-offset-2"
                >
                  {socialLink.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-10 text-base font-medium text-[var(--kc-text)] sm:mt-12">
          Thank you for supporting our growing small business.
        </p>
      </Container>
    </section>
  );
}

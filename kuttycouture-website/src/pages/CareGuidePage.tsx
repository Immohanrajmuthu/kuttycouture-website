import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "../components/ui/Container";

const careSections = [
  {
    id: "jewellery",
    title: "Jewellery Care",
    guidance: [
      "Keep jewellery away from perfumes, sprays, lotions and harsh chemicals.",
      "Remove it before bathing or swimming.",
      "Wipe gently with a soft, dry cloth after use.",
      "Store pieces dry and separately to help reduce scratches and tangling.",
    ],
  },
  {
    id: "baby-wear",
    title: "Muslin & Baby Wear Care",
    guidance: [
      "Choose a gentle wash with mild detergent.",
      "Avoid harsh bleach and strong cleaning products.",
      "Wash with similar or light colours where appropriate.",
      "Dry naturally when possible and avoid excessive heat.",
    ],
  },
  {
    id: "clothing",
    title: "Clothing Care",
    guidance: [
      "Use fabric-appropriate gentle washing.",
      "Choose mild detergent and avoid harsh chemicals.",
      "Dry with care and avoid excessive heat where possible.",
      "Store garments clean and dry between wears.",
    ],
  },
];

export function CareGuidePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      return;
    }

    const target = document.getElementById(decodeURIComponent(hash.slice(1)));
    target?.scrollIntoView({ block: "start" });
  }, [hash]);

  return (
    <section aria-labelledby="care-guide-heading" className="py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-[0.18em] text-[var(--kc-primary)]">
            KUTTYCOUTURE CARE GUIDE
          </p>

          <h1
            id="care-guide-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-[var(--kc-text)] sm:text-4xl"
          >
            Care for your favourites
          </h1>

          <p className="mt-4 text-base leading-7 text-[var(--kc-muted)] sm:text-lg">
            A little thoughtful care helps keep the pieces you love ready for
            everyday moments and special occasions.
          </p>
        </div>

        <div className="mt-10 space-y-6 sm:mt-12 sm:space-y-8">
          {careSections.map((careSection) => (
            <section
              key={careSection.id}
              id={careSection.id}
              aria-labelledby={`${careSection.id}-heading`}
              className="scroll-mt-8 rounded-[var(--kc-radius-lg)] border border-[var(--kc-border)] bg-[var(--kc-surface)] p-6 sm:p-8"
            >
              <h2
                id={`${careSection.id}-heading`}
                className="text-xl font-semibold text-[var(--kc-text)] sm:text-2xl"
              >
                {careSection.title}
              </h2>

              <ul className="mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-[var(--kc-muted)]">
                {careSection.guidance.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Container>
    </section>
  );
}

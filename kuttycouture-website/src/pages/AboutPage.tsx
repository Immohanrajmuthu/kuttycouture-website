import founderStoryImage from "../assets/about/kuttycouture-story.jpg";
import { Container } from "../components/ui/Container";

const principles = [
  {
    title: "Carefully Chosen",
    paragraphs: [
      "I don't want KuttyCouture to simply have more products. I want it to have products that I would feel happy recommending to someone personally.",
      "From accessories to clothing, every new addition is selected with attention to its design, quality, usefulness and value.",
    ],
  },
  {
    title: "Always Learning",
    paragraphs: [
      "KuttyCouture is still growing, and so am I.",
      "Every new collection, every conversation with a customer and even every mistake teaches me something. I use those experiences to make better choices and improve what KuttyCouture offers.",
    ],
  },
  {
    title: "Trust Comes First",
    paragraphs: [
      "For me, a sale isn't more important than a customer's trust.",
      "If something isn't right, I want customers to feel comfortable telling me. I will always try to listen, understand and help wherever I reasonably can.",
    ],
  },
];

export function AboutPage() {
  return (
    <section aria-labelledby="about-heading" className="py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium tracking-[0.18em] text-[var(--kc-primary)]">
            ABOUT KUTTYCOUTURE
          </p>

          <h1
            id="about-heading"
            className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[var(--kc-text)] sm:text-4xl"
          >
            More Than a Store. A Dream I’m Building.
          </h1>
        </div>

        <div className="mt-10 grid items-start gap-8 lg:mt-12 lg:grid-cols-2 lg:gap-12">
          <div className="overflow-hidden rounded-[var(--kc-radius-lg)] border border-[var(--kc-border)] bg-[var(--kc-surface)]">
            <img
              src={founderStoryImage}
              alt="KuttyCouture founder sharing a joyful moment with her young daughter."
              className="h-auto w-full"
            />
          </div>

          <div className="space-y-5 text-base leading-8 text-[var(--kc-muted)] sm:text-lg">
            <p>KuttyCouture began with a simple dream — to build something of my own.</p>

            <p>
              After spending years caring for my family as a full-time homemaker, I wanted
              to create an identity for myself, support my family and turn my interest in
              beautiful, thoughtfully chosen products into something meaningful.
            </p>

            <p>
              Starting a business has been a learning journey. I spend time finding products
              and suppliers that I feel confident offering to my customers. I may not get
              everything perfect every time, but one thing matters deeply to me — the trust
              of the people who choose to shop with KuttyCouture.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl sm:mt-16">
          {principles.map((principle, index) => (
            <section
              key={principle.title}
              aria-labelledby={`about-${index}-heading`}
              className="border-t border-[var(--kc-border)] py-8 first:pt-0 sm:py-10"
            >
              <h2
                id={`about-${index}-heading`}
                className="text-xl font-semibold text-[var(--kc-text)] sm:text-2xl"
              >
                {principle.title}
              </h2>

              <div className="mt-4 space-y-4 text-base leading-7 text-[var(--kc-muted)] sm:text-lg sm:leading-8">
                {principle.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}

          <section
            aria-labelledby="about-thank-you-heading"
            className="border-t border-[var(--kc-border)] pt-8 sm:pt-10"
          >
            <h2
              id="about-thank-you-heading"
              className="text-xl font-semibold text-[var(--kc-text)] sm:text-2xl"
            >
              Thank You for Being Part of My Journey
            </h2>

            <div className="mt-4 space-y-4 text-base leading-7 text-[var(--kc-muted)] sm:text-lg sm:leading-8">
              <p>
                Every visit, enquiry, order and recommendation means something to a small
                business like mine.
              </p>

              <p>
                What started as a personal dream is slowly becoming something real — and
                I&apos;m grateful to everyone who chooses to be part of that journey.
              </p>

              <p className="font-medium text-[var(--kc-text)]">Welcome to KuttyCouture.</p>
            </div>
          </section>
        </div>
      </Container>
    </section>
  );
}

import founderStoryImage from "../../assets/about/kuttycouture-story.webp";

const values = [
  {
    title: "Carefully Chosen",
    description:
      "We take time to find products we'd be happy to offer to our customers.",
  },
  {
    title: "Customer First",
    description:
      "Your feedback matters to us, and we take every concern seriously.",
  },
  {
    title: "Growing With You",
    description:
      "We're a small business, learning, improving and growing every day.",
  },
];

export function AboutKuttyCouture() {
  return (
    <section
      aria-labelledby="about-kuttycouture-heading"
      className="border-b border-[var(--kc-border)] bg-[var(--kc-background)] px-6 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Section introduction */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-[0.18em] text-[var(--kc-primary)]">
            THE STORY BEHIND KUTTYCOUTURE
          </p>

          <h2
            id="about-kuttycouture-heading"
            className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[var(--kc-text)] sm:text-4xl"
          >
            More Than a Store.
            <span className="block">A Dream I'm Building.</span>
          </h2>
        </div>

        {/* Story */}
        <div className="mt-10 grid items-center gap-8 lg:mt-12 lg:grid-cols-2 lg:gap-12">
          {/* Original photograph */}
          <div className="overflow-hidden rounded-[var(--kc-radius-lg)] border border-[var(--kc-border)] bg-[var(--kc-surface)]">
            <img
              src={founderStoryImage}
              alt="KuttyCouture founder sharing a joyful moment with her young daughter."
              className="h-auto w-full"
              loading="lazy"
            />
          </div>

          {/* Story content */}
          <div className="lg:px-2">
            <p className="text-base leading-8 text-[var(--kc-muted)] sm:text-lg">
              After spending years caring for my family, I wanted to start
              working again and create an identity of my own.
            </p>

             <p className="mt-5 text-base leading-8 text-[var(--kc-muted)] sm:text-lg">
              I could have simply looked for a job. But somewhere in my heart, 
              I wanted to build something of my own - even if I had to start small.
            </p>

            <p className="mt-5 text-base leading-8 text-[var(--kc-muted)] sm:text-lg">
              That's how KuttyCouture began.
            </p>

            <p className="mt-5 text-base leading-8 text-[var(--kc-muted)] sm:text-lg">
              I knew I still had a lot to learn. So I started by looking carefully for good products, 
              reliable sources and things I could genuinely feel proud of offering.
            </p>

            <p className="mt-5 text-base leading-8 text-[var(--kc-muted)] sm:text-lg">
              For me, earning money is only one part of the journey. Building
              trust with my customers matters more.
            </p>

            <p className="mt-5 text-base leading-8 text-[var(--kc-muted)] sm:text-lg">
              If something isn't right, I want to hear about it, address it
              and make it better.
            </p>

            <p className="mt-5 text-base font-medium leading-8 text-[var(--kc-text)] sm:text-lg">
              KuttyCouture is my small beginning — built with care, commitment
              and hope.
            </p>

            <p className="mt-6 text-sm font-medium text-[var(--kc-primary)]">
              — The woman behind KuttyCouture
            </p>
          </div>
        </div>

        {/* What matters to us */}
        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-3 sm:gap-6">
          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-[var(--kc-radius-lg)] border border-[var(--kc-border)] bg-[var(--kc-surface)] p-6 sm:p-7"
            >
              <h3 className="text-base font-semibold text-[var(--kc-text)] sm:text-lg">
                {value.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[var(--kc-muted)] sm:text-base">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <section
      className="relative isolate py-24 md:py-36 text-center grain bg-background transition-colors duration-700"
      style={{
        backgroundImage: "var(--hero-gradient)",
        backgroundRepeat: "var(--hero-repeat)",
        backgroundSize: "var(--hero-size)",
        backgroundPosition: "var(--hero-position)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-5xl font-bold tracking-tight text-foreground dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]">
          Human-centred web experiences.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
          A tiny showcase of modern frontend craft with Next.js, TypeScript, and Tailwind.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="/projects"
            className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium
                       bg-primary text-primary-foreground shadow-sm hover:brightness-110
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 transition"
          >
            View Projects
          </a>

          <a
            href="/brief"
            className="inline-flex items-center justify-center px-px py-px rounded-lg
                       bg-linear-to-r from-[oklch(var(--primary))] via-[oklch(var(--ring))] to-[oklch(var(--primary))]
                       hover:brightness-110 transition"
          >
            <span className="px-4 py-2.5 rounded-[calc(var(--radius)+2px)] bg-background text-foreground">
              Read the Brief
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

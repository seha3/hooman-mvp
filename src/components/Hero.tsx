import { Button } from "@/components/Button";

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
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight dark:drop-shadow-[0_0_20px_rgba(255,255,255,0.06)]">
          Human-centred web experiences.
        </h1>

        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          A tiny showcase of modern frontend craft with Next.js, TypeScript, and Tailwind.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
          <Button href="/projects" className="px-6 py-3 text-sm">
            View Projects
          </Button>

          <Button
            href="/brief"
            variant="outline"
            className="relative px-6 py-3 text-sm overflow-hidden"
          >
            <span className="relative z-10">Read the Brief</span>
            <span
              className="absolute inset-0 bg-linear-to-r from-[oklch(var(--primary))] via-[oklch(var(--ring))] to-[oklch(var(--primary))]
                         opacity-25 mix-blend-overlay"
            />
          </Button>
        </div>
      </div>
    </section>
  );
}

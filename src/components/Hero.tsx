export default function Hero() {
  return (
    <section className="py-24 md:py-36 text-center
        bg-linear-to-b from-[oklch(var(--muted))] to-[oklch(var(--card))]
        dark:from-[oklch(var(--sidebar))] dark:to-[oklch(var(--background))]">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight text-foreground">
            Human-centred web experiences.
        </h1>
        <p className="text-lg text-muted-foreground max-w-prose mx-auto">
            A tiny showcase of modern frontend craft with Next.js, TypeScript, and Tailwind.
        </p>
    </section>
  );
}

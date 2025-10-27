export default function FeaturedProject() {
  return (
    <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="mb-10 flex items-center gap-3">
            <span className="px-2 py-1 rounded bg-muted text-foreground/80 text-xs">Featured</span>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
                Creative Brief Dashboard (teaser)
            </h2>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div
                className="relative aspect-video border-b border-border bg-background"
                aria-hidden
            >
                <div className="absolute inset-0 rounded-xl pointer-events-none
                                bg-[radial-gradient(1200px_200px_at_80%_-50%,_oklch(var(--primary)/.12),_transparent_70%)]" />
            </div>

            <div className="p-5 flex items-center justify-between gap-4 flex-wrap">
                <h3 className="text-lg text-foreground">A compact interface to manage briefs and handoffs.</h3>
                <div className="flex gap-2 text-xs">
                <span className="px-2 py-1 rounded bg-muted text-foreground/80">React</span>
                <span className="px-2 py-1 rounded bg-muted text-foreground/80">TypeScript</span>
                <span className="px-2 py-1 rounded bg-muted text-foreground/80">Next.js</span>
                <span className="px-2 py-1 rounded bg-muted text-foreground/80">Tailwind</span>
                </div>
                <a href="/projects" className="px-3 py-2 rounded-md bg-primary text-primary-foreground btn-shine">
                Explore Project
                </a>
            </div>
            </div>
        </div>
    </section>

  );
}

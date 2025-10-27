export default function FeaturedProject() {
  return (
    <section id="featured" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 text-center md:text-left">
        <h2 className="text-3xl font-semibold text-foreground mb-6">
          Featured Project
        </h2>
        <div className="bg-card border border-neutral-200 rounded-xl p-8 shadow-sm">
          <h3 className="text-xl font-medium mb-2">Creative Brief Generator</h3>
          <p className="text-muted-foreground mb-4">
            A tool that helps creative teams quickly generate project briefs using AI. 
            Built with Next.js, TypeScript, Tailwind, and shadcn/ui.
          </p>
          <a
            href="#"
            className="inline-block mt-2 text-blue-600 hover:underline"
          >
            View project →
          </a>
        </div>
      </div>
    </section>
  );
}

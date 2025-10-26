export default function FeaturedProject() {
  return (
    <section id="featured" className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6 text-center md:text-left">
        <h2 className="text-3xl font-semibold text-neutral-900 mb-6">
          Featured Project
        </h2>
        <div className="bg-white border border-neutral-200 rounded-xl p-8 shadow-sm">
          <h3 className="text-xl font-medium mb-2">Creative Brief Generator</h3>
          <p className="text-neutral-600 mb-4">
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

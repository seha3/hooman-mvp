import { Code2, Sparkles, Gauge, Accessibility } from "lucide-react";

type Item = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
};

const items: Item[] = [
  {
    icon: Code2,
    title: "Frontend Development",
    desc: "Building fast, accessible, and visually refined interfaces with React, Next.js, and TypeScript.",
  },
  {
    icon: Sparkles,
    title: "UI Engineering",
    desc: "Translating design systems into scalable, type-safe, and pixel-perfect components with Tailwind CSS.",
  },
  {
    icon: Gauge,
    title: "Performance & DX",
    desc: "Focusing on Core Web Vitals, seamless animations, and smooth user experiences.",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    desc: "Designing inclusive experiences with proper semantics, focus management, and ARIA support.",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="mb-10 flex items-center gap-3">
          <span className="px-2 py-1 rounded bg-muted text-foreground/80 text-xs">
            Expertise
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
            What I Do Best
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group h-full rounded-2xl border border-border bg-card/80 backdrop-blur
                         shadow-[0_1px_0_0_oklch(var(--border))]
                         transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="p-2 rounded-lg bg-muted border border-border group-hover:border-[oklch(var(--primary))] transition">
                    <Icon className="w-5 h-5 text-foreground" aria-hidden />
                  </span>
                  <h3 className="text-base text-foreground font-medium">
                    {title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

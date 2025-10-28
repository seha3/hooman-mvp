import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="mt-16 border-t-4 border-sidebar-border bg-sidebar text-sidebar-foreground"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10
                   grid gap-8 md:grid-cols-2 items-center">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-extrabold tracking-tight">Silvia · Frontend</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Human-centred web experiences — MVP
          </p>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-3 md:justify-end">
          <a
            href="https://github.com/seha3"
            target="_blank" rel="noreferrer"
            aria-label="GitHub"
            className="relative flex items-center justify-center w-9 h-9 rounded-xl border-4 border-border bg-card brutal-shadow
                       text-foreground hover:bg-accent hover:text-accent-foreground transition-all
                       focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/60"
          >
            <span className="absolute inset-0 opacity-[0.07] rounded-xl bg-[oklch(var(--ring))]" aria-hidden="true" />
            <Github size={18} strokeWidth={2.2} />
          </a>

          <a
            href="https://www.linkedin.com/in/seha3/"
            target="_blank" rel="noreferrer"
            aria-label="LinkedIn"
            className="relative flex items-center justify-center w-9 h-9 rounded-xl border-4 border-border bg-card brutal-shadow
                       text-foreground hover:bg-accent hover:text-accent-foreground transition-all
                       focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/60"
          >
            <span className="absolute inset-0 opacity-[0.07] rounded-xl bg-[oklch(var(--ring))]" aria-hidden="true" />
            <Linkedin size={18} strokeWidth={2.2} />
          </a>

          <a
            href="mailto:silviaherrera33@gmail.com"
            aria-label="Email"
            className="relative flex items-center justify-center w-9 h-9 rounded-xl border-4 border-border bg-card brutal-shadow
                       text-foreground hover:bg-accent hover:text-accent-foreground transition-all
                       focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/60"
          >
            <span className="absolute inset-0 opacity-[0.07] rounded-xl bg-[oklch(var(--ring))]" aria-hidden="true" />
            <Mail size={18} strokeWidth={2.2} />
          </a>
        </div>
      </div>

      <div className="border-t-4 border-sidebar-border/60">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 text-xs text-muted-foreground flex items-center justify-between">
          <span>© {year} Silvia Herrera — All rights reserved.</span>
          <span className="hidden sm:inline">Made with Next.js · Tailwind</span>
        </div>
      </div>
    </footer>
  );
}

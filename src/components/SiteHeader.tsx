import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function SiteHeader() {
  return (
    <header
      id="header"
      className="sticky top-0 z-40 bg-background/70 backdrop-blur border-b border-border"
    >
      <nav className="max-w-6xl mx-auto px-4 md:px-8 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          Silvia · Frontend
        </Link>

        <div className="flex items-center gap-6 text-sm text-foreground">
          <Link
            href="/projects"
            className="hover:text-primary transition-colors hover:underline"
          >
            Projects
          </Link>
          <Link
            href="/brief"
            className="hover:text-primary transition-colors hover:underline"
          >
            Brief
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

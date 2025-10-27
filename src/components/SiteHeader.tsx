"use client"

import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
const ThemeToggle = dynamic(() => import("@/components/ThemeToggle"), { ssr: false });

export default function SiteHeader() {
  const pathname = usePathname();

  const linkBase =
    "relative rounded-xl px-3 py-1.5 font-semibold transition-colors outline-none " +
    "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground " +
    "focus-visible:ring-2 focus-visible:ring-sidebar-ring/60";

  const isActive = (href: string) => pathname === href;

  return (
    <header
      id="header"
      className="sticky top-0 z-40 border-b-4 border-sidebar-border bg-sidebar/80 backdrop-blur text-sidebar-foreground before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-[oklch(var(--border))]"
    >
      <nav className="max-w-6xl mx-auto px-4 md:px-8 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="rounded-xl px-2 py-1 font-extrabold tracking-tight hover:text-sidebar-primary focus-visible:ring-2 focus-visible:ring-sidebar-ring/60"
        >
          Silvia · Frontend
        </Link>

        <div className="flex items-center gap-2 text-sm">
          <Link
            href="/projects"
            className={`${linkBase} ${isActive("/projects") ? "text-sidebar-primary" : ""}`}
          >
            Projects
            {isActive("/projects") && (
              <span className="pointer-events-none absolute left-0 right-0 -bottom-1 h-1.5 rounded-full bg-sidebar-primary/90" />
            )}
          </Link>

          <Link
            href="/brief"
            className={`${linkBase} ${isActive("/brief") ? "text-sidebar-primary" : ""}`}
          >
            Brief
            {isActive("/brief") && (
              <span className="pointer-events-none absolute left-0 right-0 -bottom-1 h-1.5 rounded-full bg-sidebar-primary/90" />
            )}
          </Link>

          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}

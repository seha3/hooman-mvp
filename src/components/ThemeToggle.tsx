"use client";

import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const handleClick = () => {
    const root = document.documentElement;
    const isDark = root.classList.contains("dark");
    const next = isDark ? "light" : "dark";
    root.classList.toggle("dark", next === "dark");
    try { localStorage.setItem("theme", next); } catch {}
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Toggle theme"
      className="relative flex items-center justify-center w-9 h-9 rounded-xl border-4 border-border bg-card brutal-shadow
                 text-foreground hover:bg-accent hover:text-accent-foreground transition-all
                 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/60"
    >
      <span
        className="absolute inset-0 opacity-[0.07] rounded-xl bg-[oklch(var(--ring))] pointer-events-none"
        aria-hidden="true"
      />
      <Sun size={18} strokeWidth={2.2} className="inline dark:hidden" />
      <Moon size={18} strokeWidth={2.2} className="hidden dark:inline" />
    </button>
  );
}

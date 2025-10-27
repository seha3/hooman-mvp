"use client";

import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const toggle = () => {
    const html = document.documentElement;
    const nextIsDark = !html.classList.contains("dark");
    html.classList.toggle("dark", nextIsDark);
    localStorage.setItem("theme", nextIsDark ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      title="Toggle theme"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 bg-card/70 text-foreground/90 hover:bg-card transition dark:border-neutral-700 dark:bg-neutral-900/60"
    >
      <Sun className="h-4 w-4 hidden dark:block" />
      <Moon className="h-4 w-4 block dark:hidden" />
    </button>
  );
}

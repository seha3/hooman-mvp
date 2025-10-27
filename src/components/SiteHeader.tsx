import Link from "next/link";

export default function SiteHeader() {
  return (
    <header id="header" className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-neutral-200">
      <nav className="max-w-6xl mx-auto px-4 md:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">Silvia · Frontend</Link>
        <div className="flex gap-6 text-sm text-neutral-700">
          <Link href="/projects" className="hover:underline">Projects</Link>
          <Link href="/brief" className="hover:underline">Brief</Link>
        </div>
      </nav>
    </header>
  );
}

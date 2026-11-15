"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dna, Menu, X } from "lucide-react";
import { grad } from "./ui";

const links = [
  ["/", "Home"],
  ["/about", "Guide"],
  ["/units", "Units"],
  ["/chatai", "AI Chat"],
  ["/quize", "Quizzes"],
  ["/Preparer", "Creator"],
  ["/supervisor", "Supervision"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const active = (h) => (h === "/" ? path === "/" : path.startsWith(h));
  const item = (h) =>
    `rounded-lg px-3 py-2 text-sm transition ${active(h) ? "bg-white/10 text-cyan-300" : "text-slate-300 hover:bg-white/5 hover:text-white"}`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 font-bold text-white">
          <span className={`${grad} flex h-9 w-9 items-center justify-center rounded-lg shadow-lg shadow-cyan-500/30`}>
            <Dna className="h-5 w-5" />
          </span>
          BioLab
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map(([h, l]) => (
            <Link key={h} href={h} className={item(h)}>{l}</Link>
          ))}
        </nav>
        <button className="rounded-lg p-2 text-slate-200 hover:bg-white/10 lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 px-4 py-3 lg:hidden">
          {links.map(([h, l]) => (
            <Link key={h} href={h} className={item(h)} onClick={() => setOpen(false)}>{l}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}

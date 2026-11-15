import Link from "next/link";
import { Dna } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-2/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-slate-400 sm:flex-row sm:px-6">
        <p className="flex items-center gap-2"><Dna className="h-4 w-4 text-cyan-400" /> BioLab: Support & Movement in Plants and Humans</p>
        <p className="flex gap-4">
          <Link href="/about" className="hover:text-cyan-300">Guide</Link>
          <Link href="/Preparer" className="hover:text-cyan-300">Creator</Link>
          <Link href="/supervisor" className="hover:text-cyan-300">Supervision</Link>
        </p>
        <p>© {new Date().getFullYear()} Ain Shams University</p>
      </div>
    </footer>
  );
}

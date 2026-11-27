import Link from "next/link";
import { FlaskConical } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-2/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-slate-400 sm:flex-row sm:px-6">
        <p className="flex items-center gap-2"><FlaskConical className="h-4 w-4 text-cyan-400" /> معمل التاريخ: الصف أولى أعدادي</p>
        <p className="flex gap-4">
          <Link href="/about" className="hover:text-cyan-300">دليل المنصة</Link>
          <Link href="/Preparer" className="hover:text-cyan-300">المُعِدّة</Link>
          <Link href="/supervisor" className="hover:text-cyan-300">الإشراف</Link>
        </p>
        <p>© {new Date().getFullYear()} جامعة عين شمس</p>
      </div>
    </footer>
  );
}
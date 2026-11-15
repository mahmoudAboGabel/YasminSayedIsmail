import Link from "next/link";
import { BookOpen, Bot, ListChecks, Sparkles, ArrowRight } from "lucide-react";
import { Glass, btn, btnGhost, gradText } from "@/components/ui";

const cards = [
  { href: "/units", Icon: BookOpen, title: "Lessons", text: "Four lessons with objectives, pre-tests and clear explanations." },
  { href: "/chatai", Icon: Bot, title: "AI Chat", text: "Ask questions and get study help from the AI assistant." },
  { href: "/quize", Icon: ListChecks, title: "Quizzes", text: "Check your understanding with instant feedback and scores." },
];

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-6 py-16 text-center backdrop-blur-md sm:py-24">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <span className="relative inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm text-cyan-200">
          <Sparkles className="h-4 w-4" /> Welcome, future biologist
        </span>
        <h1 className="relative mx-auto mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
          Discover how living things <span className={gradText}>stand and move</span>
        </h1>
        <p className="relative mx-auto mt-5 max-w-2xl text-lg text-slate-300">
          An interactive biology platform that takes you from plant cell walls to the sliding filaments inside your muscles.
        </p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/units" className={btn}>Start learning <ArrowRight className="h-4 w-4" /></Link>
          <Link href="/about" className={btnGhost}>How it works</Link>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-3" aria-label="Quick navigation">
        {cards.map(({ href, Icon, title, text }) => (
          <Link key={href} href={href} className="group backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 transition hover:border-cyan-400/40 hover:bg-white/10">
            <Icon className="h-8 w-8 text-cyan-300" />
            <h2 className="mt-4 text-xl font-bold text-white">{title}</h2>
            <p className="mt-2 text-sm text-slate-400">{text}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm text-cyan-300 transition group-hover:gap-2">Open <ArrowRight className="h-4 w-4" /></span>
          </Link>
        ))}
      </section>

      <Glass className="text-center sm:p-10">
        <h2 className="text-2xl font-bold text-white">Our mission</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-300">
          Help every student master <strong className="text-cyan-300">Support and Movement in Plants and Humans</strong>: from turgor pressure and lignin to bones, muscles and the energy that powers them.
        </p>
        <Link href="/units" className={`${btn} mt-6`}>Explore the unit</Link>
      </Glass>
    </div>
  );
}

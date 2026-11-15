import Link from "next/link";
import { ListChecks, ArrowRight } from "lucide-react";
import { PageHero, icons } from "@/components/ui";
import { lessons } from "@/data/lessons";

export const metadata = { title: "Final Quizzes | BioLab" };

export default function Quizzes() {
  return (
    <div>
      <PageHero Icon={ListChecks} title="Final quizzes" subtitle="Choose a lesson quiz. You get feedback after every answer and a score at the end." />
      <div className="grid gap-5 sm:grid-cols-2">
        {lessons.map((l) => {
          const Icon = icons[l.icon];
          return (
            <Link key={l.id} href={`/quize/lesson${l.id}`} className="group backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 transition hover:border-purple-400/40 hover:bg-white/10">
              <Icon className="h-7 w-7 text-purple-300" />
              <h2 className="mt-3 text-lg font-bold text-white">Lesson {l.id} quiz</h2>
              <p className="mt-1 text-sm text-slate-400">{l.title} · {l.quiz.length} questions</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm text-cyan-300 transition group-hover:gap-2">Start quiz <ArrowRight className="h-4 w-4" /></span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

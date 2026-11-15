import Link from "next/link";
import { ArrowLeft, ArrowRight, ClipboardCheck, Target, BookOpen, ListChecks } from "lucide-react";
import { lessons } from "@/data/lessons";
import Quiz from "./Quiz";
import { Glass, PageHero, MediaSlot, ObjectiveList, icons, btn, btnGhost, grad } from "./ui";

export default function LessonView({ id }) {
  const L = lessons.find((l) => l.id === id);
  const prev = lessons.find((l) => l.id === id - 1);
  const next = lessons.find((l) => l.id === id + 1);
  const Icon = icons[L.icon];

  return (
    <article className="space-y-10">
      <PageHero Icon={Icon} title={`Lesson ${L.id}: ${L.title}`} subtitle={L.tagline} />

      <section aria-labelledby="obj">
        <Glass>
          <h2 id="obj" className="mb-4 flex items-center gap-2 text-lg font-semibold text-white"><Target className="h-5 w-5 text-cyan-300" /> Lesson objectives</h2>
          <ObjectiveList items={L.objectives} />
        </Glass>
      </section>

      <section aria-labelledby="pre">
        <h2 id="pre" className="mb-4 flex items-center gap-2 text-lg font-semibold text-white"><ClipboardCheck className="h-5 w-5 text-purple-300" /> Pre-test</h2>
        <Quiz title="Pre-test" questions={L.pretest} />
      </section>

      <section aria-labelledby="content" className="space-y-6">
        <h2 id="content" className="flex items-center gap-2 text-lg font-semibold text-white"><BookOpen className="h-5 w-5 text-indigo-300" /> Lesson content</h2>
        {L.sections.map((s) => (
          <Glass key={s.h}>
            <h3 className="text-xl font-bold text-white">{s.h}</h3>
            <p className="mt-2 max-w-3xl leading-relaxed text-slate-300">{s.text}</p>
            {s.items && (
              <dl className="mt-4 grid gap-3 sm:grid-cols-2">
                {s.items.map(([t, d]) => (
                  <div key={t} className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <dt className="font-semibold text-cyan-300">{t}</dt>
                    <dd className="mt-1 text-sm text-slate-300">{d}</dd>
                  </div>
                ))}
              </dl>
            )}
            {s.media && (
              <div className="mt-5">
                <MediaSlot {...(typeof s.media === "string" ? { label: s.media } : s.media)} />
              </div>
            )}
          </Glass>
        ))}
      </section>

      <Glass className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="flex items-center gap-2 font-semibold text-white"><ListChecks className="h-5 w-5 text-cyan-300" /> Ready to test yourself?</h2>
          <p className="text-sm text-slate-400">Take the final quiz for this lesson.</p>
        </div>
        <Link href={`/quize/lesson${id}`} className={btn}>Start final quiz</Link>
      </Glass>

      <nav className="flex justify-between gap-3">
        {prev ? <Link href={`/units/lesson${prev.id}`} className={btnGhost}><ArrowLeft className="h-4 w-4" /> Lesson {prev.id}</Link> : <Link href="/units" className={btnGhost}><ArrowLeft className="h-4 w-4" /> Unit overview</Link>}
        {next ? <Link href={`/units/lesson${next.id}`} className={btnGhost}>Lesson {next.id} <ArrowRight className="h-4 w-4" /></Link> : <span />}
      </nav>
    </article>
  );
}

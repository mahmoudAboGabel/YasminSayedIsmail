import Link from "next/link";
import { ArrowLeft, ArrowRight, ClipboardCheck, Target, BookOpen, ListChecks, Lightbulb, TriangleAlert } from "lucide-react";
import { visibleLessons } from "@/data/lessons";
import Quiz from "./Quiz";
import { Glass, PageHero, MediaSlot, ObjectiveList, icons, btn, btnGhost, grad } from "./ui";

const noteStyle = {
  tip: { Icon: Lightbulb, title: "معلومة مهمة", cls: "border-sky-300 bg-sky-100/70 text-sky-900" },
  warn: { Icon: TriangleAlert, title: "انتبه!", cls: "border-pink-300 bg-pink-100/70 text-pink-900" },
};

export default function LessonView({ id }) {
  const L = visibleLessons.find((l) => l.id === id);
  const prev = visibleLessons.find((l) => l.id === id - 1);
  const next = visibleLessons.find((l) => l.id === id + 1);
  const Icon = icons[L.icon];

  return (
    <article className="space-y-10">
      <PageHero Icon={Icon} title={`الدرس ${L.id}: ${L.title}`} subtitle={L.tagline} />

      <section aria-labelledby="obj">
        <Glass>
          <h2 id="obj" className="mb-4 flex items-center gap-2 text-xl font-bold text-white"><Target className="h-5 w-5 text-cyan-300" /> أهداف الدرس</h2>
          <ObjectiveList items={L.objectives} />
        </Glass>
      </section>

      <section aria-labelledby="pre">
        <h2 id="pre" className="mb-4 flex items-center gap-2 text-xl font-bold text-white"><ClipboardCheck className="h-5 w-5 text-purple-300" /> الاختبار القبلي</h2>
        <Quiz title="الاختبار القبلي" questions={L.pretest} />
      </section>

      <section aria-labelledby="content" className="space-y-6">
        <h2 id="content" className="flex items-center gap-2 text-xl font-bold text-white"><BookOpen className="h-5 w-5 text-indigo-300" /> شرح الدرس</h2>
        {L.sections.map((s) => {
          const n = s.note && noteStyle[s.note.kind];
          return (
            <Glass key={s.h}>
              <h3 className="text-2xl font-extrabold text-white">{s.h}</h3>
              <p className="mt-3 max-w-3xl text-lg leading-loose text-slate-300">{s.text}</p>

              {s.items && (
                <dl className="mt-4 grid gap-3 sm:grid-cols-2">
                  {s.items.map(([t, d]) => (
                    <div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <dt className="text-lg font-bold text-cyan-300">{t}</dt>
                      <dd className="mt-1 leading-relaxed text-slate-300">{d}</dd>
                    </div>
                  ))}
                </dl>
              )}

              {s.steps && (
                <ol className="mt-4 space-y-3">
                  {s.steps.map((st, i) => (
                    <li key={st} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                      <span className={`${grad} flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-bold text-white`}>{i + 1}</span>
                      <span className="pt-0.5 text-lg leading-relaxed text-slate-300">{st}</span>
                    </li>
                  ))}
                </ol>
              )}

              {n && (
                <div className={`mt-4 flex items-start gap-3 rounded-2xl border p-4 ${n.cls}`}>
                  <n.Icon className="mt-1 h-5 w-5 shrink-0" />
                  <p><strong>{n.title}: </strong>{s.note.text}</p>
                </div>
              )}

              {s.media && (
                <div className="mt-5">
                  <MediaSlot {...(typeof s.media === "string" ? { label: s.media } : s.media)} />
                </div>
              )}
            </Glass>
          );
        })}
      </section>

      <Glass className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="flex items-center gap-2 text-lg font-bold text-white"><ListChecks className="h-5 w-5 text-cyan-300" /> هل أنت مستعد؟</h2>
          <p className="text-slate-400">اختبر نفسك في الاختبار النهائي لهذا الدرس.</p>
        </div>
        <Link href={`/quize/lesson${id}`} className={btn}>ابدأ الاختبار النهائي</Link>
      </Glass>

      <nav className="flex justify-between gap-3">
        {prev
          ? <Link href={`/units/lesson${prev.id}`} className={btnGhost}><ArrowRight className="h-4 w-4" /> الدرس السابق</Link>
          : <Link href="/units" className={btnGhost}><ArrowRight className="h-4 w-4" /> نظرة عامة على الوحدة</Link>}
        {next ? <Link href={`/units/lesson${next.id}`} className={btnGhost}>الدرس التالي <ArrowLeft className="h-4 w-4" /></Link> : <span />}
      </nav>
    </article>
  );
}
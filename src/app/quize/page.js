import Link from "next/link";
import { ListChecks, ArrowLeft } from "lucide-react";
import { PageHero, icons } from "@/components/ui";
import { visibleLessons } from "@/data/lessons";

export const metadata = { title: "الاختبارات النهائية | معمل العلوم" };

export default function Quizzes() {
  return (
    <div>
      <PageHero Icon={ListChecks} title="الاختبارات النهائية" subtitle="اختر اختبار الدرس. ستعرف نتيجة كل إجابة ودرجتك في النهاية." />
      <div className="grid gap-5 sm:grid-cols-2">
        {visibleLessons.map((l) => {
          const Icon = icons[l.icon];
          return (
            <Link key={l.id} href={`/quize/lesson${l.id}`} className="group backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 transition hover:border-purple-400/40 hover:bg-white/10">
              <Icon className="h-7 w-7 text-purple-300" />
              <h2 className="mt-3 text-lg font-bold text-white">اختبار الدرس {l.id}</h2>
              <p className="mt-1 text-slate-400">{l.title} · {l.quiz.length} أسئلة</p>
              <span className="mt-4 inline-flex items-center gap-1 text-cyan-300 transition group-hover:gap-2">ابدأ الاختبار <ArrowLeft className="h-4 w-4" /></span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
import { GraduationCap, Building2, Laptop } from "lucide-react";
import { Glass, PageHero, grad } from "@/components/ui";

export const metadata = { title: "مُعِدّة المنصة | معمل العلوم" };

export default function Preparer() {
  return (
    <div className="mx-auto max-w-3xl">
      <PageHero Icon={GraduationCap} title="مُعِدّة المنصة" subtitle="تقديرًا للجهد المبذول في هذه التجربة التعليمية." />
      <Glass className="relative overflow-hidden p-8 sm:p-10">
        <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:text-start">
          <div className={`${grad} flex h-28 w-28 shrink-0 items-center justify-center rounded-full text-4xl font-bold text-white shadow-xl shadow-indigo-500/30`}>ي</div>
          <div>
            <h2 className="text-2xl font-bold text-white">منة الله محمد صلاح</h2>
            <p className="mt-1 text-cyan-300">مُعِدّة المنصة ومطوّرتها</p>
          </div>
        </div>
        <dl className="relative mt-8 grid gap-4">
          <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
            <Laptop className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
            <div><dt className="text-sm text-slate-400">التخصص</dt><dd className="font-medium text-white">معلم حاسب الي</dd></div>
          </div>
          <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
            <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
            <div><dt className="text-sm text-slate-400">الكلية والجامعة</dt><dd className="font-medium text-white">كلية التربية النوعية – قسم تكنولوجيا التعليم – جامعة عين شمس</dd></div>
          </div>
        </dl>
      </Glass>
    </div>
  );
}
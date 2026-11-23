import Link from "next/link";
import { Compass, Target, ClipboardCheck, BookOpen, Bot, ListChecks } from "lucide-react";
import { Glass, PageHero, grad, btn } from "@/components/ui";

const steps = [
  { Icon: Target, t: "اقرأ أهداف الوحدة", d: "ادخل على صفحة الدروس لتعرف ماذا ستتعلم قبل أن تبدأ." },
  { Icon: ClipboardCheck, t: "حل الاختبار القبلي", d: "كل درس يبدأ باختبار قصير يوضح ما تعرفه بالفعل. لا تقلق، هو للتدريب فقط." },
  { Icon: BookOpen, t: "ادرس الدرس", d: "اقرأ كل جزء بتركيز، وتابع الصور والفيديوهات، ونفّذ خطوات التجربة." },
  { Icon: Bot, t: "اسأل المساعد الذكي", d: "إذا لم تفهم كلمة أو فكرة، اكتب سؤالًا قصيرًا وواضحًا في صفحة المساعد." },
  { Icon: ListChecks, t: "اختبر نفسك", d: "حل الاختبار النهائي، واقرأ التعليق على كل إجابة، وأعد المحاولة لتحسين درجتك." },
];

export default function About() {
  return (
    <div>
      <PageHero Icon={Compass} title="دليل استخدام المنصة" subtitle="خمس خطوات بسيطة لتستفيد أقصى استفادة." />
      <ol className="space-y-4">
        {steps.map(({ Icon, t, d }, i) => (
          <li key={t}>
            <Glass className="flex gap-4">
              <span className={`${grad} flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl`}><Icon className="h-6 w-6 text-white" /></span>
              <div>
                <h2 className="text-lg font-bold text-white">الخطوة {i + 1}: {t}</h2>
                <p className="mt-1 leading-relaxed text-slate-300">{d}</p>
              </div>
            </Glass>
          </li>
        ))}
      </ol>
      <Glass className="mt-8">
        <h2 className="text-lg font-bold text-white">نصائح للمذاكرة</h2>
        <ul className="mt-3 list-disc space-y-1 ps-5 leading-relaxed text-slate-300">
          <li>ادرس درسًا واحدًا في كل مرة، وأنهِ اختباره قبل الانتقال للتالي.</li>
          <li>نفّذ التجارب بنفسك مع أسرتك أو معلمك، واتبع تعليمات الأمان.</li>
          <li>اسأل المساعد الذكي أن يشرح لك الفكرة بكلمات أبسط أو بمثال.</li>
        </ul>
        <Link href="/units" className={`${btn} mt-5`}>اذهب إلى الدروس</Link>
      </Glass>
    </div>
  );
}
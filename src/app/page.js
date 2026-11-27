import Link from "next/link";
import { BookOpen, Bot, ListChecks, Sparkles, ArrowLeft } from "lucide-react";
import { Glass, btn, btnGhost, gradText } from "@/components/ui";

const cards = [
  { href: "/units", Icon: BookOpen, title: "الدروس", text: "أربعة دروس بأهداف واضحة واختبار قبلي وشرح مبسط." },
  { href: "/chatai", Icon: Bot, title: "المساعد الذكي", text: "اسأل عن أي شيء في الدرس واحصل على مساعدة." },
  { href: "/quize", Icon: ListChecks, title: "الاختبارات", text: "اختبر فهمك وشاهد درجتك مع تعليق على كل إجابة." },
];

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-6 py-16 text-center backdrop-blur-md sm:py-24">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <span className="relative inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm text-cyan-200">
          <Sparkles className="h-4 w-4" /> أهلًا بالعالِم الصغير
        </span>
        <h1 className="relative mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
          اكتشف التاريخ <span className={gradText}>من حولك</span>
        </h1>
        <p className="relative mx-auto mt-5 max-w-2xl text-lg leading-loose text-slate-300">
          من التربة وتسرب الماء، إلى ذكاء المصريين القدماء، إلى خطوات البحث وأدوات الملاحظة: تعلّم وجرّب واختبر نفسك.
        </p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/units" className={btn}>ابدأ التعلم <ArrowLeft className="h-4 w-4" /></Link>
          <Link href="/about" className={btnGhost}>كيف تستخدم المنصة؟</Link>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-3" aria-label="روابط سريعة">
        {cards.map(({ href, Icon, title, text }) => (
          <Link key={href} href={href} className="group backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 transition hover:border-cyan-400/40 hover:bg-white/10">
            <Icon className="h-8 w-8 text-cyan-300" />
            <h2 className="mt-4 text-xl font-bold text-white">{title}</h2>
            <p className="mt-2 leading-relaxed text-slate-400">{text}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-cyan-300 transition group-hover:gap-2">افتح <ArrowLeft className="h-4 w-4" /></span>
          </Link>
        ))}
      </section>

      <Glass className="text-center sm:p-10">
        <h2 className="text-2xl font-bold text-white">رسالتنا</h2>
        <p className="mx-auto mt-3 max-w-2xl text-lg leading-loose text-slate-300">
          أن نساعد كل طفل على أن يفكر <strong className="text-cyan-300">مثل العلماء</strong>: يسأل، ويتوقع، ويجرّب، ويستنتج.
        </p>
        <Link href="/units" className={`${btn} mt-6`}>استكشف الدروس</Link>
      </Glass>
    </div>
  );
}
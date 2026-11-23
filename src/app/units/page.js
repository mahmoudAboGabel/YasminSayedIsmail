import Link from "next/link";
import { Library, Brain, Heart, Hand, ArrowLeft } from "lucide-react";
import { Glass, PageHero, ObjectiveList, icons } from "@/components/ui";
import { unit, visibleLessons } from "@/data/lessons";

export const metadata = { title: "الدروس | معمل العلوم" };

const groups = [
  { t: "الأهداف المعرفية", Icon: Brain, items: unit.cognitive },
  { t: "الأهداف الوجدانية", Icon: Heart, items: unit.affective },
  { t: "الأهداف المهارية", Icon: Hand, items: unit.psychomotor },
];

export default function Units() {
  return (
    <div className="space-y-12">
      <PageHero Icon={Library} title={unit.title} subtitle="في نهاية هذه الوحدة ستكون قادرًا على أن:" />
      <section className="grid gap-5 md:grid-cols-3">
        {groups.map(({ t, Icon, items }) => (
          <Glass key={t}>
            <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-white"><Icon className="h-5 w-5 text-cyan-300" /> {t}</h2>
            <ObjectiveList items={items} />
          </Glass>
        ))}
      </section>
      <section>
        <h2 className="mb-5 text-2xl font-bold text-white">الدروس</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {visibleLessons.map((l) => {
            const Icon = icons[l.icon];
            return (
              <Link key={l.id} href={`/units/lesson${l.id}`} className="group backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 transition hover:border-cyan-400/40 hover:bg-white/10">
                <Icon className="h-7 w-7 text-indigo-300" />
                <h3 className="mt-3 text-lg font-bold text-white">الدرس {l.id}: {l.title}</h3>
                <p className="mt-1 text-slate-400">{l.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-cyan-300 transition group-hover:gap-2">ابدأ الدرس <ArrowLeft className="h-4 w-4" /></span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
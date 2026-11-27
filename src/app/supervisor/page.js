import { Award, UserCheck } from "lucide-react";
import { Glass, PageHero, grad } from "@/components/ui";

export const metadata = { title: "الإشراف الأكاديمي | معمل العلوم" };

const people = [
  { Icon: Award, role: "المشرف الأكاديمي", name: "أ.د. محمد عادل" },
  { Icon: UserCheck, role: "المعيد", name: "لمياء جلال" },
];

export default function Supervisor() {
  return (
    <div className="mx-auto max-w-3xl">
      <PageHero Icon={Award} title="الإشراف الأكاديمي" subtitle="أُعدّت هذه المنصة تحت إشراف:" />
      <div className="grid gap-5 sm:grid-cols-2">
        {people.map(({ Icon, role, name }) => (
          <Glass key={name} className="text-center">
            <span className={`${grad} mx-auto flex h-16 w-16 items-center justify-center rounded-full shadow-lg shadow-indigo-500/30`}><Icon className="h-7 w-7 text-white" /></span>
            <p className="mt-4 text-cyan-300">{role}</p>
            <h2 className="mt-1 text-xl font-bold text-white">{name}</h2>
          </Glass>
        ))}
      </div>
    </div>
  );
}
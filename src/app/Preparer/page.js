import { GraduationCap, Building2, Laptop } from "lucide-react";
import { Glass, PageHero, grad } from "@/components/ui";

export const metadata = { title: "Platform Creator | BioLab" };

export default function Preparer() {
  return (
    <div className="mx-auto max-w-3xl">
      <PageHero Icon={GraduationCap} title="Platform creator" subtitle="With appreciation for the effort behind this learning experience." />
      <Glass className="relative overflow-hidden p-8 sm:p-10">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
          <div className={`${grad} flex h-28 w-28 shrink-0 items-center justify-center rounded-full text-4xl font-bold text-white shadow-xl shadow-indigo-500/30`}>YS</div>
          <div>
            <h2 className="text-2xl font-bold text-white">Yasmine Mohamed Kamal Ahmed halaby</h2>
            <p className="mt-1 text-cyan-300">Creator and developer of the platform</p>
          </div>
        </div>
        <dl className="relative mt-8 grid gap-4">
          <div className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
            <Laptop className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
            <div><dt className="text-sm text-slate-400">Major</dt><dd className="font-medium text-white">Computer Science Teacher</dd></div>
          </div>
          <div className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
            <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
            <div><dt className="text-sm text-slate-400">Faculty and university</dt><dd className="font-medium text-white">Faculty of Specific Education, Educational Technology Department, Ain Shams University</dd></div>
          </div>
        </dl>
      </Glass>
    </div>
  );
}

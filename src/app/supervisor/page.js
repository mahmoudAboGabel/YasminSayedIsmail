import { Award, UserCheck } from "lucide-react";
import { Glass, PageHero, grad } from "@/components/ui";

export const metadata = { title: "Academic Supervision | BioLab" };

const people = [
  { Icon: Award, role: "Academic supervisor", name: "Prof. Dr. Gamal Abdel Nasser" },
  { Icon: UserCheck, role: "Teaching Assistant", name: "Hossam" },
];

export default function Supervisor() {
  return (
    <div className="mx-auto max-w-3xl">
      <PageHero Icon={Award} title="Academic supervision" subtitle="This platform was prepared under the guidance of:" />
      <div className="grid gap-5 sm:grid-cols-2">
        {people.map(({ Icon, role, name }) => (
          <Glass key={name} className="text-center">
            <span className={`${grad} mx-auto flex h-16 w-16 items-center justify-center rounded-full shadow-lg shadow-indigo-500/30`}><Icon className="h-7 w-7 text-white" /></span>
            <p className="mt-4 text-sm text-cyan-300">{role}</p>
            <h2 className="mt-1 text-xl font-bold text-white">{name}</h2>
          </Glass>
        ))}
      </div>
    </div>
  );
}

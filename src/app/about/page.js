import Link from "next/link";
import { Compass, Target, ClipboardCheck, BookOpen, Bot, ListChecks } from "lucide-react";
import { Glass, PageHero, grad, btn } from "@/components/ui";

const steps = [
  { Icon: Target, t: "Read the unit objectives", d: "Open Units to see the cognitive, affective and psychomotor goals before you begin." },
  { Icon: ClipboardCheck, t: "Take the pre-test", d: "Each lesson starts with a short pre-test. It shows what you already know; your score does not count against you." },
  { Icon: BookOpen, t: "Study the lesson", d: "Read each section, then look at the diagram and media slots. Take notes on key terms." },
  { Icon: Bot, t: "Ask the AI assistant", d: "Stuck on a term? Open AI Chat and ask a short, specific question." },
  { Icon: ListChecks, t: "Finish with the quiz", d: "Take the final quiz, read the feedback on every answer and retake it to improve your score." },
];

export default function About() {
  return (
    <div>
      <PageHero Icon={Compass} title="Platform guide" subtitle="Five steps to get the most out of BioLab." />
      <ol className="space-y-4">
        {steps.map(({ Icon, t, d }, i) => (
          <li key={t}>
            <Glass className="flex gap-4">
              <span className={`${grad} flex h-11 w-11 shrink-0 items-center justify-center rounded-xl`}><Icon className="h-5 w-5 text-white" /></span>
              <div>
                <h2 className="font-semibold text-white">Step {i + 1}: {t}</h2>
                <p className="mt-1 text-sm text-slate-300">{d}</p>
              </div>
            </Glass>
          </li>
        ))}
      </ol>
      <Glass className="mt-8">
        <h2 className="font-semibold text-white">Study tips</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>Study one lesson at a time and finish its quiz before moving on.</li>
          <li>Ask the AI assistant to explain a concept in simpler words, or to give an example.</li>
          <li>Check important facts in your textbook.</li>
        </ul>
        <Link href="/units" className={`${btn} mt-5`}>Go to units</Link>
      </Glass>
    </div>
  );
}

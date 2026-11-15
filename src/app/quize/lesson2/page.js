import Quiz from "@/components/Quiz";
import { PageHero } from "@/components/ui";
import { lessons } from "@/data/lessons";
import { ListChecks } from "lucide-react";

export const metadata = { title: "Lesson 2 Quiz | BioLab" };

export default function Page() {
  const L = lessons[2 - 1];
  return (
    <div className="mx-auto max-w-2xl">
      <PageHero Icon={ListChecks} title={`Lesson 2 Quiz`} subtitle={L.title} />
      <Quiz title={`Lesson 2 final quiz`} questions={L.quiz} backHref="/quize" backLabel="All quizzes" />
    </div>
  );
}

import Quiz from "@/components/Quiz";
import { PageHero } from "@/components/ui";
import { visibleLessons } from "@/data/lessons";
import { ListChecks } from "lucide-react";

export const metadata = { title: "اختبار الدرس 3 | معمل العلوم" };

export default function Page() {
  const L = visibleLessons[3 - 1];
  return (
    <div className="mx-auto max-w-2xl">
      <PageHero Icon={ListChecks} title="اختبار الدرس 3" subtitle={L.title} />
      <Quiz title="الاختبار النهائي للدرس 3" questions={L.quiz} backHref="/quize" backLabel="كل الاختبارات" />
    </div>
  );
}
"use client";
import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, XCircle, RotateCcw, Trophy } from "lucide-react";
import { glass, grad, btn, btnGhost } from "./ui";

export default function Quiz({ title, questions, backHref, backLabel = "Back" }) {
  const [i, setI] = useState(0);
  const [sel, setSel] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = questions[i];
  const answered = sel !== null;
  const pct = Math.round((score / questions.length) * 100);

  const pick = (k) => {
    if (answered) return;
    setSel(k);
    if (k === q.answer) setScore((s) => s + 1);
  };
  const next = () => {
    if (i + 1 === questions.length) setDone(true);
    else { setI(i + 1); setSel(null); }
  };
  const reset = () => { setI(0); setSel(null); setScore(0); setDone(false); };

  const optStyle = (k) => {
    if (!answered) return "border-white/10 bg-white/5 hover:border-cyan-400/50 hover:bg-white/10";
    if (k === q.answer) return "border-emerald-400/60 bg-emerald-400/10 text-emerald-200";
    if (k === sel) return "border-rose-400/60 bg-rose-400/10 text-rose-200";
    return "border-white/5 bg-white/5 opacity-50";
  };

  if (done) {
    return (
      <div className={`${glass} p-8 text-center`}>
        <Trophy className="mx-auto h-12 w-12 text-cyan-300" />
        <h3 className="mt-4 text-2xl font-bold text-white">{title}: complete</h3>
        <p className="mt-2 text-4xl font-extrabold text-cyan-300">{score} / {questions.length}</p>
        <p className="mt-2 text-slate-400">
          {pct >= 80 ? "Excellent work. You have mastered this topic." : pct >= 50 ? "Good effort. Review the lesson and try again." : "Keep going. Re-read the lesson, then retake the quiz."}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button onClick={reset} className={btn}><RotateCcw className="h-4 w-4" /> Retake</button>
          {backHref && <Link href={backHref} className={btnGhost}>{backLabel}</Link>}
        </div>
      </div>
    );
  }

  return (
    <div className={`${glass} p-6 sm:p-8`}>
      <div className="mb-5 flex items-center justify-between text-sm text-slate-400">
        <span>{title}</span>
        <span>Question {i + 1} of {questions.length} · Score {score}</span>
      </div>
      <div className="mb-6 h-1.5 overflow-hidden rounded-full bg-white/10">
        <div className={`${grad} h-full transition-all duration-500`} style={{ width: `${((i + (answered ? 1 : 0)) / questions.length) * 100}%` }} />
      </div>
      <h3 className="text-lg font-semibold text-white sm:text-xl">{q.q}</h3>
      <div className="mt-5 grid gap-3">
        {q.options.map((o, k) => (
          <button key={o} onClick={() => pick(k)} disabled={answered}
            className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left text-sm transition ${optStyle(k)}`}>
            <span>{o}</span>
            {answered && k === q.answer && <CheckCircle2 className="h-5 w-5 shrink-0" />}
            {answered && k === sel && k !== q.answer && <XCircle className="h-5 w-5 shrink-0" />}
          </button>
        ))}
      </div>
      {answered && (
        <div className="mt-5 rounded-xl border border-white/10 bg-ink-2/80 p-4 text-sm" role="status">
          <p className={sel === q.answer ? "font-semibold text-emerald-300" : "font-semibold text-rose-300"}>
            {sel === q.answer ? "Correct!" : "Not quite."}
          </p>
          <p className="mt-1 text-slate-300">{q.why}</p>
          <button onClick={next} className={`${btn} mt-4`}>{i + 1 === questions.length ? "See results" : "Next question"}</button>
        </div>
      )}
    </div>
  );
}

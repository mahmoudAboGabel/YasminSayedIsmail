"use client";
import { useState, useRef, useEffect } from "react";
import { Bot, User, Send, Plus, MessageSquare } from "lucide-react";
import { glass, grad } from "@/components/ui";

const history = ["ما الفرق بين الرمل والطين؟", "كيف أستخدم الترمومتر؟", "ما هي التجربة العادلة؟"];
const prompts = ["اشرح لي تجميع القوى", "كيف أستخدم البوصلة؟"];

export default function ChatAI() {
  const [msgs, setMsgs] = useState([
    { from: "ai", text: "أهلًا! أنا مساعدك في العلوم. اسألني عن التربة، أو فيزياء المصريين القدماء، أو خطوات البحث، أو أدوات الملاحظة." },
  ]);
  const [text, setText] = useState("");
  const end = useRef(null);
  useEffect(() => { end.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs]);

  const send = (value = text) => {
    if (!value.trim()) return;
    setMsgs((m) => [...m, { from: "user", text: value.trim() }]);
    setText("");
  };

  return (
    <div className={`${glass} grid h-[75vh] overflow-hidden md:grid-cols-[16rem_1fr]`}>
      <aside className="hidden flex-col gap-2 border-e border-white/10 bg-ink-2/60 p-4 md:flex">
        <button onClick={() => setMsgs(msgs.slice(0, 1))} className={`${grad} mb-2 flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold text-white`}><Plus className="h-4 w-4" /> محادثة جديدة</button>
        <p className="px-2 text-xs text-slate-500">الأحدث</p>
        {history.map((h) => (
          <button key={h} className="flex items-center gap-2 truncate rounded-lg px-3 py-2 text-start text-sm text-slate-300 hover:bg-white/10"><MessageSquare className="h-4 w-4 shrink-0 text-cyan-300" /> <span className="truncate">{h}</span></button>
        ))}
      </aside>

      <section className="flex min-h-0 flex-col">
        <div className="flex-1 space-y-4 overflow-y-auto p-4 sm:p-6" aria-live="polite">
          {msgs.map((m, i) => (
            <div key={i} className={`flex gap-3 ${m.from === "user" ? "flex-row-reverse" : ""}`}>
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${m.from === "user" ? "bg-purple-500/30" : grad}`}>
                {m.from === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4 text-white" />}
              </span>
              <p className={`max-w-[80%] rounded-2xl px-4 py-2.5 leading-relaxed ${m.from === "user" ? "bg-indigo-500/30 text-white" : "border border-white/10 bg-white/5 text-slate-200"}`}>{m.text}</p>
            </div>
          ))}
          <div ref={end} />
        </div>

        <div className="border-t border-white/10 p-3 sm:p-4">
          <div className="mb-3 flex flex-wrap gap-2">
            {prompts.map((p) => (
              <button key={p} onClick={() => send(p)} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 transition hover:border-cyan-400/40">{p}</button>
            ))}
          </div>
          <form onSubmit={(e) => { e.preventDefault(); send(); }} className="flex gap-2">
            <input value={text} onChange={(e) => setText(e.target.value)} placeholder="اكتب سؤالك هنا…" aria-label="رسالتك"
              className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-slate-500 focus:border-cyan-400/50 focus:outline-none" />
            <button type="submit" aria-label="إرسال" className={`${grad} flex h-11 w-11 items-center justify-center rounded-xl text-white transition hover:brightness-110`}><Send className="h-4 w-4 -scale-x-100" /></button>
          </form>
        </div>
      </section>
    </div>
  );
}
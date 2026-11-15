
"use client";

import { useState, useRef, useEffect } from "react";
import {
  Bot,
  User,
  Send,
  Plus,
  MessageSquare,
  Loader2,
  AlertCircle,
  Youtube,
  Image as ImageIcon,
  ExternalLink,
} from "lucide-react";

import { glass, grad } from "@/components/ui";

const API_URL = "https://yessmenhalby.runasp.net/api/ChatHistory";

const history = [
  "What is turgor pressure?",
  "Sarcomere structure",
  "Tropism types",
];

const prompts = [
  "Explain the sliding filament theory",
  "Difference between tendons and ligaments",
];

const initialMessage = {
  id: "welcome",
  from: "ai",
  text: "Hi! I'm your biology assistant. Ask me anything about support and movement in plants and humans.",
};

function getSearchQuery(url) {
  try {
    const parsed = new URL(url);

    return (
      parsed.searchParams.get("search_query") ||
      parsed.searchParams.get("q") ||
      ""
    );
  } catch {
    return "";
  }
}

function SearchMedia({ url, type }) {
  if (!url) return null;

  const query = getSearchQuery(url);

  const isYoutube = type === "youtube";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10"
    >
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${
          isYoutube ? "bg-red-500/15" : "bg-cyan-500/15"
        }`}
      >
        {isYoutube ? (
          <Youtube className="h-6 w-6 text-red-400" />
        ) : (
          <ImageIcon className="h-6 w-6 text-cyan-400" />
        )}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-white">
          {isYoutube ? "Educational Videos" : "Educational Images"}
        </p>

        <p className="mt-1 truncate text-xs text-slate-400">
          {query || "View related resources"}
        </p>
      </div>

      <ExternalLink className="h-4 w-4 shrink-0 text-slate-400" />
    </a>
  );
}

function MediaSection({ videos, images }) {
  if (!videos && !images) return null;

  return (
    <div className="mt-4 w-full max-w-[80%] space-y-3">
      {videos && (
        <div className="space-y-2">
          <h4 className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <Youtube className="h-4 w-4 text-red-400" />
            Related Videos
          </h4>

          <SearchMedia url={videos} type="youtube" />
        </div>
      )}

      {images && (
        <div className="space-y-2">
          <h4 className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <ImageIcon className="h-4 w-4 text-cyan-400" />
            Related Images
          </h4>

          <SearchMedia url={images} type="images" />
        </div>
      )}
    </div>
  );
}

export default function ChatAI() {
  const [msgs, setMsgs] = useState([initialMessage]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const end = useRef(null);
  const loadingRef = useRef(false);

  useEffect(() => {
    end.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [msgs, loading]);

  const send = async (value = text) => {
    const question = value.trim();

    if (!question || loadingRef.current) return;

    loadingRef.current = true;
    setLoading(true);
    setError("");
    setText("");

    setMsgs((previous) => [
      ...previous,
      {
        id: Date.now(),
        from: "user",
        text: question,
      },
    ]);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },

        // مطابق لـ AskAiQuestionDto
        body: JSON.stringify({
          question: question,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();

        throw new Error(
          errorText || `Server error: ${response.status}`
        );
      }

      const data = await response.json();

      if (!data.aiResponseText) {
        throw new Error("AI response is empty.");
      }

      setMsgs((previous) => [
        ...previous,
        {
          id: Date.now() + 1,
          from: "ai",
          text: data.aiResponseText,
          videos: data.videos || "",
          images: data.images || "",
        },
      ]);
    } catch (err) {
      console.error("API Error:", err);

      setError(
        err.message ||
          "Unable to connect to the server. Please try again."
      );
    } finally {
      loadingRef.current = false;
      setLoading(false);
    }
  };

  const newChat = () => {
    if (loadingRef.current) return;

    setMsgs([initialMessage]);
    setText("");
    setError("");
  };

  return (
    <div
      className={`${glass} grid h-[75vh] min-h-[550px] overflow-hidden md:grid-cols-[16rem_1fr]`}
    >
      {/* Sidebar */}

      <aside className="hidden flex-col gap-2 border-r border-white/10 bg-ink-2/60 p-4 md:flex">
        <button
          onClick={newChat}
          disabled={loading}
          className={`${grad} mb-2 flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold text-white disabled:opacity-50`}
        >
          <Plus className="h-4 w-4" />
          New chat
        </button>

        <p className="px-2 text-xs text-slate-500">
          Recent
        </p>

        {history.map((h) => (
          <button
            key={h}
            disabled={loading}
            onClick={() => send(h)}
            className="flex items-center gap-2 truncate rounded-lg px-3 py-2 text-left text-sm text-slate-300 hover:bg-white/10 disabled:opacity-50"
          >
            <MessageSquare className="h-4 w-4 shrink-0 text-cyan-300" />
            <span className="truncate">{h}</span>
          </button>
        ))}
      </aside>

      {/* Chat */}

      <section className="flex min-h-0 flex-col">
        <div
          className="flex-1 space-y-5 overflow-y-auto p-4 sm:p-6"
          aria-live="polite"
          aria-busy={loading}
        >
          {msgs.map((m) => (
            <div key={m.id} className="space-y-2">
              <div
                className={`flex gap-3 ${
                  m.from === "user" ? "flex-row-reverse" : ""
                }`}
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                    m.from === "user"
                      ? "bg-purple-500/30"
                      : grad
                  }`}
                >
                  {m.from === "user" ? (
                    <User className="h-4 w-4" />
                  ) : (
                    <Bot className="h-4 w-4 text-white" />
                  )}
                </span>

                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-7 ${
                    m.from === "user"
                      ? "bg-indigo-500/30 text-white"
                      : "border border-white/10 bg-white/5 text-slate-200"
                  }`}
                >
                  <div className="whitespace-pre-wrap break-words">
                    {m.text}
                  </div>
                </div>
              </div>

              {m.from === "ai" && (
                <div className="ml-12">
                  <MediaSection
                    videos={m.videos}
                    images={m.images}
                  />
                </div>
              )}
            </div>
          ))}

          {/* Loading */}

          {loading && (
            <div className="flex items-center gap-3">
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-full ${grad}`}
              >
                <Bot className="h-4 w-4 text-white" />
              </span>

              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
                <Loader2 className="h-4 w-4 animate-spin text-cyan-400" />
                AI is thinking...
              </div>
            </div>
          )}

          {/* Error */}

          {error && (
            <div className="ml-12 flex max-w-[85%] items-start gap-2 rounded-xl border border-red-400/20 bg-red-500/10 p-3 text-sm text-red-300">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />

              <div className="flex-1">
                <p>{error}</p>

                <button
                  onClick={() => send(msgs.at(-1)?.text || "")}
                  disabled={loading}
                  className="mt-2 text-xs font-semibold text-red-200 hover:text-white"
                >
                  Try again
                </button>
              </div>
            </div>
          )}

          <div ref={end} />
        </div>

        {/* Input */}

        <div className="border-t border-white/10 p-3 sm:p-4">
          <div className="mb-3 flex flex-wrap gap-2">
            {prompts.map((p) => (
              <button
                key={p}
                disabled={loading}
                onClick={() => send(p)}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 transition hover:border-cyan-400/40 disabled:opacity-40"
              >
                {p}
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="flex gap-2"
          >
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Ask a biology question..."
              aria-label="Message"
              disabled={loading}
              className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400/50 focus:outline-none disabled:opacity-50"
            />

            <button
              type="submit"
              aria-label="Send"
              disabled={loading || !text.trim()}
              className={`${grad} flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white transition hover:brightness-110 disabled:opacity-40`}
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </button>
          </form>

          <p className="mt-2 text-center text-[10px] text-slate-500">
            AI-generated educational content.
          </p>
        </div>
      </section>
    </div>
  );
}

import { ImageIcon, Leaf, Bone, Sprout, Activity } from "lucide-react";
import Image from "next/image";

export const glass = "backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl";
export const grad = "bg-gradient-to-r from-cyan-500 to-indigo-600";
export const gradText = "bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent";
export const btn = `${grad} inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110`;
export const btnGhost = "inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-white/10";
export const icons = { Leaf, Bone, Sprout, Activity };

export function Glass({ className = "", children }) {
  return <div className={`${glass} p-6 ${className}`}>{children}</div>;
}

export function PageHero({ title, subtitle, Icon }) {
  return (
    <header className="mb-10">
      {Icon && (
        <span className={`${grad} mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl shadow-lg shadow-indigo-500/30`}>
          <Icon className="h-6 w-6 text-white" />
        </span>
      )}
      <h1 className={`${gradText} text-3xl font-extrabold tracking-tight sm:text-4xl`}>{title}</h1>
      {subtitle && <p className="mt-3 max-w-2xl text-slate-400">{subtitle}</p>}
    </header>
  );
}

/* Empty slot for a diagram, image or video embed. Replace later. */
export function MediaSlot({ label = "Diagram / media", src, type = "image", ratio = "aspect-video" }) {
  if (!src) {
    return (
      <div className={`${ratio} flex w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-cyan-400/30 bg-cyan-400/5 text-center text-sm text-cyan-200/70`}>
        <ImageIcon className="h-6 w-6" />
        <span className="px-4">{label}</span>
      </div>
    );
  }
  return (
    <figure>
      <div className={`${ratio} relative w-full overflow-hidden rounded-xl border border-white/10 bg-black/30`}>
        {type === "image" && <Image src={src} alt={label} fill className="object-contain" />}
        {type === "video" && <video src={src} controls className="h-full w-full" />}
        {type === "youtube" && <iframe src={src} title={label} allowFullScreen className="h-full w-full" />}
      </div>
      <figcaption className="mt-2 text-center text-xs text-slate-400">{label}</figcaption>
    </figure>
  );
}

export function ObjectiveList({ items }) {
  return (
    <ul className="space-y-2 text-sm text-slate-300">
      {items.map((o) => (
        <li key={o} className="flex gap-2">
          <span className={`${grad} mt-2 h-1.5 w-1.5 shrink-0 rounded-full`} />
          <span>{o}</span>
        </li>
      ))}
    </ul>
  );
}

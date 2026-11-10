"use client";

import { useEffect, useRef, useState } from "react";

export type TermLine = { cmd: string; out: string[] };

/**
 * A tiny terminal that "types" a few commands about me when it scrolls into view.
 * Full text is in the DOM from the start (for SEO and screen readers); the typing is a visual layer.
 */
export default function Terminal({ lines, title = "~/sri-pon-rama" }: { lines: TermLine[]; title?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const total = lines.reduce((n, l) => n + l.cmd.length, 0);
  const [typed, setTyped] = useState(total); // fully rendered until JS decides to animate
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setTyped(0);
    let id = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        setStarted(true);
        id = window.setInterval(() => {
          setTyped((t) => {
            if (t >= total) {
              clearInterval(id);
              return t;
            }
            return t + 1;
          });
        }, 38);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearInterval(id);
    };
  }, [total]);

  // Pure per-line view state: how many chars of each command are shown, and where the caret sits.
  const offsets = lines.map((_, i) => lines.slice(0, i).reduce((n, l) => n + l.cmd.length, 0));
  const shownAt = (i: number) => Math.max(0, Math.min(lines[i].cmd.length, typed - offsets[i]));
  const cursorLine = lines.findIndex((l, i) => shownAt(i) < l.cmd.length);

  return (
    <div
      ref={ref}
      className="glow-card overflow-hidden rounded-2xl border border-line bg-[#0a0c0c] font-mono text-[13px] leading-relaxed text-[#d5dcda] shadow-xl"
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" aria-hidden="true" />
        <span className="ml-3 text-[11px] text-white/45">{title}</span>
      </div>
      <div className="space-y-3 p-5">
        {lines.map((l, i) => {
          const shown = shownAt(i);
          const complete = shown === l.cmd.length;
          const isCursorLine = i === cursorLine;
          const visible = shown > 0 || i === 0;
          return (
            <div key={l.cmd} className={visible ? "" : "invisible"}>
              <p>
                <span className="text-[#b7d0cc]">➜</span> <span className="text-white/45">~</span>{" "}
                <span className={isCursorLine && started ? "caret" : ""}>{l.cmd.slice(0, shown)}</span>
              </p>
              <div className={`transition-opacity duration-300 ${complete ? "opacity-100" : "opacity-0"}`}>
                {l.out.map((o) => (
                  <p key={o} className="text-white/70">
                    {o}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
        <p className={typed >= total ? "" : "invisible"}>
          <span className="text-[#b7d0cc]">➜</span> <span className="text-white/45">~</span> <span className="caret" />
        </p>
      </div>
    </div>
  );
}

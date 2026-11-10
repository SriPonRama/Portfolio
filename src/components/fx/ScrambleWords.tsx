"use client";

import { useEffect, useRef } from "react";

const GLYPHS = "!<>-_\/[]{}—=+*^?#01";

/**
 * Cycles through words with a "decoding" scramble between them — a nod to curiosity and code.
 * Writes straight to the DOM (no React re-render per frame). Screen readers get the full list via sr-only text.
 */
export default function ScrambleWords({ words, interval = 2600 }: { words: string[]; interval?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let index = 0;
    let raf = 0;
    let current = words[0];

    const scrambleTo = (target: string) => {
      const from = current;
      current = target;
      const length = Math.max(from.length, target.length);
      const queue = Array.from({ length }, (_, i) => ({
        to: target[i] ?? "",
        start: Math.floor(Math.random() * 12),
        end: Math.floor(Math.random() * 12) + 12,
      }));
      let frame = 0;
      const tick = () => {
        let done = 0;
        let out = "";
        for (let i = 0; i < queue.length; i++) {
          const { to, start, end } = queue[i];
          if (frame >= end) {
            done++;
            out += to;
          } else if (frame >= start) out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          else out += from[i] ?? "";
        }
        el.textContent = out;
        frame++;
        if (done < queue.length) raf = requestAnimationFrame(tick);
      };
      tick();
    };

    // Only cycle while the hero is on screen, and wait a moment after load so the first paint stays calm.
    let id = 0;
    let visible = false;
    const start = () => {
      if (id || !visible) return;
      id = window.setInterval(() => {
        if (document.hidden) return;
        index = (index + 1) % words.length;
        scrambleTo(words[index]);
      }, interval);
    };
    const stop = () => {
      clearInterval(id);
      id = 0;
    };
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) start();
      else stop();
    });
    const delay = window.setTimeout(() => io.observe(el), 2500);
    return () => {
      clearTimeout(delay);
      io.disconnect();
      stop();
      cancelAnimationFrame(raf);
    };
  }, [words, interval]);

  return (
    <>
      <span className="sr-only">{words.join(", ")}</span>
      <span ref={ref} aria-hidden="true" className="caret">
        {words[0]}
      </span>
    </>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";

/**
 * One client island drives every micro-interaction on the page, so the rest stays server-rendered
 * (far less hydration work than one component per effect):
 *  - .reveal            → fade/slide in on first view (IntersectionObserver)
 *  - [data-countup]     → numbers count up on first view
 *  - [data-tilt]        → 3D tilt + glare toward the cursor
 *  - [data-magnetic]    → element drifts toward the cursor
 *  - .glow-card         → border glow follows the cursor
 *  - #spotlight         → soft page glow follows the cursor
 *  - scroll progress bar, back-to-top button, and a hello in the console
 * Everything respects prefers-reduced-motion and only reacts to fine pointers.
 */
export default function PageFx() {
  const bar = useRef<HTMLDivElement>(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = matchMedia("(pointer: fine)").matches;
    const cleanups: (() => void)[] = [];

    // ── Reveal on scroll ──
    const revealIO = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).dataset.visible = "true";
            revealIO.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => revealIO.observe(el));
    cleanups.push(() => revealIO.disconnect());

    // ── Count-up numbers ──
    if (!reduce) {
      const countIO = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (!e.isIntersecting) continue;
            countIO.unobserve(e.target);
            const el = e.target as HTMLElement;
            const value = el.dataset.countup ?? "";
            const m = value.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
            if (!m) continue;
            const [, prefix, num, suffix] = m;
            const target = parseFloat(num.replace(/,/g, ""));
            const decimals = num.includes(".") ? num.split(".")[1].length : 0;
            const fmt = (n: number) =>
              num.includes(",")
                ? n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
                : n.toFixed(decimals);
            const start = performance.now();
            const step = (now: number) => {
              const t = Math.min((now - start) / 1400, 1);
              el.textContent = `${prefix}${fmt(target * (1 - Math.pow(1 - t, 4)))}${suffix}`;
              if (t < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        },
        { threshold: 0.6 },
      );
      document.querySelectorAll<HTMLElement>("[data-countup]").forEach((el) => countIO.observe(el));
      cleanups.push(() => countIO.disconnect());
    }

    // ── Pointer-driven effects (one delegated listener, batched per animation frame) ──
    if (fine && !reduce) {
      const spotlight = document.getElementById("spotlight");
      let tiltEl: HTMLElement | null = null;
      let magEl: HTMLElement | null = null;
      let frame = 0;
      let last: PointerEvent | null = null;

      const resetTilt = () => {
        if (!tiltEl) return;
        tiltEl.style.setProperty("--rx", "0deg");
        tiltEl.style.setProperty("--ry", "0deg");
        tiltEl = null;
      };
      const resetMag = () => {
        if (!magEl) return;
        magEl.style.transform = "";
        magEl = null;
      };

      const apply = () => {
        frame = 0;
        const e = last;
        if (!e) return;
        const target = e.target as Element | null;

        spotlight?.style.setProperty("--x", `${e.clientX}px`);
        spotlight?.style.setProperty("--y", `${e.clientY}px`);

        const card = target?.closest?.(".glow-card") as HTMLElement | null;
        if (card) {
          const r = card.getBoundingClientRect();
          card.style.setProperty("--mx", `${e.clientX - r.left}px`);
          card.style.setProperty("--my", `${e.clientY - r.top}px`);
        }

        const tilt = target?.closest?.("[data-tilt]") as HTMLElement | null;
        if (tilt !== tiltEl) resetTilt();
        if (tilt) {
          tiltEl = tilt;
          const max = Number(tilt.dataset.tilt) || 6;
          const r = tilt.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width;
          const py = (e.clientY - r.top) / r.height;
          tilt.style.setProperty("--rx", `${(0.5 - py) * max * 2}deg`);
          tilt.style.setProperty("--ry", `${(px - 0.5) * max * 2}deg`);
          tilt.style.setProperty("--gx", `${px * 100}%`);
          tilt.style.setProperty("--gy", `${py * 100}%`);
        }

        const mag = target?.closest?.("[data-magnetic]") as HTMLElement | null;
        if (mag !== magEl) resetMag();
        if (mag) {
          magEl = mag;
          const r = mag.getBoundingClientRect();
          mag.style.transform = `translate(${(e.clientX - (r.left + r.width / 2)) * 0.25}px, ${(e.clientY - (r.top + r.height / 2)) * 0.25}px)`;
        }
      };

      const onPointer = (e: PointerEvent) => {
        last = e;
        if (!frame) frame = requestAnimationFrame(apply);
      };
      const onLeave = () => {
        resetTilt();
        resetMag();
      };
      document.addEventListener("pointermove", onPointer, { passive: true });
      document.documentElement.addEventListener("pointerleave", onLeave);
      cleanups.push(() => {
        cancelAnimationFrame(frame);
        document.removeEventListener("pointermove", onPointer);
        document.documentElement.removeEventListener("pointerleave", onLeave);
      });
    }

    // ── Scroll progress + back-to-top ──
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
        const past = window.scrollY > window.innerHeight;
        setShowTop((s) => (s === past ? s : past));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    cleanups.push(() => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    });

    // ── For the curious ones who open DevTools ──
    const w = window as unknown as { __hello?: boolean };
    if (!w.__hello) {
      w.__hello = true;
      console.log(
        "%cHey, curious one 👀%c\nYou opened DevTools — that's exactly what I'd do.\nThis site is Next.js 16 + Tailwind 4, no animation library. Press ⌘K / Ctrl+K to explore.\n— Sri Pon Rama · Build. Solve. Ship.",
        "font: 600 16px system-ui; color: #b7d0cc",
        "font: 13px system-ui; color: inherit",
      );
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <>
      <div ref={bar} aria-hidden="true" className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left scale-x-0 bg-accent" />
      <a
        href="#top"
        aria-label="Back to top"
        onClick={(e) => {
          e.preventDefault();
          const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
          window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
        }}
        tabIndex={showTop ? 0 : -1}
        className={`fixed bottom-6 right-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-muted shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <ArrowUp className="h-4 w-4" aria-hidden="true" />
      </a>
    </>
  );
}

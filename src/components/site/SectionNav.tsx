"use client";

import { useEffect, useState } from "react";
import { nav } from "@/content/site";

/** Vertical in-page nav for the sticky sidebar. Highlights the section currently in view. */
export default function SectionNav() {
  const [active, setActive] = useState<string>(nav[0].id);

  useEffect(() => {
    const sections = nav
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => el !== null);

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <nav aria-label="Sections" className="hidden lg:block">
      <ul className="space-y-1">
        {nav.map((item, i) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className="group flex items-center gap-4 py-1.5 text-sm"
              >
                <span className="w-5 font-mono text-[11px] text-subtle tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`h-px transition-all duration-300 ${
                    isActive ? "w-14 bg-accent" : "w-7 bg-line-strong group-hover:w-14 group-hover:bg-fg"
                  }`}
                />
                <span
                  className={`font-medium transition-colors ${
                    isActive ? "text-fg" : "text-subtle group-hover:text-fg"
                  }`}
                >
                  {item.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

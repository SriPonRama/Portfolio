"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FileText, Menu, X } from "lucide-react";
import { nav, site } from "@/content/site";
import ThemeToggle from "./ThemeToggle";
import { CommandMenuButton } from "./CommandMenu";

/** Sticky full-width top bar: logo, section links (with active state), search, theme, resume. */
export default function Navbar({ home = true }: { home?: boolean }) {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      // hide while reading downwards, reveal on any upward scroll
      if (Math.abs(y - lastY) > 6) {
        setHidden(y > lastY && y > 400);
        lastY = y;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    if (!home) return () => window.removeEventListener("scroll", onScroll);

    const sections = nav
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, [home]);

  const href = (id: string) => (home ? `#${id}` : `/#${id}`);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,transform] duration-300 ${
        hidden && !open ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled || open ? "border-b border-line bg-bg/85 backdrop-blur" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6 md:px-10">
        <Link href={home ? "#top" : "/"} className="font-mono text-sm font-medium tracking-tight text-fg">
          {site.shortName.toLowerCase().replace(/\s+/g, "")}
          <span className="text-accent">.</span>
        </Link>

        <nav aria-label="Sections" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={href(item.id)}
                  aria-current={active === item.id ? "true" : undefined}
                  className={`relative block rounded-md px-3 py-2 text-sm transition-colors ${
                    active === item.id ? "text-fg" : "text-subtle hover:text-fg"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3 -bottom-px h-px origin-center bg-accent transition-transform duration-300 ${
                      active === item.id ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <CommandMenuButton />
          <ThemeToggle />
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-9 items-center gap-2 rounded-lg bg-accent-fill px-3 text-sm font-medium text-accent-on transition-opacity hover:opacity-90 sm:inline-flex"
          >
            <FileText className="h-4 w-4" aria-hidden="true" />
            Resume
            <span className="sr-only">(PDF, opens in a new tab)</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line text-muted hover:text-fg lg:hidden"
          >
            {open ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Sections" className="border-t border-line lg:hidden">
          <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-1 px-6 py-4 md:px-10">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={href(item.id)}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-muted hover:bg-surface-2 hover:text-fg"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="col-span-2 sm:hidden">
              <a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 flex items-center justify-center gap-2 rounded-lg bg-accent-fill px-3 py-2.5 text-sm font-medium text-accent-on"
              >
                <FileText className="h-4 w-4" aria-hidden="true" /> Resume
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

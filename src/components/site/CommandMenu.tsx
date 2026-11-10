"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Command, CornerDownLeft, Copy, FileText, Moon, Search } from "lucide-react";
import { nav, site, socials } from "@/content/site";
import { GitHubIcon, LeetCodeIcon, LinkedInIcon } from "@/components/ui/icons";
import { toggleTheme } from "./ThemeToggle";
import { copyEmail } from "./CopyEmail";

const DIALOG_ID = "command-menu";
const INPUT_ID = "command-menu-input";
const getDialog = () => document.getElementById(DIALOG_ID) as HTMLDialogElement | null;

type Item = {
  id: string;
  label: string;
  group: "Navigate" | "Projects" | "Actions" | "Links";
  icon: React.ReactNode;
  run: () => void;
};

/**
 * ⌘K / Ctrl+K command menu built on the native <dialog> element
 * (free focus trapping, Esc to close, top-layer rendering).
 */
export default function CommandMenu({ projects }: { projects: { slug: string; title: string }[] }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const [toast, setToast] = useState("");

  const close = useCallback(() => getDialog()?.close(), []);
  const open = useCallback(() => {
    setQuery("");
    setIndex(0);
    getDialog()?.showModal();
    document.getElementById(INPUT_ID)?.focus();
  }, []);

  const items = useMemo<Item[]>(() => {
    const go = (href: string) => () => {
      close();
      if (href.startsWith("/#") && window.location.pathname === "/") {
        document.getElementById(href.slice(2))?.scrollIntoView({ behavior: "smooth" });
        history.replaceState(null, "", href.slice(1));
      } else {
        router.push(href);
      }
    };
    const ext = (url: string) => () => {
      close();
      window.open(url, "_blank", "noopener,noreferrer");
    };
    const arrow = <ArrowRight className="h-4 w-4" aria-hidden="true" />;
    return [
      ...nav.map((n) => ({ id: `nav-${n.id}`, label: n.label, group: "Navigate" as const, icon: arrow, run: go(`/#${n.id}`) })),
      ...projects.map((p) => ({
        id: `p-${p.slug}`,
        label: p.title,
        group: "Projects" as const,
        icon: arrow,
        run: go(`/projects/${p.slug}`),
      })),
      {
        id: "copy-email",
        label: "Copy email address",
        group: "Actions",
        icon: <Copy className="h-4 w-4" aria-hidden="true" />,
        run: async () => {
          const ok = await copyEmail();
          setToast(ok ? "Email copied" : site.email);
          setTimeout(() => setToast(""), 1600);
        },
      },
      { id: "resume", label: "Open resume (PDF)", group: "Actions", icon: <FileText className="h-4 w-4" aria-hidden="true" />, run: ext(site.resume) },
      {
        id: "theme",
        label: "Toggle light / dark theme",
        group: "Actions",
        icon: <Moon className="h-4 w-4" aria-hidden="true" />,
        run: () => toggleTheme(),
      },
      { id: "gh", label: "GitHub", group: "Links", icon: <GitHubIcon className="h-4 w-4" />, run: ext(socials.github.url) },
      { id: "li", label: "LinkedIn", group: "Links", icon: <LinkedInIcon className="h-4 w-4" />, run: ext(socials.linkedin.url) },
      { id: "lc", label: "LeetCode", group: "Links", icon: <LeetCodeIcon className="h-4 w-4" />, run: ext(socials.leetcode.url) },
    ];
  }, [close, router, projects]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? items.filter((i) => `${i.label} ${i.group}`.toLowerCase().includes(q)) : items;
  }, [items, query]);

  // Global shortcut + custom event so any button can open the menu.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (getDialog()?.open) close();
        else open();
      }
    };
    const onOpen = () => open();
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-command-menu", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-command-menu", onOpen);
    };
  }, [open, close]);

  const onInputKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIndex((i) => (i + 1) % Math.max(filtered.length, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIndex((i) => (i - 1 + filtered.length) % Math.max(filtered.length, 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      filtered[index]?.run();
    }
  };

  let lastGroup = "";

  return (
    <dialog
      id={DIALOG_ID}
      aria-label="Command menu"
      onClick={(e) => e.target === e.currentTarget && close()}
      className="m-auto mt-[12vh] w-[min(560px,calc(100vw-2rem))] overflow-hidden rounded-xl border border-line bg-surface p-0 text-fg shadow-2xl"
    >
      <div className="flex items-center gap-3 border-b border-line px-4">
        <Search className="h-4 w-4 text-subtle" aria-hidden="true" />
        <input
          id={INPUT_ID}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIndex(0);
          }}
          onKeyDown={onInputKey}
          placeholder="Search sections, projects, actions…"
          role="combobox"
          aria-expanded="true"
          aria-controls="cmd-list"
          aria-activedescendant={filtered[index] ? `cmd-${filtered[index].id}` : undefined}
          className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-subtle"
        />
        <kbd className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-subtle">ESC</kbd>
      </div>

      <ul id="cmd-list" role="listbox" className="max-h-[min(60vh,420px)] overflow-y-auto p-2">
        {filtered.length === 0 && <li className="px-3 py-8 text-center text-sm text-subtle">No results for “{query}”</li>}
        {filtered.map((item, i) => {
          const header = item.group !== lastGroup ? item.group : null;
          lastGroup = item.group;
          return (
            <li key={item.id} role="presentation">
              {header && (
                <div className="px-3 pb-1 pt-3 font-mono text-[10px] uppercase tracking-wider text-subtle">{header}</div>
              )}
              <div
                id={`cmd-${item.id}`}
                role="option"
                aria-selected={i === index}
                onMouseMove={() => setIndex(i)}
                onClick={() => item.run()}
                className={`flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm ${
                  i === index ? "bg-surface-2 text-fg" : "text-muted"
                }`}
              >
                <span className="text-subtle">{item.icon}</span>
                <span className="flex-1">{item.label}</span>
                {i === index && <CornerDownLeft className="h-3.5 w-3.5 text-subtle" aria-hidden="true" />}
              </div>
            </li>
          );
        })}
      </ul>

      <div className="flex items-center justify-between border-t border-line px-4 py-2 font-mono text-[10px] text-subtle">
        <span>↑↓ to move · ↵ to select</span>
        <span aria-live="polite" className="text-accent">
          {toast}
        </span>
        <span className="inline-flex items-center gap-1">
          <Command className="h-3 w-3" aria-hidden="true" />K to toggle
        </span>
      </div>
    </dialog>
  );
}

export function CommandMenuButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("open-command-menu"))}
      className={`inline-flex h-9 items-center gap-2 rounded-lg border border-line px-3 text-xs text-subtle transition-colors hover:border-line-strong hover:text-fg ${className}`}
      aria-haspopup="dialog"
    >
      <Search className="h-3.5 w-3.5" aria-hidden="true" />
      <span className="sr-only sm:not-sr-only">Search</span>
      <kbd className="hidden font-mono text-[10px] sm:inline">⌘K</kbd>
    </button>
  );
}

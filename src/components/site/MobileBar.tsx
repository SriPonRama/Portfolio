import Link from "next/link";
import { site } from "@/content/profile";
import ThemeToggle from "./ThemeToggle";
import { CommandMenuButton } from "./CommandMenu";

/** Compact top bar for small screens (the desktop sidebar carries these controls on lg+). */
export default function MobileBar({ home = true }: { home?: boolean }) {
  return (
    <div className="fixed inset-x-0 top-0 z-40 border-b border-line bg-bg/85 backdrop-blur lg:hidden">
      <div className="mx-auto flex h-14 max-w-screen-xl items-center justify-between px-6 md:px-10">
        <Link href={home ? "#main" : "/"} className="font-mono text-sm font-medium tracking-tight text-fg">
          {site.shortName.toLowerCase().replace(/\s+/g, "")}
          <span className="text-accent">.</span>
        </Link>
        <div className="flex items-center gap-2">
          <CommandMenuButton />
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

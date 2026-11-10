import Link from "next/link";
import { ArrowRight, FileText, MapPin } from "lucide-react";
import { site } from "@/content/profile";
import SectionNav from "./SectionNav";
import Socials from "./Socials";
import ThemeToggle from "./ThemeToggle";
import { CommandMenuButton } from "./CommandMenu";

/** Left column: identity, intent and navigation. Sticky on desktop, the hero on mobile. */
export default function Sidebar() {
  return (
    <header className="pt-24 lg:sticky lg:top-0 lg:flex lg:max-h-dvh lg:w-[44%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs text-muted">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {site.status}
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
          <Link href="/" className="focus-visible:rounded-md">
            {site.name}
          </Link>
        </h1>
        <p className="mt-3 text-lg font-medium tracking-tight text-fg/90 sm:text-xl">{site.role}</p>
        <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-muted">{site.headline}</p>

        <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-subtle">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          {site.location}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-accent-fill px-4 py-2.5 text-sm font-medium text-accent-on transition-opacity hover:opacity-90"
          >
            View my work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-sm font-medium text-fg transition-colors hover:border-line-strong hover:bg-surface-2"
          >
            <FileText className="h-4 w-4" aria-hidden="true" />
            Resume
            <span className="sr-only">(PDF, opens in a new tab)</span>
          </a>
        </div>

        <div className="mt-16">
          <SectionNav />
        </div>
      </div>

      <div className="mt-10 flex items-center justify-between gap-4 lg:mt-0">
        <Socials className="-ml-2.5" />
        <div className="hidden items-center gap-2 lg:flex">
          <CommandMenuButton />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

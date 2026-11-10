import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="mt-28 border-t border-line pt-10 pb-12 text-sm text-subtle">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{site.signoff}</p>
          <p className="mt-3 max-w-md leading-relaxed">
            Built with Next.js and Tailwind CSS, set in Geist. Press{" "}
            <kbd className="rounded border border-line px-1 font-mono text-[11px]">⌘K</kbd> to get around — and if you&apos;re
            curious, open the console.
          </p>
        </div>
        <p>© {new Date().getFullYear()} {site.name}</p>
      </div>
      {/* giant outlined wordmark; fills with the accent on hover */}
      <p
        aria-hidden="true"
        className="text-outline text-outline-hover mt-12 select-none text-center text-[15vw] font-semibold leading-none tracking-tighter transition-colors duration-500 lg:text-[10.5rem]"
      >
        {site.shortName}
      </p>
    </footer>
  );
}

import { site } from "@/content/profile";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line pt-8 pb-16 text-sm text-subtle">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{site.signoff}</p>
      <p className="mt-3 max-w-md leading-relaxed">
        Built with Next.js and Tailwind CSS, set in Geist. Press{" "}
        <kbd className="rounded border border-line px-1 font-mono text-[11px]">⌘K</kbd> to get around.
      </p>
      <p className="mt-3">© {new Date().getFullYear()} {site.name}</p>
    </footer>
  );
}

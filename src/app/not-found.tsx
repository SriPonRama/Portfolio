import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto flex min-h-dvh max-w-xl flex-col justify-center px-6">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-fg">This page didn&apos;t ship.</h1>
      <p className="mt-4 text-[15px] leading-relaxed text-muted">
        The link may be old or mistyped. Everything worth seeing is one click away.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex w-fit items-center gap-2 rounded-lg bg-accent-fill px-4 py-2.5 text-sm font-medium text-accent-on hover:opacity-90"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back home
      </Link>
    </main>
  );
}

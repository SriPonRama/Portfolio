"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { site } from "@/content/site";

export async function copyEmail() {
  try {
    await navigator.clipboard.writeText(site.email);
    return true;
  } catch {
    return false;
  }
}

export default function CopyEmail({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      onClick={async () => {
        if (await copyEmail()) {
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        }
      }}
      className={`inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-sm font-medium text-fg transition-colors hover:border-line-strong hover:bg-surface-2 ${className}`}
    >
      {copied ? <Check className="h-4 w-4 text-accent" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
      <span aria-live="polite">{copied ? "Copied!" : "Copy email"}</span>
    </button>
  );
}

import type { ReactNode, ElementType, CSSProperties } from "react";

/**
 * Fades content up once when it first scrolls into view.
 * Pure markup — the shared observer in components/fx/PageFx.tsx flips data-visible.
 * The hidden state only applies under html.js, so no-JS visitors always see everything.
 */
export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
}) {
  return (
    <Tag className={`reveal ${className}`} style={delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}>
      {children}
    </Tag>
  );
}

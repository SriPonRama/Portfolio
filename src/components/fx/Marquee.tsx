import type { ReactNode } from "react";

/**
 * Infinite running text. Content is rendered twice and the track slides by -50% for a seamless loop.
 * Pauses on hover; static under prefers-reduced-motion. The duplicate is hidden from screen readers.
 */
export default function Marquee({
  children,
  speed = 40,
  reverse = false,
  className = "",
  label,
}: {
  children: ReactNode;
  speed?: number;
  reverse?: boolean;
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`marquee overflow-hidden ${className}`}
      style={{ "--speed": `${speed}s`, "--dir": reverse ? "reverse" : "normal" } as React.CSSProperties}
      aria-label={label}
      role={label ? "region" : undefined}
    >
      <div className="marquee-track">
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

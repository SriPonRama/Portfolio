/** Very soft accent glow that follows the cursor on desktop (position set by PageFx on #spotlight). */
export default function Spotlight() {
  return <div id="spotlight" aria-hidden="true" className="spotlight pointer-events-none fixed inset-0 z-0 hidden lg:block" />;
}

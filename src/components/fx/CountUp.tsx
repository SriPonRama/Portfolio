/**
 * A number that counts up when it scrolls into view (animated by PageFx via [data-countup]).
 * Renders the final value on the server, so it's correct without JS and for screen readers.
 * Values without a leading number (e.g. "0–100", "Local") are left static.
 */
export default function CountUp({ value }: { value: string }) {
  const animatable = /^[^\d]*[\d,]+(?:\.\d+)?[^–]*$/.test(value) && !value.includes("–");
  return (
    <span data-countup={animatable ? value : undefined} className="tabular-nums">
      {value}
    </span>
  );
}

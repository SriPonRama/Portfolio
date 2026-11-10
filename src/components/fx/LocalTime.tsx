"use client";

import { useEffect, useState } from "react";

/** Live local time in Coimbatore (IST) — a small human touch: "here's where I am, right now". */
export default function LocalTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Asia/Kolkata",
    });
    const update = () => setTime(fmt.format(new Date()));
    update();
    // tick on the minute boundary, then once a minute
    let id = 0;
    const first = window.setTimeout(() => {
      update();
      id = window.setInterval(update, 60_000);
    }, 60_000 - (Date.now() % 60_000));
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, []);

  return <span className="inline-block min-w-[11ch] tabular-nums">{time ?? "--:-- --"} IST</span>;
}

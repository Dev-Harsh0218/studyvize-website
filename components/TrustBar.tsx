"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { value: 500, suffix: "+", label: "Students placed" },
  { value: 40, suffix: "+", label: "Partner universities" },
  { value: 12, label: "Countries covered" },
  { value: 96, suffix: "%", label: "Visa approval rate" },
];

function Counter({ target, suffix }: { target: number; suffix?: string }) {
  const reduce = useReducedMotion();
  const [value, setValue] = useState(() => (reduce ? target : 0));
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    if (reduce) return;
    const el = ref.current;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1600;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              setValue(Math.round(target * eased));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, reduce]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}

export default function TrustBar() {
  return (
    <section
      aria-label="StudyVize by the numbers"
      className="relative -mt-8 md:-mt-12 z-10"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 rounded-3xl bg-white shadow-[0_25px_60px_-30px_rgba(20,16,31,0.35)] border border-black/5 overflow-hidden"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-5 py-7 md:py-9 text-center ${
                i > 0
                  ? "md:border-l border-black/5"
                  : ""
              } ${i === 2 ? "md:border-l" : ""} ${
                i >= 2 ? "border-t md:border-t-0" : ""
              } ${i === 1 || i === 3 ? "border-l md:border-l" : ""}`}
            >
              <div className="font-display text-4xl md:text-5xl font-semibold text-brand-700">
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs md:text-sm text-ink-900/60 font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

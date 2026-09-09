"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const countries = [
  { code: "US", flag: "🇺🇸", name: "United States", unis: "1,200+ universities", tint: "from-blue-500/10 to-red-500/10" },
  { code: "UK", flag: "🇬🇧", name: "United Kingdom", unis: "160+ universities", tint: "from-red-500/10 to-blue-500/10" },
  { code: "CA", flag: "🇨🇦", name: "Canada", unis: "100+ universities", tint: "from-red-500/10 to-white/10" },
  { code: "AU", flag: "🇦🇺", name: "Australia", unis: "43 universities", tint: "from-yellow-500/10 to-green-500/10" },
  { code: "DE", flag: "🇩🇪", name: "Germany", unis: "400+ universities", tint: "from-yellow-500/10 to-red-500/10" },
  { code: "IE", flag: "🇮🇪", name: "Ireland", unis: "35+ universities", tint: "from-emerald-500/10 to-orange-500/10" },
  { code: "NZ", flag: "🇳🇿", name: "New Zealand", unis: "8 universities", tint: "from-sky-500/10 to-red-500/10" },
  { code: "NL", flag: "🇳🇱", name: "Netherlands", unis: "80+ universities", tint: "from-orange-500/10 to-blue-500/10" },
];

export default function Countries() {
  return (
    <section id="countries" className="relative py-28 md:py-36 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-brand-50 border border-brand-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
              Destinations
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05]">
              Twelve countries. <span className="text-brand-700 italic">One passport</span> to opportunity.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg text-ink-900/65 max-w-2xl">
              Whichever path fits your goals and budget, we know the terrain —
              intake windows, scholarships, cost of living, post-study work
              visas, and the little details that trip students up.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {countries.map((c, i) => (
            <motion.a
              key={c.code}
              href={`#country-${c.code.toLowerCase()}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: (i % 4) * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative flex flex-col justify-between rounded-2xl border border-black/5 bg-white p-6 h-52 overflow-hidden transition-shadow hover:shadow-[0_20px_50px_-25px_rgba(90,29,224,0.35)]"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${c.tint} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-brand-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="text-5xl leading-none" aria-hidden>
                  {c.flag}
                </div>
              </div>

              <div className="relative flex items-end justify-between gap-3">
                <div>
                  <div className="font-display text-xl font-semibold text-ink-900">
                    {c.name}
                  </div>
                  <div className="mt-1 text-xs text-ink-900/55 font-medium">
                    {c.unis}
                  </div>
                </div>
                <div className="rounded-full p-2 border border-black/5 group-hover:border-brand-200 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <ArrowUpRight size={16} strokeWidth={2.4} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

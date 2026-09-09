"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Consult",
    body:
      "A no-pressure 45-minute call where we map your profile against realistic destinations, budgets, and timelines.",
    duration: "Week 1",
  },
  {
    n: "02",
    title: "Shortlist universities",
    body:
      "A curated 8–12 school list balancing reach, target, and safety — with cost, scholarships and ROI laid out.",
    duration: "Weeks 2–3",
  },
  {
    n: "03",
    title: "Prep the application",
    body:
      "SOPs, LORs, resume, test scores, portfolio. Every draft goes through two rounds with a senior editor.",
    duration: "Weeks 4–10",
  },
  {
    n: "04",
    title: "Apply + visa",
    body:
      "We submit on time, track every response, then handle visa paperwork and interview prep once offers land.",
    duration: "Weeks 11–20",
  },
  {
    n: "05",
    title: "Travel and settle",
    body:
      "Forex, SIM, insurance, accommodation, first-week checklist — and a WhatsApp group with alumni on campus.",
    duration: "Before takeoff",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative py-28 md:py-36 bg-white overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-brand-50 border border-brand-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
              How it works
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05]">
              A five-step path, <span className="italic text-brand-700">from hello to hostel.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg text-ink-900/65 max-w-2xl">
              Most students go from first call to visa-in-hand in six months.
              Here&apos;s exactly what happens in between.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-16 md:mt-20">
          {/* vertical line */}
          <div
            aria-hidden
            className="absolute left-5 md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-brand-100 via-brand-300 to-brand-100 md:-translate-x-1/2"
          />

          <ol className="space-y-14 md:space-y-24">
            {steps.map((s, i) => {
              const isLeft = i % 2 === 0;
              return (
                <li key={s.n} className="relative md:grid md:grid-cols-2 md:gap-16">
                  {/* dot */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute left-5 md:left-1/2 top-2 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-brand-600 ring-8 ring-white shadow-[0_0_0_1px_rgba(90,29,224,0.35)]"
                  />

                  {/* card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.6,
                      delay: 0.15,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`ml-14 md:ml-0 ${
                      isLeft ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"
                    }`}
                  >
                    <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-brand-700">
                      <span className="rounded-md bg-brand-50 border border-brand-100 px-2 py-0.5">
                        Step {s.n}
                      </span>
                      <span className="text-ink-900/50">{s.duration}</span>
                    </div>
                    <h3 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-ink-900">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-ink-900/65 max-w-lg leading-relaxed md:inline-block">
                      {s.body}
                    </p>
                  </motion.div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

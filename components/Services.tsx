"use client";

import { motion } from "framer-motion";
import {
  Compass,
  FileText,
  ShieldCheck,
  BookOpen,
  Trophy,
  Banknote,
} from "lucide-react";
import Reveal from "./Reveal";

const services = [
  {
    icon: Compass,
    title: "1:1 Counseling",
    body:
      "Weekly sessions with a dedicated counselor who actually knows your target countries — not a call-center script.",
  },
  {
    icon: FileText,
    title: "Applications & essays",
    body:
      "SOPs, LORs, resumes, portfolio reviews — drafted, edited, and stress-tested against what admissions committees look for.",
  },
  {
    icon: ShieldCheck,
    title: "Visa documentation",
    body:
      "SEVIS, CAS, Study Permit, GTE — we prep every form and mock-interview you so nothing surprises you at the consulate.",
  },
  {
    icon: BookOpen,
    title: "IELTS & TOEFL prep",
    body:
      "Structured 6-week programs with mock tests and speaking practice. Most students clock a 1.5+ band improvement.",
  },
  {
    icon: Trophy,
    title: "Scholarships",
    body:
      "Merit, need-based, and country-specific — we build a scholarship shortlist for every student and help draft each essay.",
  },
  {
    icon: Banknote,
    title: "Student loans",
    body:
      "Guidance across HDFC Credila, Avanse, Prodigy, MPOWER and more. Compare rates side-by-side, no lender bias.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-28 md:py-36 bg-ink-50 overflow-hidden"
    >
      {/* soft background flourish */}
      <div
        aria-hidden
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-100 blur-3xl opacity-70"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <Reveal>
              <span className="inline-flex items-center rounded-full bg-white border border-brand-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
                What we do
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05]">
                Everything you need. <span className="italic text-brand-700">Nothing you don&apos;t.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="max-w-md">
            <p className="text-lg text-ink-900/65">
              Six focused services — bundled or à la carte. Most students pick
              the end-to-end package because it&apos;s cheaper than piecing it
              together, but you decide.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: (i % 3) * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative rounded-2xl bg-white border border-black/5 p-7 hover:shadow-[0_20px_50px_-25px_rgba(90,29,224,0.35)] transition-shadow"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <Icon size={22} strokeWidth={2.2} />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-ink-900">
                  {s.title}
                </h3>
                <p className="mt-3 text-ink-900/65 leading-relaxed">{s.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

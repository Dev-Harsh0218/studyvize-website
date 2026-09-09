"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const countries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "Ireland",
  "New Zealand",
  "Netherlands",
  "Not sure yet",
];

export default function CTA() {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [showToast, setShowToast] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("done");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);
    }, 700);
  };

  return (
    <section
      id="book"
      className="relative py-24 md:py-32 overflow-hidden mesh-bg text-white"
    >
      <div className="absolute inset-0 hero-grid opacity-60" />
      <div
        aria-hidden
        className="absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-brand-400/25 blur-3xl animate-float-slow"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-2">
            <Reveal>
              <span className="inline-flex items-center rounded-full bg-white/10 border border-white/15 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                Ready when you are
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.02]">
                Let&apos;s <span className="text-gradient italic">get started.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-lg text-white/75 leading-relaxed">
                Drop your details and a counselor will reach out within one
                business day for a free 45-minute consultation. No sales
                pitches. Just a real plan.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <ul className="mt-8 space-y-3 text-white/80">
                {[
                  "Personalised university shortlist in the call",
                  "Total-cost estimate for every option",
                  "Realistic timeline against your intake",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-brand-200 shrink-0 mt-0.5"
                    />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="relative rounded-3xl bg-white/10 border border-white/15 backdrop-blur-xl p-6 md:p-8 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)]"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white/85 mb-2"
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    type="text"
                    autoComplete="name"
                    placeholder="Priya Sharma"
                    className="w-full rounded-xl bg-white/10 border border-white/15 focus:border-white/40 focus:bg-white/15 px-4 py-3 text-white placeholder:text-white/40 outline-none transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white/85 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    autoComplete="email"
                    placeholder="you@email.com"
                    className="w-full rounded-xl bg-white/10 border border-white/15 focus:border-white/40 focus:bg-white/15 px-4 py-3 text-white placeholder:text-white/40 outline-none transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-white/85 mb-2"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    required
                    type="tel"
                    autoComplete="tel"
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl bg-white/10 border border-white/15 focus:border-white/40 focus:bg-white/15 px-4 py-3 text-white placeholder:text-white/40 outline-none transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="destination"
                    className="block text-sm font-medium text-white/85 mb-2"
                  >
                    Destination
                  </label>
                  <select
                    id="destination"
                    name="destination"
                    required
                    defaultValue=""
                    className="w-full rounded-xl bg-white/10 border border-white/15 focus:border-white/40 focus:bg-white/15 px-4 py-3 text-white outline-none transition-all appearance-none"
                  >
                    <option value="" disabled className="text-ink-900">
                      Choose a country
                    </option>
                    {countries.map((c) => (
                      <option key={c} value={c} className="text-ink-900">
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "done"}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-white text-ink-900 px-6 py-4 font-semibold text-base shadow-[0_10px_30px_-8px_rgba(255,255,255,0.35)] hover:shadow-[0_16px_40px_-8px_rgba(255,255,255,0.5)] hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {status === "done" ? (
                  <>
                    <CheckCircle2 size={18} /> We&apos;ll be in touch shortly
                  </>
                ) : status === "sending" ? (
                  <>Sending…</>
                ) : (
                  <>
                    Book my free consultation
                    <ArrowRight size={18} />
                  </>
                )}
              </button>

              <p className="mt-4 text-xs text-white/55 text-center">
                By submitting, you agree to be contacted by a StudyVize
                counselor. We&apos;ll never spam you or sell your details.
              </p>
            </form>
          </Reveal>
        </div>
      </div>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 rounded-full bg-ink-900 text-white pl-5 pr-6 py-3 shadow-2xl flex items-center gap-3"
          >
            <CheckCircle2 size={18} className="text-brand-200" />
            <span className="text-sm font-medium">
              Thanks — a counselor will call within 24 hours.
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

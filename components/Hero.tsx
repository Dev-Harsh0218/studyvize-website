"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";

const words = ["Study abroad,", "sorted."];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative overflow-hidden mesh-bg text-white pt-32 pb-24 md:pt-40 md:pb-32"
    >
      <div className="absolute inset-0 hero-grid pointer-events-none" />

      {/* floating shapes */}
      <div
        aria-hidden
        className="absolute -top-16 -left-16 h-64 w-64 rounded-full bg-brand-400/30 blur-3xl animate-float-slow"
      />
      <div
        aria-hidden
        className="absolute bottom-10 right-6 h-72 w-72 rounded-full bg-brand-500/25 blur-3xl animate-float-slower"
      />
      <div
        aria-hidden
        className="absolute top-1/3 right-1/4 h-32 w-32 rotate-12 rounded-3xl bg-white/5 backdrop-blur-md animate-float-slow hidden md:block"
      />
      <div
        aria-hidden
        className="absolute bottom-24 left-1/4 h-24 w-24 -rotate-6 rounded-2xl bg-white/5 backdrop-blur-md animate-float-slower hidden md:block"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-4 py-1.5 text-xs sm:text-sm text-white/90"
        >
          <Sparkles size={14} className="text-brand-200" />
          Fall 2026 intakes are open — spots limited
        </motion.div>

        <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[1.02] max-w-5xl">
          {words.map((w, i) => (
            <motion.span
              key={w}
              initial={{ opacity: 0, y: reduce ? 0 : 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.15 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="block"
            >
              {i === 1 ? (
                <span className="text-gradient italic pr-2">{w}</span>
              ) : (
                w
              )}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-7 max-w-2xl text-lg sm:text-xl text-white/75 leading-relaxed"
        >
          From your first coffee-chat with a counselor to the day you board the
          plane — StudyVize handles university shortlists, essays, visas,
          scholarships and loans. One team, one plan, zero guesswork.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#book"
            className="group inline-flex items-center gap-2 rounded-full bg-white text-ink-900 px-7 py-4 font-semibold text-base sm:text-[15px] shadow-[0_10px_30px_-8px_rgba(255,255,255,0.35)] hover:shadow-[0_16px_40px_-8px_rgba(255,255,255,0.5)] hover:-translate-y-0.5 transition-all"
          >
            Book a free consultation
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur px-7 py-4 font-semibold text-white hover:bg-white/10 hover:border-white/40 transition-colors"
          >
            <PlayCircle size={18} />
            See what we do
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/60"
        >
          <span>Loved by students placed at:</span>
          <span className="font-medium text-white/85">Illinois Urbana</span>
          <span className="text-white/30">·</span>
          <span className="font-medium text-white/85">UCL</span>
          <span className="text-white/30">·</span>
          <span className="font-medium text-white/85">UBC</span>
          <span className="text-white/30">·</span>
          <span className="font-medium text-white/85">TU Munich</span>
          <span className="text-white/30">·</span>
          <span className="font-medium text-white/85">Trinity College Dublin</span>
        </motion.div>
      </div>
    </section>
  );
}

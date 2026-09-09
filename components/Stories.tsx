"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Reveal from "./Reveal";

type Story = {
  quote: string;
  name: string;
  placed: string;
  program: string;
  image: string;
};

const stories: Story[] = [
  {
    quote:
      "I came in confused between the UK and Canada. My counselor walked me through cost, PR pathways, and post-study work rules until it just… clicked. Six months later I was in Toronto.",
    name: "Priya Sharma",
    placed: "University of Toronto",
    program: "MS in Computer Science · Fall 2024",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  },
  {
    quote:
      "The SOP editing round was brutal — in the best way. Three drafts in and my essay finally sounded like me. I had offers from four out of six schools I applied to.",
    name: "Aarav Mehta",
    placed: "TU Munich",
    program: "MSc in Robotics · Winter 2024",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    quote:
      "Loan comparison alone saved my family almost 2% on the interest rate. That&apos;s the kind of practical help you don&apos;t get from most consultancies.",
    name: "Sanya Iyer",
    placed: "UCL, London",
    program: "MSc in Data Science · Fall 2024",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=80",
  },
  {
    quote:
      "My IELTS jumped from 6.5 to 8.0 in the six-week bootcamp. The mock speaking sessions with an actual examiner were the game changer.",
    name: "Rohan Verma",
    placed: "Trinity College Dublin",
    program: "MSc in Immunology · Fall 2024",
    image:
      "https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&w=400&q=80",
  },
  {
    quote:
      "I got a 40% scholarship at Illinois that I never would have found on my own. The team knew exactly which departments were funding international students that cycle.",
    name: "Ananya Reddy",
    placed: "UIUC",
    program: "MS in Electrical Engineering · Fall 2024",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Stories() {
  const [index, setIndex] = useState(0);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % stories.length),
    []
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + stories.length) % stories.length),
    []
  );

  useEffect(() => {
    const id = setInterval(next, 7000);
    return () => clearInterval(id);
  }, [next]);

  const story = stories[index];

  return (
    <section
      id="stories"
      className="relative py-28 md:py-36 bg-gradient-to-b from-white to-ink-50 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <Reveal>
              <span className="inline-flex items-center rounded-full bg-brand-50 border border-brand-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
                Success stories
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05]">
                Real students. <span className="italic text-brand-700">Real acceptances.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="flex gap-2">
            <button
              onClick={prev}
              aria-label="Previous story"
              className="h-12 w-12 rounded-full border border-black/10 bg-white hover:bg-brand-50 hover:border-brand-200 grid place-items-center transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              aria-label="Next story"
              className="h-12 w-12 rounded-full border border-black/10 bg-white hover:bg-brand-50 hover:border-brand-200 grid place-items-center transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </Reveal>
        </div>

        <Reveal>
          <div className="relative rounded-3xl bg-white border border-black/5 shadow-[0_30px_60px_-40px_rgba(20,16,31,0.35)] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="grid md:grid-cols-5 gap-0"
              >
                <div className="relative md:col-span-2 aspect-[4/3] md:aspect-auto md:min-h-[420px] bg-brand-100">
                  <Image
                    src={story.image}
                    alt={`${story.name}, placed at ${story.placed}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 40vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 md:hidden">
                    <div className="font-display text-xl font-semibold text-white">
                      {story.name}
                    </div>
                    <div className="text-white/85 text-sm">
                      {story.program}
                    </div>
                  </div>
                </div>

                <div className="md:col-span-3 p-8 md:p-14 flex flex-col justify-center">
                  <Quote
                    size={36}
                    className="text-brand-500 mb-6"
                    strokeWidth={1.6}
                  />
                  <blockquote className="font-display text-2xl md:text-[28px] leading-snug text-ink-900">
                    &ldquo;{story.quote}&rdquo;
                  </blockquote>

                  <div className="mt-8 hidden md:block">
                    <div className="font-semibold text-ink-900">
                      {story.name}
                    </div>
                    <div className="text-ink-900/60 text-sm mt-0.5">
                      {story.program}
                    </div>
                    <div className="text-brand-700 text-sm font-medium mt-1">
                      Placed at {story.placed}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* dots */}
            <div className="absolute bottom-5 right-5 flex gap-1.5">
              {stories.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to story ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index
                      ? "w-6 bg-brand-600"
                      : "w-1.5 bg-black/15 hover:bg-black/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

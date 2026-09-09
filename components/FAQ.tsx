"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "How much does StudyVize cost?",
    a:
      "Our end-to-end package starts at ₹85,000 and depends on how many countries you apply to and which services you bundle. À la carte options (just SOP editing, just visa help) start at ₹15,000. Every quote is fixed upfront — no surprise add-ons.",
  },
  {
    q: "When should I start planning for a Fall intake?",
    a:
      "Ideally 10–12 months before your intended semester. That gives you a full test-prep window, time to iterate on essays, and a comfortable visa buffer. That said, we&apos;ve gotten students out in as little as four months when they had test scores ready.",
  },
  {
    q: "What&apos;s your visa approval rate?",
    a:
      "Currently 96% across US F-1, UK Student Visa, Canada Study Permit and Schengen student visas. We rehearse every interview and audit every document twice before submission.",
  },
  {
    q: "Do you help with scholarships?",
    a:
      "Yes — this is included in every package. We build a shortlist of merit, need-based and university-specific scholarships tailored to your profile, and help draft essays for each one.",
  },
  {
    q: "Can I really study abroad on a loan?",
    a:
      "Absolutely, and most of our students do. We work with HDFC Credila, Avanse, Prodigy Finance, MPOWER and public-sector banks. We&apos;ll compare interest rates, moratorium periods and collateral requirements side-by-side so you pick what actually fits your family&apos;s situation.",
  },
  {
    q: "What if my GRE / IELTS score is weak?",
    a:
      "You have two options: retake with our six-week prep bootcamp (average 1.5 band jump on IELTS), or apply to universities where your profile is still competitive — many top schools are now GRE-optional. We&apos;ll be honest about which is the better bet for you.",
  },
  {
    q: "Do you cover PhD applications?",
    a:
      "Yes, though it&apos;s a very different process. We work with PhD applicants on faculty research fit, cold-emailing professors, and research statements — usually starting 12 months out.",
  },
  {
    q: "What happens if I don&apos;t get in anywhere?",
    a:
      "It&apos;s rare because our shortlists include safety schools, but it happens. In that case we work with you on a January intake, a bridge program, or the next application cycle at no additional cost. Your success is how we get referrals.",
  },
];

function Item({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-black/10">
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-6 py-6 text-left group"
      >
        <span
          className={`font-display text-lg md:text-xl font-medium transition-colors ${
            open ? "text-brand-700" : "text-ink-900 group-hover:text-brand-700"
          }`}
          dangerouslySetInnerHTML={{ __html: q }}
        />
        <span
          className={`grid place-items-center h-9 w-9 rounded-full border transition-all shrink-0 ${
            open
              ? "bg-brand-600 border-brand-600 text-white rotate-45"
              : "border-black/10 text-ink-900 group-hover:border-brand-300"
          }`}
        >
          <Plus size={18} strokeWidth={2.4} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p
              className="pb-6 pr-14 text-ink-900/70 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: a }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28 md:py-36 bg-white">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-brand-50 border border-brand-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
              FAQ
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05]">
              Straight answers <span className="italic text-brand-700">to real questions.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14">
          {faqs.map((f, i) => (
            <Item
              key={f.q}
              q={f.q}
              a={f.a}
              open={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, GraduationCap } from "lucide-react";
import clsx from "clsx";

const links = [
  { href: "#countries", label: "Countries" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#stories", label: "Stories" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-lg bg-white/80 border-b border-black/5 shadow-[0_4px_20px_rgba(20,16,31,0.04)]"
          : "bg-transparent"
      )}
    >
      <nav
        className={clsx(
          "mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between transition-all duration-300",
          scrolled ? "h-14" : "h-20"
        )}
        aria-label="Main"
      >
        <Link
          href="#top"
          className="flex items-center gap-2 group"
          aria-label="StudyVize home"
        >
          <span
            className={clsx(
              "grid place-items-center rounded-xl transition-all duration-300",
              scrolled
                ? "h-8 w-8 bg-gradient-to-br from-brand-500 to-brand-800"
                : "h-9 w-9 bg-gradient-to-br from-brand-400 to-brand-700"
            )}
          >
            <GraduationCap
              className="text-white"
              size={scrolled ? 18 : 20}
              strokeWidth={2.4}
            />
          </span>
          <span
            className={clsx(
              "font-display font-semibold tracking-tight transition-colors",
              scrolled ? "text-ink-900" : "text-white"
            )}
            style={{ fontSize: scrolled ? "1.15rem" : "1.35rem" }}
          >
            StudyVize
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={clsx(
                "px-3.5 py-2 rounded-lg text-sm font-medium transition-colors",
                scrolled
                  ? "text-ink-900/80 hover:text-brand-700 hover:bg-brand-50"
                  : "text-white/85 hover:text-white hover:bg-white/10"
              )}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#book"
            className={clsx(
              "ml-3 inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all",
              "bg-brand-600 text-white hover:bg-brand-700 shadow-[0_8px_24px_-8px_rgba(90,29,224,0.6)]",
              "hover:shadow-[0_12px_28px_-8px_rgba(90,29,224,0.75)] hover:-translate-y-0.5"
            )}
          >
            Book consultation
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={clsx(
            "md:hidden p-2 rounded-lg transition-colors",
            scrolled
              ? "text-ink-900 hover:bg-brand-50"
              : "text-white hover:bg-white/10"
          )}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/95 backdrop-blur-lg">
          <div className="px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg text-ink-900 hover:bg-brand-50 hover:text-brand-700 font-medium"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full px-5 py-3 font-semibold bg-brand-600 text-white hover:bg-brand-700"
            >
              Book consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

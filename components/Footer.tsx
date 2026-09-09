import Link from "next/link";
import { GraduationCap, Mail } from "lucide-react";
import type { SVGProps } from "react";

const columns = [
  {
    title: "Destinations",
    links: [
      "United States",
      "United Kingdom",
      "Canada",
      "Australia",
      "Germany",
      "Ireland",
    ],
  },
  {
    title: "Services",
    links: [
      "Counseling",
      "Applications & essays",
      "Visa documentation",
      "IELTS / TOEFL prep",
      "Scholarships",
      "Student loans",
    ],
  },
  {
    title: "Company",
    links: ["About", "Success stories", "Careers", "Press", "Partners", "Contact"],
  },
];

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M18.244 2H21.5l-7.55 8.63L23 22h-6.86l-5.37-6.94L4.6 22H1.34l8.08-9.23L1 2h7.03l4.86 6.42L18.244 2zm-1.2 18h1.87L7.05 4H5.06l11.98 16z" />
    </svg>
  );
}

const socials = [
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: LinkedInIcon, label: "LinkedIn", href: "#" },
  { icon: XIcon, label: "X (Twitter)", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-white/80">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <Link href="#top" className="inline-flex items-center gap-2">
              <span className="grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-brand-400 to-brand-700">
                <GraduationCap className="text-white" size={20} strokeWidth={2.4} />
              </span>
              <span className="font-display text-xl font-semibold text-white">
                StudyVize
              </span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed max-w-xs">
              A boutique study-abroad consultancy helping Indian students find,
              apply to, and thrive at universities across the globe.
            </p>
            <a
              href="mailto:hello@studyvize.com"
              className="mt-5 inline-flex items-center gap-2 text-sm text-white hover:text-brand-200 transition-colors"
            >
              <Mail size={16} />
              hello@studyvize.com
            </a>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                {c.title}
              </h4>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} StudyVize Advisory Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="h-9 w-9 grid place-items-center rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 transition-colors"
              >
                <Icon width={16} height={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

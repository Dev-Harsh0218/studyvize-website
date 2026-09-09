import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://studyvize.com"),
  title: {
    default: "StudyVize — Study Abroad, Sorted.",
    template: "%s · StudyVize",
  },
  description:
    "StudyVize is a boutique study-abroad consultancy helping students in India apply to top universities across the US, UK, Canada, Australia, Germany, Ireland and beyond. Counseling, applications, essays, visa, IELTS/TOEFL prep and student loans — end-to-end.",
  keywords: [
    "study abroad",
    "study abroad consultants India",
    "MS in US",
    "MBA abroad",
    "IELTS prep",
    "student visa",
    "student loans",
    "StudyVize",
  ],
  openGraph: {
    title: "StudyVize — Study Abroad, Sorted.",
    description:
      "Your path to a global degree, mapped end-to-end. Counseling, applications, visa, and loans — handled.",
    url: "https://studyvize.com",
    siteName: "StudyVize",
    type: "website",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable}`}>
      <body className="bg-white text-ink-900 antialiased">{children}</body>
    </html>
  );
}

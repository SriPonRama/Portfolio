import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CommandMenu from "@/components/site/CommandMenu";
import { site, socials } from "@/content/profile";
import { projects } from "@/content/projects";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const description = `${site.role} at Sri Eshwar College of Engineering. ${site.headline} BloodLink, MediScan AI, Smart Attendance and more.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.shortName}`,
  },
  description,
  applicationName: site.shortName,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "Sri Pon Rama",
    "Sri Pon Rama S",
    "AI engineer",
    "software engineer",
    "full-stack developer",
    "MERN",
    "computer vision",
    "DevOps",
    "Sri Eshwar College of Engineering",
    "portfolio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.shortName,
    title: `${site.name} — ${site.role}`,
    description,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f7f6" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0d0d" },
  ],
};

// Runs before first paint: picks saved theme or system preference (dark by default) and flags JS for reveal animations.
const themeScript = `(function(){try{var d=document.documentElement;d.classList.add('js');var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}d.dataset.theme=t}catch(e){document.documentElement.dataset.theme='dark'}})();`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  image: `${site.url}${site.photo}`,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Coimbatore", addressRegion: "Tamil Nadu", addressCountry: "IN" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Sri Eshwar College of Engineering" },
  knowsAbout: ["Artificial Intelligence", "Machine Learning", "Computer Vision", "Full-stack development", "MERN", "DevOps"],
  sameAs: [socials.github.url, socials.linkedin.url, socials.leetcode.url],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-dvh bg-bg text-fg">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent-fill focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-accent-on"
        >
          Skip to content
        </a>
        {children}
        <CommandMenu projects={projects.map(({ slug, title }) => ({ slug, title }))} />
      </body>
    </html>
  );
}

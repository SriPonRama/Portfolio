import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sri Pon Rama | AI Engineer & Software Developer",
  description: "Portfolio of Sri Pon Rama, B.Tech AI & Data Science student at Sri Eshwar College of Engineering. Building intelligent solutions from healthcare diagnostics to algorithmic learning platforms.",
  keywords: [
    "Sri Pon Rama",
    "AI Engineer",
    "Software Developer",
    "Portfolio",
    "Machine Learning",
    "Sri Eshwar College of Engineering",
    "AlgomateAI",
    "BloodLink",
    "MediScan AI"
  ],
  authors: [{ name: "Sri Pon Rama" }],
  openGraph: {
    title: "Sri Pon Rama | AI Engineer & Software Developer",
    description: "Building intelligent solutions that bridge AI and real-world impact.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakarta.variable} scroll-smooth`}
    >
      <body className="bg-[#020202] text-white min-h-screen antialiased selection:bg-[#B7D0CC]/30 selection:text-[#B7D0CC]">
        {children}
      </body>
    </html>
  );
}

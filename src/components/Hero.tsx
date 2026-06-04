"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import Image from "next/image";

// Custom Github Icon SVG
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Custom Linkedin Icon SVG
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Custom LeetCode Icon
const LeetCodeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.777 9.778a1.375 1.375 0 0 0 0 1.942l4.8 4.8a1.375 1.375 0 0 0 1.943 0l9.777-9.778a1.375 1.375 0 0 0 0-1.942l-4.8-4.8A1.374 1.374 0 0 0 13.483 0zm0 1.442l4.243 4.243-9.213 9.213-4.243-4.243zm8.56 8.56a1.374 1.374 0 0 0-.962.414l-2.4 2.4a1.375 1.375 0 1 0 1.943 1.943l2.4-2.4a1.375 1.375 0 0 0-.981-2.357zM3.482 13.483a1.374 1.374 0 0 0-.961.414l-2.4 2.4a1.375 1.375 0 0 0 1.942 1.942l2.4-2.4a1.375 1.375 0 0 0-.981-2.356z" />
  </svg>
);

const SkillRackIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
    <line x1="12" y1="2" x2="12" y2="22" strokeDasharray="3 3" />
  </svg>
);

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/SriPonRama",
    icon: <GithubIcon className="h-4 w-4" />,
    id: "hero-social-github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sri-pon-rama-s-bb6199343/",
    icon: <LinkedinIcon className="h-4 w-4" />,
    id: "hero-social-linkedin",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/SriPonRama/",
    icon: <LeetCodeIcon />,
    id: "hero-social-leetcode",
  },
  {
    name: "SkillRack",
    url: "https://www.skillrack.com/faces/resume.xhtml?id=514554&key=b730fe723d90e524d819855fa24df90107674b9d",
    icon: <SkillRackIcon />,
    id: "hero-social-skillrack",
  },
];

const floatingBadges = [
  { value: "150+", label: "LeetCode", color: "from-[#B7D0CC]/12 to-[#383C33]/8", border: "border-[#B7D0CC]/20", textColor: "text-[#B7D0CC]" },
  { value: "800+", label: "SkillRack", color: "from-[#B7D0CC]/12 to-[#383C33]/8", border: "border-[#B7D0CC]/20", textColor: "text-[#B7D0CC]" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden"
    >
      {/* Mesh gradient background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-[#B7D0CC]/4 blur-[140px] animate-pulse-slow" />
        <div className="absolute bottom-[15%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#383C33]/8 blur-[120px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[50%] right-[30%] w-[300px] h-[300px] rounded-full bg-white/3 blur-[100px] animate-pulse-slow" style={{ animationDelay: "4s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10">

        {/* ── Left Content Column ── */}
        <div className="lg:col-span-7 text-left space-y-7">

          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glassmorphism text-xs font-bold tracking-widest text-[#B7D0CC] border border-[#B7D0CC]/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B7D0CC] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B7D0CC]" />
            </span>
            AVAILABLE FOR ROLES &amp; COLLABORATIONS
          </motion.div>

          {/* Name */}
          <div className="space-y-3">
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
              className="text-slate-400 font-medium text-lg tracking-wide"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold font-display leading-[1.05] tracking-tight"
            >
              <span className="bg-gradient-to-br from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                Sri Pon
              </span>{" "}
              <span className="gradient-text">Rama</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22, ease: "easeOut" }}
              className="text-lg sm:text-xl font-semibold text-slate-400 flex flex-wrap items-center gap-2"
            >
              <span className="text-[#B7D0CC]">AI Engineer</span>
              <span className="text-slate-700">·</span>
              <span>Software Developer</span>
              <span className="text-slate-700">·</span>
              <span>Problem Solver</span>
            </motion.h2>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3, ease: "easeOut" }}
            className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed"
          >
            Building intelligent solutions that bridge AI and real-world impact — from healthcare diagnostics to algorithmic learning platforms.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.38, ease: "easeOut" }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              id="hero-btn-projects"
              className="px-7 py-3.5 rounded-xl bg-[#B7D0CC] hover:bg-[#a5c2bd] text-black font-semibold text-sm flex items-center gap-2 shadow-lg shadow-[#B7D0CC]/15 transition-all duration-300 glow-btn"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#contact"
              id="hero-btn-contact"
              className="px-7 py-3.5 rounded-xl border border-[#B7D0CC]/35 bg-[#B7D0CC]/5 hover:bg-[#B7D0CC]/12 hover:border-[#B7D0CC]/50 text-[#B7D0CC] font-semibold text-sm flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Me <Mail className="h-4 w-4" />
            </a>

            <a
              href="#"
              id="hero-btn-resume"
              onClick={(e) => {
                e.preventDefault();
                alert("Resume download triggered (Placeholder)");
              }}
              className="px-7 py-3.5 rounded-xl border border-white/8 bg-white/4 hover:bg-white/8 hover:border-white/15 text-slate-300 font-semibold text-sm flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
            >
              Download Resume <Download className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.46, ease: "easeOut" }}
            className="pt-5 border-t border-white/6 flex items-center gap-5"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-600">
              Connect
            </span>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  id={link.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2.5 rounded-xl bg-white/4 hover:bg-[#B7D0CC]/15 text-slate-400 hover:text-white border border-white/6 hover:border-[#B7D0CC]/35 transition-all duration-300 hover:-translate-y-1"
                  aria-label={link.name}
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Right Visual Column ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Floating stat badges */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="absolute -left-4 top-1/4 z-20"
          >
            <div className={`px-4 py-3 rounded-2xl bg-gradient-to-br ${floatingBadges[0].color} backdrop-blur-xl border ${floatingBadges[0].border} shadow-lg animate-float`}
              style={{ animationDelay: "0s" }}
            >
              <p className={`text-xl font-extrabold font-display ${floatingBadges[0].textColor}`}>{floatingBadges[0].value}</p>
              <p className="text-xs text-slate-400 font-medium mt-0.5">{floatingBadges[0].label}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="absolute -right-2 bottom-1/4 z-20"
          >
            <div className={`px-4 py-3 rounded-2xl bg-gradient-to-br ${floatingBadges[1].color} backdrop-blur-xl border ${floatingBadges[1].border} shadow-lg animate-float`}
              style={{ animationDelay: "1.5s" }}
            >
              <p className={`text-xl font-extrabold font-display ${floatingBadges[1].textColor}`}>{floatingBadges[1].value}</p>
              <p className="text-xs text-slate-400 font-medium mt-0.5">{floatingBadges[1].label}</p>
            </div>
          </motion.div>

          {/* Outer decorative glow ring */}
          <div className="absolute w-[360px] h-[360px] sm:w-[400px] sm:h-[400px] rounded-full border border-[#B7D0CC]/15 animate-spin-slow pointer-events-none" />
          <div className="absolute w-[310px] h-[310px] sm:w-[345px] sm:h-[345px] rounded-full border border-dashed border-[#383C33]/20 animate-spin-reverse pointer-events-none" />
          <div className="absolute w-[265px] h-[265px] sm:w-[295px] sm:h-[295px] rounded-full border border-[#B7D0CC]/10 animate-ring-pulse pointer-events-none" />

          {/* Glow backdrop behind profile */}
          <div className="absolute w-[250px] h-[250px] sm:w-[280px] sm:h-[280px] rounded-full bg-gradient-to-br from-[#B7D0CC]/15 to-[#383C33]/15 blur-[50px] pointer-events-none" />

          {/* Circular Profile Image */}
          <div className="relative w-[220px] h-[220px] sm:w-[250px] sm:h-[250px] rounded-full overflow-hidden border-[3px] border-[#B7D0CC]/40 shadow-2xl shadow-[#B7D0CC]/10 group z-10">
            {/* Inner gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 pointer-events-none" />
            <Image
              src="/images/profile.jpg"
              alt="Sri Pon Rama"
              fill
              sizes="(max-width: 640px) 220px, 250px"
              priority
              className="object-cover object-[center_24%] saturate-105 brightness-[1.03] contrast-[0.97] transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Profile name tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-2xl glassmorphism border border-[#B7D0CC]/20 whitespace-nowrap z-20"
          >
            <p className="text-[10px] font-bold text-[#B7D0CC] uppercase tracking-widest text-center">AI &amp; DS Student</p>
            <p className="text-sm font-bold font-display text-white text-center mt-0.5">Sri Eshwar College of Engineering</p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

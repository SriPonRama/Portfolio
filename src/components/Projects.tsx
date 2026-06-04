"use client";

import { motion, Variants } from "framer-motion";
import { ExternalLink, Brain, Heart, Soup, ScanLine, Radio } from "lucide-react";

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

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
  icon: React.ReactNode;
  accentClass: string;
  tagStyle: string;
  svgGraphic: React.ReactNode;
}

const projects: Project[] = [
  {
    title: "AlgomateAI",
    description:
      "An AI-powered platform designed to help learners improve algorithmic thinking and coding skills through intelligent guidance and structured problem-solving.",
    tags: ["Python", "Flask", "AI", "TailwindCSS"],
    githubUrl: "https://github.com/SriPonRama",
    demoUrl: "#",
    icon: <Brain className="h-5 w-5 text-purple-400" />,
    accentClass: "card-accent-purple",
    tagStyle: "bg-purple-500/10 text-purple-300 border-purple-500/20 hover:border-purple-500/40",
    svgGraphic: (
      <svg className="w-full h-full text-purple-400/25" viewBox="0 0 200 120" fill="none">
        <circle cx="100" cy="60" r="25" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" />
        <circle cx="100" cy="60" r="10" fill="currentColor" fillOpacity="0.15" />
        <path d="M40 30 L80 50 M160 30 L120 50 M40 90 L80 70 M160 90 L120 70" stroke="currentColor" strokeWidth="1" />
        <circle cx="40" cy="30" r="5" fill="currentColor" />
        <circle cx="160" cy="30" r="5" fill="currentColor" />
        <circle cx="40" cy="90" r="5" fill="currentColor" />
        <circle cx="160" cy="90" r="5" fill="currentColor" />
        <circle cx="100" cy="60" r="5" fill="currentColor" />
        <motion.path d="M 40 30 L 80 50 L 100 60" stroke="#a855f7" strokeWidth="1.5" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} />
        <motion.path d="M 160 90 L 120 70 L 100 60" stroke="#3b82f6" strokeWidth="1.5" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 3, delay: 1.5, ease: "easeInOut" }} />
      </svg>
    ),
  },
  {
    title: "BloodLink",
    description:
      "A smart blood donor management platform that efficiently connects donors and recipients, helping reduce emergency response time through location-aware matching.",
    tags: ["Python", "Flask", "SQLite", "Leaflet.js"],
    githubUrl: "https://github.com/SriPonRama",
    demoUrl: "#",
    icon: <Heart className="h-5 w-5 text-rose-400" />,
    accentClass: "card-accent-rose",
    tagStyle: "bg-rose-500/10 text-rose-300 border-rose-500/20 hover:border-rose-500/40",
    svgGraphic: (
      <svg className="w-full h-full text-rose-400/25" viewBox="0 0 200 120" fill="none">
        <path d="M100 25 C100 25 70 50 70 70 C70 85 85 95 100 95 C115 95 130 85 130 70 C130 50 100 25 100 25 Z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="100" cy="70" r="10" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        <motion.circle cx="100" cy="70" r="22" stroke="#f43f5e" strokeWidth="1" initial={{ scale: 0.8, opacity: 0.6 }} animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.6, 0, 0.6] }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }} />
        <circle cx="50" cy="40" r="4" fill="currentColor" />
        <circle cx="150" cy="80" r="5" fill="currentColor" />
        <line x1="50" y1="40" x2="80" y2="60" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />
        <line x1="150" y1="80" x2="120" y2="75" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    title: "Food Donation Tracker",
    description:
      "A community-driven platform that connects food donors with NGOs and volunteers to reduce food wastage. It tracks donations, manages pickup requests, and helps distribute surplus food efficiently.",
    tags: ["Python", "Flask", "HTML", "CSS", "Database"],
    githubUrl: "https://github.com/SriPonRama",
    demoUrl: "#",
    icon: <Soup className="h-5 w-5 text-emerald-400" />,
    accentClass: "card-accent-emerald",
    tagStyle: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20 hover:border-emerald-500/40",
    svgGraphic: (
      <svg className="w-full h-full text-emerald-400/25" viewBox="0 0 200 120" fill="none">
        <path d="M40 70 h120 v8 a12 12 0 0 1 -12 12 h-96 a12 12 0 0 1 -12 -12 Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M55 70 C55 50 65 30 100 30 C135 30 145 50 145 70" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" />
        <circle cx="100" cy="50" r="8" fill="currentColor" fillOpacity="0.2" />
        <motion.path d="M 70 70 L 100 50 L 130 70" stroke="#10b981" strokeWidth="1.5" fill="none" animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} />
      </svg>
    ),
  },
  {
    title: "MediScan AI",
    description:
      "An AI-powered medical diagnosis platform that analyzes X-ray images using image processing and probabilistic prediction techniques, featuring multilingual support and patient management.",
    tags: ["Flask", "OpenCV", "Python", "ML", "ImageProc"],
    githubUrl: "https://github.com/SriPonRama",
    demoUrl: "#",
    icon: <ScanLine className="h-5 w-5 text-cyan-400" />,
    accentClass: "card-accent-cyan",
    tagStyle: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20 hover:border-cyan-500/40",
    svgGraphic: (
      <svg className="w-full h-full text-cyan-400/25" viewBox="0 0 200 120" fill="none">
        <rect x="50" y="20" width="100" height="80" rx="6" stroke="currentColor" strokeWidth="1.5" />
        <line x1="50" y1="40" x2="150" y2="40" stroke="currentColor" strokeWidth="0.8" />
        <line x1="50" y1="80" x2="150" y2="80" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="100" cy="60" r="18" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        <motion.line x1="55" y1="30" x2="145" y2="30" stroke="#06b6d4" strokeWidth="2" animate={{ y: [0, 60, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} />
      </svg>
    ),
  },
  {
    title: "Smart Blind Stick",
    description:
      "An IoT-based assistive navigation device for visually impaired individuals using ultrasonic sensing and audio/vibration feedback.",
    tags: ["Embedded Systems", "Arduino", "Sensors", "Hardware"],
    githubUrl: "https://github.com/SriPonRama",
    demoUrl: "#",
    icon: <Radio className="h-5 w-5 text-amber-400" />,
    accentClass: "card-accent-amber",
    tagStyle: "bg-amber-500/10 text-amber-300 border-amber-500/20 hover:border-amber-500/40",
    svgGraphic: (
      <svg className="w-full h-full text-amber-400/25" viewBox="0 0 200 120" fill="none">
        <rect x="95" y="15" width="10" height="90" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="100" cy="30" r="4" fill="currentColor" />
        <motion.path d="M115 20 A 15 15 0 0 1 115 40" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" initial={{ opacity: 0, x: -5 }} animate={{ opacity: [0, 1, 0], x: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }} />
        <motion.path d="M85 20 A 15 15 0 0 0 85 40" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" initial={{ opacity: 0, x: 5 }} animate={{ opacity: [0, 1, 0], x: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }} />
        <path d="M70 90 h60" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Projects() {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background blob */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#383C33]/10 blur-[130px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B7D0CC]/10 border border-[#B7D0CC]/20 text-xs font-bold tracking-widest text-[#B7D0CC] uppercase mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#B7D0CC]" />
            03 &mdash; Portfolio
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            id="projects-heading"
            className="text-4xl sm:text-5xl font-extrabold font-display"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-14 h-1 bg-gradient-to-r from-[#B7D0CC] to-[#383C33] rounded-full mx-auto mt-5"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -10 }}
              className={`relative p-6 rounded-3xl glassmorphism-card flex flex-col justify-between overflow-hidden group ${project.accentClass}`}
              id={`project-card-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
              style={{ transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s cubic-bezier(0.4,0,0.2,1), border-color 0.35s" }}
            >
              {/* Inner hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#B7D0CC]/6 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />

              <div className="relative z-10">
                {/* SVG Graphic */}
                <div className="h-40 w-full rounded-2xl bg-black/50 border border-white/5 group-hover:border-[#B7D0CC]/25 flex items-center justify-center relative overflow-hidden mb-5 transition-colors duration-300">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#B7D0CC]/6 to-transparent pointer-events-none" />
                  <div className="w-36">{project.svgGraphic}</div>
                </div>

                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="p-2 rounded-xl bg-white/5 border border-white/6">
                    {project.icon}
                  </span>
                  <h3 className="text-xl font-bold font-display text-white">{project.title}</h3>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
              </div>

              <div className="relative z-10">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 text-xs font-semibold rounded-lg border transition-colors duration-200 ${project.tagStyle}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/6">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs flex items-center justify-center gap-1.5 border border-white/8 hover:border-white/15 transition-all duration-200"
                  >
                    <GithubIcon className="h-3.5 w-3.5" /> GitHub
                  </a>
                  <a
                    href={project.demoUrl}
                    onClick={(e) => {
                      if (project.demoUrl === "#") {
                        e.preventDefault();
                        alert("Live demo coming soon!");
                      }
                    }}
                    className="flex-1 py-2.5 rounded-xl bg-[#B7D0CC] hover:bg-[#a5c2bd] text-black font-semibold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-[#B7D0CC]/15 transition-all duration-200 glow-btn"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

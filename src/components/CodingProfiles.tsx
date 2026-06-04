"use client";

import { motion, Variants } from "framer-motion";
import { ExternalLink, Terminal, BarChart2, Award, Zap } from "lucide-react";

// LeetCode Logo Icon SVG
const LeetCodeLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-amber-500">
    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.211.462-1.696-.008L5.367 14.18c-.43-.43-.43-1.122 0-1.551L14.7 3.088c.43-.43 1.122-.43 1.551 0l2.383 2.383c.43.43.43 1.122 0 1.551L10.22 15.438l5.881-5.688c.376-.363.982-.36 1.354.008l1.32 1.288c.394.385.398 1.018.008 1.408l-2.68 2.68z" />
  </svg>
);

// SkillRack Abstract Icon SVG
const SkillRackLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-8 w-8 text-purple-400">
    <path d="M4 17l6-6-6-6M12 19h8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const profileCards = [
  {
    name: "LeetCode",
    logo: <LeetCodeLogo />,
    problems: "150+",
    details: [
      { label: "Contest Rating", value: "1392" },
      { label: "Level", value: "Intermediate" }
    ],
    url: "https://leetcode.com/u/SriPonRama/",
    accentClass: "card-accent-green",
    hoverBorderShadow: "hover:border-[#B7D0CC]/35 hover:shadow-[0_25px_60px_rgba(183,208,204,0.12)]",
    innerGlow: "from-[#B7D0CC]/6 to-transparent",
    badgeBg: "bg-[#B7D0CC]/10 text-[#B7D0CC] border-[#B7D0CC]/20",
    btnBg: "bg-[#B7D0CC] hover:bg-[#a5c2bd] text-black shadow-lg shadow-[#B7D0CC]/15 transition-all duration-300 glow-btn",
    id: "leetcode-card",
  },
  {
    name: "SkillRack",
    logo: <SkillRackLogo />,
    problems: "800+",
    details: [
      { label: "Platform", value: "SkillRack" },
      { label: "Focus", value: "Algorithmic Speed" }
    ],
    url: "https://www.skillrack.com/faces/resume.xhtml?id=514554&key=b730fe723d90e524d819855fa24df90107674b9d",
    accentClass: "card-accent-green",
    hoverBorderShadow: "hover:border-[#383C33]/35 hover:shadow-[0_25px_60px_rgba(56,60,51,0.12)]",
    innerGlow: "from-[#383C33]/6 to-transparent",
    badgeBg: "bg-[#383C33]/15 text-[#B7D0CC] border-[#383C33]/30",
    btnBg: "bg-[#B7D0CC] hover:bg-[#a5c2bd] text-black shadow-lg shadow-[#B7D0CC]/15 transition-all duration-300 glow-btn",
    id: "skillrack-card",
  }
];

const statsCounters = [
  { value: "150+", label: "LeetCode Solved", icon: <Award className="h-5 w-5 text-[#B7D0CC]" /> },
  { value: "800+", label: "SkillRack Solved", icon: <Terminal className="h-5 w-5 text-[#B7D0CC]" /> },
  { value: "5+", label: "Major Projects", icon: <BarChart2 className="h-5 w-5 text-[#B7D0CC]" /> },
  { value: "3+", label: "Hackathons Participated", icon: <Zap className="h-5 w-5 text-[#B7D0CC]" /> },
];

export default function CodingProfiles() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="coding-profiles" className="py-32 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#383C33]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-[#B7D0CC]/5 blur-[100px] pointer-events-none" />

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
            05 &mdash; Metrics
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            id="profiles-heading"
            className="text-4xl sm:text-5xl font-extrabold font-display"
          >
            Coding <span className="gradient-text">Profiles &amp; Stats</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-14 h-1 bg-gradient-to-r from-[#B7D0CC] to-[#383C33] rounded-full mx-auto mt-5"
          />
        </div>

        {/* Profiles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          {profileCards.map((profile) => (
            <motion.div
              key={profile.name}
              variants={itemVariants}
              id={profile.id}
              className={`p-8 rounded-2xl glassmorphism-card relative flex flex-col justify-between group overflow-hidden ${profile.accentClass} ${profile.hoverBorderShadow}`}
            >
              {/* Inner hover glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${profile.innerGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl`} />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <span className="p-3 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center">
                      {profile.logo}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold font-display text-white">
                        {profile.name}
                      </h3>
                      <p className="text-xs text-gray-400 font-sans">Verified Profile</p>
                    </div>
                  </div>
                  <span className={`px-4 py-1.5 rounded-xl border text-sm font-extrabold tracking-wide ${profile.badgeBg}`}>
                    {profile.problems} Solved
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 py-6 border-t border-b border-white/8 mb-8">
                  {profile.details.map((detail) => (
                    <div key={detail.label} className="text-left">
                      <p className="text-xs text-gray-400 uppercase tracking-wider">{detail.label}</p>
                      <p className="text-lg font-bold font-display text-white mt-1">{detail.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-transform duration-200 relative z-10 ${profile.btnBg}`}
              >
                View Profile <ExternalLink className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Stats Counters Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {statsCounters.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="p-6 rounded-2xl glassmorphism-card text-center relative group overflow-hidden"
              id={`stat-counter-card-${index}`}
            >
              {/* Inner hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#B7D0CC]/6 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Pulse particle overlay / icon */}
              <div className="absolute top-4 right-4 p-1.5 rounded-lg bg-white/5 border border-white/5 text-gray-400 group-hover:text-white transition-colors relative z-10">
                {stat.icon}
              </div>
              
              <h3 className="text-4xl sm:text-5xl font-extrabold font-display bg-gradient-to-r from-white via-[#B7D0CC] to-[#383C33] bg-clip-text text-transparent group-hover:via-[#c8ddd9] transition-colors relative z-10 mt-4">
                {stat.value}
              </h3>
              
              <p className="text-xs sm:text-sm font-semibold text-gray-400 font-sans mt-3 tracking-wide relative z-10">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

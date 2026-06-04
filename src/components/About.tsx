"use client";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";
import { Variants } from "framer-motion";
export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18 },
    },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-[#383C33]/10 blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#B7D0CC]/5 blur-[100px] pointer-events-none" />
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
            01 &mdash; Story
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            id="about-heading"
            className="text-4xl sm:text-5xl font-extrabold font-display"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-14 h-1 bg-gradient-to-r from-[#B7D0CC] to-[#383C33] rounded-full mx-auto mt-5"
          />
        </div>
        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          {/* Biography Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 relative flex flex-col justify-between space-y-6 p-8 rounded-3xl glassmorphism-card overflow-hidden group"
          >
            {/* Accent stripe */}
            <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl bg-gradient-to-r from-[#B7D0CC] to-[#383C33]" />
            {/* Soft inner glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#B7D0CC]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />
            <div className="space-y-5 relative z-10">
              <div className="flex items-center gap-3">
                <span className="p-2.5 rounded-xl bg-[#B7D0CC]/10 border border-[#B7D0CC]/20">
                  <BookOpen className="h-5 w-5 text-[#B7D0CC]" />
                </span>
                <h3 className="text-2xl font-bold font-display text-white">
                  My Journey &amp; Aspiration
                </h3>
              </div>
              <p className="text-slate-300 leading-relaxed text-base sm:text-[17px]">
                I am a B.Tech Artificial Intelligence &amp; Data Science student at Sri Eshwar College of Engineering, passionate about AI, Machine Learning, Healthcare Technology, and Full Stack Development.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                I enjoy building impactful applications that solve real-world problems while continuously improving my problem-solving and software engineering skills. Whether designing computer vision diagnostics in healthcare or structuring algorithmic training modules, my target is always to deliver clean, scalable code that meets user needs.
              </p>
            </div>
            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/6 relative z-10">
              <div className="p-4 rounded-2xl bg-white/3 border border-white/6 hover:border-[#B7D0CC]/20 hover:bg-[#B7D0CC]/5 transition-all duration-300">
                <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-widest">Specialization</p>
                <p className="text-sm font-bold text-[#B7D0CC] mt-1.5">AI &amp; Data Science</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/3 border border-white/6 hover:border-[#383C33]/20 hover:bg-[#383C33]/5 transition-all duration-300">
                <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-widest">Core Interest</p>
                <p className="text-sm font-bold text-[#B7D0CC] mt-1.5 leading-snug">Full Stack, AI, Data Science, Cloud, Prompt Engineering</p>
              </div>
            </div>
          </motion.div>
          {/* Education Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 relative flex flex-col p-8 rounded-3xl glassmorphism-card overflow-hidden group"
          >
            {/* Accent stripe */}
            <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl bg-gradient-to-r from-[#383C33] to-[#B7D0CC]" />
            {/* Glow backdrop */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#B7D0CC]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="flex items-center gap-3 mb-8 relative z-10">
              <span className="p-2.5 rounded-xl bg-[#B7D0CC]/10 border border-[#B7D0CC]/20">
                <GraduationCap className="h-5 w-5 text-[#B7D0CC]" />
              </span>
              <h3 className="text-2xl font-bold font-display text-white">Education</h3>
            </div>
            {/* Timeline */}
            <div className="relative flex-grow flex flex-col justify-between pl-6 border-l-2 border-[#B7D0CC]/20 space-y-8 z-10">
              
              {/* College */}
              <div className="relative text-left">
                <span className="absolute -left-[31px] top-1.5 p-1.5 rounded-full bg-gradient-to-br from-[#B7D0CC] to-[#383C33] text-black ring-4 ring-[#020202] shadow-lg">
                  <Award className="h-3 w-3" />
                </span>
                <h4 className="text-lg font-bold font-display text-white leading-snug">
                  B.Tech Artificial Intelligence &amp; Data Science
                </h4>
                <p className="text-[#B7D0CC] text-sm font-semibold mt-1">
                  Sri Eshwar College of Engineering
                </p>
                <div className="flex items-center gap-1.5 text-slate-500 text-xs mt-2.5">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>2024 &ndash; 2028 (Current)</span>
                </div>
              </div>
              {/* HSC */}
              <div className="relative text-left">
                <span className="absolute -left-[31px] top-1.5 p-1.5 rounded-full bg-gradient-to-br from-[#B7D0CC]/60 to-[#383C33]/60 text-slate-400 ring-4 ring-[#020202] shadow-lg">
                  <GraduationCap className="h-3 w-3" />
                </span>
                <h4 className="text-base font-bold font-display text-white leading-snug">
                  Higher Secondary Certificate (HSC)
                </h4>
                <p className="text-slate-400 text-sm mt-1">
                  Vivek Vidyalaya Matric Higher Secondary School
                </p>
                <div className="flex items-center justify-between mt-2.5">
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>2023 &ndash; 2024 (Completed)</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-lg bg-[#B7D0CC]/10 text-[#B7D0CC] border border-[#B7D0CC]/20 text-xs font-extrabold">
                    93.5%
                  </span>
                </div>
              </div>
              {/* SSLC */}
              <div className="relative text-left">
                <span className="absolute -left-[31px] top-1.5 p-1.5 rounded-full bg-gradient-to-br from-[#B7D0CC]/60 to-[#383C33]/60 text-slate-400 ring-4 ring-[#020202] shadow-lg">
                  <GraduationCap className="h-3 w-3" />
                </span>
                <h4 className="text-base font-bold font-display text-white leading-snug">
                  Secondary School Leaving Certificate (SSLC)
                </h4>
                <p className="text-slate-400 text-sm mt-1">
                  Vivek Vidyalaya Matric Higher Secondary School
                </p>
                <div className="flex items-center justify-between mt-2.5">
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>2021 &ndash; 2022 (Completed)</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-lg bg-[#B7D0CC]/10 text-[#B7D0CC] border border-[#B7D0CC]/20 text-xs font-extrabold">
                    91.8%
                  </span>
                </div>
              </div>
              {/* CGPA Display */}
              <div className="p-5 rounded-2xl bg-white/3 border border-[#B7D0CC]/15 flex items-center justify-between shadow-inner mt-4">
                <div className="space-y-1">
                  <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-widest">
                    Cumulative GPA
                  </p>
                  <p className="text-xs text-slate-400">Undergraduate Study (Upto 3rd Sem)</p>
                </div>
                <div className="relative flex items-center justify-center w-16 h-16 rounded-full shadow-lg shadow-[#B7D0CC]/10">
                  {/* Gradient ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#B7D0CC] to-[#383C33] p-[2px]">
                    <div className="w-full h-full rounded-full bg-[#020202] flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-white font-extrabold text-lg font-display leading-none">7.9</p>
                        <p className="text-[9px] font-medium text-[#B7D0CC] mt-0.5">CGPA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

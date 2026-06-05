"use client";
import { motion, Variants } from "framer-motion";
import { Award, Trophy, Users, Star, Cpu } from "lucide-react";
import Image from "next/image";
export default function Achievements() {
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };
  return (
    <section id="achievements" className="py-32 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#383C33]/10 blur-[130px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#B7D0CC]/5 blur-[110px] pointer-events-none" />
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
            04 &mdash; Milestones
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            id="achievements-heading"
            className="text-4xl sm:text-5xl font-extrabold font-display"
          >
            Honors &amp; <span className="gradient-text">Achievements</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-14 h-1 bg-gradient-to-r from-[#B7D0CC] to-[#383C33] rounded-full mx-auto mt-5"
          />
        </div>
        {/* PRIMARY — Project Expo 2026 */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative rounded-3xl glassmorphism-card overflow-hidden p-6 sm:p-8 group"
            id="achievement-primary-expo"
          >
            {/* Accent stripe */}
            <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl bg-gradient-to-r from-[#B7D0CC] via-[#5c685b] to-[#383C33]" />
            {/* Glow spotlight */}
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#B7D0CC]/8 rounded-full blur-[90px] pointer-events-none group-hover:bg-[#B7D0CC]/15 transition-all duration-700" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Text */}
              <div className="lg:col-span-5 space-y-5 text-left order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#B7D0CC]/20 to-[#383C33]/10 border border-[#B7D0CC]/30 text-[#B7D0CC] text-xs font-bold tracking-wide">
                  <Trophy className="h-3.5 w-3.5 text-[#B7D0CC]" />
                  PRIMARY SHOWCASE
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-display leading-tight text-white">
                    2nd Prize — Project Expo 2026
                  </h3>
                  <p className="text-sm font-semibold text-[#B7D0CC] mt-1.5">
                    Sri Eshwar College of Engineering
                  </p>
                </div>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  Presented our AI-driven software solution at the annual Project Expo, securing the 2nd prize amongst highly competitive projects. Recognized for engineering excellence, practical implementation potential, and medical technology utility.
                </p>
                <div className="flex items-center gap-3 text-xs font-semibold text-slate-500">
                  <span className="px-3 py-1.5 rounded-xl bg-white/4 border border-white/6">Host: SECE</span>
                  <span className="px-3 py-1.5 rounded-xl bg-white/4 border border-white/6">Year: 2026</span>
                </div>
              </div>
              {/* Image */}
              <div className="lg:col-span-7 order-1 lg:order-2 w-full">
                <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#B7D0CC]/20 group-hover:border-[#B7D0CC]/40 transition-colors duration-300 shadow-inner shadow-black/80">
                  <Image
                    src="/images/project_expo.jpg"
                    alt="2nd Prize - Project Expo 2026 at Sri Eshwar College of Engineering"
                    fill
                    sizes="(max-width: 1024px) 100vw, 700px"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* SECONDARY — Futurix & InnoHack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-10">
          {/* Futurix 2026 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative rounded-3xl glassmorphism-card p-6 flex flex-col justify-between group overflow-hidden"
            id="achievement-futurix"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl bg-gradient-to-r from-[#383C33] to-[#B7D0CC]" />
            <div>
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/5 mb-5 shadow-md">
                <Image
                  src="/images/futurix.jpg"
                  alt="Futurix 2026 Achievement Photograph"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="p-2 rounded-xl bg-[#B7D0CC]/10 border border-[#B7D0CC]/20">
                  <Award className="h-4 w-4 text-[#B7D0CC]" />
                </span>
                <h3 className="text-xl font-bold font-display text-white">Futurix 2026</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Secured 2nd Place in Project Expo.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/6 text-xs text-slate-600 font-medium">
              National Technical Symposium Symposia
            </div>
          </motion.div>
          {/* InnoHack 2K26 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative rounded-3xl glassmorphism-card p-6 flex flex-col justify-between group overflow-hidden"
            id="achievement-innohack"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl bg-gradient-to-r from-[#383C33] to-[#B7D0CC]" />
            <div>
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/5 mb-5 shadow-md">
                <Image
                  src="/images/innohack.jpg"
                  alt="InnoHack 2K26 VIT Hackathon Photograph"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover object-[center_28%] group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="p-2 rounded-xl bg-[#B7D0CC]/10 border border-[#B7D0CC]/20">
                  <Users className="h-4 w-4 text-[#B7D0CC]" />
                </span>
                <h3 className="text-xl font-bold font-display text-white">InnoHack 2K26 (VIT Hackathon)</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Finalist among 150+ teams.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/6 text-xs text-slate-600 font-medium">
              Vellore Institute of Technology
            </div>
          </motion.div>
        </div>
        {/* ADDITIONAL — Timeline cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            {
              id: "achievement-sih",
              icon: <Star className="h-5 w-5" />,
              iconColor: "text-blue-400",
              iconBg: "bg-blue-500/10 border-blue-500/20",
              title: "SIH 2024 Internals",
              desc: "Selected up to Final Round in institutional trials.",
              delay: 0,
            },
            {
              id: "achievement-genai",
              icon: <Cpu className="h-5 w-5" />,
              iconColor: "text-cyan-400",
              iconBg: "bg-cyan-500/10 border-cyan-500/20",
              title: "Gen-AI Hackathon",
              desc: "Participated and developed a Generative AI application.",
              delay: 0.1,
            },
          ].map((item) => (
            <motion.div
              key={item.id}
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: item.delay }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-[#B7D0CC]/25 hover:bg-white/5 flex items-start gap-4 transition-all duration-300"
              id={item.id}
            >
              <span className={`p-3 rounded-xl border ${item.iconBg} ${item.iconColor} flex-shrink-0 mt-0.5`}>
                {item.icon}
              </span>
              <div>
                <h4 className="text-base font-bold font-display text-white mb-1">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

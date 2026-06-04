"use client";

import { motion, Variants } from "framer-motion";
import { Code2, Cpu, Settings } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 className="h-5 w-5 text-[#B7D0CC]" />,
    iconBg: "bg-[#B7D0CC]/10 border-[#B7D0CC]/20",
    accentClass: "card-accent-green",
    skills: ["C", "C++", "Python", "Java", "SQL"],
  },
  {
    title: "Frameworks & Tech",
    icon: <Settings className="h-5 w-5 text-[#B7D0CC]" />,
    iconBg: "bg-[#B7D0CC]/10 border-[#B7D0CC]/20",
    accentClass: "card-accent-green",
    skills: [
      "Flask", "TensorFlow", "OpenCV", "HTML", "CSS",
      "JavaScript", "Git", "GitHub", "Docker", "Kubernetes", "Jupyter Notebook",
    ],
  },
  {
    title: "Core Concepts",
    icon: <Cpu className="h-5 w-5 text-[#B7D0CC]" />,
    iconBg: "bg-[#B7D0CC]/10 border-[#B7D0CC]/20",
    accentClass: "card-accent-green",
    skills: [
      "Data Structures", "Algorithms", "OOP", "DBMS",
      "Data Science", "Machine Learning",
    ],
  },
];

export default function Skills() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background blob */}
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#383C33]/10 blur-[130px] pointer-events-none animate-pulse-slow" />

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
            02 &mdash; Abilities
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            id="skills-heading"
            className="text-4xl sm:text-5xl font-extrabold font-display"
          >
            Technical <span className="gradient-text">Skills</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-14 h-1 bg-gradient-to-r from-[#B7D0CC] to-[#383C33] rounded-full mx-auto mt-5"
          />
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="relative p-8 rounded-3xl glassmorphism-card flex flex-col space-y-6 overflow-hidden group card-accent-green"
            >
              {/* Inner hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#B7D0CC]/6 to-[#383C33]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />

              {/* Category Header */}
              <div className="flex items-center gap-3.5 relative z-10">
                <span className={`p-2.5 rounded-xl border ${category.iconBg} flex items-center justify-center`}>
                  {category.icon}
                </span>
                <h3 className="text-xl font-bold font-display text-white">{category.title}</h3>
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2 flex-grow content-start relative z-10">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                    whileHover={{ scale: 1.07, y: -2 }}
                    className="cursor-default px-3.5 py-1.5 text-sm font-medium rounded-xl bg-white/4 border border-white/8 hover:border-[#B7D0CC]/35 hover:bg-[#B7D0CC]/10 hover:text-white text-slate-300 transition-all duration-200 shadow-sm"
                    id={`skill-badge-${skill.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-12 relative overflow-hidden bg-transparent">
      {/* Gradient Top Border Line */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#B7D0CC]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left Brand Area */}
        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <span className="p-1.5 rounded-lg bg-[#B7D0CC]/10 text-[#B7D0CC] border border-[#B7D0CC]/20 group-hover:bg-[#B7D0CC]/20 group-hover:text-white transition-colors">
            <Sparkles className="h-4 w-4 animate-pulse" />
          </span>
          <span className="font-display font-bold tracking-tight text-white group-hover:text-[#B7D0CC] transition-colors">
            Sri Pon Rama
          </span>
        </motion.div>

        {/* Center Motivational Quote */}
        <p className="text-xs text-slate-500 font-medium italic text-center md:text-left max-w-md leading-relaxed">
          &ldquo;Driven by curiosity, fueled by code. Every line is a step toward building a smarter tomorrow.&rdquo;
        </p>

        {/* Right Quick Links */}
        <div className="flex items-center gap-6">
          <a
            href="#home"
            className="text-xs font-semibold text-gray-500 hover:text-[#B7D0CC] hover:shadow-[0_0_8px_rgba(183,208,204,0.2)] transition-all duration-300"
          >
            Back to Top
          </a>
          <span className="text-gray-800 text-xs">|</span>
          <a
            href="https://github.com/SriPonRama"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-gray-500 hover:text-[#B7D0CC] hover:shadow-[0_0_8px_rgba(183,208,204,0.2)] transition-all duration-300"
          >
            GitHub
          </a>
        </div>

      </div>
    </footer>
  );
}

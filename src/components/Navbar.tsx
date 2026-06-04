"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Coding", href: "#coding-profiles" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navItems.map((item) =>
        document.getElementById(item.href.replace("#", ""))
      );
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].href.replace("#", ""));
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "py-3 bg-[#020202]/75 backdrop-blur-2xl border-b border-[#B7D0CC]/10 shadow-xl shadow-[#020202]/50"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            id="nav-logo"
            className="flex items-center gap-2.5 text-xl font-extrabold font-display tracking-tight text-white group"
          >
            <span className="p-1.5 rounded-xl bg-gradient-to-br from-[#B7D0CC] to-[#383C33] text-black shadow-lg shadow-[#B7D0CC]/15 group-hover:scale-105 group-hover:shadow-[#B7D0CC]/35 transition-all duration-200">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent group-hover:to-[#B7D0CC] transition-colors duration-200">
              Sri Pon Rama
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 p-1 rounded-2xl bg-white/3 border border-white/6 backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.name}
                  href={item.href}
                  id={`nav-link-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-250 ${
                    isActive
                      ? "text-white"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-gradient-to-r from-[#B7D0CC]/20 to-[#383C33]/30 border border-[#B7D0CC]/20 rounded-xl -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              id="nav-cta-contact"
              className="px-5 py-2.5 text-sm font-semibold rounded-xl bg-[#B7D0CC] hover:bg-[#a5c2bd] text-black shadow-md shadow-[#B7D0CC]/10 hover:shadow-[#B7D0CC]/25 hover:-translate-y-0.5 transition-all duration-200 glow-btn"
            >
              Let&apos;s Build
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            id="nav-mobile-toggle"
            aria-label="Toggle menu"
            className="md:hidden p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/6 border border-white/6 transition-all duration-200"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden border-t border-[#B7D0CC]/10 bg-[#020202]/96 backdrop-blur-2xl overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col px-6 py-6 gap-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.replace("#", "");
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      id={`nav-mobile-link-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-gradient-to-r from-[#B7D0CC]/20 to-[#383C33]/15 border border-[#B7D0CC]/20 text-white"
                          : "text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"
                      }`}
                    >
                      {item.name}
                    </a>
                  );
                })}
                <a
                  href="#contact"
                  id="nav-mobile-cta"
                  onClick={() => setIsOpen(false)}
                  className="mt-3 w-full py-3.5 text-center text-sm font-bold rounded-xl bg-[#B7D0CC] text-black shadow-lg shadow-[#B7D0CC]/10"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}

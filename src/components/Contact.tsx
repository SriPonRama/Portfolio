"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle2 } from "lucide-react";

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

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactMethods = [
    {
      name: "Email",
      value: "sriponrama03@gmail.com",
      url: "mailto:sriponrama03@gmail.com",
      icon: <Mail className="h-6 w-6 text-[#B7D0CC]" />,
      innerGlow: "from-[#B7D0CC]/6 to-transparent",
      hoverBorder: "hover:border-[#B7D0CC]/35",
      id: "contact-email-link",
    },
    {
      name: "LinkedIn",
      value: "sri-pon-rama-s-bb6199343",
      url: "https://www.linkedin.com/in/sri-pon-rama-s-bb6199343/",
      icon: <LinkedinIcon className="h-6 w-6 text-[#B7D0CC]" />,
      innerGlow: "from-[#B7D0CC]/6 to-transparent",
      hoverBorder: "hover:border-[#B7D0CC]/35",
      id: "contact-linkedin-link",
    },
    {
      name: "GitHub",
      value: "SriPonRama",
      url: "https://github.com/SriPonRama",
      icon: <GithubIcon className="h-6 w-6 text-[#B7D0CC]" />,
      innerGlow: "from-[#B7D0CC]/6 to-transparent",
      hoverBorder: "hover:border-[#B7D0CC]/35",
      id: "contact-github-link",
    },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-[#383C33]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#B7D0CC]/5 blur-[120px] pointer-events-none" />

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
            06 &mdash; Connection
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            id="contact-heading"
            className="text-4xl sm:text-5xl font-extrabold font-display"
          >
            Let&apos;s Build Something <span className="gradient-text">Amazing Together</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-14 h-1 bg-gradient-to-r from-[#B7D0CC] to-[#383C33] rounded-full mx-auto mt-5"
          />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-display text-white text-left">
                Get in Touch
              </h3>
              <p className="text-gray-400 text-sm sm:text-base font-sans leading-relaxed text-left">
                I am always open to discussing new projects, creative ideas, or opportunities in AI, Machine Learning, and Full Stack development. Feel free to reach out via email or connect with me on socials!
              </p>
            </div>

            {/* Contact Methods Stack */}
            <div className="space-y-4 flex-grow justify-center flex flex-col pt-6 lg:pt-0">
              {contactMethods.map((method) => (
                <a
                  key={method.name}
                  href={method.url}
                  id={method.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-5 rounded-2xl glassmorphism-card flex items-center gap-4 group relative overflow-hidden ${method.hoverBorder}`}
                >
                  {/* Inner hover glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.innerGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl`} />

                  <span className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center relative z-10 transition-all duration-300 group-hover:scale-105">
                    {method.icon}
                  </span>
                  <div className="text-left relative z-10">
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                      {method.name}
                    </p>
                    <p className="text-sm sm:text-base font-bold text-white mt-0.5 break-all group-hover:text-[#B7D0CC] transition-colors">
                      {method.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              className="p-8 rounded-3xl glassmorphism-card relative h-full flex flex-col justify-between"
            >
              {/* Inner hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#B7D0CC]/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />

              <form onSubmit={handleSubmit} className="space-y-6 text-left relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="form-name" className="text-xs font-semibold text-[#B7D0CC] uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="form-name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full px-5 py-3.5 rounded-xl bg-white/4 border border-white/8 focus:border-[#B7D0CC]/50 focus:bg-white/8 focus:ring-2 focus:ring-[#B7D0CC]/20 text-white font-sans text-sm focus:outline-none transition-all duration-300 shadow-inner"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="form-email" className="text-xs font-semibold text-[#B7D0CC] uppercase tracking-wider">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="form-email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email"
                      className="w-full px-5 py-3.5 rounded-xl bg-white/4 border border-white/8 focus:border-[#B7D0CC]/50 focus:bg-white/8 focus:ring-2 focus:ring-[#B7D0CC]/20 text-white font-sans text-sm focus:outline-none transition-all duration-300 shadow-inner"
                    />
                  </div>
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label htmlFor="form-message" className="text-xs font-semibold text-[#B7D0CC] uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="form-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project or inquiry..."
                    className="w-full px-5 py-3.5 rounded-xl bg-white/4 border border-white/8 focus:border-[#B7D0CC]/50 focus:bg-white/8 focus:ring-2 focus:ring-[#B7D0CC]/20 text-white font-sans text-sm focus:outline-none transition-all duration-300 shadow-inner resize-none"
                  />
                </div>

                {/* Submission feedback messages */}
                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-sm font-semibold flex items-center gap-2"
                    >
                      <CheckCircle2 className="h-5 w-5" /> Message sent successfully! I will get back to you soon.
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit button */}
                <button
                  type="submit"
                  id="form-submit-btn"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[#B7D0CC] hover:bg-[#a5c2bd] text-black font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#B7D0CC]/15 transition-all duration-300 glow-btn disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin rounded-full h-4 w-4 border-2 border-black border-t-transparent" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

/** Small, client-safe identity data (shared by client components without pulling in all page copy). */

export const site = {
  url: "https://sriponrama-portfolio.onrender.com",
  name: "Sri Pon Rama S",
  shortName: "Sri Pon Rama",
  role: "AI & Software Engineering Student",
  // GitHub bio: "Building practical AI & software systems"
  headline: "I build practical AI and full-stack systems.",
  intro:
    "B.Tech AI & Data Science student at Sri Eshwar College of Engineering. I turn real-world problems into working software — from X-ray analysis and face-recognition attendance to emergency blood-donor matching.",
  motto: ["Build.", "Solve.", "Ship."],
  signoff: "Constantly learning. Always shipping.",
  location: "Coimbatore, Tamil Nadu, India",
  status: "Open to internships & collaborations",
  email: "sriponrama.s2024aids@sece.ac.in",
  resume: "/Sri_Pon_Rama_Resume.pdf",
  photo: "/images/profile.jpg",
} as const;

export const socials = {
  github: { label: "GitHub", handle: "SriPonRama", url: "https://github.com/SriPonRama" },
  linkedin: {
    label: "LinkedIn",
    handle: "sri-pon-rama-s",
    url: "https://www.linkedin.com/in/sri-pon-rama-s-bb6199343/",
  },
  leetcode: { label: "LeetCode", handle: "SriPonRama", url: "https://leetcode.com/u/SriPonRama/" },
  skillrack: {
    label: "SkillRack",
    handle: "SriPonRama",
    url: "https://www.skillrack.com/faces/resume.xhtml?id=514554&key=b730fe723d90e524d819855fa24df90107674b9d",
  },
} as const;

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

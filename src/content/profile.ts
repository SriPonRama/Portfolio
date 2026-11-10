/**
 * Single source of truth for everything about Sri Pon Rama.
 * Mirrors the resume (public/Sri_Pon_Rama_Resume.pdf) and the GitHub profile README
 * so all three tell the same story. Update here, and the whole site follows.
 */

import { site, socials, nav } from "./site";

export { site, socials, nav };

export const about = [
  "I'm a B.Tech Artificial Intelligence & Data Science student at Sri Eshwar College of Engineering (2024 – 2028), and I like building things that are actually used. Most of my projects start with a real problem — a rural school still doing manual roll calls, a hospital hunting for a compatible blood donor, a clinic without a radiologist on hand.",
  "My work sits where AI meets full-stack engineering: computer vision with OpenCV, MERN applications with secure role-based auth, and the DevOps to ship them — Docker, Kubernetes (k3s), GitLab CI/CD and Argo CD.",
  "Outside projects I keep my fundamentals sharp with daily problem solving in Java and C++, and I've taken my work to hackathons and expos — winning second prize at Project Expo 2026 and reaching the finals of VIT's InnoHack 2K26.",
];

export type Experience = {
  role: string;
  org?: string;
  orgUrl?: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    role: "DevOps Intern",
    period: "2026",
    summary:
      "Took applications from source to production-grade orchestration with containers, CI/CD and GitOps.",
    highlights: [
      "Containerized applications with Docker and Docker Hub, and configured Kubernetes (k3s) clusters with Deployments, Services and NodePort.",
      "Automated build, test and deployment workflows with GitLab CI/CD pipelines.",
      "Set up GitOps delivery with Argo CD to continuously sync Git repositories with the cluster.",
    ],
    stack: ["Docker", "Kubernetes (k3s)", "GitLab CI/CD", "Argo CD"],
  },
  {
    role: "MERN Stack Intern",
    org: "Infoziant",
    orgUrl: "https://www.infoziant.com/",
    period: "2025",
    summary:
      "Built two responsive full-stack web applications end to end on the MERN stack.",
    highlights: [
      "Engineered 2 responsive full-stack applications, integrating React frontends with backend REST APIs.",
      "Architected 10+ reusable React components and designed RESTful APIs for authentication, data exchange and business logic.",
      "Optimized MongoDB schemas to streamline CRUD operations.",
    ],
    stack: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "JWT"],
  },
];

export type Achievement = {
  title: string;
  event: string;
  detail: string;
  year: string;
  image?: { src: string; alt: string };
  project?: string; // slug of the related project, if any
};

export const achievements: Achievement[] = [
  {
    title: "Second Prize",
    event: "Project Expo 2026 · Sri Eshwar College of Engineering",
    detail:
      "Presented our AI-driven solution at SECE's annual Project Expo and placed second among a highly competitive field, recognised for practical, real-world implementation.",
    year: "2026",
    image: {
      src: "/images/project_expo.jpg",
      alt: "Sri Pon Rama and team receiving the second prize at Project Expo 2026, Sri Eshwar College of Engineering",
    },
  },
  {
    title: "Finalist",
    event: "InnoHack 2K26 · VIT Hackathon",
    detail: "Selected for the final round from 150+ competing teams at Vellore Institute of Technology's national hackathon.",
    year: "2026",
    image: {
      src: "/images/innohack.jpg",
      alt: "Sri Pon Rama and teammates building their project during the InnoHack 2K26 hackathon at VIT",
    },
  },
  {
    title: "Final Round",
    event: "Smart India Hackathon (SIH) 2025 · Internals",
    detail: "Advanced to the final round of the institute-level selection for India's national Smart India Hackathon.",
    year: "2025",
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Java", "Python", "C++", "C", "JavaScript", "HTML5", "CSS"] },
  { group: "Frontend", items: ["React", "Redux Toolkit", "Vite", "Tailwind CSS", "Responsive UI"] },
  { group: "Backend", items: ["Node.js", "Express", "Flask", "REST APIs", "JWT Auth"] },
  { group: "AI / ML", items: ["Machine Learning", "OpenCV", "Computer Vision", "Jupyter"] },
  { group: "Databases", items: ["MongoDB", "MySQL", "PostgreSQL", "SQLite"] },
  { group: "DevOps", items: ["Docker", "Kubernetes (k3s)", "GitLab CI/CD", "Argo CD"] },
  { group: "Tools", items: ["Git", "GitHub", "Postman", "VS Code"] },
  { group: "Core", items: ["Data Structures & Algorithms", "OOP", "DBMS", "SDLC"] },
];

/** Live LeetCode numbers checked Nov 2026: 288 solved, rating 1718, top 12.87%. */
export const problemSolving = [
  {
    platform: "LeetCode",
    url: socials.leetcode.url,
    headline: "280+",
    caption: "problems solved",
    facts: ["1,700+ contest rating", "Top 13% globally", "Java · C++ · C · Python"],
  },
  {
    platform: "SkillRack",
    url: socials.skillrack.url,
    headline: "850+",
    caption: "challenges solved",
    facts: ["250+ bronze badges", "Daily practice"],
  },
];

export const education = [
  {
    degree: "B.Tech, Artificial Intelligence & Data Science",
    school: "Sri Eshwar College of Engineering, Coimbatore",
    period: "2024 – 2028",
    score: "CGPA 8.39",
    note: "through semester IV",
  },
  {
    degree: "Higher Secondary (HSC)",
    school: "Vivek Vidyalaya Matriculation Higher Secondary School",
    period: "2023 – 2024",
    score: "93.5%",
  },
  {
    degree: "Secondary (SSLC)",
    school: "Vivek Vidyalaya Matriculation Higher Secondary School",
    period: "2021 – 2022",
    score: "91.8%",
  },
];

export const certifications = [
  { name: "Design Thinking – A Primer", issuer: "NPTEL", year: "2026", note: "76%" },
  { name: "Programming in Java", issuer: "NPTEL", year: "2025", note: "96%" },
  { name: "Mastering DSA using C, C++", issuer: "Udemy", year: "2025" },
  { name: "Python Programming Mastery", issuer: "Udemy", year: "2025" },
  { name: "Responsive Web Design", issuer: "freeCodeCamp", year: "2024" },
];

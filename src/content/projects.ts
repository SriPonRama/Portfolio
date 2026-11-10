/**
 * Projects, written from the resume, the GitHub profile README and each repo's code.
 * Every number here is something the repo actually contains — nothing is invented.
 */

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  status?: "Live" | "In progress";
  context?: string; // hackathon / event / internship context
  featured: boolean;
  stack: string[];
  summary: string;
  metrics: { value: string; label: string }[];
  problem: string;
  approach: string[];
  features: string[];
  learnings?: string;
  credit?: string;
  links: { repo: string; live?: string };
  image?: { src: string; alt: string };
};

const gh = (repo: string) => `https://github.com/SriPonRama/${repo}`;

export const projects: Project[] = [
  {
    slug: "bloodlink",
    title: "BloodLink",
    tagline: "Smart blood donation & emergency request platform",
    year: "2026",
    status: "Live",
    featured: true,
    stack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT"],
    summary:
      "A MERN platform that connects donors, hospitals and blood banks, so an emergency request reaches willing donors in minutes instead of a chain of phone calls.",
    metrics: [
      { value: "3", label: "user roles" },
      { value: "12", label: "REST endpoints" },
      { value: "3", label: "urgency levels" },
    ],
    problem:
      "When a hospital needs blood urgently, staff still work the phones — calling donors and blood banks one by one while the clock runs. Donors who would gladly help never hear about the request in time.",
    approach: [
      "Modelled three roles — Donor, Hospital and Blood Bank — each with its own dashboard, protected by JWT authentication, bcrypt password hashing and role-checking middleware.",
      "Designed the request lifecycle around urgency (normal, urgent, emergency) and status (active, fulfilled, expired, cancelled) so hospitals always see what still needs attention.",
      "Built a donor-response flow: donors respond to a request, hospitals accept or deny, and the donation is recorded against the donor's history and eligibility.",
      "Split the app into a React + Vite client and an Express REST API over MongoDB/Mongoose, deployed separately on Render.",
    ],
    features: [
      "Live ticker of emergency requests",
      "Donor discovery filtered by blood group and city",
      "Donation history and eligibility tracking",
      "Role-specific dashboards for donors, hospitals and blood banks",
    ],
    learnings:
      "Designing state machines first — request status and donor-response status — made the API and UI far simpler to build and reason about.",
    links: { repo: gh("BloodLink"), live: "https://winterproject-frontend.onrender.com" },
    image: { src: "/images/projects/bloodlink.jpg", alt: "BloodLink landing page with Become a Donor, Find Blood and Emergency actions" },
  },
  {
    slug: "mediscan-ai",
    title: "MediScan AI",
    tagline: "AI-simulated X-ray analysis & patient management",
    year: "2025",
    featured: true,
    stack: ["Python", "Flask", "OpenCV", "SQLAlchemy", "SQLite", "ReportLab"],
    summary:
      "A Flask web app that analyses X-ray images with OpenCV and a rule-based inference engine to suggest likely conditions, with patient records, PDF reports and a multilingual interface.",
    metrics: [
      { value: "6", label: "body regions" },
      { value: "26", label: "conditions covered" },
      { value: "9", label: "languages" },
    ],
    problem:
      "Many clinics have X-ray machines but no radiologist on hand, and records are often kept on paper in a language that isn't the patient's own. I wanted to explore how software could support first-pass screening and record-keeping.",
    approach: [
      "Built an image pipeline in OpenCV that preprocesses each X-ray and extracts features — brightness, edge density, bright regions and bone density.",
      "Wrote a rule-based inference engine that turns those features, adjusted for age and gender, into ranked condition suggestions with confidence scores across 6 body regions.",
      "Added secure patient management with Flask-Login, CSRF-protected forms and SQLAlchemy, keeping a prediction history per patient.",
      "Made it accessible: interface translation into 9 languages (English plus 8 Indian languages, including Tamil and Hindi), DICOM input, heatmap overlays and downloadable PDF reports.",
    ],
    features: [
      "Chest, hand, leg, skull, spine and pelvis analysis",
      "Confidence-scored condition suggestions with heatmap overlay",
      "Patient records with full prediction history",
      "Automated PDF report generation",
    ],
    learnings:
      "Building the rule engine showed me exactly where hand-crafted features stop working — and why the next version should use a trained model with a proper validation set. It's an educational prototype, not a clinical tool.",
    links: { repo: gh("MediScanAI") },
  },
  {
    slug: "smart-attendance",
    title: "Smart Attendance Tracking",
    tagline: "Face-recognition attendance for rural schools",
    year: "2026",
    status: "Live",
    featured: true,
    stack: ["Python", "Flask", "OpenCV", "LBPH", "Haar Cascade", "SQLite", "Docker"],
    summary:
      "One class photo marks the whole room present. A Flask app that uses OpenCV face detection and recognition to replace manual roll calls on low-cost, low-bandwidth hardware.",
    metrics: [
      { value: "1", label: "photo per session" },
      { value: "3", label: "role portals" },
      { value: "2", label: "sessions / day" },
    ],
    problem:
      "In many rural schools teachers lose minutes of every class to manual roll calls, and the records end up in registers nobody can analyse. Commercial biometric systems are too expensive and need hardware and connectivity these schools don't have.",
    approach: [
      "Detected faces with OpenCV Haar cascades, running up to three passes at different scales so small faces at the back of the class aren't missed.",
      "Trained a separate LBPH recogniser per year, class and section — lightweight enough to run on modest hardware without a GPU.",
      "Built Admin, Class Teacher and Student portals with enrolment by photo upload or webcam, timetable management and manual override for corrections.",
      "Generated colour-coded Excel reports for forenoon and afternoon sessions, and containerised the app with Docker for deployment on Render.",
    ],
    features: [
      "Single group photo marks attendance for both sessions",
      "Webcam or upload-based student enrolment",
      "Colour-coded FN/AN Excel reports",
      "Manual override when recognition needs a correction",
    ],
    credit:
      "Builds on an earlier open-source attendance project (credited in the repository history), which I reworked, extended and deployed in 2026.",
    links: {
      repo: gh("Automated-Attendance-Tracking-System"),
      live: "https://automated-attendance-tracking-system.onrender.com",
    },
    image: { src: "/images/projects/smart-attendance.jpg", alt: "AttendEase sign-in page listing role-based access, AI face recognition and auto Excel reports" },
  },
  {
    slug: "rakshanet",
    title: "RakshaNet",
    tagline: "Disaster response & coordination platform",
    year: "2026",
    context: "Hack2Skills challenge",
    featured: true,
    stack: ["React", "Vite", "Leaflet", "Node.js", "Express", "MongoDB", "Flask"],
    summary:
      "A coordination platform that puts citizens, rescue teams, authorities and NGOs on one live map — from SOS reports to rescue assignments to shelter management.",
    metrics: [
      { value: "5", label: "role portals" },
      { value: "17", label: "API endpoints" },
      { value: "1", label: "live incident map" },
    ],
    problem:
      "During floods and cyclones, information is scattered across calls, chats and spreadsheets. Rescue teams don't know where help is needed most, and citizens don't know where the nearest shelter is.",
    approach: [
      "Built five role-based portals — citizen, rescue team, authority, NGO and admin — with JWT stored in HTTP-only cookies.",
      "Mapped every incident on Leaflet with a severity heatmap and marker clustering, so responders can see hotspots at a glance.",
      "Added a separate Flask service that scores area risk from population density, infrastructure and weather (weighted 0.4 / 0.3 / 0.3).",
      "Modelled rescue work as a clear flow — assigned → in progress → resolved — with geo-targeted alerts and shelter/resource tracking.",
    ],
    features: [
      "One-tap SOS with location and severity",
      "Severity heatmap and clustered incident map",
      "Geo-targeted alerts and shelter management",
      "Admin moderation of reports",
    ],
    links: { repo: gh("rakshanet") },
  },
  {
    slug: "recoveriq",
    title: "RecoverIQ",
    tagline: "AI-powered revenue recovery for failed payments",
    year: "2026",
    context: "Razorpay Buildathon 2026",
    featured: false,
    stack: ["TypeScript", "Express", "Prisma", "PostgreSQL", "Redis", "BullMQ", "OpenAI", "React"],
    summary:
      "Detects failed payments from Razorpay webhooks, scores recovery risk, and has an LLM recommend the next action — with rule-based fallbacks so it never stalls.",
    metrics: [
      { value: "0–100", label: "risk score" },
      { value: "3", label: "recovery actions" },
      { value: "14", label: "API modules" },
    ],
    problem:
      "Merchants silently lose revenue every time a payment fails. Most never follow up, and those who do retry blindly.",
    approach: [
      "Ingested Razorpay webhooks with HMAC-SHA256 signature verification.",
      "Scored each failure 0–100 (low, medium, high, critical) from amount, attempt count, failure code and customer history.",
      "Asked an LLM to choose retry, alternate method or manual review, validated its structured output with Zod, and fell back to rules if the call failed.",
      "Processed recoveries on a BullMQ + Redis queue, with analytics, audit logs and team settings in a React 19 dashboard.",
    ],
    features: ["Webhook signature verification", "Risk tiers with explainable scoring", "LLM decisions with rule fallback", "Background recovery queue"],
    links: { repo: gh("RecoverIQ") },
  },
  {
    slug: "nova",
    title: "NOVA",
    tagline: "Privacy-first AI desktop companion",
    year: "2026",
    status: "In progress",
    featured: false,
    stack: ["Rust", "Tauri 2", "React", "TypeScript", "SQLite", "Python", "MediaPipe", "Gemini"],
    summary:
      "A Windows companion that chats, remembers and helps you focus — with on-device drowsiness detection whose webcam frames are never stored.",
    metrics: [
      { value: "Local", label: "memory & vision" },
      { value: "Voice", label: "speech in & out" },
      { value: "16", label: "build phases" },
    ],
    problem: "Productivity assistants either know nothing about you or send everything to the cloud.",
    approach: [
      "Built the core in Rust on Tauri 2, organised into AI, memory, focus, desktop, vision and reminder modules.",
      "Kept memory local in SQLite and used Gemini with tool calls for conversation and actions.",
      "Ran drowsiness detection in a local Python process (MediaPipe + OpenCV eye-closure ratio) over IPC — frames are processed and discarded.",
      "Added focus sessions with distraction detection, voice interaction, and an Assessment Mode that switches NOVA off entirely.",
    ],
    features: ["Local-first memory", "Focus sessions & distraction detection", "On-device drowsiness detection", "Voice conversation"],
    links: { repo: gh("NOVA") },
  },
  {
    slug: "plant-disease-detection",
    title: "Plant Disease Detection",
    tagline: "Leaf-image diagnosis with treatment guidance",
    year: "2026",
    status: "Live",
    featured: false,
    stack: ["Python", "FastAPI", "PyTorch", "Transformers", "React", "TypeScript", "Docker"],
    summary:
      "Upload a leaf photo, get a diagnosis, severity, treatment and prevention advice — powered by a MobileNetV2 model trained on PlantVillage.",
    metrics: [
      { value: "38", label: "disease classes" },
      { value: "MobileNetV2", label: "model" },
      { value: "PDF", label: "report export" },
    ],
    problem: "Farmers often spot leaf disease too late, and expert advice isn't always close by.",
    approach: [
      "Served pretrained MobileNetV2 PlantVillage models through a FastAPI backend with JWT auth.",
      "Kept the deployment within Render's memory limit, with a feature-based fallback if no model can load.",
      "Built a React + TypeScript frontend with prediction history, charts, multilingual UI and PDF export.",
    ],
    features: ["38-class leaf disease prediction", "Treatment & prevention guidance", "Prediction history and charts", "Multilingual interface"],
    links: { repo: gh("PlantDiseaseDetection"), live: "https://plantdiseasedetection-mhf8.onrender.com" },
    image: { src: "/images/projects/plant-disease-detection.jpg", alt: "Plant Disease Detection landing page inviting users to upload a leaf image" },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

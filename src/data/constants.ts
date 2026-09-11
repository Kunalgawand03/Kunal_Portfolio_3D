// Skill keycaps mapped to the actual named objects in skills-keyboard.spline
export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  TAILWIND = "tailwind",
  PYTHON = "python",
  C = "cpp",
  JAVA = "java",
  MYSQL = "mysql",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  DATASCIENCE = "datascience",
  MACHINE_LEARNING = "machinelearning",
  AI = "ai",
  DSA = "dsa",
  LINUX = "linux",
  DOCKER = "docker",
  PYTHONLIBS = "pythonlibs",
  AWS = "aws",
  VERCEL = "vercel",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "yeeting code into the DOM since '95, no cap! 💯🚀",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription: "JavaScript's overachieving cousin who's always flexing 💯🔒",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "the internet's granddad,  still bussin' fr fr! 💀🔥",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "styling with the ultimate drip, no cap 💁‍♂️🔥",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: `"use using" 
using use = useUsing("use")`,
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 6,
    name: "tailwind",
    label: "Tailwind",
    shortDescription: "utility classes hitting different fr fr 🌪️🔥",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.PYTHON]: {
    id: 7,
    name: "python",
    label: "Python",
    shortDescription:
      "indentation matters, everything else is negotiable 🐍😤",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.C]: {
    id: 8,
    name: "cpp",
    label: "C",
    shortDescription: "pointers, segfaults, and character-building 🧠💣",
    color: "#00599c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  [SkillNames.JAVA]: {
    id: 9,
    name: "java",
    label: "Java",
    shortDescription: "write once, debug everywhere, it's giving OOP 💼☕",
    color: "#f89820",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  [SkillNames.MYSQL]: {
    id: 10,
    name: "mysql",
    label: "MySQL",
    shortDescription: "the OG relational database, still undefeated 🐬💾",
    color: "#4479A1",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "SQL but make it fashion, purr 💅🐘",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "flexin' with that NoSQL drip, respectfully! 💪🍃",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "the code's personal bodyguard, no cap! 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "sliding into those pull requests, IYKYK! 🐙",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.DATASCIENCE]: {
    id: 15,
    name: "datascience",
    label: "Data Science",
    shortDescription: "turning messy spreadsheets into main character insights 📊🧠",
    color: "#ff6b6b",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  [SkillNames.MACHINE_LEARNING]: {
    id: 16,
    name: "machinelearning",
    label: "Machine Learning",
    shortDescription: "teaching rocks to think, one gradient at a time 🧠📉",
    color: "#7C3AED",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  [SkillNames.AI]: {
    id: 17,
    name: "ai",
    label: "GenAI / LLMs",
    shortDescription: "RAG pipelines and prompt engineering, it just gets it 🤖✨",
    color: "#4285f4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg",
  },
  [SkillNames.DSA]: {
    id: 18,
    name: "dsa",
    label: "DSA",
    shortDescription: "pain today, rank tomorrow 📈🧩",
    color: "#ce422b",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/leetcode/leetcode-original.svg",
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "Linux",
    shortDescription: "where 'chmod 777' is the ultimate flex 🔓🙌",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "Docker",
    shortDescription: "The best containerization! 🐳🔥",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.PYTHONLIBS]: {
    id: 21,
    name: "pythonlibs",
    label: "Py Libraries",
    shortDescription: "NumPy, Pandas, scikit-learn — why reinvent the wheel? 🐍📦",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "AWS",
    shortDescription:
      "always extra, making everything more complicated, period! 🌐👨‍💻",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 23,
    name: "vercel",
    label: "Vercel",
    shortDescription:
      "The triangle compony, helps you deploy and go touch grass! 🚀🌿",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
};

export type EducationItem = {
  id: number;
  degree: string;
  institution: string;
  location?: string;
  startDate: string;
  endDate: string;
  score?: string;
  description?: string[];
};

export const EDUCATION: EducationItem[] = [
  {
    id: 1,
    degree: "B.Tech in Electronics and Computer Engineering (Honors: Cyber Security)",
    institution: "Sanjivani College of Engineering, Kopargaon",
    location: "Maharashtra, India",
    startDate: "July 2023",
    endDate: "July 2027",
    score: "CGPA: 8.48 / 10.0",
    description: [
      "Pursuing an Honors specialization in Cyber Security alongside the core Electronics & Computer Engineering curriculum.",
      "Coursework spans Data Structures & Algorithms, OOP, DBMS, and Operating Systems.",
    ],
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Shree. Chhatrapati Shivaji Junior College, Kolpewadi",
    location: "Maharashtra, India",
    startDate: "2021",
    endDate: "2023",
  },
  {
    id: 3,
    degree: "Secondary School Certificate (SSC)",
    institution: "Shree. Chhatrapati Shivaji Vidyalaya, Kolpewadi",
    location: "Maharashtra, India",
    startDate: "",
    endDate: "2021",
  },
];

export type Achievement = {
  id: number;
  title: string;
  organization: string;
  date?: string;
  description: string;
  proofUrl?: string;
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 1,
    title: "National Finalist — AWS Impact X Challenge",
    organization: "IIT Bombay Techfest 2k25",
    date: "2025",
    description:
      "Reached the Top 100 teams nationally, from ideation through national selection, presenting an AI-based real-time safety and risk-prediction system on one of Asia's biggest tech stages as part of Team INNOVIONS.",
    proofUrl:
      "https://www.linkedin.com/posts/kunal-gawand03_iitbombay-awsimpactx-hackathonfinals-activity-7414227602200158208-fFc9",
  },
  {
    id: 2,
    title: "Top 5 Finalist — ShikshakMitra AI Track",
    organization: "IIT Bombay Techfest",
    date: "2025",
    description:
      "Led a team building ShikshakMitra AI, an AI-based teaching assistant designed to improve classroom efficiency through real-time analytics and bias-aware insights.",
    proofUrl:
      "https://www.linkedin.com/posts/chanchal-karna-chavhan-b2013928b_iitbombay-techfest2025-finalists-ugcPost-7401255778260652032-Mas5",
  },
  {
    id: 3,
    title: "7th Position — Hackatron, Infotsav'25",
    organization: "IIITM Gwalior",
    date: "Oct 2025",
    description:
      "Reached the Top 100 finalists and secured the 7th position on the final leaderboard out of 800+ teams and 6,000+ participants in a national GitHub-powered hackathon, as part of Team INNOVIONS.",
    proofUrl:
      "https://www.linkedin.com/posts/kunal-gawand03_hackathon-innovation-teamwork-activity-7387467462717583360-AEyQ",
  },
];

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  image: string;
  description: string;
};

export const CERTIFICATIONS: Certificate[] = [
  {
    id: "oracle-ai-foundations",
    title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
    issuer: "Oracle University",
    date: "Oct 2025",
    image: "/assets/certificates/oracle-ai-foundations.jpg",
    description:
      "Validated foundational knowledge of AI and ML concepts on Oracle Cloud Infrastructure, including generative AI services, model deployment basics, and OCI's AI platform capabilities.",
  },
  {
    id: "honeywell-swe-sim",
    title: "Software Engineering Job Simulation",
    issuer: "Honeywell Future Skills Edge Program",
    date: "Apr 2026",
    image: "/assets/certificates/honeywell-swe-sim.jpg",
    description:
      "Completed a job-simulation program modeled on real Honeywell software engineering workflows, covering requirements analysis, coding tasks, and collaborative engineering practices.",
  },
  {
    id: "web-fundamentals",
    title: "Web Fundamentals",
    issuer: "TryHackMe",
    date: "Dec 2025",
    image: "/assets/certificates/web-fundamentals.jpg",
    description:
      "Covered core web technologies and how they work together — HTTP, DNS, cookies, and the request/response lifecycle — as a foundation for secure web development and ethical hacking.",
  },
  {
    id: "project-management",
    title: "Project Management: Foundations of Planning, Execution & Delivery",
    issuer: "Certification Program",
    date: "Jan 2026",
    image: "/assets/certificates/project-management.jpg",
    description:
      "Studied core project management principles — planning, scoping, execution tracking, and delivery — applicable to running real-world software projects and hackathon teams.",
  },
  {
    id: "ethical-hacking-essentials",
    title: "Ethical Hacking Essentials (EHE)",
    issuer: "EC-Council",
    image: "/assets/certificates/ethical-hacking-essentials.jpg",
    description:
      "Introduced core ethical hacking concepts including information security threats, vulnerability assessment, footprinting, and countermeasures — supporting the Cyber Security honors track.",
  },
  {
    id: "digital-forensics-essentials",
    title: "Digital Forensics Essentials (DFE)",
    issuer: "EC-Council",
    image: "/assets/certificates/digital-forensics-essentials.jpg",
    description:
      "Covered the fundamentals of digital forensics — evidence acquisition, chain of custody, and forensic investigation techniques across computers, networks, and mobile devices.",
  },
  {
    id: "cyber-threat-management",
    title: "Cyber Threat Management",
    issuer: "Cisco Networking Academy",
    image: "/assets/certificates/cyber-threat-management.jpg",
    description:
      "Explored how security operations centers detect, analyze, and respond to cyber threats, including threat intelligence, incident response, and security monitoring workflows.",
  },
  {
    id: "aws-educate-badges",
    title: "AWS Educate Badges",
    issuer: "Amazon Web Services",
    image: "/assets/certificates/aws-educate-badges.jpg",
    description:
      "Earned a set of AWS Educate badges demonstrating hands-on familiarity with core AWS cloud concepts and services used across the ShikshakMitra AI and RushResQ projects.",
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};


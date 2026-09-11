import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiExpress,
  SiFastapi,
  SiFlask,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiOpencv,
  SiOpenai,
  SiPostgresql,
  SiPython,
  SiRedis,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  mysql: {
    title: "MySQL",
    bg: "black",
    fg: "white",
    icon: <SiMysql />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <SiFastapi />,
  },
  flask: {
    title: "Flask",
    bg: "black",
    fg: "white",
    icon: <SiFlask />,
  },
  redis: {
    title: "Redis",
    bg: "black",
    fg: "white",
    icon: <SiRedis />,
  },
  openai: {
    title: "OpenAI GPT",
    bg: "black",
    fg: "white",
    icon: <SiOpenai />,
  },
  opencv: {
    title: "OpenCV",
    bg: "black",
    fg: "white",
    icon: <SiOpencv />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "shikshakmitra",
    category: "AI Analytics Platform",
    title: "ShikshakMitra AI",
    src: `${BASE_PATH}/shikshakmitra/performance-trends.png`,
    screenshots: [
      "performance-trends.png",
      "weekly-heatmap.png",
      "comparison-bars.png",
      "radar-chart.png",
    ],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.opencv,
        PROJECT_SKILLS.openai,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.redis,
      ],
    },
    live: "https://github.com/Kunalgawand03/SHIKSHAK-MITRA-AI",
    github: "https://github.com/Kunalgawand03/SHIKSHAK-MITRA-AI",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Empowering smarter teaching through data-driven insights & AI
            coaching.
          </TypographyP>
          <TypographyP className="font-mono">
            ShikshakMitra AI is a multi-modal AI analytics platform I built
            with Team INNOVIONS for classroom engagement analysis. It fuses
            computer vision, speech recognition, and NLP to turn a raw
            classroom video feed into real, actionable insight for teachers.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Real-Time Engagement Analysis
          </TypographyH3>
          <p className="font-mono mb-2">
            Using YOLOv8 and OpenCV, the system tracks student attention and
            engagement signals from live or recorded video, giving teachers a
            second set of eyes on the whole room at once.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/shikshakmitra/performance-trends.png`,
              `${BASE_PATH}/shikshakmitra/weekly-heatmap.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">
            GPT-Powered RAG Insights
          </TypographyH3>
          <p className="font-mono mb-2">
            A Retrieval-Augmented Generation pipeline built on GPT
            auto-generates personalized, bias-aware performance reports —
            applying real prompt-engineering and LLM-integration work to a
            production-style feature rather than a toy demo.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/shikshakmitra/comparison-bars.png`,
              `${BASE_PATH}/shikshakmitra/radar-chart.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">
            Scalable Microservices Architecture
          </TypographyH3>
          <p className="font-mono mb-2">
            The platform is architected as a set of microservices — FastAPI +
            React on the front, Docker + Redis + PostgreSQL + AWS underneath —
            delivering live analytics through an interactive dashboard with
            sub-second response times.
          </p>
          <SlideShow images={[`${BASE_PATH}/shikshakmitra/all-metrics-grid.png`]} />
          <p className="font-mono mb-2 mt-8 text-center">
            🏆 National Finalist — AWS Impact X Challenge, IIT Bombay
            Techfest · Top 5 Finalist — ShikshakMitra AI Track, IIT Bombay
            Techfest.
          </p>
        </div>
      );
    },
  },
  {
    id: "rushresq",
    category: "Smart Traffic System",
    title: "RushResQ",
    src: `${BASE_PATH}/rushresq/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.flask],
    },
    live: "https://github.com/Kunalgawand03/RushResQ-Smart-AI-IoT-Traffic-Management-System",
    github:
      "https://github.com/Kunalgawand03/RushResQ-Smart-AI-IoT-Traffic-Management-System",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Stuck in traffic? Just say &ldquo;Rastaa Please&rdquo; with
            RushResQ!
          </TypographyP>
          <TypographyP className="font-mono">
            RushResQ is an AI and IoT-based smart traffic management system
            that optimizes signal timing using real-time data and prioritizes
            emergency vehicles for faster, safer passage through
            intersections.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">AI-Powered Decisions</TypographyH3>
          <p className="font-mono mb-2">
            Traffic signal timings are adjusted intelligently based on
            real-time sensor input rather than fixed cycles, easing
            congestion where it actually builds up.
          </p>
          <SlideShow images={[`${BASE_PATH}/rushresq/landing.png`]} />
          <TypographyH3 className="my-4 mt-8">
            Emergency Prioritization
          </TypographyH3>
          <p className="font-mono mb-2">
            Ambulances and other emergency vehicles get a safe, fast corridor
            through intersections, cutting critical response time.
          </p>
          <TypographyH3 className="my-4 mt-8">
            IoT + Interactive Dashboard
          </TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>ESP32 + sensors form the IoT sensing layer at intersections.</li>
            <li>
              A React + Tailwind dashboard visualizes live traffic data and
              emergency routes.
            </li>
            <li>
              An integrated VAPI voice assistant answers user queries about
              current traffic conditions.
            </li>
            <li>
              Google Sheets is used as a lightweight, API-driven data store
              for sensor readings.
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "wanderlust",
    category: "Travel Platform",
    title: "Wanderlust Explorer",
    src: `${BASE_PATH}/wanderlust/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.mongo],
    },
    live: "https://github.com/Kunalgawand03/Wanderlust-explorer",
    github: "https://github.com/Kunalgawand03/Wanderlust-explorer",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Wanderlust Explorer is a full-stack, Airbnb-style property rental
            and travel-listings platform. Users can sign up, create listings
            with images, search and filter by category, and leave reviews —
            a complete search-to-checkout style booking workflow.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/wanderlust/landing.png`]} />
          <TypographyH3 className="my-4 mt-8">Secure Authentication</TypographyH3>
          <p className="font-mono mb-2">
            Secure signup/login is handled with Passport.js, and every
            listing and review action is scoped to the authenticated owner.
          </p>
          <TypographyH3 className="my-4 mt-8">Listings & Reviews</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Full CRUD for travel listings, with Cloudinary-hosted images.</li>
            <li>Users can leave and manage reviews on any listing.</li>
            <li>Search and filter listings by category.</li>
            <li>Joi-based schema validation and flash messages for instant feedback.</li>
          </ul>
          <p className="font-mono mb-2 mt-8">
            Built on Node.js, Express, MongoDB, and EJS, following an MVC
            architecture with RESTful routes for clean, maintainable code —
            and a fully responsive UI across devices.
          </p>
        </div>
      );
    },
  },
  {
    id: "phishing-detection",
    category: "Cybersecurity / ML",
    title: "Phishing Website Detection",
    src: `${BASE_PATH}/phishing/main-screenshot.png`,
    screenshots: ["main-screenshot.png", "screenshot1.png", "screenshot2.png"],
    skills: {
      frontend: [PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.flask],
    },
    live: "https://github.com/Kunalgawand03/Phishing-Website-Detection",
    github: "https://github.com/Kunalgawand03/Phishing-Website-Detection",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A machine-learning web app that detects whether a URL is
            legitimate or a phishing attempt in real time — without ever
            visiting the site itself.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/phishing/main-screenshot.png`]} />
          <TypographyH3 className="my-4 mt-8">How It Works</TypographyH3>
          <p className="font-mono mb-2">
            13 structural and behavioral URL features — length, IP usage, the
            &apos;@&apos; symbol, redirection, subdomain count, URL
            shorteners, domain age, DNS records and more — are extracted and
            fed into a Random Forest Classifier trained on 1,000+ labeled
            URLs.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/phishing/screenshot1.png`,
              `${BASE_PATH}/phishing/screenshot2.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Stack</TypographyH3>
          <p className="font-mono mb-2">
            Built with Python, Flask, and Scikit-Learn, wrapped in a simple
            web UI so anyone can paste a URL and get an instant Legitimate /
            Phishing verdict.
          </p>
        </div>
      );
    },
  },
  {
    id: "imprintly",
    category: "AI eBook Creator",
    title: "Imprintly",
    src: `${BASE_PATH}/imprintly/landing.png`,
    screenshots: ["landing.png", "dashboard.png", "editor.png", "ai-generation.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.mongo],
    },
    live: "https://github.com/Kunalgawand03/Imprintly-AI-e-book-creator",
    github: "https://github.com/Kunalgawand03/Imprintly-AI-e-book-creator",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Transform ideas into professional eBooks in minutes.
          </TypographyP>
          <TypographyP className="font-mono">
            Imprintly is a full-stack MERN application for AI-assisted eBook
            creation — from AI-generated outlines and chapters to a polished,
            exportable book.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/imprintly/landing.png`]} />
          <TypographyH3 className="my-4 mt-8">Smart Writing Experience</TypographyH3>
          <p className="font-mono mb-2">
            AI-powered content generation drafts outlines and chapters, with
            a markdown editor, live preview, and drag-and-drop chapter
            reordering.
          </p>
          <SlideShow images={[`${BASE_PATH}/imprintly/editor.png`, `${BASE_PATH}/imprintly/ai-generation.png`]} />
          <TypographyH3 className="my-4 mt-8">Personal Library & Export</TypographyH3>
          <p className="font-mono mb-2">
            JWT-based auth keeps every author&apos;s library private, with
            custom cover uploads and one-click export to PDF or DOCX.
          </p>
          <SlideShow images={[`${BASE_PATH}/imprintly/dashboard.png`]} />
        </div>
      );
    },
  },
  {
    id: "eureka",
    category: "Computer Vision",
    title: "Vehicle Cut-in Detection — Intel Eureka",
    src: `${BASE_PATH}/eureka/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.opencv],
    },
    live: "https://github.com/Kunalgawand03/Intel-summer-internship-Eureka-",
    github: "https://github.com/Kunalgawand03/Intel-summer-internship-Eureka-",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Built during the Intel Summer Internship program as part of Team
            Eureka, this project tackles the &ldquo;Vehicle Cut-in
            Detection&rdquo; problem statement — spotting vehicles that
            suddenly cut into a lane from video footage.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/eureka/landing.png`]} />
          <TypographyH3 className="my-4 mt-8">Technical Approach</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>
              Vehicle detection using Haar Cascade classifiers and OpenCV on
              real dashcam-style video footage.
            </li>
            <li>
              A trained detection model evaluated for accuracy across
              multiple video clips.
            </li>
            <li>
              Frame-by-frame video processing pipelines built and iterated on
              in Jupyter notebooks.
            </li>
          </ul>
          <p className="font-mono mb-2 mt-6">
            The project was presented with a full report and slide deck to
            Intel mentors as part of the internship&apos;s evaluation.
          </p>
        </div>
      );
    },
  },
];
export default projects;

const config = {
  title: "Kunal Gawand | Full-Stack Developer",
  description: {
    long:
      "Explore the portfolio of Kunal Gawand, a full-stack developer specializing in the MERN stack, REST APIs and AI/GenAI integration. Discover my latest work, including ShikshakMitra AI, RushResQ, Wanderlust Explorer and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Kunal Gawand, a full-stack developer building MERN-stack web apps and AI-powered products.",
  },
  keywords: [
    "Kunal Gawand",
    "portfolio",
    "full-stack developer",
    "MERN stack",
    "web development",
    "ShikshakMitra AI",
    "RushResQ",
    "Wanderlust Explorer",
    "React",
    "Next.js",
    "Node.js",
    "Java",
    "AI",
    "GenAI",
  ],
  author: "Kunal Gawand",
  email: "gawandkunal2803@gmail.com",
  site: "https://kunalgawand.vercel.app",

  // for github stars button
  githubUsername: "Kunalgawand03",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    leetcode: "https://leetcode.com/u/kunal_gawand_03/",
    hackerrank: "https://www.hackerrank.com/profile/gawandkunal2803",
    linkedin: "https://www.linkedin.com/in/kunal-gawand03",
    instagram: "https://www.instagram.com/kunal_gawand_03",
    github: "https://github.com/Kunalgawand03",
  },
};
export { config };

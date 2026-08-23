import tradingbot from "../../Assets/Projects/tradingbot.jpg";
import skyflame from "../../Assets/Projects/skyflame.jpg";
import mercedes from "../../Assets/Projects/mercedes.jpg";

const projects = [
  {
    id: "trading-bot",
    title: "Trading Bot — SunkuTrades",
    image: tradingbot,
    status: "live",
    description:
      "Event-driven trading automation system with real-time market data, news scraping, and strategy-based execution logic, cutting manual market analysis workload by 80%. Multi-user Firestore backend, IG Markets & TwelveData integrations, Telegram alerts, self-hosted on a VPS via Docker.",
    tags: ["Node.js", "Express", "React", "Firebase", "Docker", "Puppeteer"],
    liveLink: "https://www.naoufal-tb.online/",
    repoLink: null,
    liveLabel: "naoufal-tb.online",
  },
  {
    id: "skyflame",
    title: "Binghatti SkyFlame — DP Real Estate",
    image: skyflame,
    status: "live",
    description:
      "Marketing website for Binghatti SkyFlame, a licensed Dubai apartment development, built during a software development internship at DP Real Estate to generate and capture buyer leads.",
    tags: ["React", "Vite", "Tailwind CSS", "Express", "MySQL", "Framer Motion"],
    liveLink: "https://dprealestate.net/skyflame/",
    repoLink: "https://github.com/nawfal8815/skyflame",
    liveLabel: "dprealestate.net/skyflame",
  },
  {
    id: "mercedes",
    title: "Mercedes-Benz Places — DP Real Estate",
    image: mercedes,
    status: "live",
    description:
      "Marketing website for Mercedes-Benz Places, the world's first Mercedes-Benz branded residential city in Dubai, built during a software development internship at DP Real Estate.",
    tags: ["React", "Vite", "Tailwind CSS", "Express", "MySQL", "Framer Motion"],
    liveLink: "https://dprealestate.net/mercedes/",
    repoLink: "https://github.com/nawfal8815/mercedez_benz_city",
    liveLabel: "dprealestate.net/mercedes",
  },
  {
    id: "cook-assistant",
    title: "Cook Assistant App",
    image: null,
    status: "progress",
    description:
      "Client-facing interactive cooking assistant integrating real-time 3D rendering (Blender/CC4), voice recognition, and AI-driven response logic within a MERN-based web application. Currently being redesigned.",
    tags: ["Node.js", "Express", "React", "OpenAI API", "MySQL", "Three.js"],
    liveLink: null,
    repoLink: null,
    liveLabel: null,
  },
];

export default projects;

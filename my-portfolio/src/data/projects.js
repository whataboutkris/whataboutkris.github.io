import tradespaceImage from "../assets/tradespace.png";
import hypehouseImage from "../assets/hypehouse.png";
import tennisCoachImage from "../assets/kris_tennis.png";
export const projects = [
  {
    title: "Hypehouse",
    image: hypehouseImage,
    description:
      "Contributed to fullstack development of a mock rental platform for influencers and vloggers, featuring secure user authentication, booking workflows, listing management, and real-time messaging using Flask, SQLAlchemy, and Flask-Login.",
    technologies: ["Flask", "Flask-Login", "SQLAlchemy", "SQLite", "HTMX", "Shoelace UI", "Git/GitHub"],
    github: "https://github.com/CPSC-362-proj/Hypehouse-WebApp",
    demo: "https://www.youtube.com/watch?v=mcJAs9nIm5A",
  },
  {
    title: "TradeSpace",
    image: tradespaceImage,
    description:
      "Developed the backend of a mock e-commerce platform for trading goods, featuring secure user authentication, product listings, and a messaging system using Flask, SQLAlchemy, and Flask-Login.",
    technologies: ["Flask", "SQLAlchemy", "Flask-Login", "SQLite", "HTMX", "Shoelace UI", "Git/GitHub"],
    github: "https://github.com/tomasohCHOM/tradespace",
    demo: "https://tradespace-491.web.app/",
  },
  {
    title: "Professional Tennis Coach in SoCal",
    image: tennisCoachImage,
    description:
      "I coach competitive juniors, D1-level high schoolers, and recreational adults, adapting instruction to individual skill levels. I coached for City of Irvine, USC, Mater Dei, SCAARSA.",
    technologies: [""],
    github: "",
    demo: "",
  },
];
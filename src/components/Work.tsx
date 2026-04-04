import { useState, useCallback, useEffect, useRef } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Telecom Support Agent",
    category: "Multi-Agent AI Troubleshooting System",
    tools: "LangGraph, FastAPI, React, MCP Servers, ChromaDB, Redis, Docker, OpenShift",
    image: "",
    images: [
      "/images/telecom-agent-1.webp",
      "/images/telecom-agent-2.webp",
      "/images/telecom-agent-3.webp",
    ],
    link: "#",
    demoLink: "",
  },
  {
    title: "AI Financial Agent",
    category: "Workflow Automation & AI Orchestration",
    tools: "n8n, JavaScript, LLMs, OAuth 2.0, REST APIs",
    image: "",
    images: [
      "/images/financial-agent-1.webp",
      "/images/financial-agent-2.webp",
      "/images/financial-agent-3.webp",
    ],
    link: "#",
    demoLink: "",
  },
  {
    title: "AI Finance Dashboard",
    category: "Full-Stack AI Application",
    tools: "TypeScript, Next.js, MongoDB, LLM-Assisted Categorization",
    image: "",
    images: [
      "/images/finance-dashboard-1.webp",
      "/images/finance-dashboard-2.webp",
      "/images/finance-dashboard-3.webp",
      "/images/finance-dashboard-4.webp",
      "/images/finance-dashboard-5.webp",
      "/images/finance-dashboard-6.webp",
    ],
    link: "https://github.com/7AbdUrRehman7/AI-finance-dashboard",
    demoLink: "",
  },
  {
    title: "PlanetZe",
    category: "Carbon Footprint Tracking Android App",
    tools: "Java, Android Studio, Firebase Realtime Database",
    image: "",
    images: [
      "/images/planetze-1.webp",
      "/images/planetze-2.webp",
      "/images/planetze-3.webp",
      "/images/planetze-4.webp",
      "/images/planetze-5.webp",
      "/images/planetze-6.webp",
      "/images/planetze-7.webp",
      "/images/planetze-8.webp",
      "/images/planetze-9.webp",
      "/images/planetze-10.webp",
      "/images/planetze-11.webp",
      "/images/planetze-12.webp",
      "/images/planetze-13.webp",
    ],
    link: "https://github.com/shamrita11/Planetze_B07",
    demoLink: "https://www.youtube.com/watch?v=P-J9M93AbB4",
  },
  {
    title: "Linux FD Table Monitor",
    category: "Systems Programming Tool",
    tools: "C, Linux /proc, Bash, Binary Serialization",
    image: "",
    images: [],
    link: "https://github.com/7AbdUrRehman7/Linux-System-Wide-FD-Table-Monitor",
    demoLink: "",
  },
  {
    title: "Allumino",
    category: "AI-Powered STEM Talent Platform - Hack the Valley X",
    tools: "JavaScript, AI/ML, Career Matching",
    image: "",
    images: [
      "/images/allumino-1.webp",
      "/images/allumino-2.webp",
      "/images/allumino-3.webp",
      "/images/allumino-4.webp",
    ],
    link: "https://github.com/Beyonder0CRt/Allumino-HTW-MVP",
    demoLink: "",
  },
  {
    title: "MIPS Platformer",
    category: "Platform Game in Assembly",
    tools: "MIPS Assembly, MARS Simulator, Bitmap Display",
    image: "",
    images: [
      "/images/assembly-game-1.webp",
      "/images/assembly-game-2.webp",
    ],
    link: "https://github.com/7AbdUrRehman7/Assembly-GAME",
    demoLink: "https://play.library.utoronto.ca/watch/23423fcb1f1ee4b34b22ec09feaac13c",
  },
  {
    title: "The Slide Game",
    category: "Text-Based Puzzle Game",
    tools: "Python",
    image: "",
    images: [],
    link: "https://github.com/7AbdUrRehman7/The-Slide-GAME",
    demoLink: "",
  },
  {
    title: "Guess the Phrase",
    category: "Word-Guessing Game with AI Opponent",
    tools: "Python, Solo/Multiplayer/AI Modes",
    image: "",
    images: [],
    link: "https://github.com/7AbdUrRehman7/Guess-The-Phrase-GAME",
    demoLink: "",
  },
  {
    title: "Task Manager",
    category: "Full-Stack Web Application",
    tools: "Node.js, Express, SQLite, Vanilla JavaScript",
    image: "/images/task-manager-1.webp",
    images: [],
    link: "https://github.com/7AbdUrRehman7/Full-Stack-Task-Manager-App",
    demoLink: "",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div className="carousel-track" ref={trackRef}>
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>{String(index + 1).padStart(2, "0")}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        images={project.images}
                        alt={project.title}
                        link={project.link}
                        demoLink={project.demoLink}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
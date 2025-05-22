import React from "react";
import "./index.css";
import img1 from "../public/img1.png";
import img2 from "../public/img2.png";
import img3 from "../public/img3.png";

const skills = ["HTML", "CSS", "JavaScript", "React"];

const projects = [
  {
    name: "HTML CSS",
    description: "Movie",
    tags: ["HTML", "CSS"],
    image: img1,
    github: "#",
    demo: "#",
  },
  {
    name: "JavaScript final",
    description: "Flowers ",
    tags: ["CSS", "JavaScript"],
    image: img2,
    github: "#",
    demo: "#",
  },
  {
    name: "React",
    description: "React project",
    tags: ["React", "CSS"],
    image: img3,
    github: "#",
    demo: "#",
  },
];

const App = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="logo">Portfolio</h1>
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <svg
              style={{ width: "50px" }}
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon"
              viewBox="0 0 512 512"
            >
              <path
                d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              />
            </svg>
          </ul>
        </div>
      </nav>

      <section id="home" className="home-section">
        <div className="home-content">
          <div style={{ display: "flex", gap: "5px", fontSize: "30px" }}>
            <h1>Hi, I'm </h1>
            <h1 style={{ color: "blueviolet" }}>Bairamova</h1>
            <h1>Gulaida</h1>
          </div>
          <button className="btn">View My Work</button>
        </div>

        <div className="scroll-indicator">
          <p>Scroll</p>
          <div className="arrow-down"></div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div style={{ marginLeft: "85vh", display: "flex", gap: "5px" }}>
          <h2>About </h2>
          <h2 style={{ color: "blueviolet" }}>Me</h2>
        </div>

        <p>
          I am a passionate frontend developer with experience in building
          responsive websites using React, CSS, and modern JavaScript
          frameworks.
        </p>
      </section>

      <section id="skills" className="skills-section">
        <div style={{ display: "flex", gap: "5px", marginLeft: "85vh" }}>
          <h2>My</h2>
          <h2 style={{ color: "blueviolet" }}>Skills</h2>
        </div>
        <div className="skills-list">
          {skills.map((skill) => (
            <span key={skill} className="skill-item">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" className="projects-section">
        <h2 className="section-title">
          Featured <span className="highlight">Projects</span>
        </h2>
        <p className="section-description">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
              <div className="tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔗
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💻
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="github-button-container">
          <a href="#" className="github-button">
            Check My Github →
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;

import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      icon: "🌐",
      description: "A minimal, responsive portfolio built with React and Vite, featuring interactive section switching, smooth animations, and fully custom CSS styling.",
      tech: ["React", "Vite", "CSS"],
      link: "https://github.com/nikith-n/PORTFOLIO.git"
    },
    {
      title: "Task Management App",
      icon: "📋",
      description: "A productivity tool to manage daily tasks with drag-and-drop functionality, real-time database sync, and user authentication.",
      tech: ["React", "Firebase"],
      link: "#"
    },
    {
      title: "Weather Dashboard",
      icon: "⛅",
      description: "Real-time weather application consuming OpenWeatherMap API with location-based forecasts, dynamic themes, and historical data.",
      tech: ["JavaScript", "Rest API", "HTML/CSS"],
      link: "#"
    },
    {
      title: "Kannada Emotion Classifier",
      icon: "🧠",
      description: "A Python machine learning model using XLM-RoBERTa to classify Kannada text into 5 distinct emotions with high accuracy metrics.",
      tech: ["Python", "ML", "XLM-RoBERTa"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-bg-animation">
        <div className="proj-blob proj-blob-1"></div>
        <div className="proj-blob proj-blob-2"></div>
        <div className="proj-blob proj-blob-3"></div>
      </div>

      <div className="section container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="gradient-text" style={{ fontSize: '2.5rem', display: 'inline-block' }}>Projects</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
          {projects.map((project, index) => (
            <div key={index} className="glass-panel project-card">
              <div className="proj-header">
                <h3 className="proj-title">
                  {project.title}
                  <span className="proj-icon">{project.icon}</span>
                </h3>
              </div>

              <div className="proj-info-popup">
                <p className="proj-description">
                  {project.description}
                </p>

                <div className="proj-tech-stack">
                  {project.tech.map((t, i) => (
                    <span key={i} className="proj-tech-tag">
                      {t}
                    </span>
                  ))}
                </div>

                <a href={project.link} className="proj-link">
                  View Project <span style={{ fontSize: '1.2rem', lineHeight: '1' }}>&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

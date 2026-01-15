import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A minimal, responsive portfolio built with React and Vite, featuring interactive section switching.",
      tech: ["React", "Vite", "CSS"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "A productivity tool to manage daily tasks with drag-and-drop functionality.",
      tech: ["React", "Firebase"],
      link: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application consuming OpenWeatherMap API.",
      tech: ["JavaScript", "Rest API"],
      link: "#"
    },
    {
      title: "Kannada Emotion Classifier",
      description: "A Python machine learning model using XLM-RoBERTa to classify Kannada text into 5 emotions.",
      tech: ["Python", "ML", "XLM-RoBERTa"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="section container">
      <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '2.5rem', display: 'inline-block' }}>Projects</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
        {projects.map((project, index) => (
          <div key={index} className="glass-panel" style={{
            padding: '2rem',
            transition: 'transform 0.3s ease, border-color 0.3s ease',
            cursor: 'default'
          }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.borderColor = 'rgba(124, 58, 237, 0.5)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--border-color)';
            }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', fontWeight: '700' }}>{project.title}</h3>

            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1rem', lineHeight: '1.6' }}>
              {project.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
              {project.tech.map((t, i) => (
                <span key={i} style={{
                  fontSize: '0.8rem',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '999px',
                  background: 'rgba(124, 58, 237, 0.1)',
                  color: '#a78bfa',
                  border: '1px solid rgba(124, 58, 237, 0.2)'
                }}>
                  {t}
                </span>
              ))}
            </div>

            {/* Optional interaction hint */}
            <div style={{ marginTop: '1.5rem', textAlign: 'right' }}>
              <a href={project.link} style={{ fontSize: '0.9rem', color: '#0ea5e9', fontWeight: '600' }}>View Project &rarr;</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

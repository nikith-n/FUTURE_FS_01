import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "💻",
      skills: [
        { name: "React", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "HTML5/CSS3", level: 95 }
      ]
    },
    {
      title: "Backend & Services",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 70 },
        { name: "Firebase", level: 75 },
        { name: "Python", level: 80 },
        { name: "REST APIs", level: 85 }
      ]
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Machine Learning (Basic)", level: 60 },
        { name: "Netlify/Vercel", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-bg-animation">
        <div className="skills-blob skills-blob-1"></div>
        <div className="skills-blob skills-blob-2"></div>
        <div className="skills-blob skills-blob-3"></div>
      </div>

      <div className="section container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="gradient-text" style={{ fontSize: '2.5rem', display: 'inline-block' }}>Skills</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-panel skill-box">
              <div className="skill-box-header">
                <div className="skill-icon">{category.icon}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700' }}>
                  {category.title}
                </h3>
              </div>

              <div className="skill-info-popup">
                <div style={{ paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', marginBottom: '1.5rem' }}>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="skill-item">
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                        <span>{skill.name}</span>
                        <span style={{ color: 'var(--text-secondary)' }}>{skill.level}%</span>
                      </div>
                      <div className="skill-bar-container">
                        <div 
                          className="skill-bar-fill" 
                          style={{ '--target-width': `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

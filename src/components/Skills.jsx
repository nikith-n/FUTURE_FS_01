import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "HTML5/CSS3", level: 95 }
      ]
    },
    {
      title: "Backend & Services",
      skills: [
        { name: "Node.js", level: 70 },
        { name: "Firebase", level: 75 },
        { name: "Python", level: 80 },
        { name: "REST APIs", level: 85 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Machine Learning (Basic)", level: 60 },
        { name: "Netlify/Vercel", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="section container">
      <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '3rem', display: 'inline-block' }}>Skills</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {skillCategories.map((category, index) => (
          <div key={index} className="glass-panel" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
              {category.title}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {category.skills.map((skill, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                    <span>{skill.name}</span>
                    <span style={{ color: 'var(--text-secondary)' }}>{skill.level}%</span>
                  </div>
                  <div style={{
                    width: '100%',
                    height: '6px',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '20px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${skill.level}%`,
                      height: '100%',
                      background: 'var(--primary-gradient)',
                      borderRadius: '20px',
                      transition: 'width 1s ease-in-out'
                    }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

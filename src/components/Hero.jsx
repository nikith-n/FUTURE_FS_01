import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="container" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px', // Offset for fixed navbar
      justifyContent: 'space-between',
      gap: '4rem'
    }}>

      {/* Left: Text Content */}
      <div style={{ flex: 1, maxWidth: '600px' }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          color: 'var(--text-secondary)',
          marginBottom: '1rem'
        }}>
          Hi, I'm
        </h2>

        <h1 style={{
          fontSize: '4.5rem',
          fontWeight: '800',
          lineHeight: '1.1',
          marginBottom: '1.5rem',
          letterSpacing: '-1px'
        }}>
          Nikith N
        </h1>

        <h3 className="gradient-text" style={{
          fontSize: '2rem',
          fontWeight: '700',
          marginBottom: '1.5rem'
        }}>
          Web Developer Student
        </h3>

        <p style={{
          fontSize: '1.1rem',
          color: 'var(--text-secondary)',
          lineHeight: '1.8',
          marginBottom: '2.5rem',
          maxWidth: '500px'
        }}>
          Passionate about building modern, responsive applications.
          Specializing in React and front-end technologies to create seamless user experiences.
        </p>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="#projects" className="btn-primary">
            Explore Projects
          </a>
          <a href="#contact" className="btn-outline">
            Contact Me
          </a>
        </div>
      </div>

      {/* Right: Image/Visual */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <div style={{
          position: 'relative',
          width: '400px',
          height: '400px',
        }}>
          {/* Background Blob Effect */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #7c3aed 0%, #0ea5e9 100%)',
            filter: 'blur(80px)',
            opacity: 0.2,
            borderRadius: '50%',
            zIndex: -1
          }}></div>

          <div className="glass-panel" style={{
            width: '100%',
            height: '100%',
            borderRadius: '2rem',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            {/* Placeholder for Profile Image */}
            {/* Code Logo */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                width: '60%',
                height: '60%',
                color: 'rgba(255, 255, 255, 0.9)',
                filter: 'drop-shadow(0 0 15px rgba(124, 58, 237, 0.5))'
              }}
            >
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;

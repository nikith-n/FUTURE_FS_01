import React from 'react';

const Navbar = () => {
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
    { name: 'Resume', href: '/resume.pdf' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      backdropFilter: 'blur(12px)',
      background: 'rgba(2, 6, 23, 0.8)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '80px'
      }}>
        {/* Logo */}
        <a href="#" style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-0.5px' }}>
          Nikith<span style={{ color: '#0ea5e9' }}>.</span>
        </a>

        {/* Desktop Links */}
        <ul style={{ display: 'flex', gap: '2rem' }}>
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                target={link.name === 'Resume' ? '_blank' : undefined}
                rel={link.name === 'Resume' ? 'noopener noreferrer' : undefined}
                style={{
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  color: 'var(--text-secondary)',
                  transition: 'color 0.2s'
                }}
                onMouseOver={(e) => e.target.style.color = '#fff'}
                onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle (Simplified) */}
        <div style={{ display: 'none' }}>Menu</div>
      </div>
    </nav>
  );
};

export default Navbar;

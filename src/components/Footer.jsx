import React from 'react';

const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid #eee', padding: '3rem 0', marginTop: '4rem' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '2rem' }}>

        {/* Column 1 */}
        <div>
          <h4 style={{ fontSize: '0.9rem', fontWeight: '700', marginBottom: '0.5rem' }}>Email</h4>
          <a href="mailto:nikithn280@gmail.com" style={{ fontSize: '0.9rem', textDecoration: 'underline' }}>nikithn280@gmail.com</a>
        </div>

        {/* Column 2 */}
        <div>
          <h4 style={{ fontSize: '0.9rem', fontWeight: '700', marginBottom: '0.5rem' }}>GitHub</h4>
          <a href="https://github.com/nikith-n" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9rem', textDecoration: 'underline' }}>github.com/nikith-n</a>
        </div>

        {/* Column 3 */}
        <div>
          <h4 style={{ fontSize: '0.9rem', fontWeight: '700', marginBottom: '0.5rem' }}>LinkedIn</h4>
          <a href="https://www.linkedin.com/in/nikith-n" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9rem', textDecoration: 'underline' }}>linkedin.com/in/nikith-n</a>
        </div>

        {/* Column 4 - Credits */}
        <div style={{ fontSize: '0.8rem', color: '#999', textAlign: 'right' }}>

        </div>

      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section container">
      <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '3rem', display: 'inline-block' }}>Get In Touch</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '4rem'
      }}>

        {/* Contact Info */}
        <div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Let's Talk</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-panel" style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '1.2rem' }}>📧</span>
              <a href="mailto:nikithn280@gmail.com" style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>nikithn280@gmail.com</a>
            </div>
            <div className="glass-panel" style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '1.2rem' }}>📱</span>
              <span style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>+91 9449417723</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          action="https://formsubmit.co/nikithn280@gmail.com"
          method="POST"
          className="glass-panel"
          style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          {/* Honeypot / Captcha disable if needed - basic setup */}
          <input type="hidden" name="_next" value={window.location.href} />
          <input type="hidden" name="_captcha" value="false" />

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Name</label>
            <input
              type="text"
              name="name"
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '0.5rem',
                border: '1px solid var(--border-color)',
                background: 'rgba(0,0,0,0.2)',
                color: '#fff',
                outline: 'none'
              }}
              placeholder="John Doe"
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email</label>
            <input
              type="email"
              name="email"
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '0.5rem',
                border: '1px solid var(--border-color)',
                background: 'rgba(0,0,0,0.2)',
                color: '#fff',
                outline: 'none'
              }}
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Message</label>
            <textarea
              name="message"
              required
              rows="4"
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '0.5rem',
                border: '1px solid var(--border-color)',
                background: 'rgba(0,0,0,0.2)',
                color: '#fff',
                outline: 'none',
                resize: 'none'
              }}
              placeholder="Hello!"
            ></textarea>
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
};

const SocialLink = ({ name }) => (
  <a href="#" style={{
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid var(--border-color)',
    fontSize: '0.8rem'
  }}>
    {name[0]}
  </a>
);

export default Contact;

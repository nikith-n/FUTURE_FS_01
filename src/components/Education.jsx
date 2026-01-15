import React from 'react';

const Education = () => {
    return (
        <section id="education" className="section container">
            <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '3rem', display: 'inline-block' }}>Education</h2>

            <div className="glass-panel" style={{
                padding: '2rem',
                maxWidth: '800px',
                margin: '0 auto',
                borderLeft: '4px solid #0ea5e9'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700' }}>Bachelor of Engineering</h3>
                    <span style={{
                        background: 'rgba(14, 165, 233, 0.1)',
                        color: '#0ea5e9',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '999px',
                        fontSize: '0.9rem',
                        fontWeight: '600'
                    }}>
                        5th Semester (Pursuing)
                    </span>
                </div>

                <h4 style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    Information Science and Engineering
                </h4>

                <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <p style={{ fontSize: '1.1rem', fontWeight: '500', marginBottom: '0.25rem' }}>
                        Yenepoya Institute of Technology
                    </p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                        Visveswaraya Technological University
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Education;

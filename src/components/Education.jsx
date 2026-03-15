import React from 'react';
import './Education.css';

const Education = () => {
    return (
        <section id="education" className="education-section">
            <div className="edu-bg-animation">
                <div className="edu-blob edu-blob-1"></div>
                <div className="edu-blob edu-blob-2"></div>
                <div className="edu-blob edu-blob-3"></div>
            </div>

            <div className="section container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 className="gradient-text" style={{ fontSize: '2.5rem', display: 'inline-block' }}>Education</h2>
                </div>

                <div className="glass-panel education-box">
                    <div className="edu-header">
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700' }}>Bachelor of Engineering</h3>
                            <span style={{
                                background: 'rgba(14, 165, 233, 0.1)',
                                color: '#0ea5e9',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '999px',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                border: '1px solid rgba(14, 165, 233, 0.2)'
                            }}>
                                6th Semester (Pursuing)
                            </span>
                        </div>
                        
                        <h4 style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                            Information Science and Engineering
                        </h4>
                    </div>

                    <div className="education-info-popup">
                        <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                            <p style={{ fontSize: '1.1rem', fontWeight: '500', marginBottom: '0.25rem', color: '#fff' }}>
                                Yenepoya Institute of Technology
                            </p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                                Visveswaraya Technological University
                            </p>
                            
                            <div className="edu-details-list">
                                <div className="edu-detail-item">
                                    <span className="edu-icon">🎓</span>
                                    <span>Focused on deep integration of core Computer Science concepts, Algorithms, and System Design.</span>
                                </div>
                                <div className="edu-detail-item">
                                    <span className="edu-icon">💻</span>
                                    <span>Actively engaged in practical labs, competitive programming, and modern web development practices.</span>
                                </div>
                                <div className="edu-detail-item">
                                    <span className="edu-icon">🚀</span>
                                    <span>Participating in hackathons and continuously exploring cutting-edge AI and cloud technologies.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;

import React from 'react';

const Personal = () => {
    return (
        <section className="container" style={{ padding: '2rem 0', animation: 'fadeIn 0.5s ease-in' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', borderBottom: '2px solid #D0D0D0', display: 'inline-block' }}>Personal</h2>
            <div style={{ padding: '1rem', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                <h3 style={{ marginBottom: '0.5rem' }}>Career Goals</h3>
                <p style={{ marginBottom: '1.5rem', color: '#555' }}>
                    My goal is to become a proficient Full Stack Developer, contributing to impactful projects that solve real-world problems.
                    I am driven by a curiosity to understand how things work under the hood and a desire to build intuitive, user-centric applications.
                </p>

                <h3 style={{ marginBottom: '0.5rem' }}>Interests</h3>
                <ul style={{ paddingLeft: '1.2rem', color: '#555' }}>
                    <li>• Open Source Contribution</li>
                    <li>• UI/UX Design</li>
                    <li>• Tech Community Building</li>
                    <li>• Exploring new frameworks</li>
                </ul>
            </div>
        </section>
    );
};

export default Personal;

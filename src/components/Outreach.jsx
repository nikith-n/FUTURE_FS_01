import React from 'react';

const Outreach = () => {
    return (
        <section className="container" style={{ padding: '2rem 0', animation: 'fadeIn 0.5s ease-in' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', borderBottom: '2px solid #A0DED6', display: 'inline-block' }}>Outreach</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                <div style={{ padding: '1.5rem', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', borderLeft: '5px solid #A0DED6' }}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Community Involvement</h3>
                    <p style={{ color: '#555', fontSize: '0.95rem' }}>
                        Active member of the college tech club, organizing workshops on web development and coding competitions to foster peer learning.
                    </p>
                </div>

                <div style={{ padding: '1.5rem', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', borderLeft: '5px solid #A0DED6' }}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Learning & Growth</h3>
                    <p style={{ color: '#555', fontSize: '0.95rem' }}>
                        Consistently upskilling through online courses and hackathons. Recently completed a certification in Advanced React Patterns.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Outreach;

import React from 'react';
import './AboutPage.css';

function AboutPage() {
    return (
        <div className="about-grid">
            <div className="team-member">
                <img src="/images/Adil.jpg" alt="Adil" />
                <h2>Adil Naib</h2>
                <p>Data Scientist</p>
            </div>
            <div className="team-member">
                <img src="/images/Ananya.jpg" alt="Ananya" />
                <h2>Ananya S M </h2>
                <p>Full Stack Developer</p>
            </div>
            <div className="team-member">
                <img src="/images/Sarf.jpg" alt="Sarf" />
                <h2>Sarfraz</h2>
                <p>Developer</p>
            </div>
            <div className="team-member">
                <img src="/images/Kartik.jpg" alt="Kartik" />
                <h2>Kartik</h2>
                <p>Developer</p>
            </div>
            <div className="team-member">
                <img src="/images/Reva.jpg" alt="Reva" />
                <h2>Revanth</h2>
                <p>Developer</p>
            </div>
            <div className="team-member">
                <img src="/images/Sahana.jpg" alt="Sahanar" />
                <h2>Sahana</h2>
                <p>Marketing</p>
            </div>
        </div>
    );
}

export default AboutPage;

import React from 'react';
import './About.css';
// import '../assets/about.png'
import 'bootstrap/dist/css/bootstrap.min.css';

import profileImage from '../assets/about.png'; // Import your profile image

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hi, I'm Waseem Akram, a passionate and dedicated full-stack web developer with a strong foundation in both front-end and back-end technologies. I love turning ideas into functional and visually appealing websites and applications.
        </p>
        {/* ... (rest of the content) */}
        <p className="signature">Waseem Akram</p>
      </div>
      <div className="profile-image-container">
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>
    </div>
  );
};

export default About;

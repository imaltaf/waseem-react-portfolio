import React, { useState } from 'react';
import { FaHtml5, FaCss3, FaJs } from 'react-icons/fa';
import { DiNodejs, DiMongodb } from 'react-icons/di';
import './Skill.css'; // Import the CSS file

const Skill = () => {
  const [selectedSkill, setSelectedSkill] = useState('');

  const renderSkills = () => {
    switch (selectedSkill) {
      case 'frontend':
        return (
          <div className="skills-container fade-in">
            <div className="skill-item">
              <FaHtml5 /> HTML
            </div>
            <div className="skill-item">
              <FaCss3 /> CSS
            </div>
            <div className="skill-item">
              <FaJs /> JavaScript
            </div>
            <div className="skill-item">
              <FaHtml5 /> HTML
            </div>
            <div className="skill-item">
              <FaCss3 /> CSS
            </div>
            <div className="skill-item">
              <FaJs /> JavaScript
            </div>
            <div className="skill-item">
              <FaHtml5 /> HTML
            </div>
            <div className="skill-item">
              <FaCss3 /> CSS
            </div>
            <div className="skill-item">
              <FaJs /> JavaScript
            </div>
          </div>
        );

      case 'backend':
        return (
          <div className="skills-container fade-in">
            <div className="skill-item">
              <DiNodejs /> Node.js
            </div>
            <div className="skill-item">
              <DiMongodb /> MongoDB
            </div>
          </div>
        );

      // ... (other cases)

      default:
        return null;
    }
  };

  return (
    <div>
      <button onClick={() => setSelectedSkill('frontend')}>Frontend Skills</button>
      <button onClick={() => setSelectedSkill('backend')}>Backend Skills</button>
      <button onClick={() => setSelectedSkill('tools')}>Tools</button>
      <button onClick={() => setSelectedSkill('upcoming')}>Upcoming Skills</button>
      <div>{renderSkills()}</div>
    </div>
  );
};

export default Skill;

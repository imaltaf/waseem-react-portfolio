import React, { useState } from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaDatabase, FaCode, FaToolbox, FaQuestion } from 'react-icons/fa';

import './Skill.css';

const Skill = () => {
  const [selectedCategory, setSelectedCategory] = useState('frontend'); // Default to Frontend Skills

  const frontendSkills = [
    { icon: <FaHtml5 />, name: 'HTML' },
    { icon: <FaCss3 />, name: 'CSS' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaReact />, name: 'React' },
    { icon: <FaCode />, name: 'Bootstrap' }, // Use a generic code icon for Bootstrap
    { icon: <FaCode />, name: 'jQuery' },   // Use a generic code icon for jQuery
  ];
  const backendSkills = [
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <FaDatabase />, name: 'MongoDB' },
    // Add more backend skills here
  ];

  const tools = [
    { icon: <FaCode />, name: 'VS Code' },
    { icon: <FaToolbox />, name: 'Postman' },
    { icon: <FaReact />, name: 'Heroku' },
    // Add more tools here
  ];

  const upcomingSkills = [
    { icon: <FaQuestion />, name: 'DevOps' },
    { icon: <FaQuestion />, name: 'Cyber Security' },
    { icon: <FaQuestion />, name: 'Hacking' },
    // Add more upcoming skills here
  ];

  const getSkillsByCategory = () => {
    switch (selectedCategory) {
      case 'frontend':
        return frontendSkills;
      case 'backend':
        return backendSkills;
      case 'tools':
        return tools;
      case 'upcoming':
        return upcomingSkills;
      default:
        return [];
    }
  };

  const renderSkills = (skills) => {
    return (
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index} title={`I am ${skill.name}`}>
            <span className="skill-icon">
              {skill.icon}
            </span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="skill-wrapper">
      <div className="category-buttons">
        <button onClick={() => setSelectedCategory('frontend')}>Frontend Skills</button>
        <button onClick={() => setSelectedCategory('backend')}>Backend Skills</button>
        <button onClick={() => setSelectedCategory('tools')}>Tools</button>
        <button onClick={() => setSelectedCategory('upcoming')}>Upcoming Skills</button>
      </div>
      {renderSkills(getSkillsByCategory())}
    </div>
  );
};

export default Skill;

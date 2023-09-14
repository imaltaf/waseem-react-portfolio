import React, { useState } from 'react';
import Calculatore from './Frontend/Calculator/Calculatore';
import TodoList from './Frontend/TodoList/TodoList';
import '../Projects/BeginnerProjectDetail.css'; // Import your CSS file for this component
import Weather from '../Projects/Frontend/Weather/Weather'
import Whatsapp from './Frontend/whatsapp/Whatsapp';

const BeginnerProjectsDetail = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (projectName) => {
    if (selectedProject === projectName) {
      setSelectedProject(null); // Deselect the project if it's already selected
    } else {
      setSelectedProject(projectName); // Select the new project
    }
  };
  return (
    <div className='BeginnerProject'>
      <h1>Beginner Projects Detail</h1>

      <div>
      <button
          className={`project-button ${selectedProject === 'Calculator' ? 'selected' : ''}`}
          onClick={() => handleProjectClick('Calculator')}
        >
          Calculator
        </button>
        
        <button
          className={`project-button ${
            selectedProject === 'TodoList' ? 'selected' : ''
          }`}
          onClick={() => handleProjectClick('TodoList')}
        >
          TodoList
        </button>
        <button
          className={`project-button ${
            selectedProject === 'Weather' ? 'selected' : ''
          }`}
          onClick={() => handleProjectClick('Weather')}
        >
          Weather
        </button>
        <button
          className={`project-button ${selectedProject === 'Whatsapp' ? 'selected' : ''}`}
          onClick={() => handleProjectClick('Whatsapp')}
        >
          Whatsapp
        </button>
        {/* Add similar buttons for other projects */}
      </div>
         
      {selectedProject === 'Calculator' && <Calculatore />}


      {selectedProject === 'TodoList' && <TodoList />}
      {selectedProject === 'Weather' && <Weather />}
      {selectedProject === 'Whatsapp' && <Whatsapp />}

      {/* Add similar conditions for other projects */}
    </div>
  );
};

export default BeginnerProjectsDetail;

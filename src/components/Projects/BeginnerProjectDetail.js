import React, { useState } from 'react';
import Calculatore from './Frontend/Calculator/Calculatore';
import TodoList from './Frontend/TodoList/TodoList';
import '../Projects/BeginnerProjectDetail.css'; // Import your CSS file for this component
import Weather from '../Projects/Frontend/Weather/Weather'
import Whatsapp from './Frontend/whatsapp/Whatsapp';
import Employee from './Frontend/TodoList/Employee';
import CalendarComponent from './Frontend/TodoList/CalendarComponent';
import TranslationInbox from './Frontend/Transulate/TranslationInbox';

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
          className={`project-button ${selectedProject === 'Calculator' ? 'selected' : ''} button1`}
          onClick={() => handleProjectClick('Calculator')}
        >
          Calculator
        </button>
        
        <button
          className={`project-button ${selectedProject === 'TodoList' ? 'selected' : ''} button2`}
          onClick={() => handleProjectClick('TodoList')}
        >
          TodoList
        </button>
        <button
          className={`project-button ${selectedProject === 'Weather' ? 'selected' : ''} button3`}
          onClick={() => handleProjectClick('Weather')}
        >
          Weather
        </button>
        <button
          className={`project-button ${selectedProject === 'Whatsapp' ? 'selected' : ''} button4`}
          onClick={() => handleProjectClick('Whatsapp')}
        >
          Whatsapp
        </button>
        <button
          className={`project-button ${selectedProject === 'Employee' ? 'selected' : ''} button5`}
          onClick={() => handleProjectClick('Employee')}
        >
          Employee
        </button>
        <button
          className={`project-button ${selectedProject === 'CalendarComponent' ? 'selected' : ''} button6`}
          onClick={() => handleProjectClick('CalendarComponent')}
        >
          Stop watch
        </button>
        <button
          className={`project-button ${selectedProject === 'TranslationInbox' ? 'selected' : ''} button6`}
          onClick={() => handleProjectClick('TranslationInbox')}
        >
TranslationInbox        </button>
        {/* Add similar buttons for other projects */}
      </div>
         
      {selectedProject === 'Calculator' && <Calculatore />}

      {selectedProject === 'TodoList' && <TodoList />}
      {selectedProject === 'Weather' && <Weather />}
      {selectedProject === 'Whatsapp' && <Whatsapp />}
      {selectedProject === 'Employee' && <Employee />}
      {selectedProject === 'CalendarComponent' && <CalendarComponent />}
      {selectedProject === 'TranslationInbox' && <TranslationInbox />}


      {/* Add similar conditions for other projects */}
    </div>
  );
};

export default BeginnerProjectsDetail;

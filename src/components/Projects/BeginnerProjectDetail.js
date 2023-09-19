import React, { useState } from 'react';
import '../Projects/BeginnerProjectDetail.css'; // Import your CSS file for this component
import Calculatore from './Frontend/Calculator/Calculatore';
import TodoList from './Frontend/TodoList/TodoList';
import Weather from '../Projects/Frontend/Weather/Weather';
import Whatsapp from './Frontend/whatsapp/Whatsapp';
import Employee from './Frontend/TodoList/Employee';
import CalendarComponent from './Frontend/TodoList/CalendarComponent';
import LiveLocation from './Frontend/LiveLocation/LiveLocation';
import Expense from './Frontend/Expenses/Expense';
import Random from './Frontend/Expenses/Random';
import NoteApp from './Frontend/TodoList/NoteApp';
import Flames from './Frontend/TodoList/Flames';
import PasswordGenerator from './Frontend/TodoList/PasswordGenerator';
import CurrencyConverter from './Frontend/TodoList/CurrencyConverter';
import Quiz from './Frontend/Expenses/Quiz';


const projectData = [
  { name: 'Calculator', component: <Calculatore /> },
  { name: 'TodoList', component: <TodoList /> },
  { name: 'Weather', component: <Weather /> },
  { name: 'Whatsapp', component: <Whatsapp /> },
  { name: 'Employee', component: <Employee /> },
  { name: 'CalendarComponent', component: <CalendarComponent /> },
  { name: 'LiveLocation', component: <LiveLocation /> },
  { name: 'Expense', component: <Expense /> },
  {name: 'Random', component: <Random />},
  {name: 'NoteApp', component: <NoteApp />},
  {name: 'Flames', component: <Flames />},
  {name: 'PasswordGenerator', component: <PasswordGenerator />},
  {name: 'CurrencyConverter', component: <CurrencyConverter />},
  {name: 'Quiz', component: <Quiz />},

  // Add more projects as needed
];

const BeginnerProjectsDetail = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (projectName) => {
    setSelectedProject(projectName);
  };

  return (
    <div className="BeginnerProject">
      <h1>Beginner Projects Detail for FrontEnd Web Developer</h1>

      <div className="project-buttons">
        {projectData.map((project, index) => (
          <button
            key={index}
            className={`project-button ${selectedProject === project.name ? 'selected' : ''}`}
            onClick={() => handleProjectClick(project.name)}
          >
            {project.name}
          </button>
        ))}
      </div>

      <div className="project-details">
        {projectData.map((project, index) => (
          selectedProject === project.name && (
            <div key={index} className="project-component">
              {project.component}
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default BeginnerProjectsDetail;

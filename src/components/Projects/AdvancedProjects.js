import React, { useState } from 'react';


const AdvancedProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Function to handle project selection
  const handleProjectClick = (projectName) => {
    if (selectedProject === projectName) {
      setSelectedProject(null); // Deselect the project if it's already selected
    } else {
      setSelectedProject(projectName); // Select the new project
    }
  };

  return (
    <div className='AdvancedProjects'>
      <h1>Advanced Projects Details for FrontEndWebDeveloper</h1>

      <div>
        <button onClick={() => handleProjectClick('Project1')}>
          Project 1
        </button>
        {/* Add similar buttons for other projects */}
      </div>

      {selectedProject === 'Project1' && (
        <div>
          <h2>Project 1 Details</h2>
          
          {/* Add project-specific details here */}
        </div>
      )}

      {/* Add similar conditions for other projects */}
    </div>
  );
};

export default AdvancedProjects;

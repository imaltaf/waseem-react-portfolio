import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import BeginnerProjectsDetail from './BeginnerProjectDetail';
import AdvancedProjects from './AdvancedProjects';
import ClientProjects from './ClientProjects';
import './Projects.css'; // Import your CSS file for styling

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="project-card-container">
        <Link to="/projects/beginner" className="project-card beginner-card">
          <h3>Beginner Projects</h3>
          <p>Explore projects suitable for beginners.</p>
        </Link>
        <Link to="/projects/advanced" className="project-card advanced-card">
          <h3>Advanced Projects</h3>
          <p>Explore advanced and challenging projects.</p>
        </Link>
        <Link to="/projects/client" className="project-card client-card">
          <h3>Client Projects</h3>
          <p>Explore projects developed for clients.</p>
        </Link>
      </div>
      <Switch>
        <Route path="/projects/beginner" component={BeginnerProjectsDetail} />
        <Route path="/projects/advanced" component={AdvancedProjects} />
        <Route path="/projects/client" component={ClientProjects} />
      </Switch>
    </div>
  );
};

export default Projects;

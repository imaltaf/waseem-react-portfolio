import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faCode, faEnvelope, faBook, faNewspaper, faUserTie, faToolbox } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const [showComponents, setShowComponents] = useState(false);
  const [showInterviewDropdown, setShowInterviewDropdown] = useState(false);

  const toggleComponents = () => {
    setShowComponents(!showComponents);
  };

  const toggleInterviewDropdown = () => {
    setShowInterviewDropdown(!showInterviewDropdown);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Portfolio</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleComponents}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${showComponents ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className={`nav-link ${window.location.pathname === '/' ? 'active' : ''}`} to="/">
                <FontAwesomeIcon icon={faHome} /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${window.location.pathname === '/about' ? 'active' : ''}`} to="/about">
                <FontAwesomeIcon icon={faUser} /> About
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${window.location.pathname === '/projects' ? 'active' : ''}`} to="/projects">
                <FontAwesomeIcon icon={faBriefcase} /> Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${window.location.pathname === '/skills' ? 'active' : ''}`} to="/skills">
                <FontAwesomeIcon icon={faCode} /> Skills
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="interviewDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded={showInterviewDropdown}
                onClick={toggleInterviewDropdown}
              >
                <FontAwesomeIcon icon={faUserTie} /> Interview
              </a>
              <div className={`dropdown-menu ${showInterviewDropdown ? 'show' : ''}`} aria-labelledby="interviewDropdown">
                <Link className="dropdown-item" to="/interview/front-end">
                  Front End
                </Link>
                <Link className="dropdown-item" to="/interview/back-end">
                  Back End
                </Link>
                <Link className="dropdown-item" to="/interview/tools">
                  Tools
                </Link>
                <Link className="dropdown-item" to="/interview/books">
                  Books for Developers
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${window.location.pathname === '/blogs' ? 'active' : ''}`} to="/blogs">
                <FontAwesomeIcon icon={faNewspaper} /> Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${window.location.pathname === '/contact' ? 'active' : ''}`} to="/contact">
                <FontAwesomeIcon icon={faEnvelope} /> Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import DeveloperIllustration from '../assets/Online page-amico.svg'; // Replace with your illustration import path
import { Link } from 'react-router-dom';
import './Home2.css'; // Import the CSS file

const Home2 = () => {
  return (
    <Container>
      <Row className="align-items-center">
        <Col xs={12} md={6}>
          <img src={DeveloperIllustration} alt="Developer Illustration" className="img-fluid" />
        </Col>
        <Col xs={12} md={6}>
          <Card>
            <Card.Body>
              <div className="d-flex flex-column align-items-center">
                <p>
                  I'm a web developer with expertise in various areas including Web Development, Open Source Projects, Frontend, Backend, and UI/UX Design. I'm also the CEO of{' '}
                  <a href="https://opensecai.com" target="_blank" rel="noopener noreferrer">
                    opensecai.com
                  </a>
                  .
                </p>
                <div className="buttonContainer">
                  <Link to="/about" className="custom-button about">
                    About
                  </Link>
                  <Link to="/contact" className="custom-button contact">
                    Contact
                  </Link>
                  <Link to="/skills" className="custom-button skills">
                    Skills
                  </Link>
                  <Link to="/Projects" className="custom-button projects">
                    Projects
                  </Link>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home2;

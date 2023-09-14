import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import Home2 from '../assets/Home.svg';
import './HomePage.css';
import Home2 from './Home2';
import Pic from '../assets/Home.svg'

const HomePage = () => {
  const [isNameVisible, setNameVisible] = useState(false);
  const [isAkramVisible, setAkramVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation after a delay
    setTimeout(() => {
      setNameVisible(true);
      setTimeout(() => {
        setAkramVisible(true);
      }, 400); // Delay before showing "Akram"
    }, 1000); // Initial delay before showing "Waseem"
  }, []);

  return (
    <div className="homepage-background">
      <Container className="my-5 homepage-container">
        <Row>
          <Col md={6}>
            <h1 className="homepage-heading">
              {isNameVisible && (
                <span className="animate-name-waseem">Waseem</span>
              )}{' '}
              {isAkramVisible && (
                <span className="animate-name-akram">Akram</span>
              )}{' '}
            </h1>
            {/* <h2 className="homepage-subheading">Welcome to Waseem Akram Portfolio</h2> */}
            <p className="homepage-text">
              {isNameVisible && isAkramVisible && (
                <>
                  I am a Full Stack Web Developer with a passion for creating
                  interactive and user-friendly web applications. I specialize in
                  frontend and backend technologies, and I love turning ideas into
                  beautiful, functional websites.
                </>
              )}
            </p>

            <p className="homepage-text">
              {isNameVisible && isAkramVisible && (
                <>
                  My goal is to deliver high-quality, performant, and scalable web
                  solutions. I'm always eager to learn and stay up-to-date with the
                  latest web development trends.
                </>
              )}
            </p>
            <p className="homepage-text">
              {isNameVisible && isAkramVisible && (
                <>
                  Feel free to explore my portfolio and check out some of the
                  projects I've worked on. If you have any questions or want to
                  collaborate, please don't hesitate to contact me.
                </>
              )}
            </p>
             
          </Col>
          <Col md={6}>
            <img src={Pic} alt="Illustration" className="img-fluid" />
          </Col>
        </Row>
        
      </Container>
      
      <Home2 />
    </div>
  );
};

export default HomePage;

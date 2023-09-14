import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
// import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Project';
// import ContactForm from './components/Contact/ContactForm';
import HomePage from './components/Home/Home';
import Skill from './components/Skill/Skill';
import Contact from './components/Contact/Contact';


const App = () => {
  return (
    <Router>
      <Navbar />
      <>My name is waseem Akram</>
      
      <div className="container mt-5">
        <Switch>
          <Route path="/" exact component={HomePage} />
          {/* <Route path="/ContactForm" component={ContactForm} /> */}
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} /> {/* Add this line */}
          <Route path="/skills" component={Skill} /> 
          <Route path="/contact" component={Contact} /> 

        </Switch>
       
      </div>
    </Router>
  );
};

export default App;

import React from 'react';
import '../styles/AboutMe.css';
import CheckIcon from '@mui/icons-material/Check';

import MongoDBIcon from '../assets/mongodb-icon.svg';
import ExpressIcon from '../assets/express-icon.svg';
import NodeJSIcon from '../assets/nodejs-icon.svg';
import JavaScriptIcon from '../assets/javascript-icon.svg';
import ReactIcon from '../assets/react-icon.svg';
import MySqlIcon from '../assets/mysql-icon.svg';
import CssIcon from '../assets/css-icon.svg';
import HtmlIcon from '../assets/html-icon.svg';

const AboutMe = () => {
  return (
    <section className="about-container">
      <h3>About Me</h3>
      <div className="about-me">
        <div className="about-info intro">
          <h4>Background</h4>
          <p>
            I'm passionate developer in building web applications.
            I specialize in MERN stack development and love creating seamless user experiences.
          </p>
        </div>
        <div className="about-info">
          <h4><strong>What I Do</strong></h4>
          <ul>
            <li><CheckIcon /> Fronted Development</li>
            <li><CheckIcon /> Backend Development</li>
            <li><CheckIcon /> REST full API</li>
            <li><CheckIcon /> Database Management</li>
          </ul>
        </div>
      </div>

      <h3>Skills</h3>
      <div className="skills-header">
        <div className="frontend-skill skills">
          <h4>Frontend</h4>
          <ul>
            <li className="skill-item">
              <img src={ReactIcon} className="skill-icon" alt="React Icon" />
              <span className="skill-name">React</span >
            </li>
            <li className="skill-item">
              <img src={JavaScriptIcon} className="skill-icon" alt="JavaScript Icon" />
              <span className="skill-name">JavaScript</span >
            </li>
            <li className="skill-item">
              <img src={HtmlIcon} className="skill-icon" alt="HTML Icon" />
              <span className="skill-name">HTML</span >
            </li>
            <li className="skill-item">
              <img src={CssIcon} className="skill-icon" alt="CSS Icon" />
              <span className="skill-name">CSS</span >
            </li>
          </ul>
        </div>

        <div className="backend-skill skills">
          <h4>Backend</h4>
          <ul>
            <li className="skill-item">
              <img src={NodeJSIcon} className="skill-icon" alt="Node.js Icon" />
              <span className="skill-name">Node.js</span >
            </li>
            <li className="skill-item">
              <img src={ExpressIcon} className="skill-icon" alt="Express.js Icon" />
              <span className="skill-name">Express.js</span >
            </li>
          </ul>
        </div>
        <div className="database-skill skills">
          <h4>Database</h4>
          <ul>
            <li className="skill-item">
              <img src={MongoDBIcon} className="skill-icon" alt="MongoDB Icon" />
              <span className="skill-name">MongoDB</span >
            </li>
            <li className="skill-item">
              <img src={MySqlIcon} className="skill-icon" alt="MySQL Icon" />
              <span className="skill-name">MySQL</span >
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

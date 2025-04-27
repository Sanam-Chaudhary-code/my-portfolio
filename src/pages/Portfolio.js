import React, { useState } from 'react';
import '../styles/Portfolio.css';
import PortfolioImage from '../assets/project-image.png';
import TicImage from '../assets/tic-tak-toc.jpg';
import SimonSaysImage from '../assets/simon-says-image.jpg';
import MyVideoCall from '../assets/my-video-call-image.png'; 

// Sample data for your projects
const projects = [
  {
    title: 'My Video Call',
    description: 'Real-time communication app with chat, screen sharing, and audio/video calls.',
    link: 'https://my-video-call-app-jduv.onrender.com/',
    technologies: ['HTML', 'CSS', 'React', 'Node.js', 'MongoDB'],
    image: MyVideoCall,
  }
  ,
  {
    title: 'Tic-Tac-Toe',
    description: 'A 3x3 grid game with alternating player moves.',
    link: 'https://sanamchytictactoe.netlify.app/',
    technologies: ['React', 'CSS', 'JavaScript'],
    image: TicImage,
  },
  {
    title: 'Simple Portfolio',
    description: 'A portfolio site for web development expertise.',
    link: 'https://sanamchudhary.github.io/',
    technologies: ['React', 'HTML', 'CSS'],
    image: PortfolioImage,
  },
  {
    title: 'Simon-Says',
    description: 'It is a fun and interactive memory game.',
    link: 'https://simonsaysgamechild.netlify.app/',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    image: SimonSaysImage,
  }
];

const Portfolio = () => {
  const [selectedTech, setSelectedTech] = useState('All');

  // Get unique technologies
  const allTechnologies = ['All', ...new Set(projects.flatMap(p => p.technologies))];

  // Filter projects
  const filteredProjects = selectedTech === 'All'
    ? projects
    : projects.filter(project => project.technologies.includes(selectedTech));

  return (
    <section className="portfolio">
      <div className="project-detail">
        <h3>Projects</h3>
      </div>

      {/* Navigation Bar */}
      <nav className="portfolio-nav">
        {allTechnologies.map((tech, index) => (
          <button
            key={index}
            className={selectedTech === tech ? 'active' : ''}
            onClick={() => setSelectedTech(tech)}
          >
            {tech}
          </button>
        ))}
      </nav>

      {/* Project Grid */}
      <div className="portfolio-grid">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="description">
              <h3>{project.title}</h3>
              <p>{project.description} Built with <span className="technologies">{project.technologies.join(', ')}</span></p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

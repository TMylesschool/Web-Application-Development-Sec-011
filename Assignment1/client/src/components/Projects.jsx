import React from 'react';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="project">
        <img src={project1} alt="Project 1" />
        <h3>HTML and CSS Final Project</h3>
        <p>My HTML final was about making a consumers website about anything we want, so i made it about selling super and hyper cars</p>
      </div>
      <div className="project">
        <img src={project2} alt="Project 2" />
        <h3>Making Pong</h3>
        <p>For my second project that i want to show is my making on pong in unity</p>
      </div>
      <div className="project">
        <img src={project3} alt="Project 3" />
        <h3>Reacreating a Centennial Form</h3>
        <p>For my third assignment that i want to show is when i remade a form from centennial college.</p>
      </div>
    </div>
  );
};

export default Projects;

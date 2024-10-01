import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Trevor Myles Portfolio</h1>
      <p>My mission is to pursue academic excellence and personal growth to prepare for a fulfilling 
        career. I aim to develop the skills and values necessary for success in the workplace, while 
        also contributing positively to my community. By demonstrating integrity, dedication, and teamwork, 
        I strive to create opportunities for myself and inspire others to achieve their goals.</p>
      <Link to="/about" className="btn">Learn More About Me</Link>
    </div>
  );
};

export default Home;

import React from 'react';
import myImage from '../assets/me.jpg';  // Your profile image
import resume from '../assets/resume.pdf';    // Your resume PDF

const AboutMe = () => {
  return (
    <div className="about-me">
      <h1>About Me</h1>
      <img src={myImage} alt="Trevor Myles" className="profile-img" />
      <p>Hi, I'm Trevor Myles, and I pride myself on being kind and responsible. I strive to show compassion and 
        consideration for others in my daily interactions. I believe that my kindness and sense of responsibility 
        positively impact those around me.</p>
      <a href={resume} download className="btn">Download My Resume</a>
    </div>
  );
};

export default AboutMe;

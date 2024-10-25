import React, { useState, useEffect } from 'react';
import "./homepage.css";
import home_img from "./image/home-right.png";
import about from "./image/about-us.png";
import cardImage1 from './image/s1.png';
import cardImage2 from './image/s2.png';
import cardImage3 from './image/s3.png';
import cardImage4 from './image/s4.png';
import projectimage from './image/project-card.png';

const Homepage = () => {
  const [education, setEducation] = useState([]);
  const [projects, setProjects] = useState([]);
  const [services, setServices] = useState([]); // New state for services

  
  useEffect(() => {
    fetch('http://localhost:5000/getEdu')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setEducation(data))
      .catch(error => console.error('Error fetching education data:', error));
  }, []);


  useEffect(() => {
    fetch('http://localhost:5000/getProjects')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching project data:', error));
  }, []);

 
  useEffect(() => {
    fetch('http://localhost:5000/getServices')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setServices(data))
      .catch(error => console.error('Error fetching service data:', error));
  }, []);

  return (
    <>
      <div className="container" id="home">
        <div className="img">
          <img src={home_img} alt="Home" />
        </div>
        <div className="text">
          <h2>
            HELLO <hr />
          </h2>
          <h1>I'M RAMANDEEP KAUR</h1>
          <h2>JUNIOR DEVELOPER</h2>
          <div className="button">
            <button>Contact Me</button>
          </div>
        </div>
      </div>

      <div className="about-section" id="about">
        <div className="about-myself">
          <h1>Let’s introduce about myself.</h1>
          <p>
            I’m passionate about technology and have a strong foundation in programming languages like Java, Python, and JavaScript. <br /> Recently, I worked on a bank application project that involved PIN validation and transaction handling. I enjoy collaborating with peers and tackling challenges, and I’m eager to apply my skills in real-world scenarios. Thank you for the opportunity to introduce myself!
          </p>
          <div className="button">
            <button>View CV</button>
          </div>
        </div>
        <img src={about} alt="about" />
      </div>

      <div className="service" id="services">
        <div className="text">
          <h1>Service Offers</h1>
          <p>
            Here are the services I offer to help you achieve your goals.
          </p>
        </div>

        <div className="card-container">
          {services.map((service, index) => (
            <div key={index} className="card">
              <img src={cardImage1} alt={service.title} className="card-image" /> 
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="projects" id="projects">
        <div className="project-text">
          <h1>PROJECTS</h1>
          <p>Recently done projects</p>
        </div>

        <div className="project-card-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={projectimage} alt="Description for project" className="card-image" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="education-container" id="education">
        <div className="text">
          <h1>EDUCATION</h1>
          <hr />
        </div>

        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <h2>{edu.degree}</h2>
            <p>{edu.school}</p>
            <p>{edu.year}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Homepage;

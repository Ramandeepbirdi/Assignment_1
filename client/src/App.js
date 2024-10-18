import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const [education, setEducation] = useState([]);
  const [projects, setProjects] = useState([]);

  // Fetch education data
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

  // Fetch project data
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

  return (
    <div className="App">
      <Header />
      <Education education={education} />
      <Projects projects={projects} />
      <Footer />
    </div>
  );
}

export default App;

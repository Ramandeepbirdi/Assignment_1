const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = 5000;


const resumeData = {
  education: [
    { school: "Humber College", degree: "Diploma Computer Programming", year: "2024-2025" },
    { school: "Guru Nanak Dev Polytechnic College", degree: "Diploma in Computer Science", year: "2020-2024" }
  ],
  projects: [
    { title: "Botanix Brain", description: "A project based on Python programming language made for the contribution to the Green Revolution." },
    { title: "React-Express Portfolio", description: "A portfolio website built with React and Express." }
  ],
  services: [
    { title: "WP Developing", description: "Creating WordPress websites with a focus on usability and aesthetics." },
    { title: "UI/UX Design", description: "Designing user interfaces and experiences that are engaging and user-friendly." },
    { title: "Web Design", description: "Developing responsive and modern websites." },
    { title: "SEO Optimization", description: "Enhancing website visibility on search engines." },
  ]
};


app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

app.get('/getEdu', (req, res) => {
  res.json(resumeData.education);
});

app.get('/getProjects', (req, res) => {
  res.json(resumeData.projects);
});


app.get('/getServices', (req, res) => {
  res.json(resumeData.services);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

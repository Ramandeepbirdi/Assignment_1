const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = 5000;

// Sample resume data
const resumeData = {
  education: [
    { school: "Humber College", degree: "Diploma Computer Programming", year: "2024-2025" },
    { school: "Guru Nanak Dev polytechnic College", degree: "Diploma in Computer Science", year: "2020-2024" }
  ],
  projects: [
    { title: "Botanix Brain", description: "A project is based on Python programming language and it is made for the contribution of Green revolution" },
    { title: "React-Express Portfolio", description: "A portfolio website built with React and Express." }
  ]
};

// Routes

app.get('/', (req, res) => {
  res.send('Welcome to the API');
});


app.get('/getEdu', (req, res) => {
  res.json(resumeData.education);
});

app.get('/getProjects', (req, res) => {
  res.json(resumeData.projects);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

import React from 'react';

function Education({ education }) {
  return (
    <section>
      <h2>Education</h2>
      {education.map((edu, index) => (
        <div key={index}>
          <h3>{edu.school}</h3>
          <p>{edu.degree} - {edu.year}</p>
        </div>
      ))}
    </section>
  );
}

export default Education;

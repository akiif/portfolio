import React, { useState } from 'react';

const resumeLink = "https://drive.google.com/u/2/uc?id=1aKRYWecb0zwVE2q58_vL6D0qH7tgqc1x&export=download";

function About() {
  const calculate_age = (dateString) => {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  }

  const [myAge, setMyAge] = useState(() => {
    return calculate_age("2000/01/26");
  });

  return (
    <section className='about colored-section' id='about'>
      <h2 className='title'>About</h2>
      <article>
        I am <span className='bold'>Akif Mohammed</span>; A Software Engineer who loves all things tech. I love to explore new technologies.
        <br /><br />
        I have completed my bachelor's degree in "Information Science and Engineering" from Mangalore, India. I am {myAge} years old. My hobbies include
        watching movies, anime and reviews of new tech products, gaming and reading novels.
      </article>
      <a className='resume-btn btn' href={resumeLink} aria-label="Download Resume" download={true}>Download Resume</a>
    </section>
  );
}

export default About;

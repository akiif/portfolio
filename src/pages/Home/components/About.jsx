import React from 'react';

const resumeLink = "https://drive.google.com/u/2/uc?id=14Cibaw_o5ERht5KviTBjWW_0Ezg1e6JR&export=download";

function About() {
  function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
  const myAge = calculate_age(new Date(2000, 1, 26));

  return (
    <section className='about colored-section' id='about'>
      <h2 className='title'>About</h2>
      <article>
        I am <span className='bold'>Akif Mohammed</span>; A Software Engineer who loves all things tech. I love to explore new technologies.
        <br /><br />
        I have completed my bachelor's degree in "Information Science and Engineering" from Mangalore, India. I am {myAge} years old. My hobbies include
        watching movies, anime and reviews of new tech products, gaming and reading novels.
      </article>
      <a className='resume-btn btn' href={resumeLink} download={true}>Download Resume</a>
    </section>
  );
}

export default About;

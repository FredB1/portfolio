import Navbar from './components/navbar'
import styles from '../styles/About.module.css'
import React, { useState, useEffect } from 'react';
const about = () => {
  return (
    <div>
      <Navbar />
      <h3 className={styles.about_heading}>About Me</h3>
      <p className={styles.about_paragraph}>
        As a dedicated junior computer science student, I have honed my skills in freelance web development, gaining valuable hands-on experience that complements my academic pursuits.
        I take pride in my strong interpersonal skills and innate passion for collaboration, which enable me to work effectively with diverse teams and tackle complex challenges.
        My solid foundation in mathematics and programming serves as the backbone for my ability to quickly adapt and learn new technologies, ensuring I stay current with the rapidly evolving landscape of the software industry.
        Driven by a desire to make a meaningful impact, I am eager to join a professional software engineering team where I can contribute my unique blend of skills and knowledge, while continuing to grow and learn in a dynamic and supportive environment.
      </p>
    </div>
  )
}

export default about
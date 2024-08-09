import Navbar from './components/navbar'
import styles from '../styles/About.module.css'
import React, { useState, useEffect } from 'react';
import Head from 'next/head'
const about = ({ pageProps }) => {
  return (
    <div>
      <Head>
        <meta name="description" content="About Me" />
        <meta name="keywords" content="About Me" />
        <meta name="twitter:description" content="About Me" />
        <meta name="og:description" content="About Me" />
      </Head>
      <Navbar />
      <h3 className={styles.about_heading}>About Me</h3>
      <img src='headshot.jpg' alt='Headshot' className={styles.headshot}></img>

      <p className={styles.about_paragraph}>
        As a recent computer science graduate, I have honed my skills in freelance web development, gaining valuable hands-on experience that complements my academic pursuits.
        I take pride in my strong interpersonal skills and passion for collaboration, which enable me to work effectively with diverse teams and tackle complex challenges.
        My solid foundation in mathematics and programming serves as the backbone for my ability to quickly adapt and learn new technologies, ensuring I stay current with the rapidly evolving landscape of the software industry.
        Driven by a desire to make a meaningful impact, I am eager to join a professional software engineering team where I can contribute my unique blend of skills and knowledge while continuing to grow and learn in a dynamic and supportive environment.   </p>
    </div>
  )
}

export default about

export async function getStaticProps() {
  return {
    props: {
      title: 'About', // Set the title here
    },
  };
}

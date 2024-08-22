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
      <h3 className={styles.about_heading}>About Me</h3>

      <section className={styles.about_paragraph}>
        <p>As a recent computer science graduate, I have leveraged my academic foundation to excel in freelance web development, where I have gained practical, real-world experience that complements my studies. My focus on delivering high-quality solutions has allowed me to build a strong portfolio, demonstrating my technical abilities and commitment to excellence.</p>
        <p>I pride myself on my ability to communicate effectively and collaborate with diverse teams, enabling me to tackle complex challenges with creativity and efficiency. My solid grounding in mathematics and programming, coupled with my adaptability, ensures that I can quickly learn and integrate new technologies to stay ahead in the rapidly evolving software industry.</p>
        <p>Driven by a strong desire to make a significant impact, I am actively seeking freelance and business contracts that allow me to apply my skills while I continue to pursue a full-time position that aligns with my professional goals. I am eager to contribute to a dynamic team where I can grow, innovate, and deliver meaningful results.</p>
      </section>
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

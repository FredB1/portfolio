import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react';
import projects from '../data/data.js';
import Hero from '../src/components/hero';
import Link from 'next/link.js';
export default function Home() {
  function addReviewJsonLd() {
    return {
      __html: `{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Web Development",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "25"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Victor Lucas"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "Fred delivered an exceptional website that significantly boosted our efficiency."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Micheal Moses"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "4.5",
              "bestRating": "5"
            },
            "reviewBody": "Great service, highly professional and very thorough."
          }
        ]
      }`,
    };
  }

  return (
    <div>
      <Head>
        <link rel="canonical" href="https://fredb.dev/" key="canonical" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addReviewJsonLd()}
          key="review-jsonld"
        />
      </Head><div className={styles.landingH}>

        <h1>Fred Burke is your trusted technology partner!</h1>
        <h2>Delivering custom software and web development solutions backed by years of experience and a keen eye for cybersecurity risks</h2>
      </div>
      <div class={styles.indexContent}>
        <ul>
          <li>Unlock More Customers</li>
          <li>Maximize Revenue</li>
          <li>Secure Your Future</li>
        </ul>
        <p>Don’t let missed opportunities cost you. Partner with me to drive growth, capture market share, and ensure long-term success.</p>
        <p>With proven strategies and cutting-edge solutions, I help businesses like yours attract more customers, boost sales, and stay ahead of the competition. Your success is my mission.</p>
        <Link href="/services" className={styles.indexBtn}>Learn More</Link>
      </div>
      <h2 className={styles.subHead}>Check out more of my past projects below</h2>
      <Hero data={projects} interval={5000} />
      <div className={styles.more_info}>
        <p>Looking for more details about what I offer? Visit my <Link href="/services">Services</Link> page to learn more about how I can help you with custom software, web development, and tailored business solutions.</p>
        <p>Curious about the work I&apos;ve done for other businesses? Head over to the <Link href="/projects">Projects</Link> page to explore case studies and examples of past work.</p>
        <p>If you&apos;re ready to take the next step and discuss how we can work together, feel free to <Link href="/contact">get in touch</Link> for a consultation. Let&apos;  s turn your vision into reality.</p>
      </div>

    </div>

  )
}

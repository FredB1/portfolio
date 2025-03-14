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
        "@type": "LocalBusiness",
        "name": "Fred Burke Web Development",
        "description": "Custom web development and software solutions for small businesses and entrepreneurs. Specializing in React, Node.js, and WordPress.",
        "image": "https://fredb.dev/favicon.ico",
        "url": "https://fredb.dev",
        "telephone": "+1-347-635-3817",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "72-11 Austin St",
          "addressLocality": "Forest Hills",
          "addressRegion": "NY",
          "postalCode": "11433",
          "addressCountry": "US"
        },
        "priceRange": "$$",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "40.719276",
          "longitude": "-73.842174"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "09:00",
            "closes": "17:00"
          }
        ],
        "sameAs": [
          "https://www.linkedin.com/in/fredb7",
          "https://github.com/fredb1"
        ],
        "serviceType": "Technology Services",
        "offers": [
          {
            "@type": "Offer",
            "name": "Application Development",
            "description": "Custom application development services to meet your business needs.",
            "priceCurrency": "USD",
            "price": "Varies by project"
          },
          {
            "@type": "Offer",
            "name": "Mobile Applications",
            "description": "Development of cross-platform and native mobile applications.",
            "priceCurrency": "USD",
            "price": "Varies by project"
          },
          {
            "@type": "Offer",
            "name": "Websites",
            "description": "Professional web development services to build dynamic and secure websites.",
            "priceCurrency": "USD",
            "price": "Varies by project"
          },
          {
            "@type": "Offer",
            "name": "Software Development",
            "description": "Full-stack software development tailored to your business requirements.",
            "priceCurrency": "USD",
            "price": "Varies by project"
          },
          {
            "@type": "Offer",
            "name": "Web Development",
            "description": "Professional web development services to build dynamic and secure websites.",
            "priceCurrency": "USD",
            "price": "Varies by project"
          },
          {
            "@type": "Offer",
            "name": "Support and Miscellaneous",
            "description": "Ongoing technical support and miscellaneous services to ensure your systems run smoothly.",
            "priceCurrency": "USD",
            "price": "Varies by project"
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
      </Head>
      <div className={styles.landingH}>
        <h1>Fred Burke is your trusted technology partner!</h1>
        <h2>Delivering custom software and web development solutions backed by years of experience and a keen eye for cybersecurity risks</h2>
      </div>
      <div class={styles.indexContent}>
        <ul>
          <li><h3>Unlock More Customers</h3></li>
          <li><h3>Maximize Revenue</h3></li>
          <li><h3>Secure Your Future</h3></li>
        </ul>
        <p>Don’t let missed opportunities cost you. Partner with me to drive growth, capture market share, and ensure long-term success.</p>
        <p>With proven strategies and cutting-edge solutions, I help businesses like yours attract more customers, boost sales, and stay ahead of the competition. Your success is my mission.</p>
        <Link href="/services" className={styles.indexBtn}>Learn More</Link>
      </div>
      <h2 className={styles.subHead}>Check out more of my past projects below</h2>
      <Hero data={projects} interval={5000} />
      <div className={styles.more_info}>
        <p>Looking for more details about what I offer? Visit my <Link href="/services">Services</Link> page to learn more about how I can help you with custom software, web development, and tailored business solutions that streamline operations and enhance your competitive edge.</p>
        <p>Curious about the work I&apos;ve done for other businesses? Head over to the <Link href="/projects">Projects</Link> page to explore case studies, client success stories, and examples of innovative projects that have delivered measurable results.</p>
        <p>When it comes to technology, I believe in building secure, scalable, and efficient solutions that drive growth. Whether you need a new website, a custom application, or a comprehensive software system, I&apos;m here to guide you through the process from start to finish.</p>
        <p>If you&apos;re ready to take the next step and discuss how we can work together, feel free to <Link href="/contact">get in touch</Link> for a consultation. Let&apos;s collaborate to turn your vision into reality, backed by years of experience and a commitment to excellence.</p>
      </div>

    </div>

  )
}

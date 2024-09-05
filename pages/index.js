import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react';
import projects from '../data/data.js';
import Hero from '../src/components/hero';
import Link from 'next/link.js';
export default function Home() {

  return (
    <div>
      <div class={styles.indexContent}>
        <h1>Unlock More Customers, Maximize Revenue, Secure Your Future.</h1>
        <p>Don’t let missed opportunities cost you. Partner with me to drive growth, capture market share, and ensure long-term success.</p>
        <p>With proven strategies and cutting-edge solutions, I help businesses like yours attract more customers, boost sales, and stay ahead of the competition. Your success is my mission.</p>
        <Link href="/services" className={styles.indexBtn}>Learn More</Link>
      </div>
      <Hero data={projects} interval={5000} />
    </div>

  )
}

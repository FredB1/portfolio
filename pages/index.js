import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from './components/navbar'
import React, { useState, useEffect } from 'react';
import projects from '../data/data.js';
import Hero from './components/hero';
export default function Home() {

  return (
    <div>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_ID}</title>
      </Head>
      <Navbar />
      <Hero data={projects} interval={5000} />
    </div>

  )
}

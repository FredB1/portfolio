import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './components/navbar'
import React, { useState, useEffect } from 'react';
import projects from '../data/data.js';
import Hero from './components/hero';

export default function Home() {
  
  return (
    <div>
      <Navbar />
      <Hero data={projects} interval={5000}/>
    </div>

  )
}

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
      <Hero images={projects} interval={3000}/>
      <div className="mt-4">
        <a href="about" className="bg-blue-500 text-white p-2 rounded-lg">About</a>
        <a href="contact" className="bg-blue-500 text-white p-2 rounded-lg">Contact</a>
      </div>
    </div>

  )
}

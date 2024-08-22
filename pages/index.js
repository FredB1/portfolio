import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react';
import projects from '../data/data.js';
import Hero from '../src/components/hero';
export default function Home() {

  return (
    <div>

      <Hero data={projects} interval={5000} />
    </div>

  )
}

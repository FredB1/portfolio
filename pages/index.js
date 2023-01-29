import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './components/navbar'
import React, { useState, useEffect } from 'react';
import projects from '../data/data.js';

export default function Home() {
  const [currentData, setCurrentData] = useState(projects[0]);
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i = i === projects.length - 1 ? 0 : i + 1;
      setCurrentData(projects[i]);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    if (currentData === projects.length - 1) {
      setCurrentData(0);
    } else {
      setCurrentData(currentData + 1);
    }
  };

  const handlePrev = () => {
    console.log(currentData)
    if (currentData === 0) {
      setCurrentData(projects[projects.length - 1]);
    } else {
      setCurrentData(projects[currentData - 1]);
    }
    console.log(currentData)

  };
  return (
    <div>
      <Navbar />

      <div className="relative h-screen bg-black">
        <button onClick={handlePrev} className="bg-black text-white p-3 rounded-l left-0">
          <svg viewBox="0 0 20 20" fill="currentColor" className="arrow-circle-left w-6 h-6">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd"></path>
          </svg>
        </button>
        <div
          className="bg-center bg-cover h-2/3"
          style={{ backgroundImage: `url(${currentData.image})` }}
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 text-white p-6">
            <h1 className="text-4xl font-medium">{currentData.title}</h1>
            <p className="text-lg">{currentData.summary}</p>
            <div className="flex">
              {currentData.technologies && currentData.technologies.map((tech) => (
                <div className="bg-gray-200 rounded-lg p-2 mr-2">{tech}</div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <div className="mt-4">
        <a href="about" className="bg-blue-500 text-white p-2 rounded-lg">About</a>
        <a href="contact" className="bg-blue-500 text-white p-2 rounded-lg">Contact</a>
      </div>
    </div>

  )
}

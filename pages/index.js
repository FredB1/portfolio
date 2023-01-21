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
  return  (
    <div>
      <Navbar/>
      
      <div className="relative h-screen">
            <div
                className="bg-center bg-cover h-full"
                style={{ backgroundImage: `url(${currentData.bgImage})` }}
            >
                <div className="absolute top-0 left-0 h-full w-1/2 bg-black"></div>
                <div className="absolute top-0 right-0 h-full w-1/2 bg-black"></div>
                <div className="absolute top-0 left-0 right-0 bottom-0 text-white p-6">
                    <h1 className="text-4xl font-medium">{currentData.title}</h1>
                    <p className="text-lg">{currentData.summary}</p>
                    <div>
                      {currentData.technologies.split(',').map((icon) => (
                        <img src={icon.icon} alt={icon.alt} key={icon.alt} />
                      ))}
                    </div>
                </div>
            </div>
        </div>
        </div>
    
  )}

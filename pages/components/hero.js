import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styles from './hero.module.css';
import TechIcons from './TechIcons';

const Hero = ({ data, interval }) => {
  const [currentIndex, setcurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setcurrentIndex((prevImage) => (prevImage + 1) % data.length);
    }, interval);

    return () => clearInterval(timer);
  }, [data, interval]);

  const previousImage = () => {
    setcurrentIndex((prevImage) => (prevImage - 1 + data.length) % data.length);
  };

  const nextImage = () => {
    setcurrentIndex((prevImage) => (prevImage + 1) % data.length);
  };

  return (
    <div className={styles.hero}>
      <div className={styles.hero__wrapper}>
        <FiChevronLeft className={styles.hero__button} onClick={previousImage} />
        <img src={data[currentIndex].image} alt={data[currentIndex].title} className={styles.hero__image} />
        <FiChevronRight className={styles.hero__button} onClick={nextImage} />
        <div className={styles.tech_icons}>
          {data[currentIndex].technologies.map((tech, index) => (
            <TechIcons key={index} tech={tech} />
          ))}</div>
      </div>
    </div>
  );
};

export default Hero;

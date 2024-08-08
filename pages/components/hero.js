import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styles from './hero.module.css';
import TechIcons from './TechIcons';
import Link from 'next/link';
import Image from 'next/image';

const Hero = ({ data = [], interval = 3000 }) => {
  const [currentIndex, setcurrentIndex] = useState(0);

  useEffect(() => {
    if (data.length === 0) return; // Prevent interval setup if no data

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

  if (data.length === 0) {
    return <div>No data available</div>; // Display a fallback UI if there's no data
  }

  return (
    <div className={styles.hero}>
      <div className={styles.hero__wrapper}>
        <FiChevronLeft className={styles.hero__button} onClick={previousImage} />
        <Link href={data[currentIndex].url}>
          <Image
            src={data[currentIndex].image.startsWith('http') ? data[currentIndex].image : `/${data[currentIndex].image}`}

            alt={data[currentIndex].title}
            className={styles.hero__image}
            width={800} // specify a suitable width
            height={450} // specify a suitable height

          />
        </Link>
        <FiChevronRight className={styles.hero__button} onClick={nextImage} />
        <div className={styles.tech_icons}>
          {data[currentIndex].technologies.map((tech, index) => (
            <TechIcons key={index} tech={tech} />
          ))}
        </div>
      </div>
      <Link href={data[currentIndex].url} className={styles.link_position}>
        Click here to find out more about the {data[currentIndex].title} project.
      </Link>
    </div>
  );
};

export default Hero;

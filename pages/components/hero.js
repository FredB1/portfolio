import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styles from './hero.module.css';

const Hero = ({ images, interval }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  const previousImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  return (
    <div className={styles.hero}>
      <div className={styles.hero__wrapper}>
        <FiChevronLeft className={styles.hero__button} onClick={previousImage} />
        <img src={images[currentImage].image} alt={images[currentImage].title} className={styles.hero__image} />
        <FiChevronRight className={styles.hero__button} onClick={nextImage} />
      </div>
    </div>
  );
};

export default Hero;

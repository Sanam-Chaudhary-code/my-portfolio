import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/HeroSection.css';
import img from '../assets/hero-image.png';

const HeroSection = () => {
  const imageVariants = {
    hidden: { x: '50vw', opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'tween', duration: 2 },
    },
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-intro">
          <h2><span>HELLO, I AM</span></h2>
          <h2>SANAM CHAUDHARY.</h2>
          <p>
            As a MERN stack developer, I specialize in building dynamic and scalable web applications using MongoDB, Express.js, React, and Node.js.
          </p>
          <Link to="/portfolio" className="btn">View My Work</Link>
        </div>
        <motion.img
          src={img}
          alt="my-image"
          className="hero-image"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        />
      </div>
    </section>
  );
};

export default HeroSection;

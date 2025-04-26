import React from 'react';
import HeroSection from '../components/HeroSection';
import About from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';

const Home = () => (
  <>
    <HeroSection />
    <About />
    <Portfolio />
    <Contact />
  </>
);

export default Home;

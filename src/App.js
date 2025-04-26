import React from 'react';
import { HashRouter  as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContainer'; // Theme context
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './styles/ThemeContainer.css';  // Include your CSS file

const App = () => {
  return (
    <ThemeProvider>
      <div className="ThemeContainer">
        <Router >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;

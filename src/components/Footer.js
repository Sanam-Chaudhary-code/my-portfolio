import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} SanamChy. All Rights Reserved.</p>
        <p>
          Built with ❤️ using React. Check out my{' '}
          <a href="https://github.com/SanamChudhary" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer; 
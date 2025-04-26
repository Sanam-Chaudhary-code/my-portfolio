import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './styles/App.css'; 
import App from './App';

// Create a root using createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app using the new root API
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './App.css';

// Animate on scroll initialization
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import './global.css'
import reportWebVitals from './reportWebVitals';

import AppRoot from './routes/AppRoot';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Created by Arda Turkvan
// -----------------------
// Technologies used:
// - React
// - React-router-dom
// - Three.js
// - Framer motion
// - React vertical timeline
// - Tailwindcss
// --------------------------------------------------------------------------------------------------------------------------------------
// massive thanks to JavaScript Mastery on YouTube for starting code ideas and help with learning framer-motion, tailwindcss and threejs.
// https://www.youtube.com/watch?v=0fYi8SGA20k
// --------------------------------------------------------------------------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoot />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

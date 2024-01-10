import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import './global.css'
import Home from './routes/Home/Home'
import reportWebVitals from './reportWebVitals';

import AppRoot from './routes/AppRoot';


/* <RouterProvider router={router} className="relative z-0 bg-primary bg-cover bg-no-repeat bg-center" /> */
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

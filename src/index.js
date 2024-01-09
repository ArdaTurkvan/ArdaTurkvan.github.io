import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import './global.css'
import Home from './routes/Home/Home'
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import AppRoot from './routes/AppRoot';
import ErrorPage from './routes/ErrorPage';
import Projects from './routes/Projects/Projects';
import { Work } from './routes/Work/Work';
import { Tech } from './routes/Tech/Tech';
import Picshare from './routes/Projects/picshare/Picshare';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRoot />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/work",
        element: <Work />
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/projects/picshare",
        element: <Picshare />
      },
      {
        path: "/tech",
        element: <Tech />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} className="relative z-0 bg-primary bg-cover bg-no-repeat bg-center"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

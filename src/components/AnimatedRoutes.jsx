import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';

import Home from '../routes/Home/Home.js'
import Work from '../routes/Work/Work.jsx'
import Projects from '../routes/Projects/Projects.jsx'
import Picshare from '../routes/Projects/picshare/Picshare.js';
import { Tech } from '../routes/Tech/Tech.jsx';

import { AnimatePresence } from 'framer-motion'

export const AnimatedRoutes = () => {

    const location = useLocation();
    return (
    <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/picshare" element={<Picshare />} />
            <Route path="/tech" element={<Tech />} />
        </Routes>
    </AnimatePresence>
  )
}
export default AnimatedRoutes;

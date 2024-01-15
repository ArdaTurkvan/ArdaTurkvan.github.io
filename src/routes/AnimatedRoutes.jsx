import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';

import Home from './Home/Home.js'
import Work from './Work/Work.jsx'
import Projects from './Projects/Projects.jsx'
import Picshare from './Projects/picshare/Picshare.js';
import { AnimatePresence } from 'framer-motion'
import Pathtracer from './Projects/pathtracer/Pathtracer.jsx';
import Bugbyte from './Projects/bugbyte/Bugbyte.jsx';
import Aotdivision from './Projects/aotdivision/Aotdivision.jsx';
import Bct from './Projects/bct/Bct.jsx';

export const AnimatedRoutes = () => {

    const location = useLocation();
    return (
    <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/picshare" element={<Picshare />} />
            <Route path="/projects/pathtracer" element={<Pathtracer />} />
            <Route path="/projects/bugbyte" element={<Bugbyte />} />
            <Route path="/projects/aotdivision" element={<Aotdivision />} />
            <Route path="/projects/bct" element={<Bct />} />
        </Routes>
    </AnimatePresence>
  )
}
export default AnimatedRoutes;

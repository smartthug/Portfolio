//import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SideNav from './components/SideNav';

import Exper from './components/Exper';

function App() {
  return (
    <div className="  bg-[var(--colourbg)] text-white font-sans cursor-crosshair overflow-hidden">
      <SideNav/>
      <Navbar />
      <Home />
      <About />
      <Exper/>
      <Projects />
      <Contact />
      
    </div>
  );
}

export default App;

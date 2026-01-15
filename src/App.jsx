import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

import Contact from './components/Contact';
import Footer from './components/Footer';

import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Education />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;

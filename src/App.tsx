import React from 'react';
import Portfolio from './components/Portfolio';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StarField from './components/StarField';
import FloatingElements from './components/FloatingElements';
import CinematicCameraMotion from './components/CinematicCameraMotion';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
  <StarField />
  <FloatingElements />
  <CinematicCameraMotion />
      <main>
        <Hero />
    <Services />
    <Portfolio />
    <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
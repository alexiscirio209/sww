// src/pages/Home.jsx
import { useEffect } from 'react';
import Hero from '../components/Hero';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';

function Home() {
  useEffect(() => {
    // Verifica si hay un hash en la URL
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
    </>
  );
}

export default Home;
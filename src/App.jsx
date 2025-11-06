// src/App.jsx
import Header from './components/Header';
import Hero from './components/Hero';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Footer from './components/Footer';
import ContactFloat from './components/ContactFloat';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />

      {/* Botón flotante siempre visible */}
      <ContactFloat />
    </div>
  );
}

export default App;

// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactFloat from './components/ContactFloat';
import Home from './pages/Home';
import Services from './pages/Services';
import KnowMore from './pages/KnowMore';
import Trip1 from './pages/Trip1';
import Trip2 from './pages/Trip2';
import Trip3 from './pages/Trip3';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />

        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/conoce-mas" element={<KnowMore />} />
            <Route path="/conoce-mas/trip1" element={<Trip1 />} />
            <Route path="/conoce-mas/trip2" element={<Trip2 />} />
            <Route path="/conoce-mas/trip3" element={<Trip3 />} />
          </Routes>
        </main>

        <Footer />
        <ContactFloat /> {/* Botónes */}
      </div>
    </Router>
  );
}

export default App;

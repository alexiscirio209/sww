// src/components/RollingGallery.jsx
import { useState, useEffect } from 'react';

function RollingGallery({ images, autoplay = false, pauseOnHover = false, className = '' }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoplay) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [autoplay, images.length]);

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      // Pausa el carrusel
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      // Reanuda el carrusel
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="w-full shrink-0">
            <img src={image} alt={`Image ${index + 1}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>
      {/* Flechas de navegación */}
      <button
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
      >
        ❮
      </button>
      <button
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
      >
        ❯
      </button>
      {/* Puntos indicadores */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default RollingGallery;
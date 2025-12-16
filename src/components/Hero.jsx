// src/components/Hero.jsx
import { useEffect, useRef, useState } from "react";
import Iridescence from "./Iridescence";
import RollingGallery from "./RollingGallery";

function Hero() {
  const [isClient, setIsClient] = useState(false);
  const heroRef = useRef(null);

  // Detectar cambios
  useEffect(() => {
    if (!heroRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      // Forzar re-renderizado
      setIsClient(false);
      setTimeout(() => setIsClient(true), 0);
    });

    resizeObserver.observe(heroRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const images = [
    "/assets/banner1.png",
    "/assets/banner2.png",
    "/assets/banner3.png",
    "/assets/banner5.png",
    "/assets/banner6.png",
  ];

  return (
    <section
      id="inicio"
      className="text-white py-12 lg:py-20 relative"
      ref={heroRef}
    >
      {/* Fondo Iridescence */}
      {isClient && (
        <Iridescence
          color={[0, 0, 0.3]}
          speed={1.0}
          amplitude={0.1}
          mouseReact={false}
          className="absolute inset-0 z-0"
        />
      )}

      {/* Contenido */}
      <div className="container mx-auto px-4 sm:px-6">
        {/* En móvil */}
        <div className="lg:flex lg:items-center lg:justify-between lg:gap-8">
          {/* Texto */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center lg:text-left drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]">
              ¡PROTEGEMOS LO QUE MÁS TE IMPORTA!
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-center lg:text-left drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]">
              MG SISTEMAS DE SEGURIDAD
            </h2>
          </div>

          {/* Carrusel de imágenes */}
          <div className="lg:w-1/2">
            <RollingGallery
              images={images}
              autoplay={true}
              pauseOnHover={true}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

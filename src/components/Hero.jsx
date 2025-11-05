// src/components/Hero.jsx
import Iridescence from './Iridescence';
import RollingGallery from './RollingGallery';

function Hero() {
  const images = [
    '/assets/a3.png',
    '/assets/banner1.png',
    '/assets/banner2.png',
    '/assets/banner3.png',
    '/assets/banner5.png',
    '/assets/banner6.png',
    '/assets/a1.jpg',
  ];

  return (
    <section id="inicio" className="text-white py-20 relative">
      <Iridescence color={[0, 0, 0.3]} speed={1.0} amplitude={0.1} mouseReact={false} className="absolute inset-0 z-0" />
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center relative z-10">
        {/* Texto */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">¡PROTEGEMOS LO QUE MÁS TE IMPORTA!</h1>
          <h2 className="text-4xl md:text-4xl font-light mb-6">MG SISTEMAS DE SEGURIDAD</h2>
      </div>

        {/* Carrusel de imágenes */}
        <div className="md:w-1/2">
          <RollingGallery
            images={images}
            autoplay={true}
            pauseOnHover={true}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
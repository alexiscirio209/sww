// src/components/Section1.jsx
import RollingGallery from "./RollingGallery";

function Section1() {
  const images = [
    "/assets/b51.png",
    "/assets/b4.png",
    "/assets/b6.png",
    "/assets/b7.png",
    "/assets/b33.png",
    "/assets/b36.png",
    "/assets/b30.png",
    "/assets/b68.jpg",
    "/assets/b42.png",
    "/assets/b39.png",
    "/assets/b44.jpg",
    "/assets/b9.png",
    "/assets/b10.png",
    "/assets/b11.png",
    "/assets/b1.png",
    "/assets/b35.png",
    "/assets/b34.png",
    "/assets/b8.png",
    "/assets/b32.png",
    "/assets/b43.png",
    "/assets/b47.png",
  ];

  return (
    <section id="nosotros" className="text-blue-950 py-14 bg-white">
      <div className="container mx-auto px-6">
        {/* Título */}
        <h2 className="text-3xl font-bold mb-4 text-center">¿QUIÉNES SOMOS?</h2>

        {/* Párrafo */}
        <p className="text-lg leading-relaxed mb-8 text-center">
          Una empresa familiar 100% Mexicana con una visión clara: brindar
          tranquilidad a nuestros clientes a través de soluciones de seguridad
          avanzadas. Nuestra experiencia desde 2012 respalda nuestra dedicación
          a la excelencia en la venta, distribución e instalación de equipos de
          seguridad, desde extintores hasta sistemas hidráulicos y paneles
          solares.
        </p>

        {/* Carrusel de imágenes */}
        <div className="flex justify-center">
          <RollingGallery
            images={images}
            autoplay={true}
            pauseOnHover={true}
            className="w-full max-w-4x2 rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

export default Section1;

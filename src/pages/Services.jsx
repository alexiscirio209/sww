// src/pages/Services.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ContactFloat from "../components/ContactFloat";
import FAQSection from "../components/FAQSection";
import TechLogoCarousel from "../components/TechLogoCarousel";

function Services() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/assets/b42.png",
    "/assets/b44.png",
    "/assets/b36.png",
    "/assets/b49.png",
    "/assets/b6.png",
    "/assets/b1.png",
    "/assets/b12.png",
    "/assets/b2.png",
    "/assets/b31.png",
    "/assets/b21.png",
    "/assets/a18.png",
    "/assets/b33.png",
    "/assets/b45.png",
    "/assets/b5.png",
    "/assets/b62.png",
    "/assets/a16.jpg",
    "/assets/b48.png",
    "/assets/a5.png",
    "/assets/a15.png",
    "/assets/a17.png",
    "/assets/a14.png",
    "/assets/a13.jpg",
    "/assets/a12.png",
  ];

  // Cambiar imagen
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {/* SECCIÓN 1 */}
      <section className="relative h-[80vh] min-h-[700px] text-white overflow-hidden">
        {/* Imágenes */}
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentImageIndex ? 1 : 0,
              transition: { duration: 1.5, ease: "easeInOut" },
            }}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55"></div>

        {/* Contenido */}
        <div className="container mx-auto px-6 flex items-center justify-center h-full relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              NUESTRAS SOLUCIONES
            </h1>
            <p className="text-lg leading-relaxed">
              Protección Integral. Nuestros servicios abarcan una amplia gama de
              necesidades de seguridad y más allá. Desde sistemas de CCTV y
              control de acceso hasta alarmas sísmicas y robo, nos aseguramos de
              que su propiedad esté protegida en todos los aspectos. También
              ofrecemos soluciones en sistemas hidráulicos, equipo de protección
              personal (EPP) y la instalación de paneles solares para un enfoque
              integral.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              ¡Explora nuestros servicios y encuentra la protección adecuada
              para tu hogar o negocio!.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2 */}
      <section className="py-20 relative">
        {/* Fondo */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/assets/a0.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#003053] opacity-80 z-10"></div>

        {/* Contenido */}
        <div className="container mx-auto px-6 relative z-20">
          {/* Encabezado */}
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            TODOS NUESTROS SERVICIOS
          </h2>
          <p className="text-gray-100 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-8 px-4">
            Con más de una década en el campo de la seguridad, brindamos
            soluciones respaldadas por conocimiento y profesionalismo
            inigualables.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Sistemas de detección contra incendio",
                desc: "Nuestros detectores de humo de última generación garantizan una alerta temprana ante cualquier signo de humo, protegiendo a su familia y propiedad de posibles incendios.",
                icon: "/assets/dt.png",
              },
              {
                title: "Equipo de protección personal",
                desc: "Ofrecemos una gama de equipos de protección personal diseñados para mantener a su personal seguro en cualquier entorno laboral.",
                icon: "/assets/pro.png",
              },
              {
                title: "CCTV",
                desc: "Nuestros sistemas de circuito cerrado de televisión proporcionan una vigilancia constante y detallada para proteger lo que más importa, brindando tranquilidad en todo momento.",
                icon: "/assets/cc.png",
              },
              {
                title: "Control de acceso",
                desc: "Nuestros sistemas de control de acceso garantizan que solo las personas autorizadas entren a su propiedad, proporcionando una capa adicional de seguridad.",
                icon: "/assets/ca.png",
              },
              {
                title: "Alarmas sísmicas",
                desc: "Nuestras alarmas sísmicas y de robo están diseñadas para detectar cualquier amenaza inminente, brindando una alerta temprana y protegiendo su hogar o negocio.",
                icon: "/assets/alt.png",
              },
              {
                title: "Sistemas hidráulicos contra incendio",
                desc: "Nuestros sistemas hidráulicos ofrecen soluciones confiables para diversas aplicaciones, asegurando un funcionamiento eficiente y seguro.",
                icon: "/assets/bi.png",
              },
              {
                title: "Instalación de paneles solares",
                desc: "Nuestros paneles solares proporcionan una fuente de energía sostenible y eficiente, reduciendo costos y contribuyendo al cuidado del medio ambiente.",
                icon: "/assets/pss.png",
              },
            ].map((serv, i) => (
              <motion.div
                key={i}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-white/20 transform hover:-translate-y-1 text-center"
                // Solo animación de entrada
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }} // 👈 `once: true` para que solo se ejecute una vez
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              >
                {/* Ícono */}
                <img
                  src={serv.icon}
                  alt={serv.title}
                  className="w-12 h-12 mx-auto mb-3 object-contain"
                />

                {/* Título */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {serv.title}
                </h3>

                {/* Descripción */}
                <p className="text-gray-200 leading-relaxed">{serv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Carrusel de logos */}
      <TechLogoCarousel />

      {/* SECCIÓN 3: Preguntas y Respuestas */}
      <FAQSection />

      {/* Botón flotante */}
      <ContactFloat />
    </>
  );
}

export default Services;

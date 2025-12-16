// src/pages/KnowMore.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function KnowMore() {
  // Sección 1
  const gifs = ["/assets/anigif.gif", "/assets/secongif.gif"];
  const [currentGifIndex, setCurrentGifIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGifIndex((prev) => (prev + 1) % gifs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [gifs.length]);

  // Sección 2
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const radius = 400;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouseX(e.clientX - rect.left);
    setMouseY(e.clientY - rect.top);
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  // Variantes para la animación de entrada de las tarjetas
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Renderizado
  return (
    <section className="relative min-h-screen text-white overflow-hidden">
      {/* Sección 1 */}
      <div className="h-[80vh] min-h-[700px] relative">
        {gifs.map((gif, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentGifIndex ? 1 : 0,
              transition: { duration: 1.5, ease: "easeInOut" },
            }}
            style={{
              backgroundImage: `url(${gif})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-6 flex items-center justify-center h-full relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ¡CONOCE CÓMO ACTUAR ANTE EMERGENCIAS!
            </h1>
            <p className="text-lg text-gray-100 max-w-3xl mx-auto">
              En MG SISTEMAS DE SEGURIDAD, tu bienestar es nuestra prioridad.
              Por eso, nuestro equipo de profesionales altamente capacitados ha
              preparado una serie de contenidos informativos especialmente para
              ti. Desplázate hacia abajo y conoce las buenas prácticas en el uso
              de herramientas contra incendios, aprende a distinguir los tipos
              de incendios y descubre cómo debes actuar ante emergencias con los
              trípticos que hemos elaborado, respaldados por nuestra experiencia
              y la excelencia en cada detalle.
            </p>
          </div>
        </div>
      </div>

      {/* Sección 2 */}
      <section className="py-20 relative w-full">
        {/* FONDO */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/assets/bac2.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 z-0 bg-[#5b5b5e] opacity-20" />

        {/* Contenido */}
        <div className="relative z-10">
          <div className="container mx-auto px-6 text-center mb-12">
            <h2 className="text-3xl md:text-3xl font-bold text-white mb-4">
              TRÍPTICOS INFORMATIVOS
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Explora nuestros contenidos diseñados para que puedas aprender a
              actuar con seguridad ante cualquier emergencia. Cada uno contiene
              información clara y concisa sobre prevención y uso de herramientas
              de emergencia.
            </p>
          </div>

          <div className="container mx-auto px-6">
            {/* GRIDS */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {[
                {
                  title: "MANEJO DE EXTINTORES",
                  desc: "",
                  href: "/conoce-mas/trip1",
                  image: "/assets/trip1.png",
                },
                {
                  title: "TIPOS DE INCENDIOS",
                  desc: "",
                  href: "/conoce-mas/trip2",
                  image: "/assets/trip3.png",
                },
                {
                  title: "EMERGENCIAS",
                  desc: "",
                  href: "/conoce-mas/trip3",
                  image: "/assets/trip2.png",
                },
              ].map((card, i) => (
                <motion.div key={i} variants={cardVariants}>
                  <Link to={card.href}>
                    <div
                      className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                      style={{
                        backgroundImage: `url(${card.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      onMouseMove={handleMouseMove}
                      onMouseEnter={() => handleMouseEnter(i)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {/* Gradiente */}
                      <div className="absolute inset-0 bg-black/30"></div>

                      {/* Efecto de spotlight */}
                      {hoveredIndex === i && (
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            background: `
                        radial-gradient(
                          circle ${radius}px at ${mouseX}px ${mouseY}px,
                          rgba(255, 255, 255, 0.6),
                          transparent 80%
                        )
                      `,
                          }}
                        />
                      )}

                      {/* Contenido */}
                      <div className="relative z-10 flex flex-col h-full p-6">
                        <h3 className="text-2xl font-bold text-center text-white mb-4">
                          {card.title}
                        </h3>
                        <p className="text-gray-100 leading-relaxed text-center grow">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default KnowMore;

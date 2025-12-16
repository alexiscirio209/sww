// src/pages/Trip3.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

function Trip3() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Datos
  const sections = [
    {
      title: "TÍTULO",
      content: (
        <>
          <p>
            
          </p>
          {/* Ejemplo de imagen */}
          {/* <div className="mt-6 flex justify-center">
            <img
              src="/assets/ejemplo.png"
              alt="Ejemplo"
              className="w-full max-w-xs rounded-lg shadow-md"
            />
          </div> */}
        </>
      ),
      image: "/assets/fondo-tarjeta-1.jpg",
    },
    {
      title: "TÍTULO",
      content: (
        <>
          <p>
            
          </p>
        </>
      ),
      image: "/assets/fondo-tarjeta-2.jpg",
    },
    {
      title: "TÍTULO",
      content: (
        <>
          <p>
            
          </p>
        </>
      ),
      image: "/assets/fondo-tarjeta-3.jpg",
    },
  ];

  return (
    <section className="py-20 relative min-h-screen w-full">
      {/* FONDO*/}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/assets/bac5.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="absolute inset-0 z-0 bg-[#5b5b5e] opacity-50" />

      {/* Contenido */}
      <div className="relative z-10">
        <div className="container mx-auto px-6">
          {/* Boton volver*/}
          <Link
            to="/conoce-mas"
            className="text-white hover:underline mb-6 inline-block"
          >
            ← Volver a Conoce más
          </Link>

          {/* Título principal */}
          <h2 className="text-3xl md:text-3xl font-bold text-center text-white mb-12">
            TÍTULO
          </h2>

          {/* Sección 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {sections.map((card, i) => (
              <motion.div
                key={i}
                className="relative min-h-96 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{
                  backgroundImage: `url(${card.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30"></div>

                {/* Contenido */}
                <div className="relative z-10 p-6 flex flex-col h-full">
                  <h2 className="text-2xl font-bold text-center text-white mb-4">
                    {card.title}
                  </h2>
                  <div className="text-gray-100 leading-relaxed grow">
                    {card.content}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sección 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "TÍTULO",
                content: (
                  <p>
                    
                  </p>
                ),
                image: "/assets/fondo-tarjeta-4.jpg",
              },
              {
                title: "TÍTULO",
                content: (
                  <p>
                    
                  </p>
                ),
                image: "/assets/fondo-tarjeta-5.jpg", 
              },
              {
                title: "TÍTULO",
                content: (
                  <p>
                    
                  </p>
                ),
                image: "/assets/fondo-tarjeta-6.jpg",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="relative min-h-96 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{
                  backgroundImage: `url(${card.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30"></div>

                {/* Contenido */}
                <div className="relative z-10 p-6 flex flex-col h-full">
                  <h2 className="text-2xl font-bold text-center text-white mb-4">
                    {card.title}
                  </h2>
                  <div className="text-gray-100 leading-relaxed grow">
                    {card.content}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trip3;
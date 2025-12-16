// src/components/ScrollAnimatedCards.jsx
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollAnimatedCards = ({ cards }) => {
  const containerRef = useRef(null);

  // `useScroll` observa el contenedor para calcular el progreso del scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"] // Empieza cuando el contenedor entra a la vista
  });

  return (
    <div ref={containerRef} className="relative h-[300vh]"> {/* Alto para que haya scroll */}

      {/* Contenedor de las tarjetas que se mueven */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        {cards.map((card, index) => {
          // Calcular la posición de cada tarjeta según el scroll
          const y = useTransform(scrollYProgress, [0, 1], [index * 100, -index * 100]); // Mueve arriba/abajo
          const scale = useTransform(scrollYProgress, [0, 1], [1 - index * 0.1, 1]); // Escala cada tarjeta
          const rotateX = useTransform(scrollYProgress, [0, 1], [index * 5, 0]); // Rota ligeramente
          const opacity = useTransform(scrollYProgress, [0, 1], [1 - index * 0.2, 1]); // Hace más transparente

          return (
            <motion.div
              key={index}
              style={{
                y,
                scale,
                rotateX,
                opacity,
                zIndex: cards.length - index // La primera tarjeta está arriba
              }}
              className="absolute w-[80%] md:w-[60%] h-[70%] max-w-3xl rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Fondo de la tarjeta */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${card.image})` }}
              />
              {/* Overlay para mejorar legibilidad */}
              <div className="absolute inset-0 bg-black/40" />
              
              {/* Contenido de la tarjeta */}
              <div className="relative z-10 h-full flex flex-col justify-center p-8 text-white">
                <h3 className="text-3xl font-bold mb-4 text-center">{card.title}</h3>
                <p className="text-lg text-center leading-relaxed max-w-2xl mx-auto">
                  {card.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollAnimatedCards;
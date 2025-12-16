// src/components/TechLogoCarousel.jsx
import { motion } from "framer-motion";

function TechLogoCarousel() {
  const logos = [
    { src: "/assets/samsung.svg", alt: "Samsung" },
    { src: "/assets/hikvision.svg", alt: "Hikvision" },
    { src: "/assets/ken.svg", alt: "ken" },
    { src: "/assets/honeywell.svg", alt: "Honeywell" },
    { src: "/assets/epcom.png", alt: "epcom" },
    { src: "/assets/hid.svg", alt: "hid" },
    { src: "/assets/syscom.png", alt: "syscom" },
    { src: "/assets/notifier.png", alt: "notifier" },
    { src: "/assets/tp.svg", alt: "tp" },
    { src: "/assets/ub.png", alt: "ub" },
    { src: "/assets/sk.png", alt: "sk" },
    { src: "/assets/alli.svg", alt: "alli" },
    { src: "/assets/bosch.svg", alt: "Bosch" },
  ];

  // Bucle
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-950 text-center mb-12">
          NUESTRAS TECNOLOGIAS
        </h2>

        {/* Contenedor del carrusel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: "-50%" }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
                repeatDelay: 0,
              },
            }}
            style={{
              gap: "3rem",
              willChange: "transform",
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="shrink-0 w-28 sm:w-36 md:w-48"
                style={{ height: "100px" }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-full h-full object-contain hover:brightness-110 transition-none"
                  loading="lazy"
                  fetchPriority="low"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default TechLogoCarousel;

// src/components/Section3.jsx
import { motion } from "framer-motion";

function Section3() {
  return (
    <section className="py-16 relative">
      {/* Fondo */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/assets/a7.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#003053] opacity-70 z-0"></div>

      {/* Contenido */}
      <div className="container mx-auto px-6 relative z-10">
        {/* Título */}
        <h2 className="text-white text-3xl font-bold mb-4 text-center">
          NUESTROS VALORES
        </h2>

        {/* Párrafo */}
        <p className="text-gray-100 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
          Conservamos los valores enseñados en casa y promovemos el compañerismo
          en el trabajo grupal para todas las actividades que desempeñamos.
        </p>

        {/* Valores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { img: "/assets/res.png", title: "RESPETO" },
            { img: "/assets/leal.png", title: "LEALTAD" },
            { img: "/assets/efi.png", title: "EFICIENCIA" },
            { img: "/assets/te.png", title: "TRABAJO EN EQUIPO" },
            { img: "/assets/soli.png", title: "SOLIDARIDAD" },
          ].map((value, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center cursor-pointer"
              // Animación de entrada
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              // Hover
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
              }}
            >
              {/* Imagen */}
              <img
                src={value.img}
                alt={value.title}
                className="w-24 h-24 object-contain mb-2"
              />
              {/* Título */}
              <h3 className="text-lg font-bold text-white">{value.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section3;

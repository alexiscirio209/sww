// src/components/Section2.jsx
import { motion } from "framer-motion";

function Section2() {
  return (
    <section className="py-12 bg-white relative overflow-hidden">
      {/* Título */}
      <h2 className="text-blue-950 text-3xl font-bold mb-8 text-center">
        MISIÓN Y VISIÓN
      </h2>

      {/* Contenedor principal */}
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* MISIÓN */}
          <motion.div
            className="w-full md:w-1/2 h-[400px] rounded-xl overflow-hidden relative cursor-pointer"
            style={{
              backgroundImage: 'url("/assets/mision.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            // Animación de entrada
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            // Hover
            whileHover={{ backgroundColor: "#003053" }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Contenido */}
            <div className="relative z-10 p-6 flex flex-col justify-end h-full">
              <h3 className="text-2xl font-bold text-white mb-4">MISIÓN</h3>
              <p className="text-white leading-relaxed">
                Solucionar las necesidades de nuestros clientes para proveer la
                protección del personal y de los bienes materiales, adecuando
                sus instalaciones con equipos de la mejor calidad, implementando
                sistemas innovadores y con la asesoría de nuestro personal
                altamente capacitado, otorgando siempre seguridad y
                tranquilidad.
              </p>
            </div>
          </motion.div>

          {/* VISIÓN */}
          <motion.div
            className="w-full md:w-1/2 h-[400px] rounded-xl overflow-hidden relative cursor-pointer"
            style={{
              backgroundImage: 'url("/assets/vision.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            // Animación de entrada
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            // Hover
            whileHover={{ backgroundColor: "#003053" }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Contenido */}
            <div className="relative z-10 p-6 flex flex-col justify-end h-full">
              <h3 className="text-2xl font-bold text-white mb-4">VISIÓN</h3>
              <p className="text-white leading-relaxed">
                Ser líderes en el ramo de venta e instalación en equipos de
                seguridad con las mejores herramientas tecnológicas que brinden
                calidad y eficiencia en cada uno de nuestros productos y
                servicios.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Section2;

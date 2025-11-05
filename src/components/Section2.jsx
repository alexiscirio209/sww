// src/components/Section2.jsx
function Section2() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Título */}
      <h2 className="text-blue-950 text-3xl font-bold mb-8 text-center">
        MISIÓN Y VISIÓN
      </h2>

      {/* Contenedor principal */}
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Tarjeta de Misión */}
          <div 
            className="w-full md:w-1/2 h-[400px] rounded-xl overflow-hidden relative"
            style={{
              backgroundImage: 'url("/assets/mision.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Overlay oscuro para mejorar legibilidad */}
            <div className="absolute inset-0 bg-black/40"></div>
            
            {/* Contenido */}
            <div className="relative z-10 p-6 flex flex-col justify-end h-full">
              <h3 className="text-2xl font-bold text-white mb-4">MISIÓN</h3>
              <p className="text-white leading-relaxed">
                Solucionar las necesidades de nuestros clientes para proveer la protección del personal y de los bienes materiales, adecuando sus instalaciones con equipos de la mejor calidad, implementando sistemas innovadores y con la asesoría de nuestro personal altamente capacitado, otorgando siempre seguridad y tranquilidad.
              </p>
            </div>
          </div>

          {/* Tarjeta de Visión */}
          <div 
            className="w-full md:w-1/2 h-[400px] rounded-xl overflow-hidden relative"
            style={{
              backgroundImage: 'url("/assets/vision.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Overlay oscuro para mejorar legibilidad */}
            <div className="absolute inset-0 bg-black/40"></div>
            
            {/* Contenido */}
            <div className="relative z-10 p-6 flex flex-col justify-end h-full">
              <h3 className="text-2xl font-bold text-white mb-4">VISIÓN</h3>
              <p className="text-white leading-relaxed">
                Ser líderes en el ramo de venta e instalación en equipos de seguridad con las mejores herramientas tecnológicas que brinden calidad y eficiencia en cada uno de nuestros productos y servicios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
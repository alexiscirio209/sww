// src/components/Section3.jsx
function Section3() {
  return (
    <section 
      className="py-16 bg-cover bg-center bg-no-repeat relative bg-gray-200"
      style={{
        backgroundImage: 'url("/assets/")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay semitransparente para mejorar legibilidad */}
      <div className="absolute inset-0 bg-white/80 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Título */}
        <h2 className="text-blue-950 text-3xl font-bold mb-4 text-center">NUESTROS VALORES</h2>

        {/* Párrafo */}
        <p className="text-lg leading-relaxed mb-8 text-center max-w-3xl mx-auto">
          Conservamos los valores enseñados en casa y promovemos el compañerismo en el trabajo grupal para todas las actividades que desempeñamos.
        </p>

        {/* Valores */}
        <div className="text-blue-950 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { img: '/assets/respeto.png', title: 'RESPETO' },
            { img: '/assets/lealtad.png', title: 'LEALTAD' },
            { img: '/assets/eficiencia.png', title: 'EFICIENCIA' },
            { img: '/assets/trabajo.png', title: 'TRABAJO EN EQUIPO' },
            { img: '/assets/solidaridad.png', title: 'SOLIDARIDAD' },
          ].map((value, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img src={value.img} alt={value.title} className="w-24 h-24 object-contain mb-2" />
              <h3 className="text-lg font-bold">{value.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section3;
// src/pages/Trip1.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

function Trip1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Datos
  const sections = [
    {
      title: "¿QUÉ ES UN EXTINTOR?",
      content: (
        <>
          <p>
            Un extintor es un dispositivo portátil diseñado para extinguir
            incendios de pequeña a mediana escala. Su función principal es
            liberar un agente extintor (como agua, espuma, polvo químico seco o
            CO₂) para sofocar o enfriar las llamas y detener su propagación. Los
            extintores son esenciales para la seguridad contra incendios en
            hogares, oficinas y otros lugares.
          </p>
          <div className="mt-6 flex justify-center">
            <img src="/assets/nm.png" alt="NOM" className="w-32 h-auto" />
          </div>
          <p className="text-xs text-center text-white mt-4">
            CERTIFICACIÓN EN 154-SCFI-2005
            <br />
            DICTAMEN DE VERIFICACIÓN INTEC-DV130
          </p>
        </>
      ),
      image: "/assets/ft3.png",
    },
    {
      title: "TIPOS DE EXTINTORES (NOM-002-STPS)",
      content: (
        <>
          <p>Clasificación por tipo de fuego:</p>
          <ul className="space-y-2 mt-4">
            <li>
              <strong>A (Sólidos)</strong>: Madera, papel, tela. (Agua o espuma)
            </li>
            <li>
              <strong>B (Líquidos)</strong>: Gasolina, aceites. (CO₂ o polvo
              químico)
            </li>
            <li>
              <strong>C (Eléctricos)</strong>: Equipos energizados. (CO₂)
            </li>
            <li>
              <strong>K (Cocinas)</strong>: Grasas y aceites. (Químico húmedo)
            </li>
          </ul>

          <div className="mt-6 flex justify-center">
            <img
              src="/assets/tem.png"
              alt="Tipos de extintores (Clases A, B, C, K)"
              className="w-full max-w-md h-auto rounded-lg shadow-md"
            />
          </div>
        </>
      ),
      image: "/assets/ft8.png",
    },
    {
      title: "PASOS PARA USAR UN EXTINTOR",
      content: (
        <>
          <p>Método PASS:</p>
          <div className="mt-4 grid grid-cols-1 gap-4">
            <div className="flex items-start">
              <img
                src="/assets/EM1.png"
                alt="Pull"
                className="w-16 h-auto mr-3"
              />
              <div>
                <strong>Pull</strong>: Jalar el pasador de seguridad.
              </div>
            </div>
            <div className="flex items-start">
              <img
                src="/assets/EM2.png"
                alt="Aim"
                className="w-16 h-auto mr-3"
              />
              <div>
                <strong>Aim</strong>: Apuntar la manguera a la base del fuego.
              </div>
            </div>
            <div className="flex items-start">
              <img
                src="/assets/EM3.png"
                alt="Squeeze"
                className="w-16 h-auto mr-3"
              />
              <div>
                <strong>Squeeze</strong>: Presionar la palanca para descargar.
              </div>
            </div>
            <div className="flex items-start">
              <img
                src="/assets/EM4.png"
                alt="Sweep"
                className="w-16 h-auto mr-3"
              />
              <div>
                <strong>Sweep</strong>: Mover en zigzag hasta apagar.
              </div>
            </div>
            <p>
              Nota:
              <br />
              - Mantén distancia (2-3 metros del fuego).
              <br />- Nunca le des la espalda al fuego.
            </p>
            <p>
              Mantenimiento y Normas.
              <br />
              Requisitos NOM-002-STPS-2010:
              <ul className="space-y-2 mt-4">
                <li>- Inspección mensual.</li>
                <li>- Recarga anual (por personal certificado).</li>
                <li>- Ubicación visible y libre de obstrucciones.</li>
              </ul>
            </p>
          </div>
        </>
      ),
      image: "/assets/ft19.png",
    },
  ];

  return (
    <section className="py-20 relative min-h-screen w-full">
      {/* FONDO */}
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
          {/* Botón de volver */}
          <Link
            to="/conoce-mas"
            className="text-white hover:underline mb-6 inline-block"
          >
            ← Volver a Conoce más
          </Link>

          {/* Título principal */}
          <h2 className="text-3xl md:text-3xl font-bold text-center text-white mb-12">
            USO Y MANEJO DE EXTINTORES
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "VERIFICACIÓN Y CERTIFICACIÓN (NOM-154-SCFI-2005)",
                content: (
                  <>
                    <h3 className="text-lg font-semibold mb-2">
                      Diseño y fabricación:
                    </h3>
                    <ul className="space-y-1 mb-4">
                      <li>
                        • Materiales resistentes a la corrosión y altas
                        presiones
                      </li>
                      <li>• Válvulas y manómetros sin fugas</li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2">
                      Etiquetado obligatorio:
                    </h3>
                    <ul className="space-y-1 mb-4">
                      <li>• Nombre del fabricante o distribuidor.</li>
                      <li>
                        • Capacidad (kg), tipo de agente extintor y fecha de
                        fabricación.
                      </li>
                      <li>• Instrucciones de uso en español.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2">
                      Pruebas de rendimiento:
                    </h3>
                    <ul className="space-y-1 mb-4">
                      <li>• Resistencia a presión hidrostática.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2">
                      Mantenimiento y recarga:
                    </h3>
                    <ul className="space-y-1 mb-4">
                      <li>
                        • Solo personal autorizado puede realizar recargas.
                      </li>
                      <li>• Verificación anual de presión y estado físico.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2">
                      Señalización (NOM-026-STPS):
                    </h3>
                    <ul className="space-y-1 mb-4">
                      <li>• Uso de pictogramas y letreros rojos.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2">
                      Contactos de emergencia:
                    </h3>
                    <ul className="space-y-1 mb-4">
                      <li>• Emergencias: 911.</li>
                      <li>• Bomberos: (246) 46 40779.</li>
                      <li>• Cruz Roja Mexicana: (246) 46 20920.</li>
                    </ul>
                  </>
                ),
                image: "/assets/ft24.png",
              },
              {
                title: "¿QUÉ HACER EN CASO DE INCENDIO?",
                content: (
                  <>
                    <ol className="space-y-2 mb-6">
                      <li>
                        <strong>1. Activa la alarma.</strong>
                      </li>
                      <li>
                        <strong>2. Llama a emergencias.</strong>
                      </li>
                      <li>
                        <strong>
                          3. Usa el extintor solo si el fuego es pequeño.
                        </strong>
                      </li>
                      <li>
                        <strong>4. Evacúa si el fuego crece.</strong>
                      </li>
                    </ol>

                    <h3 className="text-lg font-semibold mb-2">
                      Errores comunes:
                    </h3>
                    <ul className="space-y-2 mb-4">
                      <li>• Usar agua en fuegos eléctricos o de grasa.</li>
                      <li>• No revisar la fecha de caducidad del extintor.</li>
                      <li>• Atacar fuego en dirección del viento.</li>
                      <li>• Combatir fuegos en superficies líquidas.</li>
                      <li>
                        • Combatir fuegos en derrames, empiece a extinguir desde
                        arriba hacia abajo.
                      </li>
                      <li>
                        • Es preferible usar varios extintores al mismo tiempo
                        que uno por uno.
                      </li>
                      <li>
                        • Este pendiente a una reiniciación del fuego, no
                        abandone el lugar.
                      </li>
                    </ul>
                  </>
                ),
                image: "/assets/ft11.png",
              },
              {
                title: "COMPARTE ESTA PAGINA",
                content: <p></p>,
                image: "/assets/evacuacion-bg.jpg",
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

export default Trip1;

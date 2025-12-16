// src/components/FAQSection.jsx
import { useState } from "react";
import { motion } from "framer-motion";

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "¿Cuánto tiempo lleva MG Sistemas de Seguridad en el mercado?",
      answer:
        "MG Sistemas de Seguridad tiene una sólida trayectoria desde 2012, respaldando más de una década de experiencia en la venta, distribución e instalación de equipos de seguridad.",
    },
    {
      question: "¿Qué servicios de seguridad ofrecen?",
      answer:
        "Brindamos una amplia gama de soluciones de seguridad, desde sistemas de CCTV y control de acceso hasta alarmas sísmicas, detectores de humo, sistemas hidráulicos, equipo de protección personal (EPP) y la instalación de paneles solares.",
    },
    {
      question:
        "¿Cómo se adaptan sus soluciones a las necesidades individuales de los clientes?",
      answer:
        "Reconocemos la singularidad de cada cliente. Nuestras soluciones de seguridad son personalizadas y diseñadas para adaptarse a tus necesidades específicas, ofreciendo una protección integral para tu hogar o negocio.",
    },
    {
      question: "¿Qué garantías ofrecen en sus productos y servicios?",
      answer:
        "Nos esforzamos por la excelencia en cada detalle. Nuestros productos y servicios se basan en la última tecnología y los más altos estándares de calidad, respaldados por profesionales altamente capacitados. Además, ofrecemos atención al cliente continua para garantizar tu satisfacción.",
    },
    {
      question: "¿Cómo puedo contactar con MG Sistemas de Seguridad?",
      answer:
        "¡Es fácil! Puedes contactarnos a través de los botones que ves en pantalla. Mandanos un mensaje de WhatsApp, o, si lo prefieres envianos, un correo electronico a través del botón de Gmail, solo tienes que completar el formulario, y nuestro equipo estará encantado de responderte. Tambien puedes comunicarte directamente con nosotros, nuestros telefonos estan en el ultimo botón. ¡Tu tranquilidad es nuestra prioridad!",
    },
    {
      question: "¿Qué Incluimos en el Servicio de Alarmas?",
      answer:
        "Detección Inmediata: Nuestras alarmas están equipadas con tecnología avanzada para detectar cualquier amenaza sísmica o actividad sospechosa de robo de manera inmediata. Alertas Personalizadas: Configuramos las alarmas según tus preferencias, proporcionando alertas personalizadas a través de múltiples canales, como notificaciones en la aplicación móvil, mensajes de texto o llamadas telefónicas. Conexión Continua: Nuestro sistema garantiza una conexión continua, incluso en situaciones adversas, para brindar una protección constante las 24 horas del día, los 7 días de la semana. Integración con Sistemas de Vigilancia: Las alarmas pueden integrarse fácilmente con nuestros sistemas de CCTV, proporcionando una respuesta visual inmediata para una evaluación más rápida de la situación.",
    },
    {
      question: "¿Qué Incluimos en el Servicio de CCTV?",
      answer:
        "Visualización en Tiempo Real: Accede a imágenes en tiempo real desde cualquier lugar a través de tu dispositivo móvil o computadora, permitiéndote estar al tanto de lo que sucede en tu propiedad en todo momento. Grabación de Alta Definición: Nuestros sistemas capturan videos de alta definición, garantizando detalles nítidos y claros que son esenciales para la identificación y seguimiento de eventos. Vigilancia 24/7: Ofrecemos una vigilancia ininterrumpida, asegurando que tu propiedad esté protegida las 24 horas del día, los 7 días de la semana. Detección de Movimiento: Los sistemas de CCTV están equipados con tecnología de detección de movimiento, activando alertas y grabación cuando se detecta actividad inusual.",
    },
    {
      question: "¿Qué Incluimos en el Servicio de Control de Acceso?",
      answer:
        "Identificación Segura: Utilizamos tecnología avanzada de identificación, como tarjetas magnéticas, códigos PIN o incluso reconocimiento facial, para garantizar un acceso seguro y autorizado. Registro de Actividad: Cada acceso se registra, proporcionando un historial detallado de quién entra y sale de tu propiedad, lo que puede ser crucial para la gestión de seguridad. Configuración de Permisos: Personalizamos los niveles de acceso según tus necesidades, asegurándonos de que solo las personas autorizadas tengan acceso a áreas específicas. Integración con Otros Sistemas: Los sistemas de control de acceso se pueden integrar fácilmente con otros servicios de seguridad, como CCTV y alarmas, para una protección integral.",
    },
    {
      question: "¿Qué Incluimos en el Servicio de Detectores de Humo?",
      answer:
        "Detección Sensible: Los detectores de humo utilizan tecnología avanzada para una detección sensible, identificando rápidamente cualquier indicio de humo en el ambiente. Alerta Inmediata: En caso de detectar humo, los sistemas emiten alertas inmediatas, permitiéndote tomar medidas preventivas rápidamente y proteger a tus seres queridos y propiedades. Integración con Sistemas de Alarma: Pueden integrarse con otros sistemas de seguridad, como alarmas y sistemas de control de acceso, para una respuesta coordinada y eficaz.",
    },
    {
      question: "¿Qué Incluimos en el Servicio de EPP?",
      answer:
        "Personalización: Adaptamos nuestros EPP para cumplir con los requisitos específicos de tu industria y entorno laboral, brindando una protección efectiva y cómoda. Variedad de Productos: Desde cascos, guantes y gafas de seguridad hasta calzado especializado, ofrecemos una variedad de productos para abordar diferentes riesgos laborales. Normativas de Seguridad: Todos nuestros equipos cumplen con las normativas y estándares de seguridad para garantizar su eficacia y confiabilidad. Asesoramiento Especializado: Nuestro equipo brinda asesoramiento especializado para ayudarte a seleccionar los EPP adecuados según las necesidades específicas de tu empresa.",
    },
    {
      question: "¿Qué Incluimos en el Servicio de Paneles Solares?",
      answer:
        "Eficiencia Energética: Utilizamos paneles solares de última generación que ofrecen una alta eficiencia en la conversión de la luz solar en energía eléctrica. Reducción de Costos: Al aprovechar la energía solar, puedes reducir significativamente los costos de electricidad a lo largo del tiempo, generando tu propia energía limpia. Instalación Profesional: Nuestro equipo altamente capacitado se encarga de la instalación, asegurándose de que los paneles estén posicionados de manera óptima para maximizar la captación de energía solar. Integración con la Red Eléctrica: Los paneles solares pueden integrarse con la red eléctrica, permitiéndote utilizar la energía generada y, en algunos casos, devolverla a la red.",
    },
    {
      question: "¿Qué Incluimos en el Servicio de Sistemas Hidráulicos?",
      answer:
        "Diseño Personalizado: Desarrollamos sistemas hidráulicos adaptados a tus necesidades específicas, asegurando una solución eficiente y precisa para tu aplicación. Componentes de Calidad: Utilizamos componentes de alta calidad que cumplen con estándares industriales, garantizando durabilidad y rendimiento confiable. Mantenimiento Preventivo: Ofrecemos programas de mantenimiento preventivo para asegurar un funcionamiento continuo y prevenir posibles problemas a lo largo del tiempo. Diversas Aplicaciones: Nuestros sistemas hidráulicos se utilizan en una variedad de aplicaciones, desde maquinaria industrial hasta sistemas de seguridad, brindando versatilidad y adaptabilidad.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 relative">
      {/* Fondo */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/assets/b64.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#5b5b5e] opacity-80 z-10"></div>

      {/* Contenido */}
      <div className="container mx-auto px-6 lg:px-12 relative z-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Descripción */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center sm:text-center lg:text-left">
              PREGUNTAS FRECUENTES
            </h2>
            <p className="text-gray-100 leading-relaxed text-center sm:text-center lg:text-left">
              En MG Sistemas de Seguridad, estamos aquí para brindarte la mejor
              protección. Dale un vistazo a las preguntas mas frecuentes acerca
              de nuestros servicios y descubre cómo podemos adaptar soluciones
              de seguridad a tus necesidades únicas. Desde sistemas de CCTV
              hasta paneles solares. No esperes, ¡haz de la seguridad una
              prioridad hoy!
            </p>
          </div>

          {/* Preguntas */}
          <div className="w-full lg:w-2/3 max-h-[60vh] overflow-y-auto pr-2 space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-5 rounded-lg border border-white/20 shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.05,
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left font-semibold text-lg text-white focus:outline-none flex justify-between items-center"
                >
                  {faq.question}
                  <span className="text-white transform transition-transform duration-200">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? "max-h-96 mt-4 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-100 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;

// src/components/Footer.jsx
import Iridescence from './Iridescence';
import { useState } from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  const [isClient] = useState(true);

  return (
    <footer className="relative py-8 text-white overflow-hidden">
      {/* Fondo */}
      {isClient && (
        <Iridescence
          color={[0, 0, 0.3]}           
          speed={1.0}                   
          amplitude={0.1}               
          mouseReact={false}            
          className="absolute inset-0 z-0"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Copyright */}
      <div className="container mx-auto px-6 relative z-20">
        {/* Contáctanos */}
        <h3 className="text-xl font-bold mb-6 text-center">Contáctanos</h3>

        {/* Contacto */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-6">
          {/* WhatsApp */}
          <a
            href="https://wa.me/522461700661"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center min-h-10 hover:underline transition-transform duration-200 hover:scale-105"
          >
            <img src="/assets/whatsapp.png" alt="WhatsApp" className="h-8 w-8 object-contain mr-2" />
            <span className="text-base md:text-lg">246 170 0661</span>
          </a>

          {/* Teléfonos */}
          <div className="flex items-center min-h-10">
            <img src="/assets/tel.png" alt="Teléfono" className="h-8 w-8 object-contain mr-2" />
            <span className="text-base md:text-lg">246 690 1598 | 246 497 7570</span>
          </div>

          {/* Correo */}
          <a
            href="mailto:ventas@mgsystem.com.mx"
            className="flex items-center min-h-10 hover:underline transition-transform duration-200 hover:scale-105"
          >
            <img src="/assets/gmail.png" alt="Correo" className="h-8 w-8 object-contain mr-2" />
            <span className="text-base md:text-lg">ventas@mgsystem.com.mx</span>
          </a>
        </div>

        {/* Línea divisoria */}
        <hr className="border-gray-300 my-6 max-w-md mx-auto opacity-30" />

        {/* Direccion */}
        <div className="text-center space-y-2 text-sm text-white/90">
          <p>
            <strong>MG SISTEMAS DE SEGURIDAD</strong>
          </p>
          <p>
            Progreso Norte 112, Sección 1ra, Santa Inés Zacatelco, Tlaxcala
          </p>
          <p className="text-white/70 text-xs mt-4">
            &copy; {currentYear} MG SISTEMAS DE SEGURIDAD. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
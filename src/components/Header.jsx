// src/components/Header.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Acerca de nosotros', href: '#acerca-de-nosotros' },
    { label: 'Nuestros servicios', href: '#nuestros-servicios' },
    { label: 'Conoce más', href: '#conoce-mas' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-6">
        {/* Barra principal */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <img
            src="/assets/lgt.ico"
            alt="Logo MG Sistemas de Seguridad"
            className="h-14 w-14 object-contain"
          />

          {/* Menú Desktop */}
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item, index) => (
              <PillLink key={index} href={item.href}>
                {item.label}
              </PillLink>
            ))}
          </nav>

          {/* Botón Hamburguesa (móvil) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col justify-center w-8 h-8 focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <motion.span
              animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 6 : 0 }}
              className="block h-0.5 w-full bg-blue-950 rounded mb-1 transition-all duration-300"
            />
            <motion.span
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
              className="block h-0.5 w-full bg-blue-950 rounded mb-1 transition-all duration-300"
            />
            <motion.span
              animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -6 : 0 }}
              className="block h-0.5 w-full bg-blue-950 rounded transition-all duration-300"
            />
          </button>
        </div>

        {/* Menú Móvil */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, scaleY: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden origin-top overflow-hidden bg-white border-t border-gray-200 rounded-b-xl shadow-lg"
        >
          <nav className="flex flex-col p-4 space-y-4">
            {navItems.map((item, index) => (
              <PillLinkMobile
                key={index}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </PillLinkMobile>
            ))}
          </nav>
        </motion.div>
      </div>
    </header>
  );
}

// Componente reutilizable: Botón tipo Pill (desktop)
function PillLink({ children, href }) {
  return (
    <motion.a
      href={href}
      className="relative inline-block px-5 py-2.5 rounded-full font-semibold text-blue-950 overflow-hidden"
      style={{ background: 'white' }}
      whileHover={{
        backgroundColor: '#003053',
        color: 'white',
        scale: 1.05,
        transition: { duration: 0.3, ease: "easeInOut" }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  );
}

// Componente reutilizable: Botón tipo Pill (móvil)
function PillLinkMobile({ children, href, onClick }) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className="block px-5 py-3 rounded-full font-medium text-center text-blue-950 bg-white border-2 border-blue-950"
      whileHover={{ 
        backgroundColor: '#003053', 
        color: 'white',
        transition: { duration: 0.3 }
      }}
    >
      {children}
    </motion.a>
  );
}

export default Header;
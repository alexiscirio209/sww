// src/components/Header.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      label: "Acerca de nosotros",
      href: "/#nosotros",
    },
    {
      label: "Nuestras soluciones",
      href: "/servicios",
    },
    {
      label: "Conoce más",
      href: "/conoce-mas",
    },
  ];

  return (
    <header className="sticky top-0 z-50 shadow-sm bg-white">
      <div className="w-full">
        {/* Barra principal */}
        <div className="flex items-center justify-between h-16 px-4 sm:px-6">
          {/* Logo */}
          <div className="flex items-center ml-2">
            <img
              src="/assets/lgt.ico"
              alt="Logo MG Sistemas de Seguridad"
              className="h-10 w-10 sm:h-14 sm:w-14 object-contain"
            />
            <span
              className="text-xs sm:text-sm md:text-lg font-semibold ml-2 sm:ml-4"
              style={{ color: "#003053", whiteSpace: "nowrap" }}
            >
              SISTEMAS DE SEGURIDAD
            </span>
          </div>

          {/* Menú Desktop */}
          <nav className="hidden lg:flex space-x-4">
            {navItems.map((item, index) => (
              <PillLink key={index} href={item.href}>
                {item.label}
              </PillLink>
            ))}
          </nav>

          {/* Botón Hamburguesa */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col justify-center w-8 h-8 focus:outline-none"
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
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="lg:hidden fixed inset-y-0 left-0 w-64 bg-white/60 backdrop-blur-lg border-r border-transparent shadow-lg z-40"
            >
              {/* Encabezado */}
              <div className="p-4 border-b border-blue-900/20">
                <h2 className="text-lg font-bold text-blue-950 text-center">
                  Menú
                </h2>
              </div>

              {/* Botones */}
              <div className="flex-1 p-4 space-y-4">
                {navItems.map((item, index) => (
                  <PillLinkMobile
                    key={index}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </PillLinkMobile>
                ))}
              </div>

              {/* Copyright */}
              <div className="p-4 border-t border-blue-900/20">
                <h2 className="text-lg font-bold text-blue-950 text-center">
                  Contáctanos
                </h2>
                <br />
                <p className="text-xs text-blue-950 text-left">246 170 0661</p>
                <br />
                <p className="text-xs text-blue-950 text-left">
                  246 690 1598 | 246 497 7570
                </p>
                <br />
                <p className="text-xs text-blue-950 text-left">
                  ventas@mgsystem.com.mx
                </p>
                <br />
                <p className="text-xs text-blue-950 text-center">
                  © {new Date().getFullYear()} MG SISTEMAS DE SEGURIDAD
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

// Botón Pill (desktop)
function PillLink({ children, href }) {
  return (
    <motion.a
      href={href}
      className="relative inline-block px-5 py-2.5 rounded-full font-semibold text-blue-950 overflow-hidden"
      style={{ background: "white" }}
      whileHover={{
        backgroundColor: "#003053",
        color: "white",
        scale: 1.05,
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  );
}

// Botón Pill (móvil)
function PillLinkMobile({ children, href, onClick }) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className="block px-5 py-3 rounded-full font-medium text-center text-blue-950 bg-transparent border-2 border-blue-950"
      whileHover={{
        backgroundColor: "#003053",
        color: "white",
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  );
}

export default Header;

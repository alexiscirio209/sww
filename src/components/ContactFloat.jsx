// src/components/ContactFloat.jsx
function ContactFloat() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {/* WhatsApp */}
      <a
        href="https://wa.me/522461700661"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 w-fit min-w-0"
      >
        <img src="/assets/whatsapp.png" alt="WhatsApp" className="h-6 mr-2" />
        <span className="text-sm font-medium">246 170 0661</span>
      </a>

      {/* Correo (Gmail) */}
      <a
        href="mailto:ventas@mgsystem.com.mx"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 w-fit min-w-0"
      >
        <img src="/assets/gmail.png" alt="Correo" className="h-6 mr-2" />
        <span className="text-sm font-medium">ventas@mgsystem.com.mx</span>
      </a>

      {/* Teléfonos */}
      <div className="inline-flex items-center bg-blue-900 hover:bg-blue-950 text-white px-3 py-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 w-fit min-w-0">
        <img src="/assets/tel.png" alt="Teléfono" className="h-6 mr-2" />
        <span>246 690 1598 | 246 497 7570</span>
      </div>  
    </div>
  );
}

export default ContactFloat;
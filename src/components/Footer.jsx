// src/components/Footer.jsx
function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* WhatsApp */}
          <div className="flex items-center mb-4 md:mb-0">
            <img src="public\assets\whatsapp.png" alt="WhatsApp" className="h-8 mr-2" />
            <span className="text-lg">246 170 0661</span>
          </div>

          <div className="flex items-center mb-4 md:mb-0">
            <img src="public\assets\tel.png" alt="WhatsApp" className="h-8 mr-2" />
            <span className="text-lg">246 690 1598 | 246 497 7570</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
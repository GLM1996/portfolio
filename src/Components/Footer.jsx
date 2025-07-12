import { FaWhatsapp, FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-gray-200 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Contact info */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h3 className="text-xl font-semibold">Contáctame</h3>
          <div className="flex gap-4 text-lg">
            <a href="https://wa.me/5358524424" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-green-400">
              <FaWhatsapp />
            </a>
            <a href="mailto:estrellaglm96@gmail.com" aria-label="Email" className="hover:text-purple-400">
              <FaEnvelope />
            </a>
            <a href="tel:+5358524424" aria-label="Teléfono" className="hover:text-blue-400">
              <FaPhone />
            </a>
            {/*
            <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-600">
              <FaLinkedin />
            </a>
            <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-gray-400">
              <FaGithub />
            </a>
             */}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right text-sm">
          &copy; {new Date().getFullYear()} GustavoDev. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

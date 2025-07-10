import { FaWhatsapp, FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactMe() {
  const contacts = [
    {
      icon: <FaWhatsapp className="w-6 h-6 text-green-500" />,
      label: "WhatsApp",
      link: "https://wa.me/1234567890", // Pon tu número real sin + ni espacios
      display: "+1 234 567 890",
    },
    {
      icon: <FaEnvelope className="w-6 h-6 text-purple-600" />,
      label: "Email",
      link: "mailto:tucorreo@example.com",
      display: "tucorreo@example.com",
    },
    {
      icon: <FaPhone className="w-6 h-6 text-blue-600" />,
      label: "Teléfono",
      link: "tel:+1234567890",
      display: "+1 234 567 890",
    },
    {
      icon: <FaLinkedin className="w-6 h-6 text-blue-700" />,
      label: "LinkedIn",
      link: "https://linkedin.com/in/tuusuario",
      display: "linkedin.com/in/tuusuario",
    },
  ];

  // Variants para animación
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="contacto"
      className="max-w-6xl mx-auto p-8 md:p-16 bg-white dark:bg-gray-900 rounded-lg shadow-md flex flex-col md:flex-row justify-center items-center gap-12 w-full"
    >
      {/* Imagen */}
      <motion.img
        src="/avatar.svg"
        alt="Contacto"
        className="w-48 h-48 object-contain flex-1"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Contenido */}
      <motion.div
        className="flex flex-col gap-6 flex-1"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-3xl font-bold mb-6 text-center md:text-left text-gray-900 dark:text-white">
          Contáctame
        </h2>
        <ul className="flex flex-col gap-6">
          {contacts.map(({ icon, label, link, display }) => (
            <motion.li key={label} variants={itemVariants}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-800 dark:text-gray-200 hover:text-purple-600 transition"
              >
                {icon}
                <span className="text-lg">{display}</span>
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>

  );
}

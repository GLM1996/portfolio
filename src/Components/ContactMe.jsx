import { FaWhatsapp, FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactMe() {
  const contacts = [
    {
      icon: <FaWhatsapp className="w-6 h-6 text-green-500" />,
      label: "WhatsApp",
      link: "https://wa.me/5358524424",
      display: "+53 58524424",
    },
    {
      icon: <FaEnvelope className="w-6 h-6 text-purple-600" />,
      label: "Email",
      link: "mailto:estrellaglm96@gmail.com",
      display: "estrellaglm96@gmail.com",
    },
    {
      icon: <FaPhone className="w-6 h-6 text-blue-600" />,
      label: "Teléfono",
      link: "tel:+5358524424",
      display: "+53 58524424",
    },
    /*{
      icon: <FaLinkedin className="w-6 h-6 text-blue-700" />,
      label: "LinkedIn",
      link: "https://linkedin.com/in/tuusuario",
      display: "linkedin.com/in/tuusuario",
    },*/
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="contáctame"
      className="py-6 sm:py-20 px-6 sm:px-20 text-white"
    >
      <h2 className="text-3xl font-bold mb-6 text-purple-400 text-center justify-center  flex md:text-left">
        Contáctame
      </h2>
      <div className="flex flex-col md:flex-row justify-around items-center gap-12 bg-gray-950 rounded-2xl py-2 md:py-4">

        {/* Imagen */}
        <motion.img
          src="/trageBg.webp"
          alt="Contacto"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-2xl object-cover"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Contenido */}
        <motion.div
          className="flex flex-col gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ul className="flex flex-col gap-6">
            {contacts.map(({ icon, label, link, display }) => (
              <motion.li key={label} variants={itemVariants}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-200 hover:text-purple-400 transition"
                >
                  {icon}
                  <span className="text-lg">{display}</span>
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

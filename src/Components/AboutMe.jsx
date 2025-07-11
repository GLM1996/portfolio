import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section
      id="acerca-de-mí"
      className="py-6 sm:py-20 px-6 sm:px-20 text-white"
    >
      <h2 className="text-3xl font-bold mb-12 text-purple-400">Acerca de Mi</h2>

      <motion.p
        className="text-lg text-gray-400 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Soy un desarrollador frontend apasionado por crear experiencias digitales atractivas y funcionales.
        He trabajado en el diseño y desarrollo de aplicaciones web utilizando tecnologías como React, Node.js y MongoDB.
        Me especializo en la arquitectura del front-end, integración de APIs externas y automatización con webhooks,
        herramientas como Make y n8n.
      </motion.p>

      <motion.p
        className="text-lg text-gray-400 leading-relaxed mt-4 "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Además, he desarrollado herramientas internas como calculadoras personalizadas en HTML, CSS y JavaScript
        para optimizar procesos de negocio.
        Siempre busco aprender nuevas tecnologías y mejorar mis habilidades.
      </motion.p>
    </section>
  );
}

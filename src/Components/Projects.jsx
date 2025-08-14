import { Link, Calculator, CalendarDays, Bird } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { div } from "framer-motion/client";


export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      icon: <Calculator className="w-8 h-8 text-purple-900" />,
      title: "Calculadora Hipotecaria",
      description:
        `Esta herramienta está diseñada para ayudar a los compradores de vivienda a estimar con precisión sus pagos mensuales durante todo el plazo del préstamo, adaptándose a su presupuesto y necesidades financieras. Compatible con hipotecas convencionales y FHA`,
      technologies: ["HTML", "CSS", "JavaScript", "Boostrap"],
      year: "2024",
      img: "/mortgageCalculatorSimple.png" // Asegúrate de tener la imagen en la carpeta public
    },
    {
      icon: <Calculator className="w-8 h-8 text-purple-900" />,
      title: "Calculadora Hipotecaria Comparativa",
      description:
        "Esta calculadora compara dos hipotecas en paralelo, mostrando pagos mensuales, intereses acumulados y gráficos de amortización, con opción de ajustar términos para encontrar la mejor opción según su presupuesto y necesidades financieras.",
      technologies: ["HTML", "CSS", "JavaScript", "Boostrap"],
      year: "2024",
      img: "/mortgageCalculator.png" // Asegúrate de tener la imagen en la carpeta public
    },
    {
      icon: <CalendarDays className="w-8 h-8 text-purple-900" />,
      title: "Calendario",
      description:
        "Este calendario interactivo, desarrollado en React, permite gestionar y visualizar todas las citas y reuniones de la empresa en una interfaz intuitiva. Ofrece una vista clara de la disponibilidad, conflictos de horarios y recordatorios automáticos. Sincronización en tiempo real, facilita la organización eficiente de la agenda corporativa.",
      technologies: ["React", "JavaScript", "Boostrap"],
      year: "2024",
      img: "/calendar.png" // Asegúrate de tener la imagen en la carpeta public
    },
    {
      icon: <Bird className="w-8 h-8 text-purple-900" />,
      title: "CubaAves",
      description:
        "Esta landing page, desarrollada en Next.js, permite explorar los principales lugares y aves endémicas de Cuba de manera interactiva. Ofrece información visual y detallada sobre cada especie y destino, mostrando rutas de recorridos, fotos y sonidos de las aves. Con un diseño intuitivo, facilita que los visitantes descubran y planifiquen sus tours de manera fácil y atractiva.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      year: "2025",
      img: "/cubaaves.webp", // Asegúrate de tener la imagen en la carpeta public
      link: "https://cubaaves.vercel.app"
    },
    // ... tus otros proyectos
  ];

  return (
    <section className="py-6 sm:py-12 px-6 sm:px-20 text-white" id="proyectos">
      <h2 className="text-3xl font-bold my-12 text-purple-400">Proyectos</h2>
      <div className="grid gap-8 md:grid-cols-3" >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="rounded-2xl shadow-lg overflow-hidden bg-white dark:bg-gray-900 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              {/* Contenedor de la imagen con efecto hover */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-500 ${hoveredIndex === index ? 'scale-110' : 'scale-100'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                <div className="absolute bottom-4 left-4 flex justify-center items-center gap-3">
                  {project.icon}
                  <h3 className="text-sm md:text-xl font-bold text-white bg-gray-500/80 p-1 rounded-xl text-center">{project.title}</h3>
                </div>
              </div>

              {/* Contenido del proyecto */}
              <div className="p-5 flex-grow flex flex-col">
                <p className=" text-gray-400 leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <div className="flex gap-2 flex-wrap text-sm text-purple-500 mb-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-purple-100 dark:bg-purple-900/50 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap justify-between items-center gap-2 mt-2">
                    <span className="text-sm text-gray-400">{project.year}</span>
                    {project.link && (
                      <div className="flex items-center">
                        <span><Link className="w-4 h-4 text-purple-900" /></span>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-400 hover:text-blue-500 hover:underline bg-gray-900 px-2 py-1 rounded-lg transition-colors duration-200"
                        >

                          {project.link}
                        </a>
                      </div>
                    )}

                  </div>

                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

  );
}
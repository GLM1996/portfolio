import { Code,Calculator,CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";


export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      icon: <Calculator className="w-8 h-8 text-purple-900" />,
      title: "Calculadora Hipotecaria",
      description:
        `Esta herramienta está diseñada para ayudar a los compradores de vivienda a estimar con precisión sus pagos mensuales durante todo el plazo del préstamo, adaptándose a su presupuesto y necesidades financieras. Compatible con hipotecas convencionales y FHA`,
      technologies: ["HTML", "CSS", "JavaScript", "Boostrap"],
      year: "2023",
      img: "/mortgageCalculatorSimple.png" // Asegúrate de tener la imagen en la carpeta public
    },
    {
      icon: <Calculator className="w-8 h-8 text-purple-900" />,
      title: "Calculadora Hipotecaria Comparativa",
      description:
        "Esta calculadora compara dos hipotecas en paralelo, mostrando pagos mensuales, intereses acumulados y gráficos de amortización, con opción de ajustar términos para encontrar la mejor opción según su presupuesto y necesidades financieras.",
      technologies: ["HTML", "CSS", "JavaScript", "Boostrap"],
      year: "2023",
      img: "/mortgageCalculator.png" // Asegúrate de tener la imagen en la carpeta public
    },
    {
      icon: <CalendarDays className="w-8 h-8 text-purple-900" />,
      title: "Calendario",
      description:
        "Este calendario interactivo, desarrollado en React, permite gestionar y visualizar todas las citas y reuniones de la empresa en una interfaz intuitiva. Ofrece una vista clara de la disponibilidad, conflictos de horarios y recordatorios automáticos. Sincronización en tiempo real, facilita la organización eficiente de la agenda corporativa.",
      technologies: ["React", "JavaScript", "Boostrap"],
      year: "2023",
      img: "/calendar.png" // Asegúrate de tener la imagen en la carpeta public
    },
    // ... tus otros proyectos
  ];

  return (
    <div className="grid gap-8 md:grid-cols-2 py-6 sm:py-20 px-6 sm:px-20" id="proyectos">
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
              <div className="absolute bottom-4 left-4 flex items-center gap-3">
                {project.icon}
                <h3 className="text-sm md:text-xl font-bold text-white bg-gray-500/80 p-1 rounded-xl">{project.title}</h3>
              </div>
            </div>

            {/* Contenido del proyecto */}
            <div className="p-5 flex-grow flex flex-col">
              <p className="text-gray-700 dark:text-gray-300 text-base mb-4 flex-grow">
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
                <span className="text-xs text-gray-500">{project.year}</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
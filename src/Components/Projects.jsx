import { Code } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      icon: <Code className="w-8 h-8 text-purple-400" />,
      title: "Calculadoras Financieras",
      description:
        "Desarrollo de herramientas web interactivas utilizando HTML, CSS y JavaScript puro. Estas calculadoras permiten al equipo comercial estimar comisiones, pagos hipotecarios y rentabilidad de propiedades en tiempo real, facilitando la toma de decisiones.",
      technologies: ["HTML", "CSS", "JavaScript"],
      year: "2023",
    },
    {
      icon: <Code className="w-8 h-8 text-purple-400" />,
      title: "Calculadoras Financieras",
      description:
        "Desarrollo de herramientas web interactivas utilizando HTML, CSS y JavaScript puro. Estas calculadoras permiten al equipo comercial estimar comisiones, pagos hipotecarios y rentabilidad de propiedades en tiempo real, facilitando la toma de decisiones.",
      technologies: ["HTML", "CSS", "JavaScript"],
      year: "2023",
    },
    {
      icon: <Code className="w-8 h-8 text-purple-400" />,
      title: "Calculadoras Financieras",
      description:
        "Desarrollo de herramientas web interactivas utilizando HTML, CSS y JavaScript puro. Estas calculadoras permiten al equipo comercial estimar comisiones, pagos hipotecarios y rentabilidad de propiedades en tiempo real, facilitando la toma de decisiones.",
      technologies: ["HTML", "CSS", "JavaScript"],
      year: "2023",
    },
    {
      icon: <Code className="w-8 h-8 text-purple-400" />,
      title: "Calculadoras Financieras",
      description:
        "Desarrollo de herramientas web interactivas utilizando HTML, CSS y JavaScript puro. Estas calculadoras permiten al equipo comercial estimar comisiones, pagos hipotecarios y rentabilidad de propiedades en tiempo real, facilitando la toma de decisiones.",
      technologies: ["HTML", "CSS", "JavaScript"],
      year: "2023",
    },
    // Agrega más proyectos aquí si quieres
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 py-6 sm:py-20 px-6 sm:px-20" id="proyectos">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <div className="rounded-2xl shadow-lg p-5 bg-white dark:bg-gray-900 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-4">
              {project.icon}
              <h3 className="text-xl font-bold text-purple-700">{project.title}</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-base mb-3">{project.description}</p>
            <div className="flex gap-2 flex-wrap text-sm text-purple-500 mb-2">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="bg-purple-100 dark:bg-purple-800 px-2 py-1 rounded-lg">
                  {tech}
                </span>
              ))}
            </div>
            <span className="text-xs text-gray-500">{project.year}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

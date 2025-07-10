import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Code, Rocket } from 'lucide-react'

export default function Experience() {
    const experiences = [
        {
            icon: <Briefcase className="w-6 h-6 text-purple-400" />,
            role: "Desarrollador FullStack",
            company: "Tech Solutions S.A.",
            period: "2022 - Actualidad",
            description:
                "Desarrollo de aplicaciones web escalables usando React, Node.js y MongoDB. Responsable del diseño de arquitectura front-end y despliegues en AWS.",
        },
        {
            icon: <Code className="w-6 h-6 text-purple-400" />,
            role: "Frontend Developer",
            company: "Digital Creatives",
            period: "2020 - 2022",
            description:
                "Diseño e implementación de interfaces con React y Tailwind CSS. Optimización de la experiencia de usuario y accesibilidad.",
        },
        {
            icon: <Rocket className="w-6 h-6 text-purple-400" />,
            role: "Practicante de Desarrollo",
            company: "InnovaTech",
            period: "2019 - 2020",
            description:
                "Colaboración en proyectos web con HTML, CSS y JavaScript. Aprendizaje de metodologías ágiles y herramientas de control de versiones.",
        },
    ]

    return (
        <section className="py-6 sm:py-20 px-6 sm:px-20 text-white" id='experiencia'>
            <h2 className="text-3xl font-bold mb-12 text-purple-400">Experiencia Profesional</h2> 
            <div className="relative pl-10">
                <div className="absolute left-3 top-0 bottom-0 w-1 bg-purple-700 rounded-full"></div>
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="relative mb-12"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute -left-6 top-1">
                            <div className="bg-gray-800 p-2 rounded-full shadow-md">
                                {exp.icon}
                            </div>
                        </div>

                        <div className="pl-8">
                            <h3 className="text-2xl font-semibold">{exp.role}</h3>
                            <p className="text-purple-300">{exp.company} · {exp.period}</p>
                            <p className="text-gray-400 mt-2">{exp.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

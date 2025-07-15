import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Code, Rocket } from 'lucide-react'

export default function Experience() {
    const experiences = [
        {
            icon: <Briefcase className="w-6 h-6 text-purple-400" />,
            role: "Desarrollador Full Stack",
            company: "Juan Carlos Carrera Realtor State",
            period: "2022 - Actualidad",
            description:
                "Diseño y desarrollo de aplicaciones web embebidas utilizando React y Bootstrap para el front-end, y Node.js con Express en el back-end. Responsable de la integración con la API de Follow Up Boss, así como de la implementación y gestión de webhooks para automatizaciones mediante plataformas como Make y n8n, optimizando flujos de trabajo y procesos CRM. Además, desarrollé herramientas internas como calculadoras financieras interactivas usando HTML, CSS y JavaScript, facilitando tareas cotidianas del equipo comercial.",
        }


    ]

    return (
        <section className="py-2 sm:py-6 px-6 sm:px-20 text-white" id='experiencia'>
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
                            <p className="text-lg text-gray-400  leading-relaxed">{exp.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <header className="flex flex-col md:flex-row py-2 px-6 sm:px-20 text-white min-h-[calc(100vh-80px)] items-center" id='inicio'>
            {/* Texto */}
            <motion.div
                className="flex flex-1 flex-col gap-6"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                    Hola, soy <span className="text-purple-400">Gustavo León</span>
                </h1>
                <h2 className="text-2xl text-gray-300">Desarrollador Web FullStack</h2>
                <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                    Con experiencia creando aplicaciones web modernas y escalables.
                    Apasionado por la programación, las nuevas tecnologías y la creación de experiencias digitales intuitivas y eficientes.
                    Siempre buscando aprender algo nuevo y aportar valor a los proyectos donde participo.
                </p>

                <div className="flex gap-4">
                    <motion.a
                        href="#contáctame"
                        className="flex justify-center items-center bg-purple-600 hover:bg-purple-700 text-white py-2 px-5 rounded-2xl shadow-lg transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#contáctame').scrollIntoView({
                                behavior: 'smooth'
                            });
                        }}
                    >
                        Contáctame
                    </motion.a>
                    {/*
                    <motion.a
                        href="/cv.pdf" // Cambia esto por el enlace real a tu CV
                        className="flex justify-center items-center border border-purple-500 hover:bg-purple-700 hover:text-white text-purple-400 py-2 px-5 rounded-2xl transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Descargar CV
                    </motion.a>
                     */}
                </div>
            </motion.div>

            {/* Imagen */}
            <motion.div
                className="flex flex-1 justify-center mt-10 md:mt-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
            >
                <img
                    src="/avataaars.png" // Cambia esto por tu imagen personal o un logo más profesional
                    alt="Logo"
                    className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-2xl object-cover"
                />
            </motion.div>
        </header>
    )
}

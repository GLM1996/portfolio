import { useState } from "react";
import { Menu, X } from "lucide-react"; // o Heroicons si prefieres

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Inicio"); // ← aquí guardamos el link activo

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = ["Inicio", "Experiencia", "Proyectos", "Habilidades", "Acerca de mí", "Contáctame"];

  const handleClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);

    // Espera un poco para que el menú cierre visualmente
    setTimeout(() => {
        const sectionId = link.toLowerCase().replace(/\s/g, "-");
        const element = document.getElementById(sectionId);

        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, 300); // 300 ms suele bastar. Ajusta según tu animación.
};



  return (
    <nav className="bg-purple-700 bg-opacity-80 backdrop-blur-sm p-4 rounded-2xl mx-auto w-full md:w-fit sticky top-0 z-50" >
      {/* Desktop */}
      <ul className="hidden md:flex gap-6 justify-center text-white text-lg font-medium">
        {links.map((link, index) => (
          <li
            key={index}
            onClick={() => handleClick(link)}
            className={`cursor-pointer hover:text-purple-300 ${activeLink === link ? "text-purple-300 underline underline-offset-4" : ""
              }`}
          >
            {link}
          </li>
        ))}
      </ul>

      {/* Mobile */}
      <div className="flex md:hidden justify-between items-center w-full">
        <h3 className="text-white font-bold">GUSTAVO<span className="text-yellow-400">DEV</span></h3>
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <ul className="flex flex-col gap-4 mt-4 text-white text-base w-full">
          {links.map((link, index) => (
            <li
              key={index}
              onClick={() => handleClick(link)}
              className={`cursor-pointer hover:text-purple-300 ${activeLink === link ? "text-purple-300 underline underline-offset-4" : ""
                }`}
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

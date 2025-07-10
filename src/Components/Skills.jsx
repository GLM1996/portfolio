import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  { icon: <SiReact className="text-sky-400 w-12 h-12" />, name: "React" },
  { icon: <SiJavascript className="text-yellow-400 w-12 h-12" />, name: "JavaScript" },
  { icon: <SiNodedotjs className="text-green-500 w-12 h-12" />, name: "Node.js" },
  { icon: <SiMongodb className="text-green-600 w-12 h-12" />, name: "MongoDB" },
  { icon: <SiHtml5 className="text-orange-500 w-12 h-12" />, name: "HTML5" },
  { icon: <SiCss3 className="text-blue-500 w-12 h-12" />, name: "CSS3" },
  { icon: <SiBootstrap className="text-purple-600 w-12 h-12" />, name: "Bootstrap" },
  { icon: <SiTailwindcss className="text-sky-400 w-12 h-12" />, name: "TailwindCSS" },
];

export default function Skills() {
  const allSkills = [...skills, ...skills]; // duplicado para que no desaparezca

  return (
    <div className="overflow-hidden py-6 sm:py-20 px-6 sm:px-32 max-w-6xl mx-auto box-border">
      <motion.div
        className="flex gap-6 sm:gap-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        }}
      >
        {allSkills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center min-w-max">
            {skill.icon}
            <span className="text-sm mt-2 text-gray-700 dark:text-gray-300">{skill.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
  
  
}

// Skills.jsx
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
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Skills base
const baseSkills = [
  { icon: <SiReact className="text-sky-400 w-12 h-12" />, name: "React" },
  { icon: <SiJavascript className="text-yellow-400 w-12 h-12" />, name: "JavaScript" },
  { icon: <SiNodedotjs className="text-green-500 w-12 h-12" />, name: "Node.js" },
  { icon: <SiMongodb className="text-green-600 w-12 h-12" />, name: "MongoDB" },
  { icon: <SiHtml5 className="text-orange-500 w-12 h-12" />, name: "HTML5" },
  { icon: <SiCss3 className="text-blue-500 w-12 h-12" />, name: "CSS3" },
  { icon: <SiBootstrap className="text-purple-600 w-12 h-12" />, name: "Bootstrap" },
  { icon: <SiTailwindcss className="text-sky-400 w-12 h-12" />, name: "TailwindCSS" },
];

// Duplica el array 2 o 3 veces para que no se corte en pantallas grandes
const skills = [...baseSkills, ...baseSkills, ...baseSkills,...baseSkills];

export default function Skills() {
  return (
    <div className="py-6 sm:py-20 px-6 sm:px-20" id="habilidades">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        loop={true}
        speed={2000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        grabCursor={true}
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index} style={{ width: "auto" }}>
            <div className="flex flex-col items-center p-0">
              {skill.icon}
              <span className="text-sm mt-2 text-gray-700 dark:text-gray-300">
                {skill.name}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

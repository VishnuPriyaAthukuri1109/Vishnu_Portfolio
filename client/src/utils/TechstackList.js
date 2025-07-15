import { BsFiletypeHtml, BsFiletypeCss } from "react-icons/bs";
import {
  SiC,
  SiPython,
  SiMysql,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiOracle,
  SiTableau,
  SiAndroidstudio,
} from "react-icons/si";
import { FaJava, FaReact, FaNode, FaGithub, FaCode } from "react-icons/fa";

export const TechstackList = [
  // Programming Skills
  { _id: 1, name: "Programming", icon: SiC },
  { _id: 2, name: "Python", icon: SiPython },
  { _id: 3, name: "Java", icon: FaJava },
  { _id: 4, name: "SQL", icon: SiMysql },

  // Frontend
  { _id: 5, name: "HTML", icon: BsFiletypeHtml },
  { _id: 6, name: "CSS", icon: BsFiletypeCss },
  { _id: 7, name: "JavaScript", icon: SiJavascript },
  { _id: 8, name: "ReactJS", icon: FaReact },
  { _id: 9, name: "XML", icon: FaCode },
  { _id: 10, name: "Tailwind CSS", icon: SiTailwindcss },

  // Backend
  { _id: 11, name: "Node.js", icon: FaNode },
  { _id: 12, name: "MongoDB", icon: SiMongodb },
  { _id: 13, name: "Oracle", icon: SiOracle },

  // Others
  { _id: 14, name: "GitHub", icon: FaGithub },
  { _id: 15, name: "Tableau", icon: SiTableau },
  { _id: 16, name: "Android Studio", icon: SiAndroidstudio },
];

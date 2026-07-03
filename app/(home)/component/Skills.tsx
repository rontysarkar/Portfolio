import React from "react";
import {
  Code2,
  ArrowUpRight,
  Server,
  TerminalSquare,
} from "lucide-react";
import Title from "./Title";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaCloud,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiAxios,
  SiPostgresql,
  SiPrisma,
  SiNpm,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { TbApi, TbWorldDownload } from "react-icons/tb";

// Dynamic Data Structure for Skills Section
const skillCategories = [
  {
    title: "Front-End Development",
    icon: <Code2 className="w-5 h-5 text-blue-400" />,

    skills: [
      { name: "HTML5", icon: <FaHtml5 className="w-5 h-5 text-[#E34F26]" /> },
      { name: "CSS3", icon: <FaCss3Alt className="w-5 h-5 text-[#1572B6]" /> },
      {
        name: "JavaScript",
        icon: <SiJavascript className="w-5 h-5 text-[#F7DF1E]" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="w-5 h-5 text-[#3178C6]" />,
      },
      {
        name: "React.js",
        icon: <FaReact className="w-5 h-5 text-[#61DAFB]" />,
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="w-5 h-5 text-black dark:text-white" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="w-5 h-5 text-[#06B6D4]" />,
      },
    ],
  },
  {
    title: "Back-End & Database",
    icon: <Server className="w-5 h-5 text-emerald-400" />,
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="w-5 h-5 text-[#339933]" />,
      },
      {
        name: "Express.js",
        icon: <SiExpress className="w-5 h-5 text-black dark:text-white" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="w-5 h-5 text-[#47A248]" />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="w-5 h-5 text-[#336791]" />,
      },
      {
        name: "Prisma",
        icon: <SiPrisma className="w-5 h-5 text-slate-700 dark:text-white" />,
      },
      {
        name: "REST APIs",
        icon: <TbApi className="w-5 h-5 text-[#8B5CF6]" />,
      },
      {
        name: "Axios",
        icon: <SiAxios className="w-5 h-5 text-[#5A29E4]" />,
      },
      {
        name: "Fetch API",
        icon: <TbWorldDownload className="w-5 h-5 text-[#10B981]" />,
      },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: <TerminalSquare className="w-5 h-5 text-yellow-500" />,
    skills: [
      {
        name: "Git & GitHub",
        icon: <FaGitAlt className="w-5 h-5 text-[#F05032]" />,
      },
      {
        name: "VS Code",
        icon: <VscVscode className="w-5 h-5 text-[#007ACC]" />,
      },
      {
        name: "NPM / Yarn",
        icon: <SiNpm className="w-5 h-5 text-[#CB3837]" />,
      },
      {
        name: "Postman",
        icon: <SiPostman className="w-5 h-5 text-[#FF6C37]" />,
      },
      {
        name: "Cloud Services",
        icon: <FaCloud className="w-5 h-5 text-[#38BDF8]" />,
      },
      {
        name: "Deployment",
        icon: <SiVercel className="w-5 h-5 text-black dark:text-white" />,
      },
    ],
  },
];

export default function ProfessionalSkills() {
  return (
    <section id="skills" className="mx-auto  py-32">
      {/* Header Section */}
      <Title
        text="Skills 🔨"
        className="flex flex-col justify-center items-center -rotate-6 mb-16 "
      />

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full mx-auto">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="bg-[#080e1e] border border-slate-800/60 rounded-2xl p-6 hover:border-slate-700/80 transition-all duration-300 ease-out transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col justify-between group"
          >
            <div>
              {/* Card Title & Main Category Icon */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl group-hover:scale-105 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-slate-100 tracking-wide">
                    {category.title}
                  </h3>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-slate-300 transition-colors" />
              </div>

              {/* Skills Tags Grid */}
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-2 px-3 py-2.5 bg-[#0b1329] border border-slate-800/50 rounded-xl hover:bg-[#0f1b3a] hover:border-slate-700 transition-colors duration-200"
                  >
                    <div className="flex-shrink-0">{skill.icon}</div>
                    <span className="text-xs md:text-sm font-medium text-slate-300 truncate">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

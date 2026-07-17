'use client'
import {
  Code2,
  FileCode,
  FileJson,
  FileType2,
  LayoutDashboard,
  Component,
  Github,
  Paintbrush,
  MousePointerClick,
} from "lucide-react";
import { useEffect, useState } from "react";
import AOS from 'aos';
// AOS CSS import has no TS types in this project.
// @ts-expect-error - missing declaration for 'aos/dist/aos.css'
import 'aos/dist/aos.css';

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const skills = [
    // Frontend
    { icon: <Code2 />, name: "HTML5" },
    { icon: <FileCode />, name: "CSS3" },
    { icon: <FileJson />, name: "JavaScript" },
    { icon: <FileJson />, name: "jQuery" },
    { icon: <LayoutDashboard />, name: "Bootstrap" },
    { icon: <Paintbrush />, name: "TailwindCSS" },
    { icon: <Paintbrush />, name: "SCSS" },
    { icon: <Component />, name: "React.js" },
    { icon: <LayoutDashboard />, name: "Material-UI (MUI)" },
    { icon: <MousePointerClick />, name: "Figma" },

    // Backend / API
    { icon: <FileType2 />, name: "TypeScript" },
    { icon: <Code2 />, name: "Node.js" },
    { icon: <LayoutDashboard />, name: "Express.js" },
    { icon: <FileJson />, name: "RESTful APIs" },
    { icon: <Component />, name: "WebSocket" },

    // Databases
    { icon: <LayoutDashboard />, name: "MongoDB" },
    { icon: <FileJson />, name: "Mongoose" },

    // Auth / Security
    { icon: <MousePointerClick />, name: "JWT" },
    { icon: <Github />, name: "Passport.js" },
    { icon: <Code2 />, name: "Middleware" },

    // State Management
    { icon: <FileJson />, name: "Redux" },
    { icon: <Component />, name: "Context API" },
    { icon: <LayoutDashboard />, name: "Zustand" },
    { icon: <Code2 />, name: "React Query" },

    // Tools
    { icon: <Github />, name: "Git" },
    { icon: <Github />, name: "GitHub" },
    { icon: <MousePointerClick />, name: "Postman" },
    { icon: <MousePointerClick />, name: "Docker" },
    // { icon: <MousePointerClick />, name: "Webhooks / APIs" },
  ];

  const [showAllSkills, setShowAllSkills] = useState(false);
  const maxVisible = 15;

  const visibleSkills = showAllSkills ? skills : skills.slice(0, maxVisible);
  const shouldShowToggle = skills.length > maxVisible;


  return (
    <section id="skills" className="py-12 px-4 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {visibleSkills.map((skill, index) => (

          <SkillItem
            key={index}
            icon={skill.icon}
            name={skill.name}
            delay={index * 10}
          />
        ))}
      </div>

      {shouldShowToggle && (
        <div className="flex justify-center mt-6">
          <button
            type="button"
            onClick={() => setShowAllSkills((v) => !v)}
            className="font-semibold  transition  cursor-pointer bg-primary px-4 py-2 rounded-md"
          >
            {showAllSkills ? "see less" : "see more"}
          </button>
        </div>
      )}
    </section>
  );
}

function SkillItem({ icon, name, delay }: { icon: React.ReactNode; name: string; delay: number }) {
  return (
    <div
      className="flex items-center gap-4 p-4 bg-base-200 rounded-xl shadow-sm hover:shadow-lg transition"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="text-primary">{icon}</div>
      <span className="text-[16px] font-medium sm:text-lg">{name}</span>
    </div>
  );
}

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
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const skills = [
    { icon: <Code2 />, name: "HTML5" },
    { icon: <FileCode />, name: "CSS3" },
    { icon: <FileJson />, name: "JavaScript" },
    { icon: <FileJson />, name: "JQuery" },
    { icon: <LayoutDashboard />, name: "Bootstrap" },
    { icon: <Paintbrush />, name: "Tailwind" },
    { icon: <Paintbrush />, name: "Sass" },
    { icon: <Component />, name: "React" },
    { icon: <LayoutDashboard />, name: "MUI (Material UI)" },
    { icon: <Github />, name: "GitHub" },
    { icon: <MousePointerClick />, name: "Figma" },
    { icon: <FileType2 />, name: "TypeScript" },
  ];

  return (
    <section id="skills" className="py-12 px-4 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8">My Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <SkillItem
            key={index}
            icon={skill.icon}
            name={skill.name}
            delay={index * 100}
          />
        ))}
      </div>
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
      <span className="text-lg font-medium">{name}</span>
    </div>
  );
}

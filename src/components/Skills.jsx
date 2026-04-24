import React from "react";
import { useLanguage } from "../hooks/useLanguage";

const content = {
  pt: { titulo: "Habilidades" },
  en: { titulo: "Skills" },
};

const skills = [
  "C",
  "C++",
  "Python",
  "JavaScript",
  "HTML",
  "CSS",
  "SASS",
  "Tailwind CSS",
  "React",
  "Flutter",
];

function Skills() {
  const { lang } = useLanguage();

  return (
    <section id="habilidades">
      <div className="section-panel px-6 py-8 sm:px-8 sm:py-10">
        <h2 className="section-heading">{content[lang].titulo}</h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-medium text-slate-200 shadow-[0_10px_25px_rgba(2,6,23,0.25)] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.08] hover:text-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

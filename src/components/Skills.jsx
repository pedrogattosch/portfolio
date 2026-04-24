import React from "react";
import { useLanguage } from "../hooks/useLanguage";

const content = {
  pt: {
    titulo: "Habilidades",
    categorias: [
      {
        titulo: "Back-end",
        skills: [
          "C#",
          ".NET",
          "ASP.NET Core",
          "Entity Framework Core",
          "JWT",
          "xUnit",
          "REST APIs",
        ],
      },
      {
        titulo: "Front-end",
        skills: [
          "React",
          "JavaScript",
          "TypeScript",
          "HTML",
          "CSS",
          "Tailwind CSS",
          "Sass",
          "Vite",
        ],
      },
      {
        titulo: "Banco de dados",
        skills: [
          "SQL Server",
          "PostgreSQL",
          "MySQL",
          "SQLite",
        ],
      },
      {
        titulo: "Ferramentas",
        skills: [
          "Git",
          "GitHub",
          "Docker",
          "Swagger",
          "Postman",
          "Figma",
          "CI/CD",
        ],
      },
      {
        titulo: "Outros",
        skills: [
          "Python",
          "Flutter",
          "C",
          "C++",
        ],
      },
    ],
  },
  en: {
    titulo: "Skills",
    categorias: [
      {
        titulo: "Back-end",
        skills: [
          "C#",
          ".NET",
          "ASP.NET Core",
          "Entity Framework Core",
          "JWT",
          "xUnit",
          "REST APIs",
        ],
      },
      {
        titulo: "Front-end",
        skills: [
          "React",
          "JavaScript",
          "TypeScript",
          "HTML",
          "CSS",
          "Tailwind CSS",
          "Sass",
          "Vite",
        ],
      },
      {
        titulo: "Databases",
        skills: [
          "SQL Server",
          "PostgreSQL",
          "MySQL",
          "SQLite",
        ],
      },
      {
        titulo: "Tools",
        skills: [
          "Git",
          "GitHub",
          "Docker",
          "Swagger",
          "Postman",
          "Figma",
          "CI/CD",
        ],
      },
      {
        titulo: "Others",
        skills: [
          "Python",
          "Flutter",
          "C",
          "C++",
        ],
      },
    ],
  },
};

function Skills() {
  const { lang } = useLanguage();

  return (
    <section id="habilidades">
      <div className="section-panel px-6 py-8 sm:px-8 sm:py-10">
        <h2 className="section-heading">{content[lang].titulo}</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {content[lang].categorias.map((categoria) => (
            <div
              key={categoria.titulo}
              className="glass-card glass-card-hover p-6 sm:p-7"
            >
              <h3 className="text-lg font-semibold tracking-tight text-white">
                {categoria.titulo}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {categoria.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-xl border border-slate-700/70 bg-slate-900/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

import { useLanguage } from "../hooks/useLanguage";
import GlassCard from "./ui/GlassCard";
import Section from "./ui/Section";
import TagList from "./ui/TagList";
import { techTagClass } from "./ui/styles";

const content = {
  pt: {
    titulo: "Habilidades",
    categorias: [
      {
        titulo: "Back-end",
        skills: ["C#", ".NET", "ASP.NET Core", "Entity Framework Core", "JWT", "xUnit", "REST APIs"],
      },
      {
        titulo: "Front-end",
        skills: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Sass", "Vite"],
      },
      {
        titulo: "Banco de dados",
        skills: ["SQL Server", "PostgreSQL", "MySQL", "SQLite"],
      },
      {
        titulo: "Ferramentas",
        skills: ["Git", "GitHub", "Docker", "Swagger", "Postman", "Figma", "CI/CD"],
      },
      {
        titulo: "Outros",
        skills: ["Python", "Flutter", "C", "C++"],
      },
    ],
  },
  en: {
    titulo: "Skills",
    categorias: [
      {
        titulo: "Back-end",
        skills: ["C#", ".NET", "ASP.NET Core", "Entity Framework Core", "JWT", "xUnit", "REST APIs"],
      },
      {
        titulo: "Front-end",
        skills: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Sass", "Vite"],
      },
      {
        titulo: "Databases",
        skills: ["SQL Server", "PostgreSQL", "MySQL", "SQLite"],
      },
      {
        titulo: "Tools",
        skills: ["Git", "GitHub", "Docker", "Swagger", "Postman", "Figma", "CI/CD"],
      },
      {
        titulo: "Others",
        skills: ["Python", "Flutter", "C", "C++"],
      },
    ],
  },
};

function Skills() {
  const { lang } = useLanguage();

  return (
    <Section id="habilidades" title={content[lang].titulo}>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {content[lang].categorias.map((category) => (
          <GlassCard key={category.titulo} hover className="p-6 sm:p-7">
            <h3 className="text-lg font-semibold tracking-tight text-white">
              {category.titulo}
            </h3>
            <TagList
              items={category.skills}
              className="mt-5 flex flex-wrap gap-2.5"
              itemClassName={techTagClass}
            />
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}

export default Skills;

import { useLanguage } from "../hooks/useLanguage";
import GlassCard from "./ui/GlassCard";
import Section from "./ui/Section";
import TagList from "./ui/TagList";
import { techTagClass } from "./ui/styles";

const content = {
  pt: {
    titulo: "Tecnologias",
    categorias: [
      {
        titulo: "IA",
        skills: ["Python", "LLM", "RAG", "Paperclip"],
      },
      {
        titulo: "Back-end",
        skills: ["FastAPI", "C#", ".NET", "ASP.NET Core", "Entity Framework Core", "APIs REST", "JWT"],
      },
      {
        titulo: "Front-end",
        skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Vite"],
      },
      {
        titulo: "Dados e visão computacional",
        skills: ["Pandas", "NumPy", "Matplotlib", "OpenCV", "Dash"],
      },
      {
        titulo: "Banco de dados",
        skills: ["SQL Server", "SQLite", "SQL"],
      },
      {
        titulo: "Mobile",
        skills: ["Flutter", "Dart"],
      },
      {
        titulo: "Ferramentas",
        skills: ["Git", "GitHub", "GitLab", "Docker", "Postman", "Swagger", "Figma", "Codex", "Claude Code"],
      },
    ],
  },
  en: {
    titulo: "Technologies",
    categorias: [
      {
        titulo: "AI",
        skills: ["Python", "LLM", "RAG", "Paperclip"],
      },
      {
        titulo: "Back-end",
        skills: ["FastAPI", "C#", ".NET", "ASP.NET Core", "Entity Framework Core", "REST APIs", "JWT"],
      },
      {
        titulo: "Front-end",
        skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Vite"],
      },
      {
        titulo: "Data and computer vision",
        skills: ["Pandas", "NumPy", "Matplotlib", "OpenCV", "Dash"],
      },
      {
        titulo: "Databases",
        skills: ["SQL Server", "SQLite", "SQL"],
      },
      {
        titulo: "Mobile",
        skills: ["Flutter", "Dart"],
      },
      {
        titulo: "Tools",
        skills: ["Git", "GitHub", "GitLab", "Docker", "Postman", "Swagger", "Figma", "Codex", "Claude Code"],
      },
    ],
  },
};

function Technologies() {
  const { lang } = useLanguage();

  return (
    <Section id="tecnologias" title={content[lang].titulo}>
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

export default Technologies;

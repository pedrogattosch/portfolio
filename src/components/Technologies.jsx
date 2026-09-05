import { Fragment } from "react";
import { useLanguage } from "../hooks/useLanguage";
import Section from "./ui/Section";

// eslint-disable-next-line react-refresh/only-export-components
export const technologyCategories = [
  {
    label: { pt: "IA & Dados", en: "AI & Data" },
    skills: {
      pt: ["Python", "LLMs", "RAG", "Pandas", "NumPy"],
      en: ["Python", "LLMs", "RAG", "Pandas", "NumPy"],
    },
  },
  {
    label: { pt: "Front-end", en: "Front-end" },
    skills: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    label: { pt: "Back-end", en: "Back-end" },
    skills: {
      pt: ["APIs REST", "FastAPI"],
      en: ["APIs REST", "FastAPI"],
    },
  },
  {
    label: { pt: "Banco de dados", en: "Databases" },
    skills: ["SQL Server", "SQLite", "PostgreSQL"],
  },
  {
    label: { pt: "Ferramentas", en: "Tools" },
    skills: ["Git", "Docker", "Postman", "Claude Code", "Codex"],
  },
];

function Technologies() {
  const { lang } = useLanguage();
  return <Section id="tecnologias" title={lang === "pt" ? "Habilidades" : "Skills"} index="03"><div className="border-t border-line md:grid md:grid-cols-[minmax(120px,210px)_minmax(0,1fr)] md:gap-x-7">{technologyCategories.map(({ label, skills }) => <Fragment key={label.pt}><div className="pt-4 font-mono text-xs font-semibold uppercase leading-[1.5] tracking-[.1em] text-accentSoft md:border-b md:border-line md:py-4">{label[lang]}</div><div className="border-b border-line pb-4 pt-1.5 text-[14.5px] leading-[1.5] text-muted md:py-4 md:pt-4">{(Array.isArray(skills) ? skills : skills[lang]).join(", ")}</div></Fragment>)}</div></Section>;
}
export default Technologies;

import { Fragment } from "react";
import { useLanguage } from "../hooks/useLanguage";
import Section from "./ui/Section";

const categories = [
  ["IA e automação", "AI and automation", "Python, LLMs, RAG, agentes de IA, sistemas multiagentes, machine learning", "Python, LLMs, RAG, AI agents, multi-agent systems, machine learning"],
  ["Dados e visão computacional", "Data and computer vision", "Pandas, NumPy, Matplotlib, OpenCV, Dash"],
  ["Back-end", "Back end", "FastAPI, APIs REST"],
  ["Front-end", "Front end", "React, TypeScript, JavaScript, HTML, CSS, Tailwind CSS"],
  ["Banco de dados", "Databases", "SQL Server, SQLite"],
  ["Ferramentas", "Tools", "Git, GitHub, GitLab, Docker, Postman, Swagger"],
];
function Technologies() {
  const { lang } = useLanguage();
  return <Section id="tecnologias" title={lang === "pt" ? "Habilidades" : "Skills"} index="03"><div className="border-t border-line md:grid md:grid-cols-[minmax(120px,210px)_minmax(0,1fr)] md:gap-x-7">{categories.map(([pt, en, skillsPt, skillsEn = skillsPt]) => <Fragment key={pt}><div className="pt-4 font-mono text-xs font-semibold uppercase leading-[1.5] tracking-[.1em] text-accentSoft md:border-b md:border-line md:py-4">{lang === "pt" ? pt : en}</div><div className="border-b border-line pb-4 pt-1.5 text-[14.5px] leading-[1.5] text-muted md:py-4 md:pt-4">{lang === "pt" ? skillsPt : skillsEn}</div></Fragment>)}</div></Section>;
}
export default Technologies;

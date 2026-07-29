import { Fragment } from "react";
import { useLanguage } from "../hooks/useLanguage";
import Section from "./ui/Section";

const categories = [
  ["IA", "AI", "Python, LLM, RAG, Paperclip"], ["Back-end", "Back-end", "FastAPI, C#, .NET, ASP.NET Core, Entity Framework Core, REST APIs, JWT"],
  ["Front-end", "Front-end", "React, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, Vite"], ["Dados e visão computacional", "Data and computer vision", "Pandas, NumPy, Matplotlib, OpenCV, Dash"],
  ["Banco de dados", "Databases", "SQL Server, SQLite"], ["Mobile", "Mobile", "Flutter, Dart"], ["Ferramentas", "Tools", "Git, GitHub, GitLab, Docker, Postman, Swagger, Figma, Codex, Claude Code"],
];
function Technologies() {
  const { lang } = useLanguage();
  return <Section id="tecnologias" title={lang === "pt" ? "Tecnologias" : "Technologies"} index="02"><div className="border-t border-line md:grid md:grid-cols-[minmax(120px,210px)_minmax(0,1fr)] md:gap-x-7">{categories.map(([pt, en, skills]) => <Fragment key={pt}><div className="pt-4 font-mono text-xs font-semibold uppercase leading-[1.5] tracking-[.1em] text-accentSoft md:border-b md:border-line md:py-4">{lang === "pt" ? pt : en}</div><div className="border-b border-line pb-4 pt-1.5 text-[14.5px] leading-[1.5] text-muted md:py-4 md:pt-4">{skills}</div></Fragment>)}</div></Section>;
}
export default Technologies;

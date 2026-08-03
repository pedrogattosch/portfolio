import { Fragment } from "react";
import { useLanguage } from "../hooks/useLanguage";
import Section from "./ui/Section";

const categories = [
  ["IA e dados", "AI and data", "Python, LLMs, RAG, Pandas, NumPy, OpenCV"],
  ["Backend e banco de dados", "Backend and databases", "FastAPI, SQL Server, SQLite"],
  ["Frontend", "Frontend", "React, TypeScript, Tailwind CSS"],
  ["Ferramentas", "Tools", "Docker, Git, Postman"],
];
function Technologies() {
  const { lang } = useLanguage();
  return <Section id="tecnologias" title={lang === "pt" ? "Tecnologias" : "Technologies"} index="03"><div className="border-t border-line md:grid md:grid-cols-[minmax(120px,210px)_minmax(0,1fr)] md:gap-x-7">{categories.map(([pt, en, skills]) => <Fragment key={pt}><div className="pt-4 font-mono text-xs font-semibold uppercase leading-[1.5] tracking-[.1em] text-accentSoft md:border-b md:border-line md:py-4">{lang === "pt" ? pt : en}</div><div className="border-b border-line pb-4 pt-1.5 text-[14.5px] leading-[1.5] text-muted md:py-4 md:pt-4">{skills}</div></Fragment>)}</div></Section>;
}
export default Technologies;

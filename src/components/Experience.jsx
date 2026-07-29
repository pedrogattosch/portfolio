import { Fragment } from "react";
import { useLanguage } from "../hooks/useLanguage";
import Section from "./ui/Section";
import { cardClass } from "./ui/styles";

const content = {
  pt: [
    { period: "Jul. 2026 —\nPresente", role: "Analista de IA e dados", company: "Inside Sistemas", items: ["Desenvolvimento de agentes de IA para automação de processos internos.", "Orquestração de fluxos multiagentes com Paperclip.", "Soluções com Python, FastAPI, LLMs e RAG para análise e automação.", "Desenvolvimento de mais de quatro dashboards, centralizados em um hub, para acompanhamento e análise de dados."] },
    { period: "Fev. 2026 —\nJun. 2026", role: "Suporte técnico", company: "Inside Sistemas", items: ["Suporte técnico ao ERP e análise de regras de negócio.", "Estruturação do fluxo que produziu mais de 250 artigos técnicos.", "Organização de conhecimento para clientes e equipes internas."] },
    { period: "Mar. 2024 —\nJan. 2025", role: "Soldado", company: "Exército Brasileiro", items: ["Suporte técnico e manutenção de equipamentos na seção de informática.", "Desenvolvimento de disciplina, responsabilidade e trabalho em equipe."] },
  ],
  en: [
    { period: "Jul. 2026 —\nPresent", role: "AI and data analyst", company: "Inside Sistemas", items: ["Development of AI agents to automate internal processes.", "Orchestration of multi-agent workflows with Paperclip.", "Development of Python, FastAPI, LLM, and RAG solutions for analysis and automation.", "Development of more than four dashboards, centralized in a hub for data monitoring and analysis."] },
    { period: "Feb. 2026 —\nJun. 2026", role: "Technical support", company: "Inside Sistemas", items: ["ERP technical support and business rule analysis.", "Structured the workflow that produced more than 250 technical articles.", "Organized knowledge resources for customers and internal teams."] },
    { period: "Mar. 2024 —\nJan. 2025", role: "Soldier", company: "Brazilian Army", items: ["Provided technical support and maintained equipment in the IT department.", "Developed discipline, accountability, and teamwork."] },
  ],
};
function Experience() {
  const { lang } = useLanguage();
  return <Section id="experiencia" title={lang === "pt" ? "Experiência" : "Experience"} index="03"><div className="grid grid-cols-[120px_minmax(0,1fr)] items-start gap-x-7 gap-y-5 md:grid-cols-[180px_minmax(0,1fr)]">{content[lang].map((item) => <Fragment key={item.role}><div className="whitespace-pre-line pt-5 font-mono text-xs font-medium leading-[1.7] text-faint">{item.period}</div><article className={`${cardClass} px-[22px] py-5`}><div className="flex flex-wrap items-baseline justify-between gap-4"><h3 className="text-lg font-semibold">{item.role}</h3><span className="font-mono text-xs font-medium text-faint">{item.company}</span></div><ul className="mt-3.5 list-disc pl-[18px] text-sm leading-[1.75] text-muted">{item.items.map((text) => <li key={text}>{text}</li>)}</ul></article></Fragment>)}</div></Section>;
}
export default Experience;

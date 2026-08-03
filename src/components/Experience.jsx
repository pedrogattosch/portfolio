import { Fragment } from "react";
import { useLanguage } from "../hooks/useLanguage";
import Section from "./ui/Section";
import { cardClass } from "./ui/styles";

const content = {
  pt: [
    { period: "Jul. 2026 —\nPresente", role: "Analista de IA e dados júnior", company: "Inside Sistemas", featured: true, items: ["Desenvolvimento de dashboards e de um hub interno de dados, centralizando informações antes dispersas e transformando-as em indicadores para apoio à gestão.", "Desenvolvimento de agentes para automação e acompanhamento de tickets, contribuindo para reduzir a mediana do tempo de resolução de 23h para 18h.", "Desenvolvimento de assistentes com IA generativa, integrados às bases de código dos produtos da Inside para auxiliar usuários na resolução de dúvidas e problemas dos sistemas."] },
    { period: "Fev. 2026 —\nJun. 2026", role: "Suporte técnico · estágio", company: "Inside Sistemas", items: ["Reestruturação da documentação técnica dos sistemas da Inside, com atualização de mais de 250 artigos, tornando a base de conhecimento mais atual e confiável."] },
    { period: "Mar. 2024 —\nJan. 2025", role: "Soldado", company: "Exército Brasileiro", items: ["Suporte técnico e manutenção de equipamentos e sistemas de informática, garantindo o funcionamento dos recursos tecnológicos da unidade militar."] },
  ],
  en: [
    { period: "Jul. 2026 —\nPresent", role: "Junior AI and data analyst", company: "Inside Sistemas", featured: true, items: ["Development of dashboards and an internal data hub, centralizing previously scattered information and turning it into indicators to support management decisions.", "Development of agents for ticket monitoring and process automation, contributing to a reduction in median resolution time from 23h to 18h.", "Development of generative AI assistants integrated with Inside product codebases to help users solve questions and system-related issues."] },
    { period: "Feb. 2026 —\nJun. 2026", role: "Technical support · internship", company: "Inside Sistemas", items: ["Restructured the technical documentation of Inside's systems, updating more than 250 articles and making the knowledge base more current and reliable."] },
    { period: "Mar. 2024 —\nJan. 2025", role: "Soldier", company: "Brazilian Army", items: ["Provided technical support and maintenance for IT equipment and systems, helping ensure the operation of the unit's technology resources."] },
  ],
};
function Experience() {
  const { lang } = useLanguage();
  return <Section id="experiencia" title={lang === "pt" ? "Experiência" : "Experience"} index="01"><div className="grid items-start gap-x-7 gap-y-6 md:grid-cols-[180px_minmax(0,1fr)] md:gap-y-5">{content[lang].map((item) => <Fragment key={item.role}><div className="whitespace-normal font-mono text-xs font-medium leading-[1.7] text-faint md:whitespace-pre-line md:pt-5">{item.period}</div><article className={`${cardClass} px-[22px] py-5 ${item.featured ? "border-[var(--accent-border)] bg-[var(--accent-bg)]" : ""}`}><div className="flex flex-col gap-0.5 md:flex-row md:flex-wrap md:items-baseline md:justify-between md:gap-4"><h3 className={`text-lg font-semibold ${item.featured ? "text-accentSoft" : ""}`}>{item.role}</h3><span className="font-mono text-xs font-medium text-faint">{item.company}</span></div><ul className="mt-3.5 list-disc pl-[18px] text-sm leading-[1.75] text-muted">{item.items.map((text) => <li key={text}>{text}</li>)}</ul></article></Fragment>)}</div></Section>;
}
export default Experience;

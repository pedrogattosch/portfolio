import { Fragment } from "react";
import { useLanguage } from "../hooks/useLanguage";
import Section from "./ui/Section";
import { cardClass } from "./ui/styles";

// eslint-disable-next-line react-refresh/only-export-components
export const experiences = {
  pt: [
    {
      company: "Inside Sistemas",
      role: "Analista de IA · júnior",
      start: "jul. 2026",
      end: "presente",
      location: "Toledo, PR",
      featured: true,
      items: [
        {
          text: "Desenvolvimento do Data Hub, portal interno com SSO e 5 módulos que reúne dados e rotinas dos times, como atividades e playbooks do CS, regras automáticas que criam tarefas e enviam e-mails e controle de acesso por tela.",
          highlights: ["5 módulos"],
        },
        {
          text: "Desenvolvimento de +5 agentes autônomos para automação e apoio ao suporte na central de atendimento, entre eles o ticket-watcher, que reduziu a mediana de resolução de chamados de 23 horas para 18 horas, o ticket-copilot, com proposta de resolução publicada em +3.000 chamados, e o ticket-resolve, com +50 ações públicas de resolução enviadas ao cliente com base no IA HUB.",
          highlights: [
            "+5 agentes autônomos",
            "23 horas para 18 horas",
            "+3.000 chamados",
            "+50 ações públicas",
          ],
        },
        {
          text: "Desenvolvimento do IA HUB, hub de chatbots internos com LLMs e RAG, que responde em linguagem natural com base no código e na documentação do produto, com +60 usuários ativos e +300 interações diárias.",
          highlights: ["+60 usuários ativos", "+300 interações diárias"],
        },
      ],
    },
    {
      company: "Inside Sistemas",
      role: "Analista de suporte · estágio",
      start: "fev. 2026",
      end: "jun. 2026",
      location: "Toledo, PR",
      items: [
        {
          text: "Reestruturação da documentação técnica dos sistemas da Inside, com organização e atenção a detalhes na atualização de conteúdo técnico, atualizando +250 artigos e tornando a base de conhecimento mais confiável.",
          highlights: ["+250 artigos"],
        },
      ],
    },
    {
      company: "Exército Brasileiro",
      hideOnResume: true,
      role: "Soldado",
      start: "mar. 2024",
      end: "jan. 2025",
      location: "Cascavel, PR",
      items: [
        {
          text: "Suporte técnico e manutenção de equipamentos e sistemas de informática, garantindo o funcionamento dos recursos tecnológicos da unidade militar.",
        },
      ],
    },
  ],
  en: [
    {
      company: "Inside Sistemas",
      role: "Junior AI Analyst",
      start: "Jul. 2026",
      end: "present",
      location: "Toledo, PR, Brazil",
      featured: true,
      items: [
        {
          text: "Developed Data Hub, an internal portal with SSO and 5 modules that brings together the teams' data and routines, such as CS activities and playbooks, automated rules that create tasks and send emails, and per-screen access control.",
          highlights: ["5 modules"],
        },
        {
          text: "Developed more than 5 AI agents for automation and support in the service desk, including ticket-watcher, which reduced the median ticket resolution time from 23 to 18 hours, and ticket-copilot, which published a proposed resolution on more than 3,000 tickets, and ticket-resolve, which has sent more than 50 public resolution replies to customers based on IA HUB.",
          highlights: [
            "more than 5 AI agents",
            "23 to 18 hours",
            "more than 3,000 tickets",
            "more than 50 public resolution replies",
          ],
        },
        {
          text: "Developed IA HUB, an internal chatbot hub with LLMs and RAG that answers natural-language questions based on the product's code and documentation, with more than 60 active users and more than 300 interactions per day.",
          highlights: [
            "more than 60 active users",
            "more than 300 interactions per day",
          ],
        },
      ],
    },
    {
      company: "Inside Sistemas",
      role: "Support Analyst Intern",
      start: "Feb. 2026",
      end: "Jun. 2026",
      location: "Toledo, PR, Brazil",
      items: [
        {
          text: "Restructured the technical documentation of Inside's systems, organizing and carefully updating technical content across more than 250 articles and making the knowledge base more reliable.",
          highlights: ["more than 250 articles"],
        },
      ],
    },
    {
      company: "Brazilian Army",
      hideOnResume: true,
      role: "Soldier",
      start: "Mar. 2024",
      end: "Jan. 2025",
      location: "Cascavel, PR, Brazil",
      items: [
        {
          text: "Provided technical support and maintenance for IT equipment and systems, helping ensure the operation of the unit's technology resources.",
        },
      ],
    },
  ],
};

const capitalize = (value) => value.charAt(0).toUpperCase() + value.slice(1);
const formatPeriod = ({ start, end }) =>
  `${capitalize(start)} -\n${capitalize(end)}`;

function Experience() {
  const { lang } = useLanguage();
  return (
    <Section
      id="experiencia"
      title={lang === "pt" ? "Experiência" : "Experience"}
      index="01"
    >
      <div className="grid items-start gap-x-7 gap-y-6 md:grid-cols-[180px_minmax(0,1fr)] md:gap-y-5">
        {experiences[lang].map((item) => (
          <Fragment key={item.role}>
            <div className="whitespace-normal font-mono text-xs font-medium leading-[1.7] text-faint md:whitespace-pre-line md:pt-5">
              {formatPeriod(item)}
            </div>
            <article
              className={`${cardClass} px-[22px] py-5 ${item.featured ? "border-[var(--accent-border)] bg-[var(--accent-bg)]" : ""}`}
            >
              <div className="flex flex-col gap-0.5 md:flex-row md:flex-wrap md:items-baseline md:justify-between md:gap-4">
                <h3
                  className={`text-lg font-semibold ${item.featured ? "text-accentSoft" : ""}`}
                >
                  {item.role}
                </h3>
                <span className="font-mono text-xs font-medium text-faint">
                  {item.company}
                </span>
              </div>
              <ul className="mt-3.5 list-disc pl-[18px] text-sm leading-[1.75] text-muted">
                {item.items.map(({ text }) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
            </article>
          </Fragment>
        ))}
      </div>
    </Section>
  );
}
export default Experience;

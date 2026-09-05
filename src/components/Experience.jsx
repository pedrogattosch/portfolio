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
          text: "Desenvolvimento de 6 dashboards com +10 painéis em um portal único com SSO e controle de acesso por time, centralizando dados antes dispersos.",
          highlights: ["6 dashboards", "+10 painéis"],
        },
        {
          text: "Desenvolvimento +5 agentes autônomos para automação e apoio ao suporte na central de atendimento, entre eles o ticket-watcher, que reduziu a mediana de resolução de chamados de 23h para 18h, e o ticket-copilot, com proposta de resolução publicada em +3.000 chamados.",
          highlights: [
            "+5 agentes autônomos",
            "23h para 18h",
            "+3.000 chamados",
          ],
        },
        {
          text: "Desenvolvimento de um hub de chatbots internos com LLMs e RAG, onde o usuário conversa em linguagem natural e recebe a resposta com base no código e na documentação do produto, integrados às bases de código e a artigos técnicos, com +60 usuários ativos e +300 interações diárias.",
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
      role: "Soldado",
      start: "mar. 2024",
      end: "jan. 2025",
      location: "Toledo, PR",
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
          text: "Developed 6 dashboards with more than 10 panels in a single portal with SSO and team-based access control, centralizing previously scattered data.",
          highlights: ["6 dashboards", "more than 10 panels"],
        },
        {
          text: "Developed more than 5 AI agents for automation and support in the service desk, including ticket-watcher, which reduced the median ticket resolution time from 23 to 18 hours, and ticket-copilot, which published a proposed resolution on more than 3,000 tickets.",
          highlights: [
            "more than 5 AI agents",
            "23 to 18 hours",
            "more than 3,000 tickets",
          ],
        },
        {
          text: "Developed an internal chatbot hub with LLMs and RAG, where users ask questions in natural language and get answers grounded in the product's code and documentation, integrated with code repositories and technical articles, with more than 60 active users and more than 300 interactions per day.",
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
      role: "Soldier",
      start: "Mar. 2024",
      end: "Jan. 2025",
      location: "Toledo, PR, Brazil",
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

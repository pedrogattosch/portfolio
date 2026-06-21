import { useLanguage } from "../hooks/useLanguage";
import GlassCard from "./ui/GlassCard";
import Section from "./ui/Section";

const companyTitleClass =
  "mb-7 text-xl font-semibold tracking-tight text-white sm:mb-9 sm:text-2xl";

const content = {
  pt: {
    titulo: "Experiência",
    experiencias: {
      principal: {
        empresa: "Inside Sistemas",
        etapas: [
          {
            cargo: "Analista de IA",
            periodo: "Jun. 2026 – Presente",
            descricao: [
              "Desenvolvimento de agentes de IA para automação de processos internos, reduzindo tarefas repetitivas e acelerando a análise de demandas.",
              "Orquestração de fluxos multiagentes com Paperclip, estruturando agentes especializados para atuar em diferentes etapas dos processos.",
              "Desenvolvimento de soluções com Python, FastAPI, LLMs e RAG para apoiar análise de tickets, integração com bases de conhecimento e automação de fluxos internos.",
            ],
          },
          {
            cargo: "Suporte técnico",
            periodo: "Fev. 2026 – Jun. 2026",
            descricao: [
              "Atuação no suporte técnico ao ERP, analisando demandas de clientes, funcionalidades do sistema e regras de negócio.",
              "Estruturação de fluxo de produção de artigos técnicos, contribuindo para a criação de mais de 250 artigos sobre funcionalidades do ERP.",
              "Organização e documentação de conhecimento técnico para apoiar clientes, usuários internos e processos de atendimento.",
            ],
          },
        ],
      },
      secundaria: {
        empresa: "Exército Brasileiro",
        cargo: "Soldado",
        periodo: "Mar. 2024 – Jan. 2025",
        descricao: [
          "Atuação na seção de informática, prestando suporte técnico e auxiliando na manutenção de equipamentos.",
          "Desenvolvimento de disciplina, responsabilidade, resiliência, comunicação e trabalho em equipe em ambiente com demandas sob pressão.",
        ],
      },
    },
  },
  en: {
    titulo: "Experience",
    experiencias: {
      principal: {
        empresa: "Inside Sistemas",
        etapas: [
          {
            cargo: "AI analyst",
            periodo: "Jun. 2026 – Present",
            descricao: [
              "Development of AI agents for internal process automation, reducing repetitive tasks and speeding up demand analysis.",
              "Orchestration of multi-agent workflows with Paperclip, structuring specialized agents to operate at different stages of internal processes.",
              "Development of solutions with Python, FastAPI, LLMs, and RAG to support ticket analysis, knowledge base integration, and internal workflow automation.",
            ],
          },
          {
            cargo: "Technical support",
            periodo: "Feb. 2026 – Jun. 2026",
            descricao: [
              "Worked in ERP technical support, analyzing client demands, system features, and business rules.",
              "Structured a technical article production workflow, contributing to the creation of more than 250 articles about ERP features.",
              "Organized and documented technical knowledge to support clients, internal users, and service processes.",
            ],
          },
        ],
      },
      secundaria: {
        empresa: "Brazilian Army",
        cargo: "Soldier",
        periodo: "Mar. 2024 – Jan. 2025",
        descricao: [
          "Worked in the IT section, providing technical support and helping with equipment maintenance.",
          "Developed discipline, responsibility, resilience, communication, and teamwork in an environment with pressure-driven demands.",
        ],
      },
    },
  },
};

function Experience() {
  const { lang } = useLanguage();
  const { principal, secundaria } = content[lang].experiencias;

  return (
    <Section id="experiencia" title={content[lang].titulo}>
      <div className="flex flex-col">
        <GlassCard
          hover
          as="article"
          className="p-6 sm:p-8"
        >
          <h3 className={companyTitleClass}>
            {principal.empresa}
          </h3>

          <div className="relative space-y-6 pl-7 sm:pl-10">
            {principal.etapas.map((etapa, index) => (
              <div
                key={`${etapa.cargo}-${etapa.periodo}`}
                className={`relative rounded-2xl border p-5 sm:p-6 ${
                  index === 0
                    ? "border-cyan-300/20 bg-cyan-300/[0.055] shadow-[0_14px_35px_rgba(6,182,212,0.06)]"
                    : "border-white/10 bg-slate-950/35"
                }`}
              >
                {index === 0 ? (
                  <span className="absolute -bottom-[60px] -left-[21px] top-9 w-px bg-cyan-300/50 sm:-left-8" />
                ) : null}
                <span
                  className={`absolute -left-[29px] top-7 z-10 h-4 w-4 rounded-full border-2 border-cyan-300 shadow-[0_0_0_5px_rgba(34,211,238,0.08)] sm:-left-10 ${
                    index === 0
                      ? "bg-cyan-300"
                      : "bg-[var(--timeline-dot-bg)]"
                  }`}
                />

                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <h4 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                    {etapa.cargo}
                  </h4>
                  <p className="shrink-0 text-sm font-semibold text-cyan-200">
                    {etapa.periodo}
                  </p>
                </div>

                <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-6 text-slate-300 marker:text-cyan-300 sm:text-[15px] sm:leading-7">
                  {etapa.descricao.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard
          hover
          as="article"
          className="p-6 sm:p-8"
          style={{ marginTop: "2.5rem" }}
        >
          <h3 className={companyTitleClass}>
            {secundaria.empresa}
          </h3>

          <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-5 sm:p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h4 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                {secundaria.cargo}
              </h4>
              <p className="shrink-0 text-sm font-semibold text-cyan-200">
                {secundaria.periodo}
              </p>
            </div>

            <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-6 text-slate-300 marker:text-cyan-300 sm:text-[15px] sm:leading-7">
              {secundaria.descricao.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </GlassCard>
      </div>
    </Section>
  );
}

export default Experience;

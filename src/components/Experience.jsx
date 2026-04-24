import { useLanguage } from "../hooks/useLanguage";
import GlassCard from "./ui/GlassCard";
import Section from "./ui/Section";
import { insetPanelClass } from "./ui/styles";

const content = {
  pt: {
    titulo: "Experiência",
    cargo: "Cargo",
    periodo: "Período",
    experiencias: [
      {
        empresa: "Inside Sistemas",
        cargo: "Estagiário",
        periodo: "Fev. de 2026 - Presente",
        descricao:
          "Atuo na produção, revisão e padronização de artigos técnicos sobre funcionalidades do software, contribuindo para a melhoria da documentação, apoio ao suporte e organização de conteúdos para base de conhecimento voltada à inteligência artificial.",
      },
      {
        empresa: "Exército Brasileiro",
        cargo: "Soldado",
        periodo: "Mar. de 2024 - Jan. de 2025",
        descricao:
          "Atuei na seção de informática, fornecendo suporte técnico e manutenção de equipamentos. Durante esse período, desenvolvi principalmente disciplina, responsabilidade, resiliência, comunicação e liderança, fortalecendo minha capacidade de trabalhar em equipe e lidar com demandas sob pressão.",
      },
    ],
  },
  en: {
    titulo: "Experience",
    cargo: "Role",
    periodo: "Period",
    experiencias: [
      {
        empresa: "Inside Sistemas",
        cargo: "Intern",
        periodo: "Feb. 2026 - Present",
        descricao:
          "I work on producing, reviewing, and standardizing technical articles about software features, contributing to better documentation, support enablement, and content organization for an AI-focused knowledge base.",
      },
      {
        empresa: "Brazilian Army",
        cargo: "Soldier",
        periodo: "Mar. 2024 - Jan. 2025",
        descricao:
          "I worked in the IT section, providing technical support and equipment maintenance. During this period, I developed discipline, responsibility, resilience, communication, and leadership, strengthening my ability to work as part of a team and handle pressure-driven demands.",
      },
    ],
  },
};

function Experience() {
  const { lang } = useLanguage();

  return (
    <Section id="experiencia" title={content[lang].titulo}>
      <div className="grid gap-5 lg:grid-cols-2">
        {content[lang].experiencias.map((experience) => (
          <GlassCard
            key={`${experience.empresa}-${experience.cargo}`}
            hover
            as="article"
            className="flex h-full flex-col p-6 sm:p-7"
          >
            <h3 className="text-2xl font-semibold tracking-tight text-white">
              {experience.empresa}
            </h3>

            <div className={`${insetPanelClass} mt-5 space-y-3`}>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                  {content[lang].cargo}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-100">
                  {experience.cargo}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                  {content[lang].periodo}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-100">
                  {experience.periodo}
                </p>
              </div>
            </div>

            <p className="section-copy mt-5">{experience.descricao}</p>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}

export default Experience;

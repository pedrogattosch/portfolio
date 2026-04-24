import { useLanguage } from "../hooks/useLanguage";
import GlassCard from "./ui/GlassCard";
import Section from "./ui/Section";
import TagList from "./ui/TagList";
import {
  accentBadgeCompactClass,
  compactTechTagClass,
  primaryActionClass,
  secondaryActionClass,
  techTagClass,
} from "./ui/styles";

const content = {
  pt: {
    titulo: "Projetos",
    botao: "Visualizar o projeto",
    destaque: "Projeto principal",
    projetos: [
      {
        titulo: "TaskFlow",
        descricao:
          "Aplicação full stack de gerenciamento de tarefas com arquitetura em camadas, autenticação JWT, API em ASP.NET Core, testes automatizados e interface web integrada. É o projeto mais alinhado ao meu foco em back-end e ecossistema .NET.",
        link: "https://github.com/pedrogattosch/TaskFlow",
        tecnologias: [
          ".NET",
          "ASP.NET Core",
          "C#",
          "SQL Server",
          "Entity Framework Core",
          "JWT",
          "React",
          "TypeScript",
          "Docker",
          "xUnit",
        ],
        principal: true,
      },
      {
        titulo: "Aplicativo Paróquia Menino Deus",
        descricao:
          "Aplicativo para a comunidade da Paróquia Menino Deus acompanhar notícias, eventos, horários de missas, liturgia diária e outros serviços em uma experiência mobile estruturada.",
        link: "https://github.com/pedrogattosch/paroquia-app",
        tecnologias: ["Flutter", "Dart"],
      },
      {
        titulo: "Modelagem do crescimento populacional de Toledo-PR",
        descricao:
          "Estudo de modelagem matemática e análise de dados para projeção populacional de Toledo-PR com equação logística de Verhulst, comparando dados do IBGE e do SIDRA.",
        link: "https://github.com/pedrogattosch/populacao-toledo",
        tecnologias: ["Python", "Pandas", "NumPy", "Matplotlib", "SciPy"],
      },
      {
        titulo: "Controle de Fluxo - Usina do Conhecimento",
        descricao:
          "Sistema de contagem de pessoas com visão computacional no Raspberry Pi, com captura por câmera, armazenamento local e visualização em dashboard em tempo real.",
        link: "https://github.com/pedrogattosch/usina",
        tecnologias: ["Python", "OpenCV", "Raspberry Pi", "Picamera2"],
      },
    ],
  },
  en: {
    titulo: "Projects",
    botao: "View project",
    destaque: "Main project",
    projetos: [
      {
        titulo: "TaskFlow",
        descricao:
          "Full stack task management application with layered architecture, JWT authentication, ASP.NET Core API, automated tests, and an integrated web interface. It is the project most aligned with my back-end and .NET focus.",
        link: "https://github.com/pedrogattosch/TaskFlow",
        tecnologias: [
          ".NET 10",
          "ASP.NET Core",
          "C#",
          "SQL Server",
          "Entity Framework Core",
          "JWT",
          "React",
          "TypeScript",
          "Docker",
          "xUnit",
        ],
        principal: true,
      },
      {
        titulo: "Menino Deus Parish App",
        descricao:
          "Application built for the Menino Deus Parish community to follow news, events, mass schedules, daily liturgy, and other services through a structured mobile experience.",
        link: "https://github.com/pedrogattosch/paroquia-app",
        tecnologias: ["Flutter", "Dart"],
      },
      {
        titulo: "Toledo-PR population growth modeling",
        descricao:
          "Mathematical modeling and data analysis study for population growth projections in Toledo-PR using the Verhulst logistic equation and comparing IBGE and SIDRA data sources.",
        link: "https://github.com/pedrogattosch/populacao-toledo",
        tecnologias: ["Python", "Pandas", "NumPy", "Matplotlib", "SciPy"],
      },
      {
        titulo: "Flow Control - Usina do Conhecimento",
        descricao:
          "People counting system using computer vision on Raspberry Pi, combining camera capture, local data storage, and real-time dashboard visualization.",
        link: "https://github.com/pedrogattosch/usina",
        tecnologias: ["Python", "OpenCV", "Raspberry Pi", "Picamera2"],
      },
    ],
  },
};

function Projects() {
  const { lang } = useLanguage();
  const featuredProject = content[lang].projetos.find((project) => project.principal);
  const secondaryProjects = content[lang].projetos.filter((project) => !project.principal);

  return (
    <Section id="projetos" title={content[lang].titulo}>
      {featuredProject ? (
        <GlassCard hover className="overflow-hidden p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.9fr)] lg:gap-8">
            <div>
              <div className={accentBadgeCompactClass}>{content[lang].destaque}</div>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                {featuredProject.titulo}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                {featuredProject.descricao}
              </p>
              <a
                href={featuredProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${primaryActionClass} mt-6 w-fit`}
              >
                {content[lang].botao}
              </a>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-5">
              <TagList
                items={featuredProject.tecnologias}
                className="mt-4 flex flex-wrap gap-2.5"
                itemClassName={techTagClass}
              />
            </div>
          </div>
        </GlassCard>
      ) : null}

      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        {secondaryProjects.map((project) => (
          <GlassCard
            key={project.titulo}
            hover
            className="flex h-full flex-col justify-between p-6 sm:p-7"
          >
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                {project.titulo}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {project.descricao}
              </p>
              <TagList
                items={project.tecnologias}
                className="mt-5 flex flex-wrap gap-2"
                itemClassName={compactTechTagClass}
              />
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${secondaryActionClass} mt-8 w-fit`}
            >
              {content[lang].botao}
            </a>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}

export default Projects;

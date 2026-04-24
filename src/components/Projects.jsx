import React from "react";
import { useLanguage } from "../hooks/useLanguage";

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
        titulo: "Aplicativo Paróquia Menino Deus",
        descricao:
          "Aplicativo para a comunidade da Paróquia Menino Deus acompanhar notícias, eventos, horários de missas, liturgia diária e outros serviços em uma experiência mobile estruturada.",
        link: "https://github.com/pedrogattosch/paroquia-app",
        tecnologias: [
          "Flutter",
          "Dart",
        ],
      },
      {
        titulo: "Modelagem do crescimento populacional de Toledo-PR",
        descricao:
          "Estudo de modelagem matemática e análise de dados para projeção populacional de Toledo-PR com equação logística de Verhulst, comparando dados do IBGE e do SIDRA.",
        link: "https://github.com/pedrogattosch/populacao-toledo",
        tecnologias: [
          "Python",
          "Pandas",
          "NumPy",
          "Matplotlib",
          "SciPy",
        ],
      },
      {
        titulo: "Controle de Fluxo - Usina do Conhecimento",
        descricao:
          "Sistema de contagem de pessoas com visão computacional no Raspberry Pi, com captura por câmera, armazenamento local e visualização em dashboard em tempo real.",
        link: "https://github.com/pedrogattosch/usina",
        tecnologias: [
          "Python",
          "OpenCV",
          "Raspberry Pi",
          "Picamera2",
        ],
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
        tecnologias: [
          "Flutter",
          "Dart",
        ],
      },
      {
        titulo: "Toledo-PR population growth modeling",
        descricao:
          "Mathematical modeling and data analysis study for population growth projections in Toledo-PR using the Verhulst logistic equation and comparing IBGE and SIDRA data sources.",
        link: "https://github.com/pedrogattosch/populacao-toledo",
        tecnologias: [
          "Python",
          "Pandas",
          "NumPy",
          "Matplotlib",
          "SciPy",
        ],
      },
      {
        titulo: "Flow Control - Usina do Conhecimento",
        descricao:
          "People counting system using computer vision on Raspberry Pi, combining camera capture, local data storage, and real-time dashboard visualization.",
        link: "https://github.com/pedrogattosch/usina",
        tecnologias: [
          "Python",
          "OpenCV",
          "Raspberry Pi",
          "Picamera2",
        ],
      },
    ],
  },
};

function Projects() {
  const { lang } = useLanguage();
  const featuredProject = content[lang].projetos.find((projeto) => projeto.principal);
  const secondaryProjects = content[lang].projetos.filter((projeto) => !projeto.principal);

  return (
    <section id="projetos">
      <div className="section-panel px-6 py-8 sm:px-8 sm:py-10">
        <h2 className="section-heading">{content[lang].titulo}</h2>

        {featuredProject && (
          <div className="glass-card glass-card-hover mt-8 overflow-hidden p-6 sm:p-8">
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.9fr)] lg:gap-8">
              <div>
                <div className="inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                  {content[lang].destaque}
                </div>
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
                  className="mt-6 inline-flex w-fit items-center rounded-full border border-cyan-400/25 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-50 transition duration-300 hover:border-cyan-300/40 hover:bg-cyan-400/15"
                >
                  {content[lang].botao}
                </a>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">
                  Stack
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {featuredProject.tecnologias.map((tecnologia) => (
                    <span
                      key={tecnologia}
                      className="rounded-xl border border-slate-700/70 bg-slate-900/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-300"
                    >
                      {tecnologia}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 grid gap-6 xl:grid-cols-3">
          {secondaryProjects.map((projeto) => (
            <div
              key={projeto.titulo}
              className="glass-card glass-card-hover flex h-full flex-col justify-between p-6 sm:p-7"
            >
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  {projeto.titulo}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {projeto.descricao}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {projeto.tecnologias.map((tecnologia) => (
                    <span
                      key={tecnologia}
                      className="rounded-xl border border-slate-700/70 bg-slate-900/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-300"
                    >
                      {tecnologia}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={projeto.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 transition duration-300 hover:border-cyan-400/35 hover:bg-white/10"
              >
                {content[lang].botao}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

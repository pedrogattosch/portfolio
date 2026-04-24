import React from "react";
import { useLanguage } from "../hooks/useLanguage";

const content = {
  pt: {
    titulo: "Projetos",
    projetos: [
      {
        titulo: "⛪ Aplicativo Paróquia Menino Deus",
        descricao:
          "Este é um aplicativo desenvolvido para que a comunidade da Paróquia Menino Deus consiga acompanhar as notícias, eventos, horários das missas, e tenha acesso à liturgia diária e outros serviços.",
        link: "https://github.com/pedrogattosch/paroquia-app",
        botao: "Visualizar o projeto",
      },
    ],
  },
  en: {
    titulo: "Projects",
    projetos: [
      {
        titulo: "⛪ Menino Deus Parish App",
        descricao:
          "This is an application developed so that the Menino Deus Parish community can follow news, events, mass schedules, and access the daily liturgy and other services.",
        link: "https://github.com/pedrogattosch/cat-dog",
        botao: "View project",
      },
    ],
  },
};

function Projects() {
  const { lang } = useLanguage();

  return (
    <section id="projetos">
      <div className="section-panel px-6 py-8 sm:px-8 sm:py-10">
        <h2 className="section-heading">{content[lang].titulo}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {content[lang].projetos.map((projeto, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover flex h-full flex-col justify-between p-6 sm:p-7"
            >
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  {projeto.titulo}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {projeto.descricao}
                </p>
              </div>
              <a
                href={projeto.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 transition duration-300 hover:border-cyan-400/35 hover:bg-white/10"
              >
                {projeto.botao}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

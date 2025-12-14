import React from "react";
import { useLanguage } from "../hooks/useLanguage";

const content = {
  pt: {
    titulo: "Projetos",
    projetos: [
      {
        titulo: "⛪ Aplicativo Paróquia Menino Deus",
        descricao:
          "Este é um aplicativo desenvolvido para que a comunidade da Paróquia Menino Deus consiga acompanhar as notícias, eventos, horários das missas, e tenha acesso à liturgia diária e outros serviços. O aplicativo foi projetado para rodar em diversas plataformas, incluindo dispositivos móveis.",
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
          "This is an application developed so that the Menino Deus Parish community can follow news, events, mass schedules, and access the daily liturgy and other services. The app was designed to run on multiple platforms, including mobile devices.",
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
      <div className="container m-auto px-5 py-5">
        <h2 className="text-xl font-semibold">{content[lang].titulo}</h2>
        <div className="flex flex-col sm:flex-row gap-10 mt-10">
          {content[lang].projetos.map((projeto, idx) => (
            <div
              key={idx}
              className="border border-gray-500 rounded-md p-5 flex-1"
            >
              <h3 className="text-2xl font-semibold mt-5">{projeto.titulo}</h3>
              <p className="text-gray-400 text-sm mt-5">{projeto.descricao}</p>
              <a
                href={projeto.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 underline hover:scale-105 transition-transform inline-block"
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

import React from "react";
import { useLanguage } from "../hooks/useLanguage";

const content = {
  pt: {
    titulo: "Projetos",
    projetos: [
      {
        titulo: "🐱🐶 Classificador de gatos e cachorros",
        descricao:
          "Este projeto é uma solução de um exercício de Machine Learning da freeCodeCamp. O objetivo é treinar um modelo que identifica se uma imagem contém um gato ou um cachorro, utilizando redes neurais convolucionais.",
        link: "https://github.com/pedrogattosch/cat-dog",
        botao: "Visualizar o projeto",
      },
      {
        titulo: "✊🖐️✌️ Pedra, papel e tesoura",
        descricao:
          "Este projeto é uma solução para um exercício de Machine Learning da freeCodeCamp. O objetivo é criar um jogador inteligente que consiga vencer adversários baseados em padrões com pelo menos 60% de aproveitamento no jogo de pedra, papel e tesoura.",
        link: "https://github.com/pedrogattosch/rock-paper-scissors",
        botao: "Visualizar o projeto",
      },
    ],
  },
  en: {
    titulo: "Projects",
    projetos: [
      {
        titulo: "🐱🐶 Cat and dog classifier",
        descricao:
          "This project is a solution to a freeCodeCamp Machine Learning exercise. The goal is to train a model that identifies whether an image contains a cat or a dog, using convolutional neural networks.",
        link: "https://github.com/pedrogattosch/cat-dog",
        botao: "View project",
      },
      {
        titulo: "✊🖐️✌️ Rock, paper and scissors",
        descricao:
          "This project is a solution to a freeCodeCamp Machine Learning exercise. The goal is to create an intelligent player that can defeat pattern-based opponents with at least a 60% win rate in the game of rock, paper and scissors.",
        link: "https://github.com/pedrogattosch/rock-paper-scissors",
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

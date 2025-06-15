import React from "react";

function Projects() {
  return (
    <section id="projetos">
      <div className="container m-auto px-5 py-5">
        <h2 className="text-xl font-semibold">Projetos</h2>
        <div className="flex flex-col sm:flex-row gap-10 mt-10">
          <div className="border border-gray-500 rounded-md p-5 flex-1">
            <h3 className="text-2xl font-semibold mt-5">
              Classificador de gatos e cachorros
            </h3>
            <p className="text-gray-400 text-sm mt-5">
              Este projeto é uma solução de um exercício de Machine Learning da
              freeCodeCamp. O objetivo é treinar um modelo que identifica se uma
              imagem contém um gato ou um cachorro, utilizando redes neurais
              convolucionais.
            </p>
            <a
              href="https://github.com/pedrogattosch/cat-dog"
              target="_blank"
              className="mt-5 underline hover:scale-105 transition-transform inline-block"
            >
              Visualizar o projeto
            </a>
          </div>
          <div className="border border-gray-500 rounded-md p-5 flex-1">
            <h3 className="text-2xl font-semibold mt-5">
              Pedra, papel e tesoura
            </h3>
            <p className="text-gray-400 text-sm mt-5">
              Este projeto é uma solução para um exercício de Machine Learning
              da freeCodeCamp. O objetivo é criar um jogador inteligente que
              consiga vencer adversários baseados em padrões com pelo menos 60%
              de aproveitamento no jogo de pedra, papel e tesoura.
            </p>
            <a
              href="https://github.com/pedrogattosch/rock-paper-scissors"
              target="_blank"
              className="mt-5 underline hover:scale-105 transition-transform inline-block"
            >
              Visualizar o projeto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

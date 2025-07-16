import React from "react";

import LinkedIn from "../assets/icons/linkedin.svg";
import GitHub from "../assets/icons/github.svg";
import Download from "../assets/icons/download.svg";
import { useLanguage } from "../hooks/useLanguage";

const content = {
  pt: {
    titulo: "Olá, Mundo!",
    descricao:
      "Me chamo Pedro Miguel, tenho 20 anos e sou estudante de Engenharia de Computação na UTFPR, apaixonado por tecnologia e desenvolvimento de software. Estou sempre em busca de novos aprendizados e constantemente envolvido em projetos que me desafiam e contribuem para meu crescimento profissional e pessoal.",
    baixarCV: "Baixar CV",
  },
  en: {
    titulo: "Hello, World!",
    descricao:
      "My name is Pedro Miguel, I’m 20 years old and a Computer Engineering student at UTFPR. I’m passionate about technology and software development, always seeking new knowledge and constantly involved in projects that challenge me and contribute to my professional and personal growth.",
    baixarCV: "Download CV",
  },
};

function Introduction({ menuOpen }) {
  const { lang } = useLanguage();

  return (
    <section>
      <div className="container m-auto px-5 py-10 flex gap-6">
        <div className="max-w-xl">
          <h1 className="font-bold text-5xl">{content[lang].titulo}</h1>
          <div
            className={`flex gap-2 mt-5 transition-opacity duration-300 ${
              menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <a
              href="https://www.linkedin.com/in/pedrogattosch/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-3 py-3 flex border rounded-full hover:scale-105 transition-transform">
                <img src={LinkedIn} className="w-6 invert" alt="LinkedIn" />
              </button>
            </a>
            <a
              href="https://github.com/pedrogattosch"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-3 py-3 flex border rounded-full hover:scale-105 transition-transform">
                <img src={GitHub} className="w-6 invert" alt="GitHub" />
              </button>
            </a>
            <a
              href="Currículo.docx"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-3 py-3 flex border rounded-full hover:scale-105 transition-transform">
                <img
                  src={Download}
                  className="w-6 mr-1 invert"
                  alt="Download"
                />
                {content[lang].baixarCV}
              </button>
            </a>
          </div>
          <p className="mt-4">{content[lang].descricao}</p>
        </div>
      </div>
    </section>
  );
}

export default Introduction;

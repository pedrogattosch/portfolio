import React from "react";

import LinkedIn from "../assets/icons/linkedin.svg";
import GitHub from "../assets/icons/github.svg";
import Download from "../assets/icons/download.svg";
import { useLanguage } from "../hooks/useLanguage";

const content = {
  pt: {
    titulo: "Olá, Mundo!",
    descricao:
      "Me chamo Pedro Miguel, tenho 19 anos e sou estudante de Engenharia de Computação na UTFPR. Tenho experiência em desenvolvimento front-end e conhecimento sólido em Python. Concluí cursos de Machine Learning e de computação em nuvem com Microsoft Azure, e possuo certificações na área. Também tenho habilidades em manutenção de hardware e software, redes e suporte técnico. Atualmente, estou focado na área de análise e ciência de dados, buscando constantemente novos desafios para aplicar tecnologia de forma inovadora e orientada por dados.",
    baixarCV: "Baixar CV",
  },
  en: {
    titulo: "Hello, World!",
    descricao:
      "My name is Pedro Miguel, I’m 19 years old and a Computer Engineering student at UTFPR. I have experience in front-end development and strong proficiency in Python. I’ve completed courses in Machine Learning and Microsoft Azure cloud computing, and I hold certifications in the field. I also have skills in hardware and software maintenance, networking, and technical support. Currently, I'm focusing on data analysis and data science, always seeking new challenges to apply technology in innovative, data-driven ways.",
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

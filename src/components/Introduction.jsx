import React from "react";

import LinkedIn from "../assets/icons/linkedin.svg";
import GitHub from "../assets/icons/github.svg";
import Download from "../assets/icons/download.svg";
import Foto from "../assets/images/foto-perfil.png";
import { useLanguage } from "../hooks/useLanguage";

const content = {
  pt: {
    titulo: "Olá, Mundo!",
    descricao:
      "Sou o Pedro Miguel, estudante de Engenharia de Computação na UTFPR e um apaixonado por tecnologia. Atualmente, divido minha rotina entre o estágio na Inside Sistemas e meus projetos como freelance na Landingfy. No dia a dia, uso minha organização, gestão de tempo e foco em resolução de problemas para desenvolver projetos, transitando entre o desenvolvimento web e mobile.",
    baixarCV: "Baixar CV",
  },
  en: {
    titulo: "Hello, World!",
    descricao:
      "I am Pedro Miguel, a Computer Engineering student at UTFPR and passionate about technology. Currently, I balance my routine between my internship at Inside Sistemas and my freelance projects at Landingfy. On a daily basis, I use my organization, time management, and focus on problem-solving to develop projects, working across both web and mobile development.",
    baixarCV: "Download CV",
  },
};

function Introduction({ menuOpen }) {
  const { lang } = useLanguage();

  return (
    <section>
      <div className="container m-auto px-5 py-10 flex flex-col sm:flex-row gap-6">
        <img
          src={Foto}
          alt="Foto de perfil"
          className="w-60 h-60 rounded-full border object-cover"
        />
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

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
      "Sou o Pedro Miguel, estudante de Engenharia de Computação na UTFPR. Atualmente na Inside Sistemas, atuo com foco na análise e documentação de funcionalidades do software. Em paralelo, dedico meus estudos ao ecossistema .NET, aplicando a base teórica da engenharia na construção de soluções robustas. Possuo também forte base em Python, análise de dados e visão computacional.",
    baixarCV: "Baixar CV",
  },
  en: {
    titulo: "Hello, World!",
    descricao:
      "I am Pedro Miguel, a Computer Engineering student at UTFPR. Currently, at Inside Sistemas, I focus on the analysis and documentation of software features. Parallel to my professional role, I am deeply invested in mastering the .NET ecosystem, applying my engineering background to build robust, scalable solutions. I also have a strong foundation in Python, data analysis, and computer vision.",
    baixarCV: "Download CV",
  },
};

function Introduction({ menuOpen }) {
  const { lang } = useLanguage();
  const iconButtonClass = "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 shadow-[0_12px_30px_rgba(2,6,23,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/35 hover:bg-white/10";

  return (
    <section>
      <div className="section-panel overflow-hidden px-6 py-10 sm:px-8 sm:py-12 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,360px)]">
          <div className="order-2 lg:order-1">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {content[lang].titulo}
            </h1>
            <p className="section-copy mt-6 max-w-3xl text-base sm:text-lg">
              {content[lang].descricao}
            </p>
            <div
              className={`mt-8 flex flex-wrap gap-3 transition-opacity duration-300 ${
                menuOpen ? "pointer-events-none opacity-0" : "opacity-100"
              }`}
            >
              <a
                href="https://www.linkedin.com/in/pedrogattosch/"
                target="_blank"
                rel="noopener noreferrer"
                className={iconButtonClass}
              >
                <img src={LinkedIn} className="w-5 invert" alt="LinkedIn" />
              </a>
              <a
                href="https://github.com/pedrogattosch"
                target="_blank"
                rel="noopener noreferrer"
                className={iconButtonClass}
              >
                <img src={GitHub} className="w-5 invert" alt="GitHub" />
              </a>
              <a
                href="Currículo.docx"
                download
                target="_blank"
                rel="noopener noreferrer"
                className={`${iconButtonClass} bg-cyan-400/10 text-cyan-50`}
              >
                <img
                  src={Download}
                  className="w-5 invert"
                  alt="Download"
                />
                {content[lang].baixarCV}
              </a>
            </div>
          </div>
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/25 via-sky-400/10 to-transparent blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.05] p-3 shadow-[0_25px_80px_rgba(2,6,23,0.55)]">
                <img
                  src={Foto}
                  alt="Foto de perfil"
                  className="h-72 w-72 rounded-[1.5rem] object-cover object-top sm:h-80 sm:w-80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;

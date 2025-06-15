import React from "react";
import { Link } from "react-router-dom";
import useToggleMenu from "../hooks/toggleMenu";
import LanguageSwitcher from "../hooks/languagueSwitcher";
import { useLanguage } from "../hooks/useLanguage";

const content = {
  pt: {
    projetos: "Projetos",
    certificacoes: "Certificações",
    habilidades: "Habilidades",
    sobre: "Sobre mim",
    contato: "Contato",
    fechar: "Fechar"
  },
  en: {
    projetos: "Projects",
    certificacoes: "Certifications",
    habilidades: "Skills",
    sobre: "About me",
    contato: "Contact",
    fechar: "Close"
  }
};

function Header() {
  const { menuOpen, toggleMenu } = useToggleMenu();
  const { lang } = useLanguage();

  return (
    <header>
      <div className="container m-auto px-5 py-5">
        <div className="flex justify-between items-center gap-2 sm:hidden">
          <button
            className="sm:hidden text-gray-400 hover:text-white hover:underline transition-colors duration-300"
            onClick={toggleMenu}
          >
            {menuOpen ? content[lang].fechar : "Menu"}
          </button>
          <LanguageSwitcher/>
        </div>
        <nav
          className={`overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-96" : "max-h-0"
          } sm:max-h-full sm:block`}
        >
          <ul className="flex flex-col sm:flex-row gap-5 p-5 sm:p-0">
            <li>
              <a
                href="#projetos"
                className="px-4 py-2 text-gray-400 hover:text-white hover:underline transition-colors duration-300"
                onClick={() => menuOpen && toggleMenu()}
              >
                {content[lang].projetos}
              </a>
            </li>
            <li>
              <a
                href="#certificacoes"
                className="px-4 py-2 text-gray-400 hover:text-white hover:underline transition-colors duration-300"
                onClick={() => menuOpen && toggleMenu()}
              >
                {content[lang].certificacoes}
              </a>
            </li>
            <li>
              <a
                href="#habilidades"
                className="px-4 py-2 text-gray-400 hover:text-white hover:underline transition-colors duration-300"
                onClick={() => menuOpen && toggleMenu()}
              >
                {content[lang].habilidades}
              </a>
            </li>
            <li>
              <a
                href="#sobre-mim"
                className="px-4 py-2 text-gray-400 hover:text-white hover:underline transition-colors duration-300"
                onClick={() => menuOpen && toggleMenu()}
              >
                {content[lang].sobre}
              </a>
            </li>
            <li>
              <Link
                to="/contato"
                className="px-4 py-2 text-gray-400 hover:text-white hover:underline transition-colors duration-300"
                onClick={() => menuOpen && toggleMenu()}
              >
                {content[lang].contato}
              </Link>
            </li>
            <li className="hidden sm:block">
              <LanguageSwitcher/>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
import React from "react";
import { Link } from "react-router-dom";
import useToggleMenu from "../hooks/toggleMenu";
import LanguageSwitcher from "../hooks/languagueSwitcher";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "../hooks/useLanguage";

const content = {
  pt: {
    projetos: "Projetos",
    certificacoes: "Certificações",
    habilidades: "Habilidades",
    sobre: "Sobre mim",
    blog: "Blog",
    contato: "Contato",
    fechar: "Fechar"
  },
  en: {
    projetos: "Projects",
    certificacoes: "Certifications",
    habilidades: "Skills",
    sobre: "About me",
    blog: "Blog",
    contato: "Contact",
    fechar: "Close"
  }
};

function Header() {
  const { menuOpen, toggleMenu } = useToggleMenu();
  const { lang } = useLanguage();

  const navItemClass = "rounded-full px-4 py-2 text-sm text-slate-300 transition duration-300 hover:bg-white/8 hover:text-white";
  const controlWrapperClass = "rounded-full border border-white/10 bg-white/5 px-3 py-2";

  return (
    <header className="sticky top-0 z-30 py-4 sm:py-6">
      <div className="section-panel px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between gap-4 sm:hidden">
          <button
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition duration-300 hover:border-cyan-400/40 hover:text-white"
            onClick={toggleMenu}
          >
            {menuOpen ? content[lang].fechar : "Menu"}
          </button>
          <div className="flex items-center gap-2">
            <div className={controlWrapperClass}>
              <ThemeToggle />
            </div>
            <div className={controlWrapperClass}>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
        <nav
          className={`overflow-hidden transition-all duration-300 ${
            menuOpen ? "mt-4 max-h-96 opacity-100" : "max-h-0 opacity-0"
          } sm:mt-0 sm:max-h-full sm:opacity-100`}
        >
          <ul className="flex flex-col gap-2 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-3 sm:pt-0">
            <li>
              <a
                href="#projetos"
                className={navItemClass}
                onClick={() => menuOpen && toggleMenu()}
              >
                {content[lang].projetos}
              </a>
            </li>
            <li>
              <a
                href="#certificacoes"
                className={navItemClass}
                onClick={() => menuOpen && toggleMenu()}
              >
                {content[lang].certificacoes}
              </a>
            </li>
            <li>
              <a
                href="#habilidades"
                className={navItemClass}
                onClick={() => menuOpen && toggleMenu()}
              >
                {content[lang].habilidades}
              </a>
            </li>
            <li>
              <a
                href="#sobre-mim"
                className={navItemClass}
                onClick={() => menuOpen && toggleMenu()}
              >
                {content[lang].sobre}
              </a>
            </li>
            <li>
              <a
                href="https://pedrogattosch.hashnode.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className={navItemClass}
                onClick={() => menuOpen && toggleMenu()}
              >
                {content[lang].blog}
              </a>
            </li>
            <li>
              <Link
                to="/contato"
                className={`${navItemClass} inline-flex items-center border border-cyan-400/20 bg-cyan-400/10 text-cyan-100 hover:border-cyan-300/40 hover:bg-cyan-400/15`}
                onClick={() => menuOpen && toggleMenu()}
              >
                {content[lang].contato}
              </Link>
            </li>
            <li className="hidden sm:block">
              <div className="flex items-center gap-2">
                <div className={controlWrapperClass}>
                  <ThemeToggle />
                </div>
                <div className={controlWrapperClass}>
                  <LanguageSwitcher />
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import useToggleMenu from "../hooks/toggleMenu";

function Header() {
  const { menuOpen, toggleMenu } = useToggleMenu();

  return (
    <header>
      <div className="container m-auto px-5 py-5">
        <div className="flex justify-between items-center">
          <button
            className="sm:hidden text-gray-400 hover:text-white hover:underline transition-colors duration-300"
            onClick={toggleMenu}
          >
            {menuOpen ? "Fechar" : "Menu"}
          </button>
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
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#habilidades"
                className="px-4 py-2 text-gray-400 hover:text-white hover:underline transition-colors duration-300"
                onClick={() => menuOpen && toggleMenu()}
              >
                Habilidades
              </a>
            </li>
            <li>
              <a
                href="#sobre-mim"
                className="px-4 py-2 text-gray-400 hover:text-white hover:underline transition-colors duration-300"
                onClick={() => menuOpen && toggleMenu()}
              >
                Sobre-mim
              </a>
            </li>
            <li>
              <Link
                to="/contato"
                className="px-4 py-2 text-gray-400 hover:text-white hover:underline transition-colors duration-300"
                onClick={() => menuOpen && toggleMenu()}
              >
                Entrar em contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
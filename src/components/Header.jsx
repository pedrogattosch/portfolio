import React from "react";
import { Link } from "react-router-dom"; 

function Header() {
  return (
    <header>
      <div className='container m-auto px-5 py-5'>
        <div className='flex justify-between items-center'>
          <div>
            <ul className='flex gap-1'>
              <li>  
                <a href="#projetos" className='px-4 py-2 rounded-lg text-gray-400 hover:bg-zinc-800 hover:text-white transition-colors duration-300'>Projetos</a>
              </li>
              <li>
                <a href="#tecnologias" className='px-4 py-2 rounded-lg text-gray-400 hover:bg-zinc-800 hover:text-white transition-colors duration-300'>Tecnologias</a>
              </li>
              <li>
                <a href="#sobre-mim" className='px-4 py-2 rounded-lg text-gray-400 hover:bg-zinc-800 hover:text-white transition-colors duration-300'>Sobre mim</a>
              </li>
            </ul>
          </div>
          <div>
            <Link to="/contato">
              <button className='sm:mr-10 px-4 py-2 text-white underline hover:scale-105 transition-transform'>
                Entrar em contato
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
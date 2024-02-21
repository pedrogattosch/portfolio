import React from "react";

import LinkedIn from "../assets/icons/linkedin.svg"
import GitHub from "../assets/icons/github.svg"
import Download from "../assets/icons/download.svg"

function Introduction() {
  return (
    <section>
      <div className='container m-auto px-5 py-10 flex gap-6'>
        <div className='max-w-xl'>
          <h1 className='font-semibold text-4xl'>Olá, eu sou Pedro Miguel</h1>
          <h1 className='font-black text-4xl mt-1'>Desenvolvedor Front-End</h1>
          <div className='flex gap-2 mt-5'>
            <a href="https://www.linkedin.com/in/pedrogattosch/" target='_blank'>                 
              <button className='px-3 py-3 flex border rounded-full hover:scale-105 transition-transform'>
                <img src={LinkedIn} className='w-6 invert'/>
              </button>
            </a> 
            <a href="https://github.com/pedrogattosch" target='_blank'>
              <button className='px-3 py-3 flex border rounded-full hover:scale-105 transition-transform'>
                <img src={GitHub} className='w-6 invert'/>
              </button>
            </a>
            <a href="Currículo.docx" download target='_blank'>
              <button className='px-3 py-3 flex border rounded-full hover:scale-105 transition-transform'>
                <img src={Download} className='w-6 mr-1 invert'/>
                Baixar o currículo
              </button>
            </a>
          </div>
          <p className='mt-4 text-gray-400'>Sou um apaixonado estudante de engenharia de computação nascido em 2005 com um olhar voltado para o futuro da tecnologia. Atualmente, estou imerso no universo da programação front-end, buscando constantemente aprimorar minhas habilidades e criar experiências memoráveis. Conheça meu portfólio e descubra como posso contribuir para seus projetos e objetivos.</p>
        </div>
      </div>
    </section>
  )
}

export default Introduction;
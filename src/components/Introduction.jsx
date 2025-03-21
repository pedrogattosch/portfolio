import React from "react";

import LinkedIn from "../assets/icons/linkedin.svg"
import GitHub from "../assets/icons/github.svg"
import Download from "../assets/icons/download.svg"

function Introduction() {
  return (
    <section>
      <div className='container m-auto px-5 py-10 flex gap-6'>
        <div className='max-w-xl'>
          <h1 className='font-semibold text-4xl'>Olá, eu sou o Pedro Miguel!</h1>
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
          <p className='mt-4 text-gray-400'>Estudante de Engenharia de Computação na UTFPR, com experiência em desenvolvimento front-end e conhecimento em Python. Possuo certificações na área, além de habilidades em manutenção de hardware e software, redes e suporte técnico. Estou sempre em busca de novos desafios e oportunidades para aplicar tecnologia de forma inovadora.</p>
        </div>
      </div>
    </section>
  )
}

export default Introduction;
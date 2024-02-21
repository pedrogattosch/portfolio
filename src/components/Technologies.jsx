import React from "react";

import HTML from "../assets/icons/html.svg"
import CSS from "../assets/icons/css.svg"
import JavaScript from "../assets/icons/javascript.svg"
import Sass from "../assets/icons/sass.svg"
import Reactjs from "../assets/icons/reactjs.svg"
import Tailwind from "../assets/icons/tailwindcss.svg"
import Nextjs from "../assets/icons/nextjs.svg"
import TypeScript from "../assets/icons/typescript.svg"
import Cypress from "../assets/icons/cypress.svg"

function Technologies() {
  return (
    <section id='tecnologias'>
      <div className='container m-auto px-5 py-10'>
        <h2 className='text-xl font-semibold'>Tecnologias</h2>
        <div className="flex flex-col sm:flex-row gap-8 mt-10">
          <div className="border border-gray-500 rounded-md p-5 flex-1 flex flex-col items-center justify-center">
            <img src={HTML} className='w-12 h-12'/>
            <h3 className="text-center">HTML5</h3>
          </div>
          <div className="border border-gray-500 rounded-md p-5 flex-1 flex flex-col items-center justify-center">
            <img src={CSS} className='w-12 h-12'/>
            <h3 className="text-center">CSS3</h3>
          </div>
          <div className="border border-gray-500 rounded-md p-5 flex-1 flex flex-col items-center justify-center">
            <img src={JavaScript} className='w-12 h-12'/>
            <h3 className="text-center">JavaScript</h3>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-8 mt-10">
          <div className="border border-gray-500 rounded-md p-5 flex-1 flex flex-col items-center justify-center">
            <img src={Sass} className='w-12 h-12'/>
            <h3 className="text-center">Sass</h3>
          </div>
          <div className="border border-gray-500 rounded-md p-5 flex-1 flex flex-col items-center justify-center">
            <img src={Reactjs} className='w-12 h-12'/>
            <h3 className="text-center">React</h3>
          </div>
          <div className="border border-gray-500 rounded-md p-5 flex-1 flex flex-col items-center justify-center">
            <img src={Tailwind} className='w-12 h-12'/>
            <h3 className="text-center">Tailwind CSS</h3>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-8 mt-10">
          <div className="border border-gray-500 rounded-md p-5 flex-1 flex flex-col items-center justify-center">
            <img src={Nextjs} className='w-12 h-12'/>
            <h3 className="text-center">Next.js</h3>
          </div>
          <div className="border border-gray-500 rounded-md p-5 flex-1 flex flex-col items-center justify-center">
            <img src={TypeScript} className='w-12 h-12'/>
            <h3 className="text-center">TypeScript</h3>
          </div>
          <div className="border border-gray-500 rounded-md p-5 flex-1 flex flex-col items-center justify-center">
            <img src={Cypress} className='w-12 h-12'/>
            <h3 className="text-center">Cypress</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technologies;
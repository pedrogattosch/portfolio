import React from "react";

function Projects() {
  return (
    <section id='projetos'>
      <div className='container m-auto px-5 py-5'>
        <h2 className='text-xl font-semibold'>Projetos</h2>
        <div className='flex flex-col sm:flex-row gap-10 mt-10'>
          <div className='border border-gray-500 rounded-md p-5 flex-1'>
            <h3 className='text-2xl font-semibold mt-8'>Em construção...</h3>
            <p className='text-gray-400 text-sm mt-4'>Ainda estou desenvolvendo, aguarde um pouco.</p>
            <button className='mt-5 underline hover:scale-105 transition-transform'>Visualizar o código</button>
          </div>
          <div className='border border-gray-500 rounded-md p-5 flex-1'>
            <h3 className='text-2xl font-semibold mt-8'>Em construção...</h3>
            <p className='text-gray-400 text-sm mt-4'>Ainda estou desenvolvendo, aguarde um pouco.</p>
            <button className='mt-5 underline hover:scale-105 transition-transform'>Visualizar o código</button>
          </div>
        </div>      
      </div>
    </section>
  )
}

export default Projects;
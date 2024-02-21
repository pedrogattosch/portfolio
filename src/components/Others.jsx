import React from "react";

function Others() {
  return (
    <section>
      <div className="container m-auto px-5 py-10">
        <h2 className="text-xl font-semibold">
          Outras tecnologias e habilidades
        </h2>
        <div className="mt-12">
            <ul className='list-disc flex flex-col sm:flex-row sm:gap-20 gap-2 ml-5'>
              <li>Git & GitHub</li>
              <li>WordPress</li>
              <li>Inglês [Avançado]</li>
              <li>Comunicação eficaz</li>
            </ul>
            <ul className='list-disc flex flex-col sm:flex-row sm:gap-10 sm:mt-5 mt-2 gap-2 ml-5'>
              <li>Pensamento criativo</li>
              <li>Planejamento e orgranização</li>
              <li>Curiosidade e vontade de aprender</li>
            </ul>
        </div>
      </div>
    </section>
  )
}

export default Others;
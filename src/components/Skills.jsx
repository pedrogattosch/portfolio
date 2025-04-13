import React from "react";

function Skills() {
  return (
    <section id="habilidades">
      <div className="container m-auto px-5 py-10">
        <h2 className="text-xl font-semibold">
          Habilidades
        </h2>
        <div className="mt-12">
            <ul className='list-disc flex flex-col gap-5 ml-5 sm:flex-row sm:gap-20'>
              <li>HTML, CSS e JavaScript</li>
              <li>C</li>
              <li>Python</li>
              <li>React</li>
            </ul>
        </div>
        <div className="mt-5">
          <ul className="list-disc flex flex-col gap-5 ml-5 sm:flex-row sm:gap-20">
              <li>Tailwind CSS</li>
              <li>Git & GitHub</li>
              <li>WordPress</li>
              <li>Redes de computadores</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills;
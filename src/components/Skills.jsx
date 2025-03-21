import React from "react";

function Skills() {
  return (
    <section>
      <div className="container m-auto px-5 py-10">
        <h2 className="text-xl font-semibold">
          Habilidades
        </h2>
        <div className="mt-12">
            <ul className='list-disc flex flex-row gap-20 ml-5'>
              <li>HTML, CSS e JavaScript</li>
              <li>C</li>
              <li>Python</li>
              <li>React</li>
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
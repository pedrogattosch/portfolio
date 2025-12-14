import React from "react";
import { useLanguage } from "../hooks/useLanguage";

const content = {
  pt: { titulo: "Habilidades" },
  en: { titulo: "Skills" },
};

function Skills() {
  const { lang } = useLanguage();

  return (
    <section id="habilidades">
      <div className="container m-auto px-5 py-10">
        <h2 className="text-xl font-semibold">{content[lang].titulo}</h2>
        <div className="mt-12">
          <ul className="list-disc flex flex-col gap-5 ml-5 sm:flex-row sm:flex-wrap sm:gap-20">
            <li>C</li>
            <li>C++</li>
            <li>Python</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Sass</li>
            <li>Tailwind CSS</li>
            <li>React</li>
            <li>Flutter</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;

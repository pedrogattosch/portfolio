import React from "react";
import { useLanguage } from "../hooks/useLanguage";
import FreeCodeCamp from "../assets/images/free_code_camp_logo.jpg";
import Udemy from "../assets/images/udemy_logo.jpg";
import Cisco from "../assets/images/cisco_logo.jpg";

const content = {
  pt: { titulo: "Certificações", botao: "Visualizar o certificado" },
  en: { titulo: "Certifications", botao: "View certificate" },
};

function Certifications() {
  const { lang } = useLanguage();

  return (
    <section id="certificacoes">
      <div className="container m-auto px-5 py-10">
        <h2 className="text-xl font-semibold">{content[lang].titulo}</h2>
        <div className="flex flex-col gap-10 mt-10">
          <div className="border border-gray-500 rounded-md p-5 flex-1">
            <div className="flex items-center gap-3">
              <img
                src={FreeCodeCamp}
                className="w-8 h-8"
              />
              <h3 className="text-xl font-semibold">
                Machine learning with Python - freeCodeCamp
              </h3>
            </div>
            <a
              href="https://www.freecodecamp.org/certification/fccdfba9584-cb95-4efa-8072-dc4ac32eb2b6/machine-learning-with-python-v7"
              target="_blank"
              className="mt-4 underline hover:scale-105 transition-transform inline-block"
            >
              {content[lang].botao}
            </a>
          </div>
          {/* Udemy */}
          <div className="border border-gray-500 rounded-md p-5 flex-1">
            <div className="flex items-center gap-3">
              <img
                src={Udemy}
                className="w-8 h-8"
              />
              <h3 className="text-xl font-semibold">
                Microsoft Azure Architect AZ-303 e AZ-305
              </h3>
            </div>
            <a
              href="https://www.udemy.com/certificate/UC-80b7856f-b4d2-4605-97b4-00dacba19328/"
              target="_blank"
              className="mt-4 underline hover:scale-105 transition-transform inline-block"
            >
              {content[lang].botao}
            </a>
          </div>
          <div className="border border-gray-500 rounded-md p-5 flex-1">
            <div className="flex items-center gap-3">
              <img
                src={Cisco}
                alt="Cisco logo"
                className="w-8 h-8"
              />
              <h3 className="text-xl font-semibold">Python Essentials 1</h3>
            </div>
            <a
              href="https://www.credly.com/badges/087b5de7-6835-4f8e-9863-f39217dbec37/linked_in_profile"
              target="_blank"
              className="mt-4 underline hover:scale-105 transition-transform inline-block"
            >
              {content[lang].botao}
            </a>
          </div>
          <div className="border border-gray-500 rounded-md p-5 flex-1">
            <div className="flex items-center gap-3">
              <img
                src={Cisco}
                alt="Cisco logo"
                className="w-8 h-8"
              />
              <h3 className="text-xl font-semibold">Python Essentials 2</h3>
            </div>
            <a
              href="https://www.credly.com/badges/dcec3e6c-c9a8-467e-9d69-d54904df97fb/linked_in_profile"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 underline hover:scale-105 transition-transform inline-block"
            >
              {content[lang].botao}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;

import React from "react";
import { useLanguage } from "../hooks/useLanguage";
import Cisco from "../assets/images/cisco_logo.jpg";

const content = {
  pt: { titulo: "Certificações", botao: "Visualizar o certificado" },
  en: { titulo: "Certifications", botao: "View certificate" },
};

const certifications = [
  {
    image: Cisco,
    alt: "Cisco logo",
    title: "Python Essentials 1",
    href: "https://www.credly.com/badges/087b5de7-6835-4f8e-9863-f39217dbec37/linked_in_profile",
  },
  {
    image: Cisco,
    alt: "Cisco logo",
    title: "Python Essentials 2",
    href: "https://www.credly.com/badges/dcec3e6c-c9a8-467e-9d69-d54904df97fb/linked_in_profile",
  },
];

function Certifications() {
  const { lang } = useLanguage();

  return (
    <section id="certificacoes">
      <div className="section-panel px-6 py-8 sm:px-8 sm:py-10">
        <h2 className="section-heading">{content[lang].titulo}</h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {certifications.map((item, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover flex h-full flex-col justify-between p-6"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-10 w-10 rounded-lg object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {item.title}
                </h3>
              </div>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 transition duration-300 hover:border-cyan-400/35 hover:bg-white/10"
              >
                {content[lang].botao}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;

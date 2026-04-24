import GitHub from "../assets/icons/github.svg";
import LinkedIn from "../assets/icons/linkedin.svg";
import Foto from "../assets/images/foto-perfil.png";
import { useLanguage } from "../hooks/useLanguage";
import { cn } from "../utils/cn";
import {
  accentBadgeClass,
  elevatedSecondaryActionClass,
} from "./ui/styles";

const content = {
  pt: {
    icon: "Olá, mundo! 👋",
    titulo: "Pedro Miguel",
    subtitulo: "Desenvolvedor .NET",
    descricao:
      "Sou estudante de Engenharia de Computação na UTFPR e estagiário na Inside Sistemas. Estou direcionando minha evolução profissional ao ecossistema .NET, com foco em construir software bem estruturado, confiável e pronto para crescer com o produto.",
    linkedin: "LinkedIn",
    github: "GitHub",
  },
  en: {
    icon: "Hello, world! 👋",
    titulo: "Pedro Miguel",
    subtitulo: ".NET Developer",
    descricao:
      "I am a Computer Engineering student at UTFPR and an intern at Inside Sistemas. I am focusing my professional growth on the .NET ecosystem, aiming to build well-structured, reliable software ready to evolve with the product.",
    linkedin: "LinkedIn",
    github: "GitHub",
  },
};

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/pedrogattosch/",
    icon: LinkedIn,
    alt: "LinkedIn",
    labelKey: "linkedin",
    highlighted: true,
  },
  {
    href: "https://github.com/pedrogattosch",
    icon: GitHub,
    alt: "GitHub",
    labelKey: "github",
  },
];

function Introduction() {
  const { lang } = useLanguage();

  return (
    <section>
      <div className="section-panel overflow-hidden px-6 py-10 sm:px-8 sm:py-12 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,360px)] lg:gap-12">
          <div className="order-2 lg:order-1">
            <div className={accentBadgeClass}>{content[lang].icon}</div>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {content[lang].titulo}
            </h1>
            <p className="mt-4 max-w-2xl text-lg font-medium text-slate-100 sm:text-xl">
              {content[lang].subtitulo}
            </p>
            <p className="section-copy mt-6 max-w-3xl text-base sm:text-lg">
              {content[lang].descricao}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    elevatedSecondaryActionClass,
                    link.highlighted && "bg-cyan-400/10 text-cyan-50"
                  )}
                >
                  <img src={link.icon} className="w-5 invert" alt={link.alt} />
                  {content[lang][link.labelKey]}
                </a>
              ))}
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/25 via-sky-400/10 to-transparent blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.05] p-3 shadow-[0_25px_80px_rgba(2,6,23,0.55)]">
                <img
                  src={Foto}
                  alt="Foto de perfil"
                  className="h-72 w-72 rounded-[1.5rem] object-cover object-top sm:h-80 sm:w-80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;

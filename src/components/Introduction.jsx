import { Link } from "react-router-dom";
import GitHub from "../assets/icons/github.svg";
import LinkedIn from "../assets/icons/linkedin.svg";
import Foto from "../assets/images/foto-perfil.jpg";
import { useLanguage } from "../hooks/useLanguage";
import { accentBadgeClass, primaryActionClass, secondaryActionClass } from "./ui/styles";

const content = {
  pt: {
    badge: "Olá, mundo!",
    bio: "Estudante de engenharia de computação na UTFPR, com foco em inteligência artificial, automação de processos e análise de dados. Desenvolvo soluções com Python, fluxos multiagentes e dashboards.",
    resume: "Ver currículo", location: "Toledo, Paraná · Brasil",
    stats: [["+15", "projetos publicados"], ["+3", "anos de experiência"], ["+5", "certificados"], ["+20", "tecnologias"]],
  },
  en: {
    badge: "Hello, world!",
    bio: "Computer engineering student at UTFPR focused on artificial intelligence and process automation. I build Python solutions and multi-agent workflows, with practical experience in web, mobile, data, and computer vision.",
    resume: "View resume", location: "Toledo, Paraná · Brazil",
    stats: [["+15", "published projects"], ["+3", "years of experience"], ["+5", "certificates"], ["+20", "technologies"]],
  },
};

function Introduction() {
  const { lang } = useLanguage();
  const copy = content[lang];
  return (
    <section className="bg-[image:var(--glow)]">
      <div className="shell-padding mx-auto max-w-shell border-b border-line px-8 pb-14 pt-9 md:pt-16">
        <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_300px] md:gap-14">
          <div>
            <span className={accentBadgeClass}>{copy.badge}</span>
            <h1 className="mt-5 text-[clamp(42px,7vw,58px)] font-semibold leading-[1.05] tracking-[-.03em]">Pedro Miguel</h1>
            <p className="mt-4 max-w-[56ch] text-base leading-[1.75] text-muted">{copy.bio}</p>
            <div className="mt-7 grid gap-2.5 sm:flex sm:flex-wrap">
              <Link to="/curriculo" className={`${primaryActionClass} w-full sm:w-auto`}>{copy.resume}</Link>
              <div className="grid grid-cols-2 gap-2.5 sm:contents">
                {[["https://www.linkedin.com/in/pedrogattosch/", LinkedIn, "LinkedIn"], ["https://github.com/pedrogattosch", GitHub, "GitHub"]].map(([href, icon, label]) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" className={`${secondaryActionClass} justify-center sm:justify-start`}>
                    <img src={icon} alt="" className="h-[17px] w-[17px]" style={{ filter: "var(--icon-filter)" }} />{label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <figure className="relative m-0">
            <div className="absolute inset-0 rounded-[18px] bg-[linear-gradient(150deg,rgba(34,211,238,.3),transparent_60%)] blur-[28px]" />
            <div className="relative rounded-[18px] border border-lineStrong bg-chip p-2.5">
              <img src={Foto} alt="Pedro Miguel" className="h-60 w-full rounded-xl object-cover object-top md:h-80" />
            </div>
            <figcaption className="mt-3 text-center font-mono text-[11px] text-faint">{copy.location}</figcaption>
          </figure>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-[14px] border border-line bg-line md:grid-cols-4">
          {copy.stats.map(([value, label]) => <div key={label} className="bg-panel px-[18px] py-4 md:px-5 md:py-5"><div className="text-2xl font-semibold text-accentSoft md:text-[28px]">{value}</div><div className="mt-1.5 font-mono text-[10.5px] leading-[1.5] text-faint">{label}</div></div>)}
        </div>
      </div>
    </section>
  );
}

export default Introduction;

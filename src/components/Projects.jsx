import { useLanguage } from "../hooks/useLanguage";
import Section from "./ui/Section";
import { ghostActionClass } from "./ui/styles";

const aquametriaHref = "https://start-farm.vercel.app/";
const githubHref = "https://github.com/pedrogattosch?tab=repositories";

// eslint-disable-next-line react-refresh/only-export-components
export const featuredProject = {
  pt: {
    title: "Aquametria",
    badges: ["Cofundador", "MVP campeão · Start Farm 2026"],
    href: aquametriaHref,
    items: [
      {
        text: "Cofundador da Aquametria, empresa incubada na SprinT da UTFPR e originada do MVP campeão do Start Farm 2026, atuando na definição de prioridades técnicas e tomada de decisão da empresa.",
        highlights: ["MVP campeão do Start Farm 2026"],
      },
      {
        text: "Responsável pelo desenvolvimento de solução para substituir uma biometria manual realizada a cada 7 a 15 dias por acompanhamento mais frequente da biomassa, reduzindo esforço operacional e apoiando decisões de arraçoamento.",
        highlights: ["7 a 15 dias"],
      },
    ],
  },
  en: {
    title: "Aquametria",
    badges: ["Co-founder", "Winning MVP · Start Farm 2026"],
    href: aquametriaHref,
    items: [
      {
        text: "Co-founder of Aquametria, a company incubated at UTFPR's SprinT that grew out of the winning MVP at Start Farm 2026, contributing to technical priority setting and company decision-making.",
        highlights: ["winning MVP at Start Farm 2026"],
      },
      {
        text: "Responsible for developing a solution to replace a manual biometric assessment performed every 7 to 15 days with more frequent biomass monitoring, reducing operational effort and supporting feeding decisions.",
        highlights: ["7 to 15 days"],
      },
    ],
  },
};

const secondaryProjects = [
  {
    pt: [
      "Sistema de controle de fluxo da Usina do Conhecimento",
      "Sistema de visão computacional para contagem de pessoas em Raspberry Pi, com processamento em Python e OpenCV e visualização dos dados em tempo real.",
    ],
    en: [
      "Usina do Conhecimento flow control system",
      "Computer vision system for people counting on Raspberry Pi, with Python and OpenCV processing and real-time data visualization.",
    ],
    stack: "Python · OpenCV · Raspberry Pi · Picamera2",
    href: "https://github.com/pedrogattosch/usina",
  },
  {
    pt: [
      "Modelagem do crescimento populacional de Toledo-PR",
      "Modelagem matemática e análise de dados para projeção do crescimento populacional de Toledo-PR utilizando o modelo logístico de Verhulst.",
    ],
    en: [
      "Population growth modeling for Toledo-PR",
      "Mathematical modeling and data analysis to project population growth in Toledo-PR using the Verhulst logistic model.",
    ],
    stack: "Python · Pandas · NumPy · Matplotlib · SciPy",
    href: "https://github.com/pedrogattosch/populacao-toledo",
  },
];

function Projects() {
  const { lang } = useLanguage();
  const featured = featuredProject[lang];

  return (
    <Section
      id="projetos"
      title={lang === "pt" ? "Projetos" : "Projects"}
      index="02"
      action={
        <a
          href={githubHref}
          target="_blank"
          rel="noreferrer"
          className={ghostActionClass}
        >
          {lang === "pt" ? "Ver todos os projetos ↗" : "View all projects ↗"}
        </a>
      }
    >
      <div className="grid gap-4">
        <article className="rounded-[14px] border border-[var(--accent-border)] bg-[var(--accent-bg)] px-[26px] py-7 md:px-8 md:py-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="text-[24px] font-semibold tracking-[-.02em] text-accentSoft md:text-[28px]">
                {featured.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {featured.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-[var(--accent-border)] bg-chip px-3 py-1 font-mono text-[10.5px] text-accentSoft"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={featured.href}
              target="_blank"
              rel="noreferrer"
              className={`${ghostActionClass} shrink-0 self-start`}
            >
              {lang === "pt" ? "Ver projeto ↗" : "View project ↗"}
            </a>
          </div>
          <ul className="mt-5 max-w-[92ch] list-disc space-y-2 pl-[18px] text-sm leading-[1.75] text-muted">
            {featured.items.map(({ text }) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        </article>
        <div className="grid overflow-hidden rounded-[14px] border border-line bg-line md:grid-cols-2 md:gap-px">
          {secondaryProjects.map((project) => {
            const [title, description] = project[lang];
            return (
              <article
                key={project.href}
                className="flex min-h-0 flex-col justify-between border-b border-line bg-panel px-[26px] py-6 last:border-b-0 md:min-h-64 md:border-0"
              >
                <div>
                  <h3 className="text-[19px] font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-[1.7] text-muted">
                    {description}
                  </p>
                  <p className="mt-4 font-mono text-[11.5px] leading-relaxed text-faint">
                    {project.stack}
                  </p>
                </div>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`${ghostActionClass} mt-6 self-start`}
                >
                  {lang === "pt" ? "Ver projeto ↗" : "View project ↗"}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export default Projects;

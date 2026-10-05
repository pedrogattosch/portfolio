import { useLanguage } from "../hooks/useLanguage";
import Section from "./ui/Section";
import { ghostActionClass } from "./ui/styles";

const aquametriaHref = "https://start-farm.vercel.app/";
const financeAppProjectHref = "https://github.com/pedrogattosch/finance-app";
const financeAppCodeHref = "https://github.com/pedrogattosch/finance-app/tree/main/frontend";
const githubHref = "https://github.com/pedrogattosch?tab=repositories";

const financeAppContent = {
  pt: {
    description: "Aplicativo de finanças pessoais para registrar receitas e despesas, acompanhar o orçamento diário e importar extratos PDF, CSV ou OFX com conferência antes de salvar.",
    previewAlt: "Montagem do FinanceApp em telas de computador e celular, com saldo, orçamento e lançamentos.",
    projectLabel: "Ver projeto ↗",
    codeLabel: "Ver código ↗",
  },
  en: {
    description: "Personal finance app to track income and expenses, follow a daily budget, and review PDF, CSV, or OFX statements before importing them.",
    previewAlt: "FinanceApp desktop and mobile mockup showing balances, budget, and transactions.",
    projectLabel: "View project ↗",
    codeLabel: "View code ↗",
  },
};

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

const budgetBars = [35, 52, 43, 66, 49, 78, 59, 90, 68, 100, 76, 86];

function FinanceAppPreview({ alt }) {
  return (
    <figure className="finance-preview" role="img" aria-label={alt}>
      <div className="finance-preview__desktop" aria-hidden="true">
        <div className="finance-preview__browser"><span>● ● ●</span><span>FinanceApp</span></div>
        <div className="finance-preview__workspace">
          <div className="finance-preview__sidebar">
            <span className="finance-preview__brand"><span className="finance-preview__logo">$</span> FinanceApp</span>
            <span className="finance-preview__nav finance-preview__nav--active">▦ <span>Visão geral</span></span>
            <span className="finance-preview__nav">☷ <span>Lançamentos</span></span>
            <span className="finance-preview__nav">▤ <span>Orçamento diário</span></span>
          </div>
          <div className="finance-preview__dashboard">
            <div className="finance-preview__heading"><strong>Visão geral</strong><span>Outubro ▾</span></div>
            <div className="finance-preview__balance"><span>Saldo do mês</span><strong>R$ 4.280,50</strong></div>
            <div className="finance-preview__stats"><span>↙ Receitas <strong>R$ 6.400,00</strong></span><span>↗ Despesas <strong>R$ 2.119,50</strong></span></div>
            <div className="finance-preview__chart"><span>Orçamento diário</span><div>{budgetBars.map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div></div>
          </div>
        </div>
      </div>
      <div className="finance-preview__phone" aria-hidden="true">
        <div className="finance-preview__phone-top"><span className="finance-preview__logo">$</span><span>FinanceApp</span><span>•••</span></div>
        <span className="finance-preview__phone-label">Orçamento diário</span>
        <strong className="finance-preview__phone-amount">R$ 138,08</strong>
        <span className="finance-preview__phone-subtitle">disponível para hoje</span>
        <div className="finance-preview__phone-progress"><span /></div>
        <div className="finance-preview__phone-entry"><span>Mercado</span><strong>− R$ 86,90</strong></div>
        <div className="finance-preview__phone-entry"><span>Receita</span><strong>+ R$ 320,00</strong></div>
      </div>
    </figure>
  );
}

function Projects() {
  const { lang } = useLanguage();
  const featured = featuredProject[lang];
  const financeApp = financeAppContent[lang];

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
        <article className="grid overflow-hidden rounded-[14px] border border-line bg-panel lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col items-start justify-between gap-8 px-[26px] py-7 md:px-8 md:py-8">
            <div>
              <h3 className="text-[24px] font-semibold tracking-[-.02em] md:text-[28px]">FinanceApp</h3>
              <p className="mt-4 max-w-[52ch] text-sm leading-[1.75] text-muted">{financeApp.description}</p>
              <p className="mt-5 font-mono text-[11.5px] leading-relaxed text-faint">React · TypeScript · FastAPI · PostgreSQL</p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <a href={financeAppProjectHref} target="_blank" rel="noreferrer" className={ghostActionClass}>
                {financeApp.projectLabel}
              </a>
              <a href={financeAppCodeHref} target="_blank" rel="noreferrer" className={ghostActionClass}>
                {financeApp.codeLabel}
              </a>
            </div>
          </div>
          <FinanceAppPreview alt={financeApp.previewAlt} />
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

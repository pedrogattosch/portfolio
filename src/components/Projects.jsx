import { useLanguage } from "../hooks/useLanguage";
import Section from "./ui/Section";
import { ghostActionClass } from "./ui/styles";

const projects = [
  { pt: ["Aquametria — TilapIA", "Dashboard de biometria aquícola e monitoramento estimado de tilápias. MVP campeão do Start Farm 2026."], en: ["Aquametria — TilapIA", "Aquaculture biometrics dashboard for estimated tilapia monitoring. Winning MVP at Start Farm 2026."], stack: "React, TypeScript, Vite, Tailwind CSS", href: "https://start-farm.vercel.app/" },
  { pt: ["TaskFlow", "Aplicação full stack para gerenciamento de tarefas, com autenticação JWT, testes e arquitetura em camadas."], en: ["TaskFlow", "Full stack task management application featuring JWT authentication, automated tests, and layered architecture."], stack: ".NET, ASP.NET Core, C#, SQL Server, React, Docker", href: "https://github.com/pedrogattosch/TaskFlow" },
  { pt: ["Modelagem do crescimento populacional de Toledo-PR", "Estudo matemático e análise de dados para projeção populacional com a equação logística de Verhulst."], en: ["Modeling population growth in Toledo-PR", "Mathematical modeling and data analysis study for population projections using the Verhulst logistic equation."], stack: "Python, Pandas, NumPy, Matplotlib, SciPy", href: "https://github.com/pedrogattosch/populacao-toledo" },
  { pt: ["Sistema de controle de fluxo da Usina do Conhecimento", "Contagem de pessoas com visão computacional no Raspberry Pi e visualização em tempo real."], en: ["System flow control Usina do Conhecimento", "Computer vision people-counting system running on Raspberry Pi with real-time data visualization."], stack: "Python, OpenCV, Raspberry Pi, Picamera2", href: "https://github.com/pedrogattosch/usina" },
];

function Projects() {
  const { lang } = useLanguage();
  return <Section id="projetos" title={lang === "pt" ? "Projetos" : "Projects"} index="01"><div className="grid overflow-hidden rounded-[14px] border border-line bg-line md:grid-cols-2 md:gap-px">{projects.map((project) => { const [title, description] = project[lang]; return <article key={project.href} className="flex min-h-0 flex-col justify-between border-b border-line bg-panel px-[26px] py-6 md:min-h-64 md:border-0"><div><h3 className="text-[19px] font-semibold">{title}</h3><p className="mt-3 text-sm leading-[1.7] text-muted">{description}</p><p className="mt-4 font-mono text-[11.5px] leading-relaxed text-faint">{project.stack}</p></div><a href={project.href} target="_blank" rel="noreferrer" className={`${ghostActionClass} mt-6 self-start`}>{lang === "pt" ? "Ver projeto ↗" : "View project ↗"}</a></article>; })}</div></Section>;
}
export default Projects;

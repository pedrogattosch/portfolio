import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import "./Resume.css";

const skills = ["Python", "FastAPI", "LLM", "RAG", "C#", ".NET", "ASP.NET Core", "EF Core", "React", "TypeScript", "Tailwind CSS", "SQL Server", "SQLite", "Docker", "Flutter", "Dart", "Pandas", "NumPy", "OpenCV", "Dash", "Git", "Postman", "Figma"];
const titleClass = "mb-2.5 font-mono text-[10.5px] font-semibold tracking-[.14em] text-[#0e7490]";
const chipClass = "rounded border border-black/30 px-1.5 py-[2.5px] font-mono text-[10.5px] leading-[1.35]";
const Icon = ({ type }) => {
  const paths = {
    mail: "M4 4h16v16H4z M4 6l8 7 8-7",
    phone: "M6 3h4l2 5-3 2c1.5 3 3 4.5 6 6l2-3 5 2v4c0 2-2 3-4 2C9 19 5 15 3 6c-1-2 1-3 3-3",
    computer: "M3 4h18v13H3z M8 21h8 M12 17v4",
    pin: "M12 22s7-6 7-13a7 7 0 1 0-14 0c0 7 7 13 7 13zm0-16a3 3 0 1 1 0 6 3 3 0 0 1 0-6",
  };
  if (type === "github") return <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0 fill-[#0e7490]"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 7.68a9.6 9.6 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" /></svg>;
  if (type === "linkedin") return <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0 fill-[#0e7490]"><path d="M5.2 3.5A2.2 2.2 0 1 1 5.2 8a2.2 2.2 0 0 1 0-4.5ZM3.3 9.5h3.8V21H3.3V9.5Zm6.1 0H13v1.57h.05c.5-.95 1.72-1.95 3.54-1.95 3.79 0 4.49 2.5 4.49 5.74V21h-3.8v-5.44c0-1.3-.02-2.97-1.81-2.97-1.81 0-2.09 1.42-2.09 2.88V21H9.4V9.5Z" /></svg>;
  return <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0" fill="none" stroke="#0e7490" strokeWidth="2"><path d={paths[type]} /></svg>;
};
const BlockTitle = ({ children }) => <h2 className={titleClass}>{children}</h2>;

function Resume() {
  const { lang } = useLanguage();
  const pt = lang === "pt";
  return (
    <div className="cv-page min-h-screen bg-white text-[#111]">
      <div className="cv-bar mx-auto flex w-[8.5in] max-w-full items-center justify-between gap-6 bg-white px-0 pb-1 pt-4">
        <button onClick={() => window.print()} className="rounded-md border border-white/15 bg-[#111] px-[18px] py-2.5 font-mono text-[13.5px] font-medium text-white">{pt ? "salvar currículo" : "save resume"}</button>
        <div className="flex items-center gap-4"><ResumeLanguageToggle lang={lang} /><Link to="/" className="font-mono text-[13px] text-black/65">← {pt ? "voltar ao site" : "back to site"}</Link></div>
      </div>
      <div className="cv-sheet font-sans">
        <h1 className="text-[29px] font-bold leading-[1.15] tracking-[-.01em]">Pedro Miguel Gatto Schardong</h1>
        <div className="mt-1.5 font-mono text-[13px] text-black/60">{pt ? "Engenharia de Computação · UTFPR" : "Computer Engineering · UTFPR"}</div>
        <div className="my-[13px] h-0.5 bg-[#111]" />
        <div className="cv-content grid items-start gap-x-8 md:grid-cols-[222px_minmax(0,1fr)]">
          <aside className="space-y-5">
            <section><BlockTitle>{pt ? "RESUMO" : "SUMMARY"}</BlockTitle><p className="text-xs leading-[1.55]">{pt ? "Estudante de engenharia de computação na UTFPR e analista de IA e dados na Inside Sistemas. Desenvolvo soluções com Python para inteligência artificial, automação de processos e visualização de dados, com experiência em agentes de IA, aplicações web e visão computacional." : "Computer engineering student at UTFPR and AI and data analyst at Inside Sistemas. I build Python solutions for artificial intelligence, process automation, and data visualization, with experience in AI agents, web applications, and computer vision."}</p></section>
            <section><BlockTitle>{pt ? "TECNOLOGIAS" : "TECHNOLOGIES"}</BlockTitle><div className="flex flex-wrap gap-[5px]">{skills.map((skill) => <span key={skill} className={chipClass}>{skill}</span>)}</div></section>
            <section><BlockTitle>{pt ? "CERTIFICAÇÕES" : "CERTIFICATIONS"}</BlockTitle><p className="text-[11.5px] leading-5">Python Essentials 1 — Cisco<br />Python Essentials 2 — Cisco<br />{pt ? "Fundamentos do C#" : "C# Fundamentals"} — balta.io<br />Machine Learning with Python — freeCodeCamp</p></section>
            <section><BlockTitle>{pt ? "CONTATO" : "CONTACT"}</BlockTitle><div className="space-y-2 font-mono text-[10.5px]"><div className="flex items-center gap-2"><Icon type="mail" />pedrogattosch@gmail.com</div><div className="flex items-center gap-2"><Icon type="phone" />(45) 99154-4402</div><div className="flex items-center gap-2"><Icon type="computer" />pedrogattosch.vercel.app</div><div className="flex items-center gap-2"><Icon type="github" />github.com/pedrogattosch</div><div className="flex items-center gap-2"><Icon type="linkedin" />linkedin.com/in/pedrogattosch</div><div className="flex items-center gap-2"><Icon type="pin" />Toledo, PR</div></div></section>
          </aside>
          <main className="mt-6 space-y-5 md:mt-0">
            <section><BlockTitle>{pt ? "FORMAÇÃO" : "EDUCATION"}</BlockTitle><div className="flex justify-between gap-4"><h3 className="text-[13px] font-semibold text-[#0e7490]">{pt ? "Engenharia de Computação" : "Computer Engineering"}</h3><span className="font-mono text-[10.5px]">{pt ? "2023 — atual · Toledo, PR" : "2023 — present · Toledo, PR, Brazil"}</span></div><p className="mt-1 text-[11.5px]">{pt ? "Universidade Tecnológica Federal do Paraná, UTFPR" : "Federal University of Technology — Paraná, UTFPR"}</p></section>
            <section><BlockTitle>{pt ? "EXPERIÊNCIA" : "EXPERIENCE"}</BlockTitle>{pt ? <><Experience company="Inside Sistemas" role="Analista de IA e dados" meta="jul. 2026 · presente · Toledo, PR" bullets={["Desenvolvimento de dashboards para visualização e acompanhamento de dados, centralizados em um hub interno.", "Desenvolvimento de agentes de IA para apoiar o time de sucesso do cliente.", "Contribuição no desenvolvimento de uma IA da Inside Sistemas, composta por assistentes especializados e conectados aos diferentes produtos da empresa."]} /><Experience company="Inside Sistemas" role="Suporte técnico" meta="fev. 2026 · jun. 2026 · Toledo, PR" bullets={["Suporte ao ERP e análise de regras de negócio.", "Mais de 250 artigos técnicos produzidos."]} /><Experience company="Exército Brasileiro" role="Soldado" meta="mar. 2024 · jan. 2025 · Toledo, PR" bullets={["Suporte e manutenção na seção de informática.", "Atuação disciplinada em ambiente de pressão."]} /></> : <><Experience company="Inside Sistemas" role="AI and data analyst" meta="Jul. 2026 · present · Toledo, PR, Brazil" bullets={["Development of dashboards for data visualization and monitoring, centralized in an internal hub.", "Development of AI agents to support the Customer Success team.", "Contributed to Inside Sistemas' corporate AI assistant, composed of specialized assistants connected to the company's different products."]} /><Experience company="Inside Sistemas" role="Technical support" meta="Feb. 2026 · Jun. 2026 · Toledo, PR, Brazil" bullets={["ERP support and business rule analysis.", "Produced more than 250 technical articles."]} /><Experience company="Brazilian Army" role="Soldier" meta="Mar. 2024 · Jan. 2025 · Toledo, PR, Brazil" bullets={["Technical support and maintenance in the IT department.", "Worked effectively in a disciplined, high-pressure environment."]} /></>}</section>
            <section><BlockTitle>{pt ? "PROJETOS" : "PROJECTS"}</BlockTitle><Project title={pt ? "Aquametria — TilapIA" : "Aquametria — TilapIA"} stack="React · TypeScript · Tailwind" text={pt ? "Empresa incubada na SprinT da UTFPR, originada do MVP campeão do Start Farm 2026 para biometria e manejo aquícola." : "Company incubated at UTFPR's SprinT, originating from the Start Farm 2026 winning MVP for aquaculture biometrics and management."} /><Project title={pt ? "Sistema de controle de fluxo da Usina do Conhecimento" : "System flow control Usina do Conhecimento"} stack="Python · OpenCV" text={pt ? "Contagem de pessoas com visão computacional e dashboard em tempo real." : "Computer vision people-counting system with a real-time dashboard."} /><Project title="TaskFlow" stack=".NET · React · SQL Server" text={pt ? "Aplicação full stack de tarefas com JWT, testes e arquitetura em camadas." : "Full stack task management application with JWT, automated tests, and layered architecture."} /></section>
          </main>
        </div>
      </div>
    </div>
  );
}

function ResumeLanguageToggle({ lang }) {
  const { setLang } = useLanguage();
  return <button onClick={() => setLang(lang === "pt" ? "en" : "pt")} className="h-9 rounded-lg border border-black/20 bg-white px-2.5 font-mono text-[11px] text-black" aria-label="Alternar idioma">{lang.toUpperCase()}</button>;
}

function Experience({ company, role, meta, bullets }) {
  return <article className="cv-block mb-3 border-b border-dashed border-black/20 pb-3"><div className="flex flex-wrap items-baseline justify-between gap-2"><span className="font-mono text-[13px] font-semibold">{company}</span><strong className="text-[12px] text-[#0e7490]">{role}</strong></div><div className="mt-1 font-mono text-[10.5px] text-[#8a6d3b]">{meta}</div><ul className="my-1.5 list-disc pl-4 text-[11.5px] leading-[1.5]">{bullets.map((item) => <li key={item}>{item}</li>)}</ul></article>;
}
function Project({ title, stack, text }) {
  return <article className="cv-block mb-2.5"><div className="flex flex-wrap items-baseline gap-2"><h3 className="text-[12.5px] font-semibold">{title}</h3><span className="font-mono text-[10.5px] text-black/55">{stack}</span></div><p className="text-[11.5px] leading-[1.5]">{text}</p></article>;
}
export default Resume;

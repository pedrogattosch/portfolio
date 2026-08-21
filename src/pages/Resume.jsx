import { Link } from "react-router-dom";
import profileContent from "../data/profileContent";
import technologyCategories from "../data/technologyCategories";
import { useLanguage } from "../hooks/useLanguage";
import "./Resume.css";

const titleClass =
  "mb-2.5 font-mono text-[10.5px] font-semibold tracking-[.14em] text-[#0e7490]";
const chipClass =
  "rounded border border-black/30 px-1.5 py-[2.5px] font-mono text-[10.5px] leading-[1.35]";
const Icon = ({ type }) => {
  const paths = {
    mail: "M4 4h16v16H4z M4 6l8 7 8-7",
    phone:
      "M6 3h4l2 5-3 2c1.5 3 3 4.5 6 6l2-3 5 2v4c0 2-2 3-4 2C9 19 5 15 3 6c-1-2 1-3 3-3",
    computer: "M3 4h18v13H3z M8 21h8 M12 17v4",
    pin: "M12 22s7-6 7-13a7 7 0 1 0-14 0c0 7 7 13 7 13zm0-16a3 3 0 1 1 0 6 3 3 0 0 1 0-6",
  };
  if (type === "github")
    return (
      <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0 fill-[#0e7490]">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 7.68a9.6 9.6 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    );
  if (type === "linkedin")
    return (
      <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0 fill-[#0e7490]">
        <path d="M5.2 3.5A2.2 2.2 0 1 1 5.2 8a2.2 2.2 0 0 1 0-4.5ZM3.3 9.5h3.8V21H3.3V9.5Zm6.1 0H13v1.57h.05c.5-.95 1.72-1.95 3.54-1.95 3.79 0 4.49 2.5 4.49 5.74V21h-3.8v-5.44c0-1.3-.02-2.97-1.81-2.97-1.81 0-2.09 1.42-2.09 2.88V21H9.4V9.5Z" />
      </svg>
    );
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3 w-3 shrink-0"
      fill="none"
      stroke="#0e7490"
      strokeWidth="2"
    >
      <path d={paths[type]} />
    </svg>
  );
};
const BlockTitle = ({ children }) => <h2 className={titleClass}>{children}</h2>;
const formatMeta = ({ start, end, location }) => [start, end, location].join(" · ");

function Resume() {
  const { lang } = useLanguage();
  const pt = lang === "pt";
  const copy = profileContent[lang];
  return (
    <div className="cv-page min-h-screen bg-white text-[#111]">
      <div className="cv-bar mx-auto grid w-[8.5in] max-w-full gap-2.5 bg-white px-4 pb-1 pt-4 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:px-0">
        <button
          onClick={() => window.print()}
          className="w-full rounded-md border border-white/15 bg-[#111] px-[18px] py-2.5 font-mono text-[13.5px] font-medium text-white sm:w-auto"
        >
          {pt ? "salvar currículo" : "save resume"}
        </button>
        <div className="flex items-center justify-between gap-4 sm:justify-end">
          <ResumeLanguageToggle lang={lang} />
          <Link to="/" className="font-mono text-[13px] text-black/65">
            ← {pt ? "voltar ao site" : "back to site"}
          </Link>
        </div>
      </div>
      <div className="cv-sheet font-sans">
        <h1 className="text-[29px] font-bold leading-[1.15] tracking-[-.01em]">
          Pedro Miguel Gatto Schardong
        </h1>
        <div className="mt-1.5 font-mono text-[13px] text-black/60">
          {pt
            ? "Analista de IA e dados · Engenharia de computação (UTFPR)"
            : "AI and data Analyst · Computer engineering (UTFPR)"}
        </div>
        <div className="my-[13px] h-0.5 bg-[#111]" />
        <div className="cv-content grid items-start gap-x-8 md:grid-cols-[222px_minmax(0,1fr)]">
          <aside className="space-y-5">
            <section>
              <BlockTitle>{pt ? "HABILIDADES" : "SKILLS"}</BlockTitle>
              <div className="space-y-2">
                {technologyCategories.map(({ label, skills }) => (
                  <div key={label.pt}>
                    <h3 className="mb-1 font-mono text-[9px] font-semibold uppercase tracking-[.1em] text-black/55">
                      {label[lang]}
                    </h3>
                    <div className="flex flex-wrap gap-[5px]">
                      {(Array.isArray(skills) ? skills : skills[lang]).map(
                        (skill) => (
                          <span key={skill} className={chipClass}>
                            {skill}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <BlockTitle>{pt ? "CERTIFICAÇÕES" : "CERTIFICATIONS"}</BlockTitle>
              <p className="text-[11.5px] leading-5">
                Python Essentials 1 - Cisco
                <br />
                Python Essentials 2 - Cisco
                <br />
                Machine Learning with Python - freeCodeCamp
              </p>
            </section>
            <section>
              <BlockTitle>{pt ? "IDIOMAS" : "LANGUAGES"}</BlockTitle>
              <p className="text-[11.5px] leading-5">
                {pt ? "Inglês - Avançado" : "English - Advanced"}
              </p>
            </section>
            <section>
              <BlockTitle>{pt ? "CONTATOS" : "CONTACTS"}</BlockTitle>
              <div className="space-y-2 font-mono text-[10.5px]">
                <div className="flex items-center gap-2">
                  <Icon type="mail" />
                  pedrogattosch@gmail.com
                </div>
                <div className="flex items-center gap-2">
                  <Icon type="phone" />
                  (45) 99154-4402
                </div>
                <div className="flex items-center gap-2">
                  <Icon type="computer" />
                  pedrogattosch.vercel.app
                </div>
                <div className="flex items-center gap-2">
                  <Icon type="github" />
                  github.com/pedrogattosch
                </div>
                <div className="flex items-center gap-2">
                  <Icon type="linkedin" />
                  linkedin.com/in/pedrogattosch
                </div>
                <div className="flex items-center gap-2">
                  <Icon type="pin" />
                  Toledo, PR
                </div>
              </div>
            </section>
          </aside>
          <main className="mt-6 space-y-5 md:mt-0">
            <section>
              <BlockTitle>{pt ? "RESUMO" : "SUMMARY"}</BlockTitle>
              <ul className="cv-block mb-3 list-disc space-y-1.5 border-b border-dashed border-black/20 pb-3 pl-4 text-xs leading-[1.55]">
                {copy.summary.map((item) => <li key={item.text}><HighlightedText content={item} /></li>)}
              </ul>
            </section>
            <section>
              <BlockTitle>{pt ? "FORMAÇÃO" : "EDUCATION"}</BlockTitle>
              <ResumeEntry company={copy.education.institution} role={copy.education.degree} meta={formatMeta(copy.education)} />
            </section>
            <section>
              <BlockTitle>{pt ? "EXPERIÊNCIA" : "EXPERIENCE"}</BlockTitle>
              {copy.experiences.map((item) => <ResumeEntry key={`${item.company}-${item.role}`} company={item.company} role={item.role} meta={formatMeta(item)} bullets={item.items} />)}
            </section>
            <section>
              <BlockTitle>{pt ? "PROJETO" : "PROJECT"}</BlockTitle>
              <Project title={copy.project.title} href={copy.project.href} bullets={copy.project.items} />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

function ResumeLanguageToggle({ lang }) {
  const { setLang } = useLanguage();
  return (
    <button
      onClick={() => setLang(lang === "pt" ? "en" : "pt")}
      className="h-9 rounded-lg border border-black/20 bg-white px-2.5 font-mono text-[11px] text-black"
      aria-label={lang === "pt" ? "Alternar idioma" : "Switch language"}
    >
      {lang.toUpperCase()}
    </button>
  );
}

function ResumeEntry({ company, role, meta, bullets = [] }) {
  return (
    <article className="cv-block mb-3 border-b border-dashed border-black/20 pb-3">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <span className="font-mono text-[13px] font-semibold">{company}</span>
        <strong className="text-[12px] text-[#0e7490]">{role}</strong>
      </div>
      <div className="mt-1 font-mono text-[10.5px] text-[#8a6d3b]">{meta}</div>
      {bullets.length > 0 ? (
        <ul className="my-1.5 list-disc pl-4 text-[11.5px] leading-[1.5]">
          {bullets.map((item) => <li key={item.text}><HighlightedText content={item} /></li>)}
        </ul>
      ) : null}
    </article>
  );
}
function Project({ title, href, bullets }) {
  const linkLabel = new URL(href).hostname;

  return (
    <article className="cv-block mb-3 border-b border-dashed border-black/20 pb-3">
      <h3 className="font-mono text-[13px] font-semibold">
        {title}{" "}
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="underline decoration-black/30 underline-offset-2"
        >
          ({linkLabel})
        </a>
      </h3>
      <ul className="mt-1 list-disc pl-4 text-[11.5px] leading-[1.5]">
        {bullets.map((item) => <li key={item.text}><HighlightedText content={item} /></li>)}
      </ul>
    </article>
  );
}
function HighlightedText({ content }) {
  const { text, highlights = [] } = content;
  const parts = [];
  let cursor = 0;

  highlights.forEach((highlight) => {
    const start = text.indexOf(highlight, cursor);
    if (start === -1) return;
    parts.push(text.slice(cursor, start));
    parts.push(<strong key={`${highlight}-${start}`}>{highlight}</strong>);
    cursor = start + highlight.length;
  });

  parts.push(text.slice(cursor));
  return parts;
}
export default Resume;

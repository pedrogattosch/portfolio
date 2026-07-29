import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

const content = {
  pt: { projetos: "Projetos", tecnologias: "Tecnologias", experiencia: "Experiência", certificacoes: "Certificações", sobre: "Sobre", contato: "Contato", curriculo: "Currículo ↗" },
  en: { projetos: "Projects", tecnologias: "Technologies", experiencia: "Experience", certificacoes: "Certifications", sobre: "About", contato: "Contact", curriculo: "Resume ↗" },
};

function Header() {
  const { lang } = useLanguage();
  const items = [
    ["#projetos", content[lang].projetos],
    ["#tecnologias", content[lang].tecnologias],
    ["#experiencia", content[lang].experiencia],
    ["#certificacoes", content[lang].certificacoes],
    ["#sobre-mim", content[lang].sobre],
    ["#contato", content[lang].contato],
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] backdrop-blur-[10px]">
      <div className="shell-padding mx-auto flex max-w-shell items-center justify-between gap-5 px-8 py-4">
        <a href="#" className="flex shrink-0 items-center gap-2.5 font-mono text-xs uppercase tracking-[.14em]">
          <span className="h-2 w-2 rounded-full bg-accent" />pedro.miguel
        </a>
        <nav className="hidden items-center gap-[22px] lg:flex">
          {items.map(([href, label]) => <a key={href} href={href} className="text-[12.5px] text-muted transition hover:text-text">{label}</a>)}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <Link to="/curriculo" className="rounded-lg border border-[var(--accent-border)] bg-[var(--accent-bg)] px-3.5 py-2.5 text-[12.5px] font-medium text-accentSoft">
            {content[lang].curriculo}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import useToggleMenu from "../hooks/useToggleMenu";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

const content = {
  pt: { projetos: "Projetos", tecnologias: "Tecnologias", experiencia: "Experiência", certificacoes: "Certificações", sobre: "Sobre", contato: "Contato", curriculo: "Currículo ↗" },
  en: { projetos: "Projects", tecnologias: "Technologies", experiencia: "Experience", certificacoes: "Certifications", sobre: "About", contato: "Contact", curriculo: "Resume ↗" },
};

function Header() {
  const { lang } = useLanguage();
  const { menuOpen, toggleMenu } = useToggleMenu();
  const items = [
    ["#projetos", content[lang].projetos, "01"],
    ["#tecnologias", content[lang].tecnologias, "02"],
    ["#experiencia", content[lang].experiencia, "03"],
    ["#certificacoes", content[lang].certificacoes, "04"],
    ["#sobre-mim", content[lang].sobre, "05"],
    ["#contato", content[lang].contato, "06"],
  ];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] backdrop-blur-[10px]">
      <div className="shell-padding mx-auto flex max-w-shell items-center justify-between gap-3 px-8 py-3 md:gap-5 md:py-4">
        <a href="#" aria-label="pedro.miguel" className="flex shrink-0 items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[.14em] md:text-xs">
          <span className="h-2 w-2 rounded-full bg-accent" /><span className="max-[359px]:hidden">pedro.miguel</span>
        </a>
        <nav className="hidden items-center gap-[22px] lg:flex">
          {items.map(([href, label]) => <a key={href} href={href} className="text-[12.5px] text-muted transition hover:text-text">{label}</a>)}
        </nav>
        <div className="flex shrink-0 items-center gap-1.5 md:gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <Link to="/curriculo" className="inline-flex h-8 items-center rounded-lg border border-[var(--accent-border)] bg-[var(--accent-bg)] px-2.5 text-[11.5px] font-medium text-accentSoft md:h-auto md:px-3.5 md:py-2.5 md:text-[12.5px]">
            <span className="lg:hidden">CV ↗</span>
            <span className="hidden lg:inline">{content[lang].curriculo}</span>
          </Link>
          <button onClick={toggleMenu} aria-label="Abrir menu" aria-expanded={menuOpen} className="inline-flex h-11 w-11 flex-col items-center justify-center gap-1 rounded-lg border border-lineStrong bg-chip lg:hidden">
            <span className="block h-px w-[15px] bg-text" />
            <span className="block h-px w-[15px] bg-text" />
            <span className="block h-px w-[15px] bg-text" />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex h-dvh flex-col bg-bg p-5 lg:hidden">
          <div className="mb-7 flex items-center justify-between">
            <span className="flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[.14em]">
              <span className="h-2 w-2 rounded-full bg-accent" />pedro.miguel
            </span>
            <button onClick={toggleMenu} aria-label="Fechar menu" className="h-11 w-11 rounded-lg border border-lineStrong bg-chip text-[15px] text-text">✕</button>
          </div>
          <div className="grid gap-1">
            {items.map(([href, label, index]) => (
              <a key={href} href={href} onClick={toggleMenu} className="flex min-h-11 items-baseline gap-3.5 py-2.5">
                <span className="min-w-[22px] font-mono text-[11px] text-faint">{index}</span>
                <span className="text-[28px] font-semibold tracking-[-.02em]">{label}</span>
              </a>
            ))}
          </div>
          <Link to="/curriculo" onClick={toggleMenu} className="mt-auto inline-flex items-center justify-center rounded-[10px] bg-accent px-5 py-4 text-sm font-semibold text-[var(--btn-text)]">
            {content[lang].curriculo}
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;

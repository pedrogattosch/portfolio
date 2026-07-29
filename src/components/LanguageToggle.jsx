import { useLanguage } from "../hooks/useLanguage";

function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  return (
    <button onClick={() => setLang(lang === "pt" ? "en" : "pt")} className="h-8 rounded-lg border border-lineStrong bg-chip px-2.5 font-mono text-[11px] text-text md:h-9" aria-label="Alternar idioma">
      {lang.toUpperCase()}
    </button>
  );
}

export default LanguageToggle;

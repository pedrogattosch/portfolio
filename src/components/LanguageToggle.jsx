import { useLanguage } from "../hooks/useLanguage";

function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const nextLanguageLabel =
    lang === "pt" ? "Switch to English" : "Mudar para português";

  return (
    <button
      onClick={() => setLang(lang === "pt" ? "en" : "pt")}
      aria-label={nextLanguageLabel}
      title={nextLanguageLabel}
      className="text-sm font-semibold tracking-[0.2em] text-slate-200 transition duration-300 hover:text-white"
    >
      {lang === "pt" ? "EN" : "PT"}
    </button>
  );
}

export default LanguageToggle;

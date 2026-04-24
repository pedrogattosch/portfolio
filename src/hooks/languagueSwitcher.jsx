import { useLanguage } from "../hooks/useLanguage";

function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === "pt" ? "en" : "pt")}
      aria-label={lang === "pt" ? "Switch to English" : "Mudar para português"}
      title={lang === "pt" ? "Switch to English" : "Mudar para português"}
      className="text-sm font-semibold tracking-[0.2em] text-slate-200 transition duration-300 hover:text-white"
    >
      {lang === "pt" ? "EN" : "PT"}
    </button>
  );
}

export default LanguageSwitcher;

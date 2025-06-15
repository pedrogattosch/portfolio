import { useLanguage } from "../hooks/useLanguage";

function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  return (
    <button
      onClick={() => setLang(lang === "pt" ? "en" : "pt")}
      aria-label="Trocar idioma"
    >
      {lang === "pt" ? "🇧🇷" : "🇺🇸"}
    </button>
  );
}

export default LanguageSwitcher;

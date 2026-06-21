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
      className="inline-flex h-9 min-w-11 items-center justify-center rounded-full px-2 text-xl leading-none transition duration-300 hover:bg-white/10"
    >
      <span aria-hidden="true">{lang === "pt" ? "🇺🇸" : "🇧🇷"}</span>
    </button>
  );
}

export default LanguageToggle;

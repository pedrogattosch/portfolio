import { useLanguage } from "../hooks/useLanguage";

function BrazilFlag() {
  return (
    <svg viewBox="0 0 28 20" className="h-5 w-7 rounded-[3px]" aria-hidden="true">
      <rect width="28" height="20" fill="#009B3A" />
      <path d="M14 2.5 25 10 14 17.5 3 10Z" fill="#FFDF00" />
      <circle cx="14" cy="10" r="4.2" fill="#002776" />
      <path d="M10.3 9.2c2.8-.8 5.5-.4 7.7 1" fill="none" stroke="#fff" strokeWidth="0.7" />
    </svg>
  );
}

function UnitedStatesFlag() {
  return (
    <svg viewBox="0 0 28 20" className="h-5 w-7 rounded-[3px]" aria-hidden="true">
      <rect width="28" height="20" fill="#fff" />
      {[0, 4, 8, 12, 16].map((y) => (
        <rect key={y} y={y} width="28" height="2" fill="#B22234" />
      ))}
      <rect width="12" height="10.8" fill="#3C3B6E" />
      {[2, 6, 10].flatMap((x) =>
        [2, 5.4, 8.8].map((y) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="0.55" fill="#fff" />
        ))
      )}
    </svg>
  );
}

function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const nextLanguageLabel =
    lang === "pt" ? "Switch to English" : "Mudar para português";

  return (
    <button
      onClick={() => setLang(lang === "pt" ? "en" : "pt")}
      aria-label={nextLanguageLabel}
      title={nextLanguageLabel}
      className="inline-flex h-9 min-w-11 items-center justify-center rounded-full px-2 transition duration-300 hover:bg-white/10"
    >
      {lang === "pt" ? <UnitedStatesFlag /> : <BrazilFlag />}
    </button>
  );
}

export default LanguageToggle;

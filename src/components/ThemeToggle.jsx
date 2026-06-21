import { useLanguage } from "../hooks/useLanguage";
import { useTheme } from "../hooks/useTheme";

const content = {
  pt: {
    dark: "Ativar modo claro",
    light: "Ativar modo escuro",
  },
  en: {
    dark: "Switch to light mode",
    light: "Switch to dark mode",
  },
};

function ThemeToggle() {
  const { lang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const icon = theme === "dark" ? "☀" : "☾";

  return (
    <button
      onClick={toggleTheme}
      aria-label={content[lang][theme]}
      title={content[lang][theme]}
      className="inline-flex h-9 min-w-9 items-center justify-center rounded-full px-2 text-lg leading-none text-slate-200 transition duration-300 hover:bg-white/10 hover:text-white"
    >
      {icon}
    </button>
  );
}

export default ThemeToggle;

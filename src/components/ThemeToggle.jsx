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
      className="text-lg leading-none text-slate-200 transition duration-300 hover:text-white"
    >
      {icon}
    </button>
  );
}

export default ThemeToggle;

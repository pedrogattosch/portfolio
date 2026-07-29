import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
function Footer() {
  const { lang } = useLanguage();
  return <footer className="border-t border-line"><div className="shell-padding mx-auto flex max-w-shell flex-col items-start gap-2 px-8 py-6 font-mono text-xs text-faint sm:flex-row sm:items-center sm:justify-between md:py-7"><span>© Pedro Miguel 2026</span><Link to="/curriculo" className="hover:text-text">{lang === "pt" ? "Currículo ↗" : "Resume ↗"}</Link></div></footer>;
}
export default Footer;

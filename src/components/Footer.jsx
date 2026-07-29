import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
function Footer() {
  const { lang } = useLanguage();
  return <footer className="border-t border-line"><div className="shell-padding mx-auto flex max-w-shell justify-between px-8 py-7 font-mono text-xs text-faint"><span>© Pedro Miguel 2026</span><Link to="/curriculo" className="hover:text-text">{lang === "pt" ? "Currículo ↗" : "Resume ↗"}</Link></div></footer>;
}
export default Footer;

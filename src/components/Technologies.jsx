import { Fragment } from "react";
import { useLanguage } from "../hooks/useLanguage";
import technologyCategories from "../data/technologyCategories";
import Section from "./ui/Section";

function Technologies() {
  const { lang } = useLanguage();
  return <Section id="tecnologias" title={lang === "pt" ? "Habilidades" : "Skills"} index="03"><div className="border-t border-line md:grid md:grid-cols-[minmax(120px,210px)_minmax(0,1fr)] md:gap-x-7">{technologyCategories.map(({ label, skills }) => <Fragment key={label.pt}><div className="pt-4 font-mono text-xs font-semibold uppercase leading-[1.5] tracking-[.1em] text-accentSoft md:border-b md:border-line md:py-4">{label[lang]}</div><div className="border-b border-line pb-4 pt-1.5 text-[14.5px] leading-[1.5] text-muted md:py-4 md:pt-4">{(Array.isArray(skills) ? skills : skills[lang]).join(", ")}</div></Fragment>)}</div></Section>;
}
export default Technologies;

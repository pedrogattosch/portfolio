import Cisco from "../assets/images/cisco_logo.jpg";
import FreeCodeCamp from "../assets/images/free_code_camp_logo.jpg";
import { useLanguage } from "../hooks/useLanguage";
import Section from "./ui/Section";
import { cardClass, ghostActionClass } from "./ui/styles";

const certificates = [
  { title: "Python Essentials 1", provider: "Cisco Networking Academy", href: "https://www.credly.com/badges/087b5de7-6835-4f8e-9863-f39217dbec37/linked_in_profile", image: Cisco, initials: "C" },
  { title: "Python Essentials 2", provider: "Cisco Networking Academy", href: "https://www.credly.com/badges/dcec3e6c-c9a8-467e-9d69-d54904df97fb/linked_in_profile", image: Cisco, initials: "C" },
  { title: "Machine Learning with Python", provider: "freeCodeCamp", href: "https://www.freecodecamp.org/certification/fccdfba9584-cb95-4efa-8072-dc4ac32eb2b6/machine-learning-with-python-v7", image: FreeCodeCamp },
  { title: "Inglês — Intermediário", titleEn: "English — Intermediate", initials: "EN" },
];
function Certifications() {
  const { lang } = useLanguage();
  return <Section id="certificacoes" title={lang === "pt" ? "Certificações" : "Certifications"} index="04"><div className="grid gap-4 md:grid-cols-2">{certificates.map((certificate) => <article key={certificate.title} className={`${cardClass} flex items-center justify-between gap-4 px-5 py-[18px]`}><div className="flex min-w-0 items-center gap-3.5">{certificate.image ? <img src={certificate.image} alt={certificate.provider} className="h-10 w-10 shrink-0 rounded-lg object-cover" /> : <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-lineStrong bg-panel font-mono text-[11px] font-semibold text-accentSoft">{certificate.initials}</span>}<div className="min-w-0"><h3 className="text-base font-semibold">{lang === "en" && certificate.titleEn ? certificate.titleEn : certificate.title}</h3><p className="mt-1 font-mono text-[11.5px] text-faint">{certificate.provider}</p></div></div>{certificate.href ? <a href={certificate.href} target="_blank" rel="noreferrer" className={`${ghostActionClass} shrink-0`}>{lang === "pt" ? "Ver ↗" : "View ↗"}</a> : null}</article>)}</div></Section>;
}
export default Certifications;

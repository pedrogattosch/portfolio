import { Fragment } from "react";
import { useLanguage } from "../hooks/useLanguage";
import Section from "./ui/Section";

const events = {
  pt: [
    [
      "Ago. 2026",
      "Cofundei a Aquametria após o MVP da equipe conquistar o primeiro lugar no Start Farm 2026. A empresa foi posteriormente incubada na SprinT da UTFPR para desenvolver soluções voltadas à aquicultura.",
    ],
    [
      "Jul. 2026",
      "Fui efetivado na Inside Sistemas para trabalhar com desenvolvimento de inteligência artificial e dados, criando automações, agentes e dashboards para apoiar processos e decisões.",
    ],
    [
      "Fev. 2026",
      "Iniciei minha trajetória na Inside Sistemas no suporte técnico, aprofundando meu conhecimento sobre ERP, regras de negócio e necessidades dos usuários.",
    ],
    [
      "Mar. 2024",
      "Atuei na seção de informática do Exército Brasileiro. A experiência fortaleceu minha disciplina, resiliência e atuação sob pressão.",
    ],
    [
      "Mar. 2023",
      "Ingressei em engenharia de computação na UTFPR e comecei meus estudos em programação pelo front-end, consolidando minha base técnica.",
    ],
  ],
  en: [
    [
      "Ago. 2026",
      "I co-founded Aquametria after our team's MVP won first place at Start Farm 2026. The company was later incubated at UTFPR's SprinT to develop technology solutions for aquaculture.",
    ],
    [
      "Jul. 2026",
      "I was hired by Inside Sistemas as a junior AI and data analyst, building automations, agents, and dashboards to support processes and decision-making.",
    ],
    [
      "Feb. 2026",
      "I joined Inside Sistemas in technical support, deepening my understanding of ERP systems, business rules, and user needs.",
    ],
    [
      "Mar. 2024",
      "I worked in the Brazilian Army IT department. The experience strengthened my discipline, resilience, and ability to perform under pressure.",
    ],
    [
      "Mar. 2023",
      "I started computer engineering at UTFPR and began studying programming through front-end development, building my technical foundation.",
    ],
  ],
};
function AboutMe() {
  const { lang } = useLanguage();
  return (
    <Section
      id="sobre-mim"
      title={lang === "pt" ? "Sobre mim" : "About me"}
      index="05"
    >
      <div className="grid grid-cols-[22px_minmax(0,1fr)] gap-x-3.5 md:grid-cols-[92px_26px_minmax(0,1fr)] md:gap-x-5">
        {events[lang].map(([date, text], index) => {
          const first = index === 0;
          const last = index === events[lang].length - 1;
          return (
            <Fragment key={date}>
              <div className="hidden pb-[30px] pt-6 text-right font-mono text-[13px] font-semibold tracking-[.1em] text-accentSoft md:block">
                {date}
              </div>
              <div className="relative flex justify-center">
                <span
                  className="absolute w-px bg-lineStrong md:hidden"
                  style={{
                    top: first ? "9px" : 0,
                    bottom: last ? "auto" : 0,
                    height: last ? "9px" : "auto",
                  }}
                />
                <span
                  className="absolute hidden w-px bg-lineStrong md:block"
                  style={{
                    top: first ? "31px" : 0,
                    bottom: last ? "auto" : 0,
                    height: last ? "31px" : "auto",
                  }}
                />
                <span
                  className="relative mt-1 h-[11px] w-[11px] rounded-full border-2 border-accent md:mt-[26px]"
                  style={{
                    background: first ? "var(--accent)" : "var(--bg)",
                    boxShadow: "0 0 0 5px var(--accent-bg)",
                  }}
                />
              </div>
              <div className="pb-[26px] md:pb-[30px] md:pt-5">
                <div className="font-mono text-[13px] font-semibold tracking-[.1em] text-accentSoft md:hidden">
                  {date}
                </div>
                <p className="mt-2 max-w-[74ch] text-[14.5px] leading-[1.8] text-muted md:mt-0">
                  {text}
                </p>
              </div>
            </Fragment>
          );
        })}
      </div>
    </Section>
  );
}
export default AboutMe;

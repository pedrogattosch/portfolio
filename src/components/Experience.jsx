import { Fragment } from "react";
import profileContent from "../data/profileContent";
import { useLanguage } from "../hooks/useLanguage";
import Section from "./ui/Section";
import { cardClass } from "./ui/styles";

const capitalize = (value) => value.charAt(0).toUpperCase() + value.slice(1);
const formatPeriod = ({ start, end }) => `${capitalize(start)} -\n${capitalize(end)}`;

function Experience() {
  const { lang } = useLanguage();
  return (
    <Section
      id="experiencia"
      title={lang === "pt" ? "Experiência" : "Experience"}
      index="01"
    >
      <div className="grid items-start gap-x-7 gap-y-6 md:grid-cols-[180px_minmax(0,1fr)] md:gap-y-5">
        {profileContent[lang].experiences.map((item) => (
          <Fragment key={item.role}>
            <div className="whitespace-normal font-mono text-xs font-medium leading-[1.7] text-faint md:whitespace-pre-line md:pt-5">
              {formatPeriod(item)}
            </div>
            <article
              className={`${cardClass} px-[22px] py-5 ${item.featured ? "border-[var(--accent-border)] bg-[var(--accent-bg)]" : ""}`}
            >
              <div className="flex flex-col gap-0.5 md:flex-row md:flex-wrap md:items-baseline md:justify-between md:gap-4">
                <h3
                  className={`text-lg font-semibold ${item.featured ? "text-accentSoft" : ""}`}
                >
                  {item.role}
                </h3>
                <span className="font-mono text-xs font-medium text-faint">
                  {item.company}
                </span>
              </div>
              <ul className="mt-3.5 list-disc pl-[18px] text-sm leading-[1.75] text-muted">
                {item.items.map(({ text }) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
            </article>
          </Fragment>
        ))}
      </div>
    </Section>
  );
}
export default Experience;

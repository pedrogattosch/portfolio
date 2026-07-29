import { cn } from "../../utils/cn";
import { sectionClass, sectionIndexClass, sectionTitleClass } from "./styles";

function Section({ id, title, index, className, contentClassName, children }) {
  return (
    <section id={id} className={cn(sectionClass, className)}>
      {title ? (
        <div className="mb-7 flex items-baseline justify-between">
          <h2 className={sectionTitleClass}>{title}</h2>
          <span className={sectionIndexClass}>{index}</span>
        </div>
      ) : null}
      <div className={contentClassName}>{children}</div>
    </section>
  );
}

export default Section;

import { cn } from "../../utils/cn";
import { sectionClass, sectionIndexClass, sectionTitleClass } from "./styles";

function Section({ id, title, index, action, className, contentClassName, children }) {
  return (
    <section id={id} className={cn(sectionClass, className)}>
      {title ? (
        <div className="mb-7 flex items-baseline justify-between gap-4">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2.5">
            <h2 className={sectionTitleClass}>{title}</h2>
            {action}
          </div>
          <span className={`${sectionIndexClass} shrink-0`}>{index}</span>
        </div>
      ) : null}
      <div className={contentClassName}>{children}</div>
    </section>
  );
}

export default Section;

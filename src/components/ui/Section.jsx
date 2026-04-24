import { cn } from "../../utils/cn";
import { sectionPanelClass } from "./styles";

function Section({ id, title, className, contentClassName, children }) {
  return (
    <section id={id}>
      <div className={cn(sectionPanelClass, className)}>
        {title ? <h2 className="section-heading">{title}</h2> : null}
        <div className={cn(title && "mt-8", contentClassName)}>{children}</div>
      </div>
    </section>
  );
}

export default Section;

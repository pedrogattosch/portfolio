import { cn } from "../../utils/cn";

function GlassCard({
  as: Component = "div",
  className,
  hover = false,
  children,
  ...props
}) {
  return (
    <Component
      className={cn("glass-card", hover && "glass-card-hover", className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export default GlassCard;

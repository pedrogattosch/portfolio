import { cn } from "../../utils/cn";

function TagList({ items, className, itemClassName }) {
  return (
    <div className={className}>
      {items.map((item) => (
        <span key={item} className={cn(itemClassName)}>
          {item}
        </span>
      ))}
    </div>
  );
}

export default TagList;

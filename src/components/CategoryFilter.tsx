import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: string[];
  selected: string;
  onChange: (category: string) => void;
}

export function CategoryFilter({ categories, selected, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onChange("")}
        className={cn(
          "px-4 py-2 rounded-xl text-sm font-medium transition-all",
          selected === ""
            ? "bg-primary text-primary-foreground"
            : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
        )}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={cn(
            "px-4 py-2 rounded-xl text-sm font-medium transition-all",
            selected === category
              ? "bg-primary text-primary-foreground"
              : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

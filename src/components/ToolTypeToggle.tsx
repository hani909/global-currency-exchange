import { cn } from "@/lib/utils";

interface ToolTypeToggleProps {
  value: "free" | "paid";
  onChange: (value: "free" | "paid") => void;
}

export function ToolTypeToggle({ value, onChange }: ToolTypeToggleProps) {
  return (
    <div className="glass-card p-1.5 flex gap-1 w-fit">
      <button
        onClick={() => onChange("free")}
        className={cn(
          "px-6 py-3 rounded-xl font-semibold transition-all",
          value === "free"
            ? "bg-accent text-accent-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        FREE
      </button>
      <button
        onClick={() => onChange("paid")}
        className={cn(
          "px-6 py-3 rounded-xl font-semibold transition-all",
          value === "paid"
            ? "glow-button text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        PAID
      </button>
    </div>
  );
}

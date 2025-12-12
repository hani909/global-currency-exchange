import * as LucideIcons from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { FreeTool } from "@/data/freeTools";

interface FreeToolCardProps {
  tool: FreeTool;
  index: number;
}

export function FreeToolCard({ tool, index }: FreeToolCardProps) {
  const IconComponent = (LucideIcons as any)[tool.icon] || LucideIcons.Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="glass-card-hover group p-6"
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <IconComponent className="w-7 h-7 text-accent" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent">
            FREE
          </span>
          <span className="text-xs text-muted-foreground">{tool.category}</span>
        </div>
        
        <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
          {tool.name}
        </h3>
        
        <p className="text-sm text-muted-foreground line-clamp-2">
          {tool.description}
        </p>

        {/* Features */}
        <ul className="space-y-1">
          {tool.features.slice(0, 3).map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
              <LucideIcons.Check className="w-3 h-3 text-accent" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Action */}
      <div className="mt-6">
        <Link to={`/tools/${tool.id}`}>
          <Button 
            variant="outline" 
            className="w-full border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground transition-all"
          >
            Use Now
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}

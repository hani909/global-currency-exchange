import * as LucideIcons from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { PaidTool } from "@/data/paidTools";

interface PaidToolCardProps {
  tool: PaidTool;
  index: number;
}

export function PaidToolCard({ tool, index }: PaidToolCardProps) {
  const IconComponent = (LucideIcons as any)[tool.icon] || LucideIcons.Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="glass-card-hover group p-6 relative overflow-hidden"
    >
      {/* Popular Badge */}
      {tool.popular && (
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 text-xs font-bold rounded-full bg-primary text-primary-foreground">
            POPULAR
          </span>
        </div>
      )}

      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <IconComponent className="w-7 h-7 text-primary" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
            {tool.planName}
          </span>
          <span className="text-xs text-muted-foreground">{tool.category}</span>
        </div>
        
        <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {tool.name}
        </h3>
        
        <p className="text-sm text-muted-foreground line-clamp-2">
          {tool.description}
        </p>

        {/* Price */}
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-display font-bold neon-text">${tool.price}</span>
          <span className="text-sm text-muted-foreground">/{tool.period}</span>
        </div>

        {/* Features */}
        <ul className="space-y-1">
          {tool.features.slice(0, 4).map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
              <LucideIcons.Check className="w-3 h-3 text-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Action */}
      <div className="mt-6">
        <Link to={`/tools/${tool.id}`}>
          <Button className="w-full glow-button text-primary-foreground font-semibold">
            Buy Now
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}

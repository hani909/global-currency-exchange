import * as LucideIcons from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Bundle } from "@/data/bundles";

interface BundleCardProps {
  bundle: Bundle;
  index: number;
}

export function BundleCard({ bundle, index }: BundleCardProps) {
  const IconComponent = (LucideIcons as any)[bundle.icon] || LucideIcons.Package;
  const discount = Math.round((1 - bundle.price / bundle.originalPrice) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="glass-card-hover group p-8 relative overflow-hidden"
    >
      {/* Popular Badge */}
      {bundle.popular && (
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 text-xs font-bold rounded-full bg-neon-green text-background">
            BEST VALUE
          </span>
        </div>
      )}

      {/* Discount Badge */}
      <div className="absolute top-4 left-4">
        <span className="px-3 py-1 text-xs font-bold rounded-full bg-destructive text-destructive-foreground">
          {discount}% OFF
        </span>
      </div>

      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl glow-button flex items-center justify-center mt-8 mb-6 group-hover:scale-110 transition-transform duration-300">
        <IconComponent className="w-8 h-8 text-primary-foreground" />
      </div>

      {/* Content */}
      <div className="space-y-4">
        <h3 className="font-display text-2xl font-bold text-foreground group-hover:neon-text transition-all">
          {bundle.name}
        </h3>
        
        <p className="text-muted-foreground">
          {bundle.description}
        </p>

        {/* Price */}
        <div className="flex items-baseline gap-3">
          <span className="text-4xl font-display font-bold neon-text">${bundle.price}</span>
          <span className="text-xl text-muted-foreground line-through">${bundle.originalPrice}</span>
          <span className="text-sm text-muted-foreground">/{bundle.period}</span>
        </div>

        {/* Included Tools */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-foreground">Included Tools:</h4>
          <div className="flex flex-wrap gap-2">
            {bundle.tools.map((tool, i) => (
              <span key={i} className="px-2 py-1 text-xs rounded-lg bg-secondary/50 text-muted-foreground">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-2 pt-4 border-t border-border/50">
          {bundle.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
              <LucideIcons.Check className="w-4 h-4 text-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Action */}
      <div className="mt-8">
        <Link to={`/bundles/${bundle.id}`}>
          <Button className="w-full glow-button text-primary-foreground font-semibold py-6 text-lg">
            Get Bundle Now
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}

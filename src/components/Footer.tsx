import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="mt-16 pb-8 text-center"
    >
      <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
        Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> for global finance
      </p>
      <p className="text-xs text-muted-foreground/60 mt-2">
        Exchange rates provided by ExchangeRate-API
      </p>
    </motion.footer>
  );
}

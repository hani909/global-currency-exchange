import { motion } from 'framer-motion';
import { Globe, Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="text-center mb-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 relative"
        style={{ background: 'var(--gradient-primary)' }}
      >
        <Globe className="w-10 h-10 text-primary-foreground" />
        <motion.div
          className="absolute -top-1 -right-1"
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Sparkles className="w-5 h-5 text-accent" />
        </motion.div>
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        <span className="gradient-text">Currency</span>{' '}
        <span className="text-foreground">Converter</span>
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-muted-foreground max-w-md mx-auto"
      >
        Real-time exchange rates for 160+ world currencies. Fast, accurate, and beautifully simple.
      </motion.p>
    </header>
  );
}

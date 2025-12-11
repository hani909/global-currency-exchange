import { motion } from 'framer-motion';
import { ArrowUpDown } from 'lucide-react';

interface SwapButtonProps {
  onClick: () => void;
}

export function SwapButton({ onClick }: SwapButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className="swap-button"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Swap currencies"
    >
      <ArrowUpDown className="w-5 h-5 text-primary-foreground" />
    </motion.button>
  );
}

import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { popularPairs, getCurrency } from '@/data/currencies';
import { useExchangeRates } from '@/hooks/useExchangeRates';

interface PopularPairsProps {
  onSelect: (from: string, to: string) => void;
}

export function PopularPairs({ onSelect }: PopularPairsProps) {
  const { getRate, loading } = useExchangeRates();

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <TrendingUp className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold text-foreground">Popular Pairs</h3>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {popularPairs.map(({ from, to }, index) => {
          const fromCurrency = getCurrency(from);
          const toCurrency = getCurrency(to);
          const rate = getRate(from, to);
          
          return (
            <motion.button
              key={`${from}-${to}`}
              onClick={() => onSelect(from, to)}
              className="popular-pair"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{fromCurrency?.flag}</span>
                <span className="text-muted-foreground">→</span>
                <span className="text-lg">{toCurrency?.flag}</span>
              </div>
              <div className="text-sm font-medium text-foreground">
                {from}/{to}
              </div>
              <div className="text-xs text-primary mt-1">
                {loading ? (
                  <span className="animate-pulse">Loading...</span>
                ) : (
                  `1 ${from} = ${rate.toFixed(4)} ${to}`
                )}
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

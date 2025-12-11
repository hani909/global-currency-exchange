import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Clock, ArrowRight } from 'lucide-react';
import { CurrencySelector } from './CurrencySelector';
import { AmountInput } from './AmountInput';
import { SwapButton } from './SwapButton';
import { PopularPairs } from './PopularPairs';
import { currencies, getCurrency, Currency } from '@/data/currencies';
import { useExchangeRates } from '@/hooks/useExchangeRates';
import { cn } from '@/lib/utils';

export function CurrencyConverter() {
  const [fromCurrency, setFromCurrency] = useState(getCurrency('USD')!);
  const [toCurrency, setToCurrency] = useState(getCurrency('EUR')!);
  const [amount, setAmount] = useState('1000');
  
  const { convert, getRate, loading, error, lastUpdated, refetch } = useExchangeRates();
  
  const convertedAmount = amount ? convert(parseFloat(amount) || 0, fromCurrency.code, toCurrency.code) : 0;
  const rate = getRate(fromCurrency.code, toCurrency.code);

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const handlePairSelect = (from: string, to: string) => {
    setFromCurrency(getCurrency(from)!);
    setToCurrency(getCurrency(to)!);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      {/* Main Converter Card */}
      <motion.div
        className="glass-card p-6 md:p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Rate Display */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="rate-pill">
            <span>1 {fromCurrency.code}</span>
            <ArrowRight className="w-4 h-4" />
            <span>{rate.toFixed(4)} {toCurrency.code}</span>
          </div>
          
          <button
            onClick={refetch}
            disabled={loading}
            className={cn(
              "flex items-center gap-2 text-sm text-muted-foreground",
              "hover:text-foreground transition-colors duration-200"
            )}
          >
            <RefreshCw className={cn("w-4 h-4", loading && "animate-spin")} />
            {loading ? 'Updating...' : 'Refresh'}
          </button>
        </div>

        {/* From Section */}
        <div className="space-y-4 mb-6">
          <CurrencySelector
            value={fromCurrency.code}
            onChange={(currency) => setFromCurrency(currency)}
            label="From"
          />
          <AmountInput
            value={amount}
            onChange={setAmount}
            currency={fromCurrency}
            label="Amount"
          />
        </div>

        {/* Swap Button */}
        <div className="flex justify-center -my-2 relative z-10">
          <SwapButton onClick={handleSwap} />
        </div>

        {/* To Section */}
        <div className="space-y-4 mt-6">
          <CurrencySelector
            value={toCurrency.code}
            onChange={(currency) => setToCurrency(currency)}
            label="To"
          />
          <AmountInput
            value={convertedAmount.toFixed(2)}
            onChange={() => {}}
            currency={toCurrency}
            readOnly
            label="Converted Amount"
          />
        </div>

        {/* Error State */}
        {error && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-4 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm"
          >
            {error}. Please try again later.
          </motion.div>
        )}

        {/* Last Updated */}
        {lastUpdated && !error && (
          <div className="flex items-center justify-center gap-2 mt-6 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />
            <span>Rates updated at {formatTime(lastUpdated)}</span>
          </div>
        )}
      </motion.div>

      {/* Popular Pairs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <PopularPairs onSelect={handlePairSelect} />
      </motion.div>
    </div>
  );
}

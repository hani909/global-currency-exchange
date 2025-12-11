import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown } from 'lucide-react';
import { currencies, Currency } from '@/data/currencies';
import { cn } from '@/lib/utils';

interface CurrencySelectorProps {
  value: string;
  onChange: (currency: Currency) => void;
  label: string;
}

export function CurrencySelector({ value, onChange, label }: CurrencySelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const selectedCurrency = currencies.find(c => c.code === value);
  
  const filteredCurrencies = currencies.filter(currency => 
    currency.code.toLowerCase().includes(search.toLowerCase()) ||
    currency.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearch('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative">
      <label className="block text-sm font-medium text-muted-foreground mb-2">
        {label}
      </label>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full flex items-center justify-between gap-3 p-4 rounded-xl",
          "bg-secondary/50 border border-border/50 backdrop-blur-sm",
          "hover:border-primary/30 transition-all duration-300",
          isOpen && "border-primary/50 ring-2 ring-primary/20"
        )}
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{selectedCurrency?.flag}</span>
          <div className="text-left">
            <span className="font-semibold text-foreground">{selectedCurrency?.code}</span>
            <span className="text-sm text-muted-foreground ml-2 hidden sm:inline">
              {selectedCurrency?.name}
            </span>
          </div>
        </div>
        <ChevronDown 
          className={cn(
            "w-5 h-5 text-muted-foreground transition-transform duration-300",
            isOpen && "rotate-180"
          )} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "absolute z-50 mt-2 w-full rounded-xl overflow-hidden",
              "bg-card border border-border/50 backdrop-blur-xl",
              "shadow-2xl shadow-background/50"
            )}
          >
            <div className="p-3 border-b border-border/50">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search currency..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className={cn(
                    "w-full pl-10 pr-4 py-2.5 rounded-lg text-sm",
                    "bg-secondary/50 border border-border/50",
                    "placeholder:text-muted-foreground/50",
                    "focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20",
                    "transition-all duration-200"
                  )}
                />
              </div>
            </div>
            
            <div className="max-h-64 overflow-y-auto scrollbar-thin">
              {filteredCurrencies.length === 0 ? (
                <div className="p-4 text-center text-muted-foreground">
                  No currencies found
                </div>
              ) : (
                filteredCurrencies.map((currency) => (
                  <motion.button
                    key={currency.code}
                    onClick={() => {
                      onChange(currency);
                      setIsOpen(false);
                      setSearch('');
                    }}
                    className={cn(
                      "w-full currency-option",
                      currency.code === value && "selected"
                    )}
                    whileHover={{ backgroundColor: 'hsl(var(--secondary) / 0.8)' }}
                  >
                    <span className="text-xl">{currency.flag}</span>
                    <div className="flex-1 text-left">
                      <span className="font-medium text-foreground">{currency.code}</span>
                      <span className="text-sm text-muted-foreground ml-2">
                        {currency.name}
                      </span>
                    </div>
                    <span className="text-muted-foreground text-sm">{currency.symbol}</span>
                  </motion.button>
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

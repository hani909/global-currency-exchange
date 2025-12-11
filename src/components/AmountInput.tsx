import { motion } from 'framer-motion';
import { Currency } from '@/data/currencies';
import { cn } from '@/lib/utils';

interface AmountInputProps {
  value: string;
  onChange: (value: string) => void;
  currency: Currency;
  readOnly?: boolean;
  label: string;
}

export function AmountInput({ value, onChange, currency, readOnly = false, label }: AmountInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    // Allow only numbers and decimal point
    if (val === '' || /^\d*\.?\d*$/.test(val)) {
      onChange(val);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-muted-foreground">
        {label}
      </label>
      
      <motion.div 
        className={cn(
          "relative rounded-xl overflow-hidden",
          !readOnly && "focus-within:ring-2 focus-within:ring-primary/20"
        )}
        whileFocus={{ scale: 1.01 }}
      >
        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
          <span className="text-xl">{currency.flag}</span>
          <span className="text-lg font-semibold text-primary">{currency.symbol}</span>
        </div>
        
        <input
          type="text"
          inputMode="decimal"
          value={value}
          onChange={handleChange}
          readOnly={readOnly}
          placeholder="0.00"
          className={cn(
            "w-full pl-20 pr-4 py-5 text-2xl font-semibold text-right",
            "bg-secondary/50 border border-border/50 rounded-xl",
            "placeholder:text-muted-foreground/30",
            "focus:outline-none focus:border-primary/50",
            "transition-all duration-300",
            readOnly && "bg-secondary/30 cursor-default text-primary"
          )}
        />
        
        {readOnly && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>
        )}
      </motion.div>
    </div>
  );
}

import { useState, useEffect, useCallback } from 'react';

interface ExchangeRates {
  [key: string]: number;
}

interface UseExchangeRatesReturn {
  rates: ExchangeRates;
  loading: boolean;
  error: string | null;
  lastUpdated: Date | null;
  convert: (amount: number, from: string, to: string) => number;
  getRate: (from: string, to: string) => number;
  refetch: () => void;
}

export function useExchangeRates(baseCurrency: string = 'USD'): UseExchangeRatesReturn {
  const [rates, setRates] = useState<ExchangeRates>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchRates = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch exchange rates');
      }
      
      const data = await response.json();
      setRates(data.rates);
      setLastUpdated(new Date());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [baseCurrency]);

  useEffect(() => {
    fetchRates();
  }, [fetchRates]);

  const convert = useCallback((amount: number, from: string, to: string): number => {
    if (!rates[from] || !rates[to]) return 0;
    
    // Convert to base currency first, then to target
    const inBase = amount / rates[from];
    return inBase * rates[to];
  }, [rates]);

  const getRate = useCallback((from: string, to: string): number => {
    if (!rates[from] || !rates[to]) return 0;
    return rates[to] / rates[from];
  }, [rates]);

  return {
    rates,
    loading,
    error,
    lastUpdated,
    convert,
    getRate,
    refetch: fetchRates,
  };
}

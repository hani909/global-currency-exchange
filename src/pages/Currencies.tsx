import { useState } from 'react';
import { motion } from 'framer-motion';
import { List, Search } from 'lucide-react';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import { NavMenu } from '@/components/NavMenu';
import { Footer } from '@/components/Footer';
import { currencies } from '@/data/currencies';

export default function Currencies() {
  const [search, setSearch] = useState('');

  const filteredCurrencies = currencies.filter(
    (currency) =>
      currency.name.toLowerCase().includes(search.toLowerCase()) ||
      currency.code.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <BackgroundEffects />
      <NavMenu />
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6"
            style={{ background: 'var(--gradient-primary)' }}
          >
            <List className="w-10 h-10 text-primary-foreground" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="gradient-text">Currency</span>{' '}
            <span className="text-foreground">List</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-md mx-auto"
          >
            Browse all 160+ supported world currencies with their symbols and flags.
          </motion.p>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          {/* Search */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search currencies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl glass-card bg-transparent border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          {/* Currency Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCurrencies.map((currency, index) => (
              <motion.div
                key={currency.code}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: Math.min(0.3 + index * 0.02, 1) }}
                className="glass-card rounded-xl p-4 hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{currency.flag}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-foreground">{currency.code}</span>
                      <span className="text-primary">{currency.symbol}</span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{currency.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredCurrencies.length === 0 && (
            <p className="text-center text-muted-foreground py-12">
              No currencies found matching "{search}"
            </p>
          )}
        </motion.div>

        <Footer />
      </div>
    </div>
  );
}

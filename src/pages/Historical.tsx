import { motion } from 'framer-motion';
import { TrendingUp, Calendar, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import { NavMenu } from '@/components/NavMenu';
import { Footer } from '@/components/Footer';

const historicalData = [
  { pair: 'EUR/USD', current: 1.0856, change: 0.23, trend: 'up', week: 1.0812, month: 1.0734 },
  { pair: 'GBP/USD', current: 1.2654, change: -0.15, trend: 'down', week: 1.2689, month: 1.2801 },
  { pair: 'USD/JPY', current: 149.52, change: 0.45, trend: 'up', week: 148.90, month: 147.23 },
  { pair: 'USD/CHF', current: 0.8812, change: -0.08, trend: 'down', week: 0.8825, month: 0.8901 },
  { pair: 'AUD/USD', current: 0.6534, change: 0.12, trend: 'up', week: 0.6518, month: 0.6489 },
  { pair: 'USD/CAD', current: 1.3612, change: 0.18, trend: 'up', week: 1.3589, month: 1.3534 },
];

export default function Historical() {
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
            <TrendingUp className="w-10 h-10 text-primary-foreground" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="gradient-text">Historical</span>{' '}
            <span className="text-foreground">Rates</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-md mx-auto"
          >
            Track currency trends and historical exchange rate movements over time.
          </motion.p>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Rate Comparison</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Pair</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Current</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">24h Change</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">1 Week Ago</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">1 Month Ago</th>
                  </tr>
                </thead>
                <tbody>
                  {historicalData.map((item, index) => (
                    <motion.tr
                      key={item.pair}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.05 }}
                      className="border-b border-border/30 hover:bg-muted/30 transition-colors"
                    >
                      <td className="py-4 px-4 font-medium text-foreground">{item.pair}</td>
                      <td className="py-4 px-4 text-right text-foreground">{item.current.toFixed(4)}</td>
                      <td className="py-4 px-4 text-right">
                        <span className={`inline-flex items-center gap-1 ${item.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                          {item.trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                          {item.change > 0 ? '+' : ''}{item.change}%
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right text-muted-foreground">{item.week.toFixed(4)}</td>
                      <td className="py-4 px-4 text-right text-muted-foreground">{item.month.toFixed(4)}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            * Historical data is for demonstration purposes. Connect to a premium API for real historical rates.
          </p>
        </motion.div>

        <Footer />
      </div>
    </div>
  );
}

import { motion } from 'framer-motion';
import { Info, Globe, Zap, Shield, RefreshCw } from 'lucide-react';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import { NavMenu } from '@/components/NavMenu';
import { Footer } from '@/components/Footer';

const features = [
  {
    icon: Globe,
    title: '160+ Currencies',
    description: 'Support for all major world currencies including crypto and exotic pairs.',
  },
  {
    icon: Zap,
    title: 'Real-Time Rates',
    description: 'Live exchange rates updated every minute from reliable financial data sources.',
  },
  {
    icon: Shield,
    title: 'Accurate & Reliable',
    description: 'Bank-grade accuracy with rates sourced from global financial markets.',
  },
  {
    icon: RefreshCw,
    title: 'Always Up-to-Date',
    description: 'Automatic refresh ensures you always have the latest exchange rates.',
  },
];

export default function About() {
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
            <Info className="w-10 h-10 text-primary-foreground" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="gradient-text">About</span>{' '}
            <span className="text-foreground">Us</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            We provide a fast, accurate, and beautifully designed currency conversion tool 
            for travelers, businesses, and anyone who needs to convert currencies.
          </motion.p>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="glass-card rounded-2xl p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="glass-card rounded-2xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              To make currency conversion simple, accessible, and beautiful for everyone. 
              Whether you're planning a trip abroad, running an international business, 
              or just curious about exchange rates, we've got you covered with real-time, 
              accurate data presented in an intuitive interface.
            </p>
          </motion.div>
        </motion.div>

        <Footer />
      </div>
    </div>
  );
}

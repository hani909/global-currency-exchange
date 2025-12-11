import { motion } from 'framer-motion';

export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Primary gradient orb */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(174 72% 56%), transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Secondary gradient orb */}
      <motion.div
        className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, hsl(200 100% 60%), transparent 70%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
}

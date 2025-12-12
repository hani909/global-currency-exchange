import { motion } from "framer-motion";

export function Hero3DElement() {
  return (
    <div className="relative w-full h-80 md:h-96">
      {/* Central Orb */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-56 md:h-56"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-primary via-neon-pink to-accent opacity-60 blur-sm" />
        <div className="absolute inset-4 rounded-full bg-gradient-to-tl from-primary via-neon-cyan to-neon-pink animate-pulse" />
        <div className="absolute inset-8 rounded-full bg-background/80 backdrop-blur-xl" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-2xl md:text-4xl font-bold neon-text">AI</span>
        </div>
      </motion.div>

      {/* Floating Cubes */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
          x: [-5, 5, -5],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 left-10 md:left-20 w-12 h-12 md:w-16 md:h-16"
      >
        <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary to-neon-pink rotate-12 opacity-80" />
      </motion.div>

      <motion.div
        animate={{
          y: [10, -10, 10],
          x: [5, -5, 5],
          rotateZ: [0, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-10 md:right-20 w-10 h-10 md:w-14 md:h-14"
      >
        <div className="w-full h-full rounded-xl bg-gradient-to-br from-accent to-neon-cyan -rotate-12 opacity-80" />
      </motion.div>

      <motion.div
        animate={{
          y: [-15, 15, -15],
          rotateX: [0, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-1/4 w-8 h-8 md:w-12 md:h-12"
      >
        <div className="w-full h-full rounded-lg bg-gradient-to-br from-neon-green to-accent rotate-45 opacity-70" />
      </motion.div>

      <motion.div
        animate={{
          y: [5, -15, 5],
          x: [-10, 10, -10],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-1/4 w-6 h-6 md:w-10 md:h-10"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-neon-pink to-primary opacity-70" />
      </motion.div>

      {/* Ring */}
      <motion.div
        animate={{
          rotateX: [0, 360],
          rotateZ: [0, 180],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 md:w-80 md:h-80"
      >
        <div className="w-full h-full rounded-full border-2 border-primary/30 border-dashed" />
      </motion.div>

      <motion.div
        animate={{
          rotateY: [0, 360],
          rotateZ: [180, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96"
      >
        <div className="w-full h-full rounded-full border border-accent/20" />
      </motion.div>
    </div>
  );
}

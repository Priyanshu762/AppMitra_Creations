"use client";

import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Static Color Accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10 mix-blend-multiply animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10 mix-blend-multiply animate-blob animation-delay-2000" />
      <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl -z-10 mix-blend-multiply animate-blob animation-delay-4000" />

      <div className="container-width flex flex-col items-center text-center gap-8 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl font-bold tracking-tight text-balance max-w-4xl text-foreground"
        >
          Building the future of digital experiences.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl text-secondary max-w-2xl text-balance"
        >
          We craft high-performance websites, apps, and software solutions that
          elevate your brand and drive growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex gap-4 mt-4"
        >
          <a
            href="#contact"
            className="px-8 py-3 bg-primary text-background rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20"
          >
            Start a Project
          </a>
          <a
            href="#services"
            className="px-8 py-3 border border-black/10 dark:border-white/10 rounded-full font-medium hover:bg-surface transition-colors backdrop-blur-sm bg-white/50 dark:bg-black/50"
          >
            Our Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}

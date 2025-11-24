"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -z-10" />

      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              About AppMitra
            </h2>
            <div className="space-y-6 text-secondary text-lg leading-relaxed">
              <p>
                We are a team of passionate developers, designers, and
                strategists dedicated to transforming ideas into digital
                reality.
              </p>
              <p>
                At AppMitra Creations, we believe in the power of technology to
                solve complex problems. Our approach combines technical
                expertise with creative innovation to deliver solutions that not
                only work flawlessly but also provide exceptional user
                experiences.
              </p>
              <p>
                Whether you&apos;re a startup looking to launch your first
                product or an established enterprise seeking digital
                transformation, we are your partners in growth.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-square bg-surface/50 backdrop-blur-sm border border-white/10 rounded-3xl flex items-center justify-center p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />

            {/* Placeholder for an image or abstract graphic */}
            <div className="text-center relative z-10">
              <span className="block text-7xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                100+
              </span>
              <span className="text-secondary font-medium text-lg">
                Projects Delivered
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

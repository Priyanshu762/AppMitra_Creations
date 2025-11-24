"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden bg-black text-white"
    >
      {/* Vibrant Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-purple-900/50 to-black z-0" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-20 z-0" />

      {/* Animated Blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />

      <div className="container-width text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">
            Ready to start your project?
          </h2>
          <p className="text-xl text-blue-100/80 mb-12 text-balance">
            Let&apos;s discuss how we can help you achieve your digital goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:contact@appmitra.in"
              className="px-8 py-4 bg-white text-blue-900 rounded-full font-bold text-lg hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 transition-all"
            >
              Get in Touch
            </a>
            <div className="flex flex-col items-center sm:items-start gap-1 text-blue-100/80">
              <span className="text-sm font-medium">Email us directly</span>
              <span className="text-lg text-white">contact@appmitra.in</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

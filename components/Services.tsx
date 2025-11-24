"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description:
      "Custom, high-performance websites built with modern frameworks like Next.js and React.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "SaaS Products",
    description:
      "Scalable software-as-a-service solutions designed for growth and reliability.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Digital Marketing",
    description:
      "Data-driven SEO and SMO strategies to increase your digital footprint.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Custom Software",
    description:
      "Tailored software solutions to streamline your business operations.",
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    title: "Tech Consulting",
    description:
      "Strategic guidance on digital transformation and technology adoption.",
    gradient: "from-rose-500 to-orange-500",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background blobs for subtle color */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <div className="container-width">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-secondary max-w-xl">
            Comprehensive digital solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 bg-white dark:bg-black border border-black/5 dark:border-white/5 rounded-2xl hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-white/5"
            >
              {/* Hover Gradient Border Effect */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />
              <div
                className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 -z-10 blur-sm transition-opacity duration-300`}
              />

              <div
                className={`w-12 h-12 mb-6 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg`}
              >
                {service.title[0]}
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-secondary text-sm leading-relaxed group-hover:text-primary/80 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-black/5 dark:border-white/5"
    >
      <div className="container-width h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          AppMitra
        </Link>

        <nav className="hidden sm:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-secondary hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="sm:hidden text-sm font-medium text-primary"
        >
          Menu
        </Link>
      </div>
    </motion.header>
  );
}

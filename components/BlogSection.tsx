"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getLatestPosts } from "@/lib/posts";

const latestPosts = getLatestPosts(3);

export default function BlogSection() {
  return (
    <section id="blog" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl -z-10" />

      <div className="container-width">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              From Our Blog
            </h2>
            <p className="text-secondary max-w-xl">
              Tips and insights on web development, apps, SaaS, and digital
              strategy to help your business grow.
            </p>
          </div>
          <Link
            href="/blog"
            className="shrink-0 text-sm font-medium text-primary hover:underline"
          >
            View all posts →
          </Link>
        </div>

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post, index) => (
            <motion.li
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block p-6 rounded-2xl border border-black/5 dark:border-white/5 bg-white dark:bg-black hover:border-primary/20 dark:hover:border-primary/20 hover:shadow-xl transition-all duration-300"
              >
                <time
                  dateTime={post.date}
                  className="text-sm text-secondary font-medium"
                >
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
                <h3 className="text-lg font-semibold mt-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-secondary text-sm mt-2 line-clamp-2">
                  {post.excerpt}
                </p>
                <span className="inline-block mt-3 text-sm font-medium text-primary group-hover:underline">
                  Read more →
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

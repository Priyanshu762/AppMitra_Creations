import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog | Web Development, Apps & IT Insights",
  description:
    "Expert articles on web development, mobile and desktop apps, SaaS, and digital strategy. Tips and insights from AppMitra Creations to boost your business.",
  openGraph: {
    type: "website",
    title: "Blog | AppMitra Creations – Web, App & IT Insights",
    description:
      "Expert articles on web development, mobile and desktop apps, SaaS, and digital strategy.",
    url: "https://appmitra.in/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | AppMitra Creations – Web, App & IT Insights",
    description:
      "Expert articles on web development, mobile and desktop apps, SaaS, and digital strategy.",
  },
  alternates: {
    canonical: "https://appmitra.in/blog",
  },
};

export default function BlogPage() {
  const sortedPosts = [...posts].sort((a, b) =>
    b.date.localeCompare(a.date)
  );

  return (
    <div className="min-h-screen">
      <section className="section-padding">
        <div className="container-width">
          <div className="mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Blog</h1>
            <p className="text-secondary max-w-xl text-lg">
              Insights on web development, mobile and desktop apps, SaaS, and
              digital strategy to help you make better IT decisions.
            </p>
          </div>

          <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sortedPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block p-6 sm:p-8 rounded-2xl border border-black/5 dark:border-white/5 bg-white dark:bg-black hover:border-primary/20 dark:hover:border-primary/20 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5 transition-all duration-300"
                >
                  <time
                    dateTime={post.date}
                    className="text-sm text-secondary font-medium"
                  >
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span className="text-sm text-secondary ml-2">
                    · {post.readingTime}
                  </span>
                  <h2 className="text-xl font-semibold mt-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-secondary text-sm mt-3 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="inline-block mt-4 text-sm font-medium text-primary group-hover:underline">
                    Read more →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPostBySlug } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found" };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://appmitra.in/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: `https://appmitra.in/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "AppMitra Creations",
      url: "https://appmitra.in",
    },
    publisher: {
      "@type": "Organization",
      name: "AppMitra Creations",
      url: "https://appmitra.in",
    },
  };

  return (
    <article className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="section-padding">
        <div className="container-width max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-secondary hover:text-primary transition-colors mb-8"
          >
            ← Back to Blog
          </Link>

          <header className="mb-10">
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
            <h1 className="text-3xl sm:text-4xl font-bold mt-2 tracking-tight">
              {post.title}
            </h1>
            <p className="text-xl text-secondary mt-4">{post.excerpt}</p>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-secondary leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-black/10 dark:border-white/10">
            <p className="text-secondary text-sm mb-4">
              Need a website, app, or custom software? We can help.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-6 py-3 bg-primary text-background rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
